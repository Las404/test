/* 페이지 렌더링 로직 */

function param(key) {
  return new URLSearchParams(location.search).get(key);
}

function escapeHtml(str) {
  return String(str).replace(/[&<>"']/g, (c) => (
    { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]
  ));
}

/* 이미지 링크(Data Dragon)가 열리지 않을 때 대체 화면 표시 */
function bindImageFallback(scope) {
  scope.querySelectorAll('img[data-fallback]').forEach((img) => {
    img.addEventListener('error', () => {
      const holder = document.createElement('div');
      holder.className = 'img-fallback ' + img.className;
      holder.textContent = img.dataset.fallback;
      img.replaceWith(holder);
    }, { once: true });
  });
}

/* 스크롤 시 등장 애니메이션 */
function initReveal() {
  const io = new IntersectionObserver((entries) => {
    entries.forEach((e) => {
      if (e.isIntersecting) {
        e.target.classList.add('visible');
        io.unobserve(e.target);
      }
    });
  }, { threshold: 0.12 });
  document.querySelectorAll('.reveal').forEach((el) => io.observe(el));
}

/* =========================================================
   홈 — 지역 카드 목록
   ========================================================= */
function renderHome() {
  const grid = document.getElementById('regionGrid');
  grid.innerHTML = REGIONS.map((r, i) => {
    const count = championsOfRegion(r.id).length;
    return `
      <a class="region-card reveal" href="region.html?region=${r.id}"
         style="--accent:${r.color}; transition-delay:${i * 60}ms">
        <div class="region-card__crest">${r.crest}</div>
        <h3>${escapeHtml(r.nameKr)}</h3>
        <span class="region-card__en">${escapeHtml(r.nameEn)}</span>
        <span class="region-card__tag">${escapeHtml(r.tag)}</span>
        <span class="region-card__count">챔피언 ${count}명</span>
      </a>`;
  }).join('');
  initReveal();
}

/* =========================================================
   지역 페이지 — 챔피언 카드 그리드
   ========================================================= */
function renderRegionPage() {
  const region = getRegion(param('region')) || REGIONS[0];
  document.title = `${region.nameKr} | RUNETERRA ARCHIVE`;
  document.documentElement.style.setProperty('--accent', region.color);

  const hero = document.getElementById('regionHero');
  hero.style.setProperty('--accent', region.color);
  hero.innerHTML = `
    <div class="region-hero__crest">${region.crest}</div>
    <p class="region-hero__en">${escapeHtml(region.nameEn)}</p>
    <h1>${escapeHtml(region.nameKr)}</h1>
    <p class="region-hero__desc">${escapeHtml(region.desc)}</p>
    <p class="region-hero__terrain">지형 · ${escapeHtml(region.terrain)}</p>
  `;

  const all = championsOfRegion(region.id);
  const grid = document.getElementById('champGrid');
  const empty = document.getElementById('emptyState');
  let activeRole = 'all';
  let keyword = '';

  function draw() {
    const list = all.filter((c) => {
      const roleOk = activeRole === 'all' || c.roles.includes(activeRole);
      const k = keyword.trim().toLowerCase();
      const textOk = !k
        || c.nameKr.toLowerCase().includes(k)
        || c.nameEn.toLowerCase().includes(k)
        || c.title.toLowerCase().includes(k);
      return roleOk && textOk;
    });

    empty.hidden = list.length > 0;
    grid.innerHTML = list.map((c, i) => `
      <a class="champ-card" href="champion.html?id=${c.id}" style="animation-delay:${i * 70}ms">
        <img class="champ-card__img" src="${DDRAGON.loading(c.id)}"
             alt="${escapeHtml(c.nameKr)}" loading="lazy"
             data-fallback="${escapeHtml(c.nameKr)}">
        <div class="champ-card__veil"></div>
        <span class="champ-card__corner"></span>
        <div class="champ-card__info">
          <span class="champ-card__name">${escapeHtml(c.nameKr)}</span>
          <span class="champ-card__title">${escapeHtml(c.title)}</span>
          <div class="champ-card__roles">
            ${c.roles.map((r) => `<span class="role-tag">${escapeHtml(r)}</span>`).join('')}
          </div>
        </div>
      </a>`).join('');
    bindImageFallback(grid);
  }

  document.querySelectorAll('.chip').forEach((chip) => {
    chip.addEventListener('click', () => {
      document.querySelectorAll('.chip').forEach((c) => c.classList.remove('active'));
      chip.classList.add('active');
      activeRole = chip.dataset.role;
      draw();
    });
  });

  document.getElementById('searchInput').addEventListener('input', (e) => {
    keyword = e.target.value;
    draw();
  });

  draw();
}

/* =========================================================
   챔피언 상세 페이지
   ========================================================= */
function renderChampionPage() {
  const champ = getChampion(param('id'));
  const hero = document.getElementById('champHero');
  const wrap = document.getElementById('detailWrap');

  if (!champ) {
    hero.innerHTML = '';
    wrap.innerHTML = `
      <div class="empty-state" style="grid-column:1/-1">
        <p>챔피언을 찾을 수 없습니다.</p>
        <a class="back-link" href="home.html#regions" style="margin-top:1.5rem">지역 목록으로 돌아가기</a>
      </div>`;
    return;
  }

  const region = getRegion(champ.region);
  document.title = `${champ.nameKr} · ${champ.title} | RUNETERRA ARCHIVE`;

  hero.style.setProperty('--accent', region.color);
  hero.innerHTML = `
    <img class="champ-hero__bg" src="${DDRAGON.splash(champ.id)}" alt="${escapeHtml(champ.nameKr)} 일러스트"
         data-fallback="${escapeHtml(champ.nameEn)}">
    <div class="champ-hero__veil"></div>
    <div class="champ-hero__content">
      <a class="champ-hero__region" href="region.html?region=${region.id}">
        ${region.crest} ${escapeHtml(region.nameKr)}
      </a>
      <h1>${escapeHtml(champ.nameKr)}</h1>
      <p class="champ-hero__title">${escapeHtml(champ.title)}</p>
      <div class="champ-hero__meta">
        ${champ.roles.map((r) => `<span class="role-tag">${escapeHtml(r)}</span>`).join('')}
        <span class="role-tag">${escapeHtml(champ.nameEn)}</span>
      </div>
    </div>`;

  wrap.innerHTML = `
    <div>
      <a class="back-link" href="region.html?region=${region.id}">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
          <path d="M19 12H5M12 19l-7-7 7-7"/>
        </svg>
        ${escapeHtml(region.nameKr)} 챔피언 목록
      </a>

      <section class="panel">
        <div class="panel__head"><span class="diamond"></span><h2>배경 이야기</h2></div>
        <p class="lore-text">${escapeHtml(champ.lore)}</p>
      </section>

      <section class="panel">
        <div class="panel__head"><span class="diamond"></span><h2>스킬</h2></div>
        ${champ.abilities.map((a) => `
          <div class="ability">
            <div class="ability__key">${a.key}</div>
            <div>
              <p class="ability__name">${escapeHtml(a.name)}</p>
              <p class="ability__desc">${escapeHtml(a.desc)}</p>
            </div>
          </div>`).join('')}
      </section>
    </div>

    <aside>
      <section class="panel">
        <div class="panel__head"><span class="diamond"></span><h2>정보</h2></div>
        <dl>
          <div class="stat-row"><dt>소속 지역</dt><dd>${escapeHtml(region.nameKr)}</dd></div>
          <div class="stat-row"><dt>주 포지션</dt><dd>${escapeHtml(champ.lane)}</dd></div>
          <div class="stat-row"><dt>역할</dt><dd>${champ.roles.map(escapeHtml).join(' · ')}</dd></div>
          <div class="stat-row"><dt>피해 유형</dt><dd>${escapeHtml(champ.damage)}</dd></div>
          <div class="stat-row">
            <dt>난이도</dt>
            <dd class="difficulty">
              ${[1, 2, 3].map((n) => `<i class="${n <= champ.difficulty ? 'on' : ''}"></i>`).join('')}
            </dd>
          </div>
        </dl>
      </section>

      <section class="panel">
        <div class="panel__head"><span class="diamond"></span><h2>같은 지역 챔피언</h2></div>
        <div class="related-grid">
          ${championsOfRegion(region.id)
            .filter((c) => c.id !== champ.id)
            .map((c) => `
              <a class="related-card" href="champion.html?id=${c.id}">
                <img src="${DDRAGON.loading(c.id)}" alt="${escapeHtml(c.nameKr)}" loading="lazy"
                     data-fallback="${escapeHtml(c.nameKr)}">
                <span>${escapeHtml(c.nameKr)}</span>
              </a>`).join('')}
        </div>
      </section>
    </aside>`;

  bindImageFallback(hero);
  bindImageFallback(wrap);
}
