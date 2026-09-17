/* 리그 오브 레전드 세계관 데이터
 * 이미지: Riot Data Dragon CDN 링크 사용
 *  - 스플래시: https://ddragon.leagueoflegends.com/cdn/img/champion/splash/{id}_0.jpg
 *  - 로딩아트: https://ddragon.leagueoflegends.com/cdn/img/champion/loading/{id}_0.jpg
 */

const DDRAGON = {
  splash: (id) => `https://ddragon.leagueoflegends.com/cdn/img/champion/splash/${id}_0.jpg`,
  loading: (id) => `https://ddragon.leagueoflegends.com/cdn/img/champion/loading/${id}_0.jpg`,
};

const REGIONS = [
  {
    id: 'demacia',
    nameKr: '데마시아',
    nameEn: 'DEMACIA',
    tag: '정의와 명예의 왕국',
    color: '#3B79C4',
    desc: '정의와 명예를 최우선 가치로 삼는 강대한 왕국. 흰 석조 성벽과 마법을 억제하는 페트리사이트로 지어진 이 나라는 굳건한 법치와 정예 군대로 유지된다. 그러나 마법을 두려워하는 사회 분위기 탓에 마법사들은 숨어 살아야 하는 그늘이 존재한다.',
    terrain: '석조 성채 · 평원 · 실버윙 호수',
    crest: `<svg viewBox="0 0 100 100" aria-hidden="true"><path d="M50 6 L88 20 V50 C88 74 70 89 50 95 C30 89 12 74 12 50 V20 Z" fill="none" stroke="currentColor" stroke-width="4"/><path d="M50 22 V76" stroke="currentColor" stroke-width="4"/><path d="M33 38 H67" stroke="currentColor" stroke-width="4"/><path d="M38 60 L50 72 L62 60" fill="none" stroke="currentColor" stroke-width="3"/></svg>`,
  },
  {
    id: 'noxus',
    nameKr: '녹서스',
    nameEn: 'NOXUS',
    tag: '힘이 곧 정의인 제국',
    color: '#C0392B',
    desc: '힘이 곧 정의라 믿는 팽창주의 제국. 출신이나 혈통과 관계없이 오직 실력으로만 사람을 평가하기에, 누구든 능력만 있다면 최고 자리에 오를 수 있다. 정복을 통해 대륙 전역으로 세력을 넓혀왔으며 그 군대는 룬테라에서 가장 두려운 존재다.',
    terrain: '불모의 화산암 지대 · 제국 수도 이모탈 바스티온',
    crest: `<svg viewBox="0 0 100 100" aria-hidden="true"><path d="M14 72 V34 L32 54 L50 20 L68 54 L86 34 V72 Z" fill="none" stroke="currentColor" stroke-width="4"/><path d="M10 80 H90" stroke="currentColor" stroke-width="5"/><circle cx="50" cy="46" r="4" fill="currentColor"/></svg>`,
  },
  {
    id: 'ionia',
    nameKr: '아이오니아',
    nameEn: 'IONIA',
    tag: '균형과 영혼의 섬',
    color: '#E86AA0',
    desc: '자연과 영혼의 마법이 살아 숨 쉬는 신비로운 군도. 오랜 세월 균형의 철학을 지키며 평화롭게 살아왔지만, 녹서스의 침공으로 깊은 상처를 입고 지금도 그 여파와 싸우고 있다. 인간과 정령, 바스타야가 함께 살아가는 땅이다.',
    terrain: '벚꽃 숲 · 영혼의 꽃 사원 · 공중 절벽',
    crest: `<svg viewBox="0 0 100 100" aria-hidden="true"><circle cx="50" cy="34" r="17" fill="none" stroke="currentColor" stroke-width="3"/><circle cx="30" cy="60" r="17" fill="none" stroke="currentColor" stroke-width="3"/><circle cx="70" cy="60" r="17" fill="none" stroke="currentColor" stroke-width="3"/><circle cx="50" cy="62" r="9" fill="currentColor"/></svg>`,
  },
  {
    id: 'freljord',
    nameKr: '프렐요드',
    nameEn: 'FRELJORD',
    tag: '얼어붙은 북방의 대지',
    color: '#5FC9E8',
    desc: '혹독한 눈보라와 빙하가 지배하는 북방의 땅. 세 부족이 저마다 다른 신념으로 대립하며, 오직 강인한 자만이 겨울을 견뎌낸다. 얼음 아래에는 고대의 마법과 잊혀진 존재들이 잠들어 있다.',
    terrain: '빙하 · 설원 · 고대 얼음 동굴',
    crest: `<svg viewBox="0 0 100 100" aria-hidden="true"><g stroke="currentColor" stroke-width="4" stroke-linecap="round"><path d="M50 8 V92"/><path d="M11 50 H89"/><path d="M22 22 L78 78"/><path d="M78 22 L22 78"/><path d="M50 20 L42 28 M50 20 L58 28 M50 80 L42 72 M50 80 L58 72"/></g></svg>`,
  },
  {
    id: 'piltover-zaun',
    nameKr: '필트오버 & 자운',
    nameEn: 'PILTOVER & ZAUN',
    tag: '진보의 도시와 그 그림자',
    color: '#E5A73C',
    desc: '찬란한 진보의 도시 필트오버와, 그 아래 독성 안개에 잠긴 지하 도시 자운. 위쪽은 헥스테크 기술과 부로 번영하고 아래쪽은 착취와 화학공학으로 살아남는다. 한 몸이면서도 결코 화합하지 못하는 두 도시다.',
    terrain: '헥스테크 고가도로 · 지하 화학 공장 · 잿빛 안개',
    crest: `<svg viewBox="0 0 100 100" aria-hidden="true"><circle cx="50" cy="50" r="21" fill="none" stroke="currentColor" stroke-width="5"/><circle cx="50" cy="50" r="7" fill="currentColor"/><g stroke="currentColor" stroke-width="6" stroke-linecap="round"><path d="M50 10 V23"/><path d="M50 77 V90"/><path d="M10 50 H23"/><path d="M77 50 H90"/><path d="M22 22 L31 31"/><path d="M69 69 L78 78"/><path d="M78 22 L69 31"/><path d="M31 69 L22 78"/></g></svg>`,
  },
  {
    id: 'shurima',
    nameKr: '슈리마',
    nameEn: 'SHURIMA',
    tag: '모래에 잠긴 고대 제국',
    color: '#E8C15F',
    desc: '한때 대륙을 호령했던 고대 제국의 폐허. 태양 원반의 힘으로 승천한 자들이 다스렸으나 배신과 함께 하루아침에 모래 속으로 사라졌다. 사막 아래에는 잊혀진 마법과 부활을 꿈꾸는 존재들이 잠들어 있다.',
    terrain: '사막 · 고대 유적 · 태양 원반',
    crest: `<svg viewBox="0 0 100 100" aria-hidden="true"><circle cx="50" cy="50" r="15" fill="currentColor"/><circle cx="50" cy="50" r="26" fill="none" stroke="currentColor" stroke-width="3"/><g stroke="currentColor" stroke-width="4" stroke-linecap="round"><path d="M50 6 V20"/><path d="M50 80 V94"/><path d="M6 50 H20"/><path d="M80 50 H94"/><path d="M19 19 L29 29"/><path d="M71 71 L81 81"/><path d="M81 19 L71 29"/><path d="M29 71 L19 81"/></g></svg>`,
  },
  {
    id: 'targon',
    nameKr: '타곤',
    nameEn: 'MOUNT TARGON',
    tag: '별에 닿는 신성한 산',
    color: '#9B7BD4',
    desc: '하늘에 닿을 듯 솟아오른 신성한 산. 정상에 오른 자만이 천상의 존재와 만나 그 힘을 받아들여 아스펙트가 된다고 전해진다. 산기슭에는 태양을 섬기는 솔라리와 달을 따르는 루나리가 오랜 세월 반목해왔다.',
    terrain: '고산 지대 · 천상의 관문 · 별빛 협곡',
    crest: `<svg viewBox="0 0 100 100" aria-hidden="true"><path d="M8 86 L38 34 L54 62 L64 46 L92 86 Z" fill="none" stroke="currentColor" stroke-width="4" stroke-linejoin="round"/><path d="M66 10 L70 21 L82 21 L72 28 L76 40 L66 33 L56 40 L60 28 L50 21 L62 21 Z" fill="currentColor"/></svg>`,
  },
  {
    id: 'bilgewater',
    nameKr: '빌지워터',
    nameEn: 'BILGEWATER',
    tag: '무법의 항구 도시',
    color: '#D98A3C',
    desc: '해적과 용병, 괴물 사냥꾼이 뒤섞인 무법 항구. 법 대신 금화와 총구가 질서를 만들며, 거대한 바다 괴수의 뼈로 지어진 부두 위에서 위험한 거래가 끊이지 않는다. 그림자 군도의 검은 안개가 가장 먼저 닿는 곳이기도 하다.',
    terrain: '항구 · 선박 잔해 · 괴수의 뼈 부두',
    crest: `<svg viewBox="0 0 100 100" aria-hidden="true"><circle cx="50" cy="32" r="17" fill="none" stroke="currentColor" stroke-width="4"/><circle cx="43" cy="30" r="3.5" fill="currentColor"/><circle cx="57" cy="30" r="3.5" fill="currentColor"/><path d="M50 49 V86" stroke="currentColor" stroke-width="4"/><path d="M30 68 Q50 92 70 68" fill="none" stroke="currentColor" stroke-width="4"/><path d="M34 58 H66" stroke="currentColor" stroke-width="4"/></svg>`,
  },
  {
    id: 'shadow-isles',
    nameKr: '그림자 군도',
    nameEn: 'SHADOW ISLES',
    tag: '저주받은 검은 안개의 섬',
    color: '#3FBF8F',
    desc: '대격변 이후 검은 안개에 영원히 뒤덮인 저주받은 군도. 산 자와 죽은 자의 경계가 무너진 이곳에서, 죽음조차 안식이 되지 못한 원혼들이 끝없이 방황한다. 안개는 주기적으로 밖으로 퍼져나가 살아있는 것들을 삼킨다.',
    terrain: '폐허가 된 성 · 검은 안개 · 죽은 숲',
    crest: `<svg viewBox="0 0 100 100" aria-hidden="true"><path d="M50 12 C22 12 20 46 34 54 C14 60 18 90 46 90 C58 90 54 72 50 66 C64 72 84 56 74 36 C88 30 78 8 58 14 Z" fill="none" stroke="currentColor" stroke-width="3" stroke-linejoin="round"/><circle cx="41" cy="46" r="4" fill="currentColor"/><circle cx="59" cy="46" r="4" fill="currentColor"/></svg>`,
  },
  {
    id: 'void',
    nameKr: '공허',
    nameEn: 'THE VOID',
    tag: '모든 것을 삼키는 무의 차원',
    color: '#A45CD6',
    desc: '룬테라의 지하 깊은 곳을 뚫고 침투해오는 미지의 차원. 고대 마법사들이 억지로 열어버린 균열을 통해 형언할 수 없는 존재들이 흘러나온다. 공허의 생명체는 생명을 먹어치우며 끝없이 진화하고, 오직 소멸만을 목적으로 한다.',
    terrain: '공허 균열 · 이카시아 폐허 · 보랏빛 심연',
    crest: `<svg viewBox="0 0 100 100" aria-hidden="true"><path d="M12 50 Q50 20 88 50 Q50 80 12 50 Z" fill="none" stroke="currentColor" stroke-width="4"/><circle cx="50" cy="50" r="13" fill="currentColor"/><g stroke="currentColor" stroke-width="3" stroke-linecap="round"><path d="M14 48 L4 36 M14 52 L4 64 M86 48 L96 36 M86 52 L96 64"/></g></svg>`,
  },
];

const CHAMPIONS = [
  /* ===== 데마시아 ===== */
  {
    id: 'Garen', nameKr: '가렌', nameEn: 'Garen', title: '데마시아의 힘',
    region: 'demacia', roles: ['전사', '탱커'], lane: '탑', damage: '물리', difficulty: 1,
    lore: '크라운가드 가문 출신으로, 데마시아의 정예 부대 "결단의 부대"를 이끄는 용맹한 전사다. 여동생 럭스와 함께 왕국의 정의를 수호하며, 두려움 없이 전장의 최전선에 선다. 거대한 대검을 휘두르며 적에게 데마시아의 심판을 내린다.',
    abilities: [
      { key: 'P', name: '불굴', desc: '일정 시간 피해를 받지 않으면 체력을 빠르게 회복한다.' },
      { key: 'Q', name: '결정타', desc: '이동 속도가 증가하고 다음 공격이 강화되어 적을 침묵시킨다.' },
      { key: 'W', name: '용기', desc: '방어력과 마법 저항력을 얻고 잠시 받는 피해를 줄인다.' },
      { key: 'E', name: '심판', desc: '검을 회전시켜 주변의 적에게 연속으로 피해를 입힌다.' },
      { key: 'R', name: '데마시아의 정의', desc: '적 챔피언 한 명에게 잃은 체력에 비례한 강력한 고정 피해를 준다.' },
    ],
  },
  {
    id: 'Lux', nameKr: '럭스', nameEn: 'Lux', title: '빛의 여인',
    region: 'demacia', roles: ['마법사', '서포터'], lane: '미드 · 서포터', damage: '마법', difficulty: 2,
    lore: '크라운가드 가문의 막내이자 가렌의 여동생. 마법을 금기시하는 데마시아에서 빛의 마법을 타고나 정체를 숨기고 살아간다. 밝고 낙천적인 성격으로, 언젠가 마법이 두려움이 아닌 희망으로 받아들여지길 꿈꾸며 왕국을 위해 은밀히 활약한다.',
    abilities: [
      { key: 'P', name: '광휘', desc: '스킬에 맞은 적은 표식이 남아 다음 기본 공격 시 추가 마법 피해를 받는다.' },
      { key: 'Q', name: '빛의 속박', desc: '빛의 구체를 날려 최대 두 명의 적을 속박한다.' },
      { key: 'W', name: '프리즘 보호막', desc: '지팡이를 던져 자신과 아군에게 보호막을 씌운다.' },
      { key: 'E', name: '빛의 특이점', desc: '지정한 지역에 빛의 구체를 남겨 적을 둔화시키고 터뜨려 피해를 준다.' },
      { key: 'R', name: '파이널 스파크', desc: '거대한 빛줄기를 발사해 직선상의 모든 적에게 큰 피해를 준다.' },
    ],
  },
  {
    id: 'Fiora', nameKr: '피오라', nameEn: 'Fiora', title: '위대한 결투가',
    region: 'demacia', roles: ['전사', '암살자'], lane: '탑', damage: '물리', difficulty: 3,
    lore: '로랑 가문의 수장이자 데마시아 최고의 검객. 아버지가 일으킨 반역 스캔들로 실추된 가문의 명예를 되찾기 위해 검을 든다. 오직 자신과 대등한 실력자와의 정면 대결에서만 진정한 가치를 찾으며, 상대의 약점을 꿰뚫어 보는 눈을 지녔다.',
    abilities: [
      { key: 'P', name: '결투가의 춤', desc: '적 챔피언 주변에 약점이 표시되며, 그곳을 공격하면 추가 피해와 이동 속도를 얻는다.' },
      { key: 'Q', name: '찌르기', desc: '짧게 돌진하며 적을 찔러 피해를 준다.' },
      { key: 'W', name: '방어', desc: '적의 공격을 막아내고 반격하여 적을 둔화 또는 기절시킨다.' },
      { key: 'E', name: '칼부림', desc: '다음 두 번의 기본 공격이 강화되어 추가 피해와 회복을 제공한다.' },
      { key: 'R', name: '대결투', desc: '적에게 네 개의 약점을 표시하고, 모두 적중시키면 광역 회복 장판이 생성된다.' },
    ],
  },
  {
    id: 'Vayne', nameKr: '베인', nameEn: 'Vayne', title: '밤의 사냥꾼',
    region: 'demacia', roles: ['원거리 딜러', '암살자'], lane: '바텀', damage: '물리', difficulty: 3,
    lore: '숀아 베인. 어린 시절 눈앞에서 가족이 악마에게 몰살당하는 것을 목격한 뒤, 모든 사악한 마법과 괴물을 사냥하는 데 인생을 바쳤다. 은 석궁과 석궁 볼트를 들고 밤의 어둠 속에서 표적을 추적하며, 그 무엇도 그녀의 복수를 멈출 수 없다.',
    abilities: [
      { key: 'P', name: '나이트 헌터', desc: '자신에게서 멀어지는 적을 향해 이동할 때 이동 속도가 증가한다.' },
      { key: 'Q', name: '구르기', desc: '짧은 거리를 굴러 이동하고 다음 공격이 강화된다.' },
      { key: 'W', name: '은화살', desc: '같은 대상을 세 번 공격할 때마다 최대 체력 비례 고정 피해를 입힌다.' },
      { key: 'E', name: '선고', desc: '적을 밀쳐내며, 벽에 부딪히면 기절시키고 추가 피해를 준다.' },
      { key: 'R', name: '결전의 시간', desc: '공격력이 증가하고 구르기 사용 시 잠시 투명 상태가 된다.' },
    ],
  },

  /* ===== 녹서스 ===== */
  {
    id: 'Darius', nameKr: '다리우스', nameEn: 'Darius', title: '녹서스의 손',
    region: 'noxus', roles: ['전사', '탱커'], lane: '탑', damage: '물리', difficulty: 2,
    lore: '평민 출신에서 오직 실력만으로 녹서스 최고 사령관 자리에 오른 인물. 거대한 도끼를 휘두르며 "힘이 곧 정의"라는 제국의 신념을 몸소 증명한다. 부하에게든 적에게든 자비를 베풀지 않지만, 무능한 귀족보다는 실력 있는 병사를 존중한다. 처형인 드레이븐의 형이다.',
    abilities: [
      { key: 'P', name: '출혈', desc: '공격이 적중하면 출혈이 중첩되고, 5중첩 시 피의 격노 상태가 되어 피해량이 크게 증가한다.' },
      { key: 'Q', name: '학살', desc: '도끼를 크게 휘둘러 주변 적에게 피해를 주고, 날 끝에 맞으면 추가 피해와 회복을 얻는다.' },
      { key: 'W', name: '무력화', desc: '다음 공격이 추가 피해를 주고 대상을 둔화시킨다.' },
      { key: 'E', name: '붙잡기', desc: '도끼를 던져 적을 자신 쪽으로 끌어당긴다.' },
      { key: 'R', name: '녹서스 단두대', desc: '적에게 도약해 고정 피해를 주며, 처치 시 재사용 대기시간이 초기화된다.' },
    ],
  },
  {
    id: 'Draven', nameKr: '드레이븐', nameEn: 'Draven', title: '영광의 처형자',
    region: 'noxus', roles: ['원거리 딜러'], lane: '바텀', damage: '물리', difficulty: 3,
    lore: '한때 녹서스 군인이었으나, 지금은 화려한 처형 쇼로 관중의 환호를 갈망하는 스타. 회전하는 도끼를 자유자재로 받아내며 전투 자체를 공연으로 만든다. 형 다리우스가 명예와 의무를 택한 것과 달리, 드레이븐은 오직 스포트라이트를 택했다.',
    abilities: [
      { key: 'P', name: '드레이븐 리그', desc: '적을 처치하거나 도끼를 받아내면 적응형 투지가 쌓여 추가 골드를 얻는다.' },
      { key: 'Q', name: '회전 도끼', desc: '다음 공격이 추가 피해를 주고, 도끼가 튕겨 나가 받아낼 수 있다.' },
      { key: 'W', name: '핏빛 질주', desc: '이동 속도와 공격 속도가 크게 증가한다.' },
      { key: 'E', name: '도끼 밟기', desc: '도끼를 던져 직선상의 적을 밀쳐내고 둔화시킨다.' },
      { key: 'R', name: '유혈 낭자', desc: '거대한 도끼 두 자루를 던져 맵 반대편까지 날아가 적중한 적에게 큰 피해를 준다.' },
    ],
  },
  {
    id: 'Katarina', nameKr: '카타리나', nameEn: 'Katarina', title: '사악한 칼날',
    region: 'noxus', roles: ['암살자'], lane: '미드', damage: '마법', difficulty: 3,
    lore: '녹서스 명문 뒤 쿠토 가문 출신의 최정예 암살자. 실종된 아버지 뒤 쿠토 장군의 그늘에서 벗어나 스스로 이름을 떨치고자 한다. 수많은 단검을 전장 곳곳에 뿌려두고 그 사이를 순식간에 이동하며, 표적이 반응하기도 전에 목숨을 거둔다.',
    abilities: [
      { key: 'P', name: '탐욕', desc: '적 챔피언 처치에 관여하면 모든 스킬의 재사용 대기시간이 초기화된다.' },
      { key: 'Q', name: '튕기는 단검', desc: '단검을 던져 적들 사이를 튕기게 하고, 마지막 지점에 단검을 떨어뜨린다.' },
      { key: 'W', name: '쌍검 무희', desc: '단검을 공중에 띄우고 주변 적을 둔화시킨다.' },
      { key: 'E', name: '지판', desc: '대상 또는 떨어진 단검 위치로 순간이동하며 피해를 준다.' },
      { key: 'R', name: '죽음의 연꽃', desc: '주변의 적들에게 단검을 난사해 폭발적인 피해를 입힌다.' },
    ],
  },
  {
    id: 'Swain', nameKr: '스웨인', nameEn: 'Swain', title: '녹서스의 대장군',
    region: 'noxus', roles: ['마법사', '탱커'], lane: '미드 · 서포터', damage: '마법', difficulty: 2,
    lore: '제리코 스웨인. 전장에서 한쪽 팔을 잃고 모든 것을 빼앗겼으나, 악마와 계약해 까마귀의 힘을 얻고 녹서스의 대장군 자리에 올랐다. 적의 영혼에서 비밀을 읽어내는 냉철한 전략가로, 제국이 진정으로 강해질 길을 끝없이 계산한다.',
    abilities: [
      { key: 'P', name: '탐욕스러운 까마귀 떼', desc: '쓰러진 적에게서 영혼 조각을 뽑아내 최대 체력을 영구히 얻는다.' },
      { key: 'Q', name: '죽음의 손아귀', desc: '부채꼴로 마법 구체를 발사하고 적중 시 체력을 회복한다.' },
      { key: 'W', name: '제국의 시야', desc: '지정한 지역을 밝히고, 잠시 후 적을 둔화시키며 피해를 준다.' },
      { key: 'E', name: '끝없는 손아귀', desc: '까마귀를 날려 적을 붙잡고 자신 쪽으로 끌어당긴다.' },
      { key: 'R', name: '악마 승천', desc: '악마 형태로 변신해 주변 적의 생명력을 지속적으로 흡수한다.' },
    ],
  },

  /* ===== 아이오니아 ===== */
  {
    id: 'Yasuo', nameKr: '야스오', nameEn: 'Yasuo', title: '용서받지 못한 자',
    region: 'ionia', roles: ['전사', '암살자'], lane: '미드 · 탑', damage: '물리', difficulty: 3,
    lore: '스승을 살해했다는 누명을 쓰고 고향을 떠나 방랑하는 아이오니아의 검사. 바람의 검술을 다루는 유일한 생존자이며, 진범을 쫓던 끝에 자신의 형 요네와 마주하는 비극을 겪는다. 과거의 죄책감을 술과 검으로 달래며 속죄의 길을 걷는다.',
    abilities: [
      { key: 'P', name: '방랑자의 길', desc: '이동 시 흐름이 쌓이고, 가득 차면 보호막을 얻는다. 치명타 확률이 두 배로 적용된다.' },
      { key: 'Q', name: '강철 폭풍', desc: '검을 찔러 피해를 주고, 두 번 적중 후에는 회오리를 날려 적을 띄운다.' },
      { key: 'W', name: '바람 장막', desc: '적의 모든 투사체를 막아내는 바람의 벽을 생성한다.' },
      { key: 'E', name: '질풍검', desc: '적을 관통하며 돌진해 피해를 준다.' },
      { key: 'R', name: '최후의 숨결', desc: '공중에 뜬 적에게 순간이동해 공중에 붙잡아 두고 피해를 준다.' },
    ],
  },
  {
    id: 'Ahri', nameKr: '아리', nameEn: 'Ahri', title: '구미호',
    region: 'ionia', roles: ['마법사', '암살자'], lane: '미드', damage: '마법', difficulty: 2,
    lore: '인간의 생명력과 기억을 흡수할 수 있는 바스타야 여우 정령. 본능에 이끌려 사냥하던 과거를 뒤로하고, 자신이 흡수한 기억 속 인간의 감정을 이해하기 위해 세상을 여행한다. 매혹적인 마법으로 상대를 홀리지만, 그 안에는 자신의 정체성을 찾으려는 갈망이 있다.',
    abilities: [
      { key: 'P', name: '정수 훔치기', desc: '스킬로 적을 여러 번 맞히면 다음 스킬 적중 시 체력을 회복한다.' },
      { key: 'Q', name: '현혹의 구슬', desc: '구슬을 던졌다 되돌아오게 하며, 돌아올 때는 고정 피해를 준다.' },
      { key: 'W', name: '여우불', desc: '세 개의 불꽃을 날려 근처 적을 자동으로 추적한다.' },
      { key: 'E', name: '매혹', desc: '입맞춤을 날려 적중한 적을 매혹시켜 자신에게 걸어오게 만든다.' },
      { key: 'R', name: '혼령 질주', desc: '최대 세 번까지 빠르게 돌진하며 주변 적에게 피해를 준다.' },
    ],
  },
  {
    id: 'Irelia', nameKr: '이렐리아', nameEn: 'Irelia', title: '칼날 무희',
    region: 'ionia', roles: ['전사', '암살자'], lane: '탑 · 미드', damage: '물리', difficulty: 3,
    lore: '녹서스의 침공에 맞서 싸운 아이오니아 저항군의 상징. 어린 나이에 전장에 뛰어들어 춤을 추듯 검을 다루는 법을 깨우쳤으며, 의지만으로 떠다니는 조상의 칼날을 조종한다. 전쟁의 상처를 안고도 고향의 자유를 위해 검을 놓지 않는다.',
    abilities: [
      { key: 'P', name: '아이오니아의 열정', desc: '적에게 피해를 주면 중첩이 쌓여 공격 속도가 증가한다.' },
      { key: 'Q', name: '칼날 쇄도', desc: '적에게 돌진해 피해를 주고, 처치 시 재사용 대기시간이 초기화된다.' },
      { key: 'W', name: '칼날 방어', desc: '칼날을 모아 피해를 감소시키고, 해제 시 직선상의 적에게 피해를 준다.' },
      { key: 'E', name: '흠 잡을 데 없는 이중주', desc: '두 개의 칼날을 배치해 그 사이의 적을 기절시킨다.' },
      { key: 'R', name: '선봉의 칼날', desc: '칼날 벽을 날려 적을 밀쳐내고 벽을 세워 가둔다.' },
    ],
  },
  {
    id: 'Zed', nameKr: '제드', nameEn: 'Zed', title: '그림자의 주인',
    region: 'ionia', roles: ['암살자'], lane: '미드', damage: '물리', difficulty: 3,
    lore: '대스승 쿠쇼의 제자였으나 금지된 그림자 마법에 손을 대고 균형의 길을 버렸다. 아이오니아가 침략자에게 살아남으려면 무자비한 힘이 필요하다 믿으며, 스승을 살해하고 그림자 교단을 세웠다. 사제였던 신과는 이제 돌이킬 수 없는 적이 되었다.',
    abilities: [
      { key: 'P', name: '약자 멸시', desc: '체력이 낮은 적에게 기본 공격 시 추가 마법 피해를 준다.' },
      { key: 'Q', name: '그림자 표창', desc: '자신과 그림자가 동시에 표창을 던져 직선상의 적을 관통한다.' },
      { key: 'W', name: '살아있는 그림자', desc: '그림자를 소환하고, 재사용 시 그림자 위치로 순간이동한다.' },
      { key: 'E', name: '그림자 베기', desc: '자신과 그림자 주변의 적을 베어 둔화시킨다.' },
      { key: 'R', name: '죽음의 표식', desc: '적 뒤로 순간이동해 표식을 남기고, 표식이 터지며 입힌 피해의 일부를 추가로 가한다.' },
    ],
  },

  /* ===== 프렐요드 ===== */
  {
    id: 'Ashe', nameKr: '애쉬', nameEn: 'Ashe', title: '서리 궁수',
    region: 'freljord', roles: ['원거리 딜러', '서포터'], lane: '바텀', damage: '물리', difficulty: 1,
    lore: '아바로사 부족을 이끄는 프렐요드의 전쟁 어머니. 전설의 서리 활 아바로사의 유산을 이어받아 부족의 정통성을 인정받았으며, 정복이 아닌 동맹과 외교로 흩어진 부족들을 하나로 묶으려 한다. 트린다미어와 혼인하여 동맹을 굳건히 했다.',
    abilities: [
      { key: 'P', name: '서리 화살', desc: '기본 공격이 적을 둔화시키고, 둔화된 적에게 추가 피해를 준다.' },
      { key: 'Q', name: '유수의 집중', desc: '잠시 동안 공격 속도가 크게 증가하며 화살을 난사한다.' },
      { key: 'W', name: '일제 사격', desc: '부채꼴로 화살을 발사해 적을 둔화시킨다.' },
      { key: 'E', name: '매 날리기', desc: '매를 날려 지나가는 경로와 도착 지점의 시야를 밝힌다.' },
      { key: 'R', name: '마법의 수정 화살', desc: '거대한 얼음 화살을 발사해 적중한 적을 기절시키고 주변에 피해를 준다.' },
    ],
  },
  {
    id: 'Braum', nameKr: '브라움', nameEn: 'Braum', title: '프렐요드의 심장',
    region: 'freljord', roles: ['서포터', '탱커'], lane: '서포터', damage: '마법', difficulty: 1,
    lore: '부서지지 않는 거대한 문짝 방패를 등에 짊어진 온화한 거인. 프렐요드 곳곳의 마을을 돌며 위험에 처한 사람들을 지켜주는 민중의 영웅이다. 산을 옮기고 늑대와 팔씨름을 했다는 전설이 무수히 전해지지만, 정작 본인은 늘 겸손하게 웃어넘긴다.',
    abilities: [
      { key: 'P', name: '진탕 강타', desc: '적을 네 번 공격하거나 아군과 함께 공격하면 대상을 기절시킨다.' },
      { key: 'Q', name: '겨울의 이빨', desc: '얼음 덩어리를 던져 적을 둔화시키고 진탕 강타 중첩을 쌓는다.' },
      { key: 'W', name: '내 뒤에 서라!', desc: '아군에게 도약해 함께 방어력과 마법 저항력을 얻는다.' },
      { key: 'E', name: '무적', desc: '방패를 들어 날아오는 투사체를 막고 피해를 크게 줄인다.' },
      { key: 'R', name: '빙하 균열', desc: '땅을 내리쳐 직선으로 균열을 일으켜 적을 공중에 띄우고 둔화시킨다.' },
    ],
  },
  {
    id: 'Sejuani', nameKr: '세주아니', nameEn: 'Sejuani', title: '북방의 분노',
    region: 'freljord', roles: ['탱커', '전사'], lane: '정글', damage: '마법', difficulty: 2,
    lore: '윈터스 클로 부족을 이끄는 냉혹한 전사. 혹독한 시련만이 프렐요드의 백성을 강하게 만든다 믿으며, 약한 자에게 베푸는 자비를 경멸한다. 거대한 멧돼지 브리슬을 타고 눈보라와 함께 전장에 나타나 적을 짓밟는다. 애쉬와는 어린 시절 자매처럼 지냈으나 지금은 대립하는 사이다.',
    abilities: [
      { key: 'P', name: '북방의 격노', desc: '전투 중 방어력이 증가하고, 적에게 서리 상처를 누적시켜 기절시킬 수 있다.' },
      { key: 'Q', name: '북극의 일격', desc: '브리슬을 몰아 돌진해 적을 밀쳐낸다.' },
      { key: 'W', name: '겨울의 진노', desc: '주변 적에게 피해를 주고 이어서 광역 피해를 가한다.' },
      { key: 'E', name: '북방의 바람', desc: '지정 지역에 눈보라를 일으켜 지속 피해를 준다.' },
      { key: 'R', name: '빙하 감옥', desc: '거대한 얼음 구체를 날려 적중한 적을 얼려 가두고 주변을 둔화시킨다.' },
    ],
  },
  {
    id: 'Anivia', nameKr: '애니비아', nameEn: 'Anivia', title: '냉기의 불사조',
    region: 'freljord', roles: ['마법사'], lane: '미드', damage: '마법', difficulty: 3,
    lore: '겨울과 재생을 상징하는 고대의 불사조 정령. 수천 년 동안 프렐요드를 지켜온 반신적 존재로, 쓰러져도 얼음 알에서 다시 태어난다. 사람들은 그녀를 "얼음 어머니"라 부르며 신앙의 대상으로 삼고, 그녀는 땅의 균형이 무너질 때마다 모습을 드러낸다.',
    abilities: [
      { key: 'P', name: '환생', desc: '치명적인 피해를 받으면 얼음 알로 변해 잠시 후 부활한다.' },
      { key: 'Q', name: '고드름 날리기', desc: '얼음 조각을 날려 적중한 적을 기절시킨다.' },
      { key: 'W', name: '서리 감옥', desc: '얼음 벽을 생성해 적의 이동을 막는다.' },
      { key: 'E', name: '얼음 깨물기', desc: '적에게 냉기 피해를 주며, 얼어붙은 적에게는 피해량이 두 배가 된다.' },
      { key: 'R', name: '눈보라', desc: '지정 지역에 지속되는 눈보라를 소환해 적을 둔화시키고 피해를 준다.' },
    ],
  },

  /* ===== 필트오버 & 자운 ===== */
  {
    id: 'Jinx', nameKr: '징크스', nameEn: 'Jinx', title: '핫샷',
    region: 'piltover-zaun', roles: ['원거리 딜러'], lane: '바텀', damage: '물리', difficulty: 2,
    lore: '혼돈 그 자체를 즐기는 자운 출신의 범죄자. 파괴와 폭발로 필트오버를 뒤흔들며, 붙잡히는 것보다 지루해지는 것을 더 두려워한다. 로켓 런처와 기관총을 자유자재로 바꿔 쓰며, 그녀를 추적하는 필트오버 집행자 바이와는 깊고 복잡한 과거로 얽혀 있다.',
    abilities: [
      { key: 'P', name: '신난다!', desc: '적 챔피언이나 구조물을 파괴하면 이동 속도가 크게 증가한다.' },
      { key: 'Q', name: '무기 교체!', desc: '기관총과 로켓 런처를 번갈아 사용한다. 로켓은 사거리와 광역 피해가 크다.' },
      { key: 'W', name: '지직!', desc: '충격 광선을 발사해 적중한 적에게 피해를 주고 둔화시킨다.' },
      { key: 'E', name: '차익!', desc: '덫을 설치해 밟은 적을 속박한다.' },
      { key: 'R', name: '초강력 죽음 로켓!', desc: '거대한 로켓을 발사해 멀리 있는 적에게 잃은 체력 비례 피해를 준다.' },
    ],
  },
  {
    id: 'Vi', nameKr: '바이', nameEn: 'Vi', title: '필트오버의 집행자',
    region: 'piltover-zaun', roles: ['전사', '암살자'], lane: '정글', damage: '물리', difficulty: 2,
    lore: '자운 뒷골목의 갱단 출신에서 필트오버의 집행자로 거듭난 인물. 규칙보다 주먹이 빠른 성격이지만, 자신이 지키기로 한 사람에게는 누구보다 충직하다. 거대한 헥스테크 건틀릿으로 벽이든 적이든 정면으로 뚫고 들어간다.',
    abilities: [
      { key: 'P', name: '폭발 보호막', desc: '스킬 사용 후 기본 공격 시 보호막을 얻는다.' },
      { key: 'Q', name: '설퍽 강타', desc: '힘을 모아 돌진하며 적을 밀쳐내고 벽에 부딪히면 추가 피해를 준다.' },
      { key: 'W', name: '철거', desc: '같은 적을 세 번 공격하면 최대 체력 비례 피해와 방어구 감소 효과를 준다.' },
      { key: 'E', name: '끊임없는 힘', desc: '다음 공격이 강화되어 대상 뒤의 적에게도 피해를 준다.' },
      { key: 'R', name: '체포', desc: '적 챔피언에게 돌진해 공중에 띄우고 경로상의 적들을 밀쳐낸다.' },
    ],
  },
  {
    id: 'Caitlyn', nameKr: '케이틀린', nameEn: 'Caitlyn', title: '필트오버의 보안관',
    region: 'piltover-zaun', roles: ['원거리 딜러'], lane: '바텀', damage: '물리', difficulty: 2,
    lore: '필트오버 최고의 명사수이자 보안관. 명문가에서 자랐지만 안락한 삶 대신 도시의 질서를 지키는 길을 택했다. 치밀한 추리와 덫으로 범인을 몰아넣는 사냥꾼 같은 수사관이며, 파트너 바이와 함께 징크스를 집요하게 추적한다.',
    abilities: [
      { key: 'P', name: '헤드샷', desc: '일정 횟수 공격 후 다음 기본 공격이 치명적인 헤드샷이 된다.' },
      { key: 'Q', name: '피스메이커', desc: '소총을 충전해 직선상의 모든 적을 관통하는 탄환을 발사한다.' },
      { key: 'W', name: '요들 덫', desc: '덫을 설치해 밟은 적을 잠시 묶어두고 헤드샷을 확정시킨다.' },
      { key: 'E', name: '90 구경 그물', desc: '그물을 발사해 적을 둔화시키고 자신은 반대 방향으로 도약한다.' },
      { key: 'R', name: '에이스 인 더 홀', desc: '조준 후 적 챔피언 한 명에게 치명적인 저격탄을 발사한다.' },
    ],
  },
  {
    id: 'Ekko', nameKr: '에코', nameEn: 'Ekko', title: '시간을 부수는 소년',
    region: 'piltover-zaun', roles: ['암살자', '전사'], lane: '미드 · 정글', damage: '마법', difficulty: 3,
    lore: '자운의 뒷골목에서 자란 천재 발명가. 폐품을 모아 시간을 되돌리는 장치 "Z 드라이브"를 만들어냈으며, 그 힘으로 친구들을 지킨다. 자운의 아이들을 착취에서 구해내는 청년 조직 파이어라이트를 이끌며, 실패해도 언제든 되감아 다시 시도한다.',
    abilities: [
      { key: 'P', name: 'Z 드라이브 공명', desc: '같은 적을 세 번 맞히면 추가 피해와 이동 속도를 얻는다.' },
      { key: 'Q', name: '시간 굴절기', desc: '장치를 던져 돌아오게 하며, 돌아올 때 적을 둔화시킨다.' },
      { key: 'W', name: '평행 시공', desc: '지정 지역에 시공 거품을 만들어 적을 기절시키고 자신에게 보호막을 준다.' },
      { key: 'E', name: '위상 강타', desc: '짧게 도약하고 다음 공격이 강화된다.' },
      { key: 'R', name: '시간 역행', desc: '몇 초 전 위치로 되돌아가며 체력을 회복하고 주변 적에게 큰 피해를 준다.' },
    ],
  },

  /* ===== 슈리마 ===== */
  {
    id: 'Azir', nameKr: '아지르', nameEn: 'Azir', title: '사막의 황제',
    region: 'shurima', roles: ['마법사', '원거리 딜러'], lane: '미드', damage: '마법', difficulty: 3,
    lore: '승천 의식 직전 신하 제라스의 배신으로 목숨을 잃은 고대 슈리마의 마지막 황제. 수천 년이 흐른 뒤 되살아나 반신 승천자가 되었으며, 모래로 이루어진 병사들을 일으켜 잊혀진 제국을 재건하려 한다. 과거의 영광과 자신의 오만이 낳은 비극을 모두 짊어진 존재다.',
    abilities: [
      { key: 'P', name: '슈리마의 유산', desc: '아군 포탑이 파괴된 자리에 모래 병사 포탑을 세울 수 있다.' },
      { key: 'Q', name: '정복하는 모래', desc: '모래 병사들을 지정 위치로 돌진시켜 적에게 피해를 주고 둔화시킨다.' },
      { key: 'W', name: '일어나라!', desc: '모래 병사를 소환한다. 병사가 대신 공격해 사거리가 늘어난다.' },
      { key: 'E', name: '모래 이동', desc: '모래 병사에게 돌진하며 적에게 피해를 주고 보호막을 얻는다.' },
      { key: 'R', name: '황제의 진영', desc: '모래 병사 벽을 소환해 적을 밀쳐내고 길을 차단한다.' },
    ],
  },
  {
    id: 'Nasus', nameKr: '나서스', nameEn: 'Nasus', title: '사막의 관리자',
    region: 'shurima', roles: ['전사', '탱커'], lane: '탑', damage: '물리', difficulty: 1,
    lore: '승천한 자칼 머리의 반신으로, 한때 슈리마의 위대한 학자이자 전략가였다. 제국이 무너진 뒤 오랜 세월 잠들어 있다가 깨어나, 역사가 같은 실수를 반복하지 않도록 지식을 지키는 수호자가 되었다. 광기에 빠진 동생 레넥톤을 되돌리는 것이 그의 오랜 숙원이다.',
    abilities: [
      { key: 'P', name: '영혼의 흡수', desc: '적을 처치하면 체력을 회복한다.' },
      { key: 'Q', name: '흡수의 일격', desc: '다음 공격이 추가 피해를 주며, 처치 시 피해량이 영구히 증가한다.' },
      { key: 'W', name: '시들어감', desc: '적의 이동 속도를 극단적으로 감소시킨다.' },
      { key: 'E', name: '스피릿 파이어', desc: '지정 지역에 불길을 소환해 지속 피해를 주고 방어력을 깎는다.' },
      { key: 'R', name: '모래 폭풍', desc: '거대해져 최대 체력과 방어력이 증가하고 주변 적에게 지속 피해를 준다.' },
    ],
  },
  {
    id: 'Renekton', nameKr: '레넥톤', nameEn: 'Renekton', title: '사막의 도살자',
    region: 'shurima', roles: ['전사', '탱커'], lane: '탑', damage: '물리', difficulty: 2,
    lore: '승천한 악어 머리의 전사이자 한때 슈리마 최강의 장군. 제국의 몰락 당시 형 나서스를 지키기 위해 스스로 봉인되었으나, 수백 년의 암흑 속에서 정신이 무너져 광기와 증오만 남았다. 이제는 형조차 적으로 인식하며 피를 갈망한다.',
    abilities: [
      { key: 'P', name: '분노의 지배', desc: '전투 중 분노가 쌓이며, 분노를 소모하면 스킬이 강화된다.' },
      { key: 'Q', name: '무자비한 포식자', desc: '주변 적을 베어 피해를 주고 체력을 회복한다.' },
      { key: 'W', name: '잔혹한 포식자', desc: '다음 공격이 적을 기절시키고 큰 피해를 준다.' },
      { key: 'E', name: '내려치기', desc: '적을 관통해 돌진하며 피해를 준다. 재사용 시 반대로 돌아온다.' },
      { key: 'R', name: '지배자', desc: '거대해져 최대 체력을 얻고 주변 적에게 지속 피해를 주며 분노를 회복한다.' },
    ],
  },
  {
    id: 'Sivir', nameKr: '시비르', nameEn: 'Sivir', title: '전투의 여왕',
    region: 'shurima', roles: ['원거리 딜러'], lane: '바텀', damage: '물리', difficulty: 1,
    lore: '황금을 위해서라면 어떤 의뢰도 맡는 슈리마의 용병 대장. 거대한 십자 검을 부메랑처럼 던져 싸우며, 사막의 유적을 도굴하는 보물 사냥꾼이기도 하다. 자신의 몸에 흐르는 고대 황제의 피를 알게 된 뒤, 슈리마의 부활에 얽힌 운명과 마주하게 된다.',
    abilities: [
      { key: 'P', name: '날랜 발놀림', desc: '기본 공격이 적중하면 잠시 이동 속도가 증가한다.' },
      { key: 'Q', name: '부메랑 검', desc: '거대한 검을 던져 오가는 경로의 모든 적에게 피해를 준다.' },
      { key: 'W', name: '튕기는 검날', desc: '다음 공격들이 주변 적에게 튕겨 나가 추가 피해를 준다.' },
      { key: 'E', name: '주문 방어막', desc: '적의 스킬 하나를 막아내고 마나를 회복한다.' },
      { key: 'R', name: '사냥의 격려', desc: '자신과 주변 아군의 이동 속도를 크게 높인다.' },
    ],
  },

  /* ===== 타곤 ===== */
  {
    id: 'Diana', nameKr: '다이애나', nameEn: 'Diana', title: '달의 경멸',
    region: 'targon', roles: ['전사', '암살자'], lane: '정글 · 미드', damage: '마법', difficulty: 2,
    lore: '태양을 섬기는 솔라리에서 자랐으나, 금지된 달의 지식을 탐구하다 이단으로 낙인찍혔다. 타곤 산 정상에서 달의 아스펙트와 하나가 되어 은빛 힘을 얻었으며, 진실을 은폐한 솔라리에게 복수하고자 한다. 한때 가장 가까웠던 레오나와는 이제 태양과 달처럼 대립한다.',
    abilities: [
      { key: 'P', name: '월광검', desc: '세 번째 공격마다 주변 적에게 광역 마법 피해를 준다.' },
      { key: 'Q', name: '초승달 일격', desc: '초승달 모양의 검기를 날려 적중한 적에게 월광 표식을 남긴다.' },
      { key: 'W', name: '창백한 폭포', desc: '주변에 구체를 소환해 피해를 주고 보호막을 얻는다.' },
      { key: 'E', name: '달빛 쇄도', desc: '적에게 돌진하며, 월광 표식이 있는 적에게 사용하면 재사용 대기시간이 초기화된다.' },
      { key: 'R', name: '월식', desc: '주변의 적들을 자신 쪽으로 끌어당기고 큰 피해를 준다.' },
    ],
  },
  {
    id: 'Leona', nameKr: '레오나', nameEn: 'Leona', title: '빛의 여명',
    region: 'targon', roles: ['탱커', '서포터'], lane: '서포터', damage: '마법', difficulty: 2,
    lore: '태양의 아스펙트에게 선택받은 솔라리의 전사. 어린 시절부터 규율을 어기면서까지 옳다고 믿는 것을 지켰고, 처형 직전 태양의 힘을 받아 되살아났다. 햇빛이 깃든 방패와 검으로 언제나 아군의 맨 앞에 서며, 옛 친구 다이애나와의 대립을 마음 깊이 아파한다.',
    abilities: [
      { key: 'P', name: '일광', desc: '스킬로 적중한 적에게 표식을 남겨 아군이 추가 피해를 줄 수 있게 한다.' },
      { key: 'Q', name: '여명의 방패', desc: '방패로 적을 강타해 기절시킨다.' },
      { key: 'W', name: '일식', desc: '방어력과 마법 저항력이 증가하고, 잠시 후 주변 적에게 피해를 준다.' },
      { key: 'E', name: '천공의 검', desc: '빛의 검을 날려 적에게 돌진하며 대상을 끌어온다.' },
      { key: 'R', name: '태양의 강림', desc: '지정 지역에 태양 광선을 내리꽂아 중심의 적을 기절시키고 주변을 둔화시킨다.' },
    ],
  },
  {
    id: 'Pantheon', nameKr: '판테온', nameEn: 'Pantheon', title: '불굴의 창',
    region: 'targon', roles: ['전사', '암살자'], lane: '탑 · 미드 · 서포터', damage: '물리', difficulty: 2,
    lore: '라코르 부족 출신의 필멸자 아트레우스는 전쟁의 아스펙트에게 몸을 내주었다가, 천상의 존재가 죽은 뒤에도 홀로 살아남았다. 신이 버린 몸으로 다시 일어선 그는 이제 인간의 의지만으로 별들에게 창을 겨눈다. 천상의 오만에 맞서는 필멸자의 상징이다.',
    abilities: [
      { key: 'P', name: '필멸자의 의지', desc: '스킬을 사용할 때마다 중첩이 쌓이고, 가득 차면 다음 스킬이 강화된다.' },
      { key: 'Q', name: '혜성 창', desc: '창을 찌르거나 멀리 투척해 적에게 피해를 준다.' },
      { key: 'W', name: '방패 돌진', desc: '적에게 돌진해 기절시킨다.' },
      { key: 'E', name: '이지스 강타', desc: '방패를 들어 한 방향의 피해를 막으며 적에게 지속 피해를 준다.' },
      { key: 'R', name: '대운석 낙하', desc: '하늘로 뛰어올라 먼 지역에 창과 함께 내리꽂혀 광역 피해를 준다.' },
    ],
  },
  {
    id: 'AurelionSol', nameKr: '아우렐리온 솔', nameEn: 'Aurelion Sol', title: '별을 벼려내는 자',
    region: 'targon', roles: ['마법사'], lane: '미드', damage: '마법', difficulty: 3,
    lore: '우주를 떠돌며 수많은 별을 만들어낸 태초의 우주 용. 타곤의 천상 존재들에게 속아 왕관에 힘을 봉인당한 채 그들의 심부름꾼 노릇을 하게 되었다. 이제 속박에서 벗어나 자신의 별들을 되찾고, 다시 우주를 자유롭게 창조하려 한다.',
    abilities: [
      { key: 'P', name: '우주의 중심', desc: '주변을 도는 별들이 근처의 적에게 지속적으로 마법 피해를 준다.' },
      { key: 'Q', name: '별빛 쇄도', desc: '별의 힘을 모아 발사해 적에게 피해를 주고 둔화시킨다.' },
      { key: 'W', name: '천체 확장', desc: '별의 궤도를 넓혀 사거리와 피해량을 늘린다.' },
      { key: 'E', name: '혜성 비행', desc: '지형을 무시하고 하늘을 날아 이동한다.' },
      { key: 'R', name: '빛의 목소리', desc: '거대한 빛줄기를 뿜어 광범위한 적에게 피해를 주고 밀쳐낸다.' },
    ],
  },

  /* ===== 빌지워터 ===== */
  {
    id: 'Gangplank', nameKr: '갱플랭크', nameEn: 'Gangplank', title: '짠물의 재앙',
    region: 'bilgewater', roles: ['전사'], lane: '탑', damage: '물리', difficulty: 3,
    lore: '공포로 빌지워터를 지배했던 해적 왕. 아버지를 살해하고 항구를 손에 넣었으나, 미스 포츈과 반란 세력에 의해 함대와 왕좌를 모두 잃었다. 모든 것을 빼앗긴 지금, 화약통과 커틀러스 한 자루로 다시 정상에 오르려 한다.',
    abilities: [
      { key: 'P', name: '시험의 불길', desc: '기본 공격이 적을 불태워 지속 피해를 준다.' },
      { key: 'Q', name: '약탈', desc: '적에게 총을 쏴 피해를 주고, 처치 시 추가 골드를 얻는다.' },
      { key: 'W', name: '괴혈병 치료', desc: '군중 제어 효과를 제거하고 체력을 회복한다.' },
      { key: 'E', name: '화약통', desc: '화약통을 설치하고 폭파시켜 연쇄 폭발을 일으킨다.' },
      { key: 'R', name: '포탄 세례', desc: '맵 어디든 함포 사격을 요청해 광역 피해와 둔화를 일으킨다.' },
    ],
  },
  {
    id: 'MissFortune', nameKr: '미스 포츈', nameEn: 'Miss Fortune', title: '현상금 사냥꾼',
    region: 'bilgewater', roles: ['원거리 딜러'], lane: '바텀', damage: '물리', difficulty: 1,
    lore: '세라 포츈. 어린 시절 갱플랭크의 손에 어머니를 잃고 모든 것을 빼앗겼으며, 복수를 위해 스스로를 벼려 빌지워터에서 가장 유명한 현상금 사냥꾼이자 함대 선장이 되었다. 갱플랭크의 배를 폭파시켜 그의 시대를 끝낸 장본인이다.',
    abilities: [
      { key: 'P', name: '사랑의 총알', desc: '다른 대상을 번갈아 공격하면 추가 물리 피해를 준다.' },
      { key: 'Q', name: '더블 업', desc: '탄환이 첫 대상을 관통해 뒤의 적에게 더 큰 피해를 준다.' },
      { key: 'W', name: '뽐내기', desc: '이동 속도가 증가하고 다음 공격들의 공격 속도가 크게 상승한다.' },
      { key: 'E', name: '총알 세례', desc: '지정 지역에 총알을 퍼부어 적을 둔화시키고 피해를 준다.' },
      { key: 'R', name: '더블 다운', desc: '부채꼴 방향으로 총알을 난사해 지속적인 광역 피해를 준다.' },
    ],
  },
  {
    id: 'Graves', nameKr: '그레이브즈', nameEn: 'Graves', title: '무법자',
    region: 'bilgewater', roles: ['원거리 딜러', '전사'], lane: '정글', damage: '물리', difficulty: 2,
    lore: '말콤 그레이브즈. 오랜 파트너 트위스티드 페이트에게 배신당해 감옥에 갇혔다고 믿으며 복수를 다짐했으나, 훗날 그것이 자신을 살리기 위한 선택이었음을 알게 된다. 거대한 산탄총 "새출발"을 들고 빌지워터의 뒷골목을 누비는 냉소적인 무법자다.',
    abilities: [
      { key: 'P', name: '새 운명', desc: '산탄총에 탄환 두 발이 장전되며, 근거리에서 최대 피해를 준다.' },
      { key: 'Q', name: '최후 통첩', desc: '탄환을 날려 지정 위치에서 폭발시킨다.' },
      { key: 'W', name: '연막탄', desc: '연막을 터뜨려 적의 시야를 가리고 둔화시킨다.' },
      { key: 'E', name: '속사', desc: '지정 방향으로 구르며 방어력을 얻고 탄환을 재장전한다.' },
      { key: 'R', name: '충격 산탄', desc: '강력한 포탄을 발사해 적중 후 파편으로 갈라져 추가 피해를 준다.' },
    ],
  },
  {
    id: 'Pyke', nameKr: '파이크', nameEn: 'Pyke', title: '블러드하버의 학살자',
    region: 'bilgewater', roles: ['서포터', '암살자'], lane: '서포터', damage: '물리', difficulty: 3,
    lore: '거대한 바다 괴수에게 삼켜졌다가 동료 선원들에게 버림받은 작살잡이. 깊은 바다에서 검은 안개의 힘과 함께 되살아나, 자신을 배신한 자들과 선원을 착취하는 빌지워터의 부자들을 하나씩 이름 지워간다. 그의 손에 죽은 이는 흔적조차 남지 않는다.',
    abilities: [
      { key: 'P', name: '물에 빠진 자의 선물', desc: '전투에서 벗어나면 잃은 체력의 일부를 회복하며 최대 체력을 얻을 수 없다.' },
      { key: 'Q', name: '뼈 작살', desc: '작살을 던져 적을 끌어오거나 찔러 둔화시킨다.' },
      { key: 'W', name: '유령물 잠수', desc: '잠시 투명해지며 이동 속도가 증가한다.' },
      { key: 'E', name: '유령 해일', desc: '유령을 남기고 돌진했다가 되돌아오며 경로의 적을 기절시킨다.' },
      { key: 'R', name: '바닥에서 온 죽음', desc: '체력이 낮은 적을 처형하고, 처치 시 아군에게도 골드를 나눠준다.' },
    ],
  },

  /* ===== 그림자 군도 ===== */
  {
    id: 'Thresh', nameKr: '쓰레쉬', nameEn: 'Thresh', title: '사슬 감옥의 간수',
    region: 'shadow-isles', roles: ['서포터', '탱커'], lane: '서포터', damage: '마법', difficulty: 3,
    lore: '고대 문명 헬리아에서 금지된 지식을 지키던 간수였으나, 권력에 눈이 멀어 대격변의 참극에 가담했다. 최초의 원혼 중 하나로 되살아난 그는 영혼을 등불에 가두고 영원히 고통을 주는 것에서 기쁨을 느낀다. 그에게 죽음은 끝이 아니라 시작일 뿐이다.',
    abilities: [
      { key: 'P', name: '지옥살이', desc: '적의 영혼을 수집해 방어력과 주문력을 영구히 얻는다.' },
      { key: 'Q', name: '사형 선고', desc: '낫을 던져 적을 붙잡고 자신 쪽으로 끌어당긴다.' },
      { key: 'W', name: '어둠의 통로', desc: '등불을 던져 아군에게 보호막을 주고 자신에게 끌어올 수 있게 한다.' },
      { key: 'E', name: '휘둘러치기', desc: '사슬을 휘둘러 적을 밀거나 당기고 둔화시킨다.' },
      { key: 'R', name: '영혼의 감옥', desc: '주변에 다섯 개의 벽을 세워 통과하는 적을 둔화시키고 피해를 준다.' },
    ],
  },
  {
    id: 'Hecarim', nameKr: '헤카림', nameEn: 'Hecarim', title: '전쟁의 그림자',
    region: 'shadow-isles', roles: ['전사', '암살자'], lane: '정글', damage: '물리', difficulty: 2,
    lore: '생전에는 왕국 최강의 기병대를 이끌던 장군이었다. 대격변이 일어나던 날, 그는 검은 안개에 휩쓸려 부하들과 함께 인간도 말도 아닌 존재로 뒤틀렸다. 이제 그는 영원히 돌격만을 반복하며, 그의 발굽 소리가 들리면 살아있는 것들은 모두 짓밟힌다.',
    abilities: [
      { key: 'P', name: '전쟁의 길', desc: '이동 속도의 일정 비율만큼 공격력을 얻는다.' },
      { key: 'Q', name: '분쇄', desc: '창을 휘둘러 주변 적에게 피해를 주며, 적중 시 피해량이 증가한다.' },
      { key: 'W', name: '공포의 영혼', desc: '주변 적에게 지속 피해를 주고 입힌 피해만큼 체력을 회복한다.' },
      { key: 'E', name: '파멸의 돌진', desc: '가속하며 다음 공격이 적을 밀쳐내고 추가 피해를 준다.' },
      { key: 'R', name: '그림자의 습격', desc: '유령 기병대와 함께 돌진해 적을 공포에 빠뜨리고 밀쳐낸다.' },
    ],
  },
  {
    id: 'Kalista', nameKr: '칼리스타', nameEn: 'Kalista', title: '복수의 화신',
    region: 'shadow-isles', roles: ['원거리 딜러'], lane: '바텀', damage: '물리', difficulty: 3,
    lore: '생전에는 왕국의 충직한 장군이었으나, 왕의 명을 따르다 배신당해 창에 찔려 죽었다. 검은 안개 속에서 복수의 화신으로 되살아나, 배신당한 자들의 원한을 대신 갚아준다. 그녀를 부른 자는 반드시 대가를 치러야 하며, 복수 이외의 감정은 그녀에게 남아 있지 않다.',
    abilities: [
      { key: 'P', name: '불굴의 자세', desc: '기본 공격 후 짧게 도약하며 이동할 수 있다.' },
      { key: 'Q', name: '창 관통', desc: '창을 던져 직선상의 적들을 관통한다.' },
      { key: 'W', name: '파수꾼', desc: '영혼 파수꾼을 보내 지역을 정찰하게 한다.' },
      { key: 'E', name: '분열', desc: '적에게 박힌 창을 뽑아 창 개수에 비례한 피해를 주고 처치 시 재사용된다.' },
      { key: 'R', name: '운명의 부름', desc: '서약한 아군을 끌어당겨 적에게 던져 넣어 밀쳐내고 기절시킨다.' },
    ],
  },
  {
    id: 'Viego', nameKr: '비에고', nameEn: 'Viego', title: '몰락한 왕',
    region: 'shadow-isles', roles: ['암살자', '전사'], lane: '정글', damage: '물리', difficulty: 3,
    lore: '카마보르의 왕이었던 그는 아내 이졸데를 되살리려는 집착으로 금지된 마법을 사용했고, 그 결과 대격변을 일으켜 왕국 전체를 검은 안개로 물들였다. 천 년이 지난 지금도 그는 죽지 못한 채, 아내를 되찾기 위해서라면 세상 전부를 불태울 각오로 떠돈다.',
    abilities: [
      { key: 'P', name: '군주의 지배', desc: '자신이 관여해 쓰러뜨린 적의 시체에 빙의해 그 챔피언의 스킬을 사용한다.' },
      { key: 'Q', name: '몰락한 왕의 검', desc: '검을 휘둘러 피해를 주며, 표식이 있는 적에게 추가 피해와 회복을 얻는다.' },
      { key: 'W', name: '유령의 아가리', desc: '안개를 발사해 적을 기절시킨다.' },
      { key: 'E', name: '검은 안개', desc: '안개 지대를 만들어 그 안에서 은신하고 이동 속도를 얻는다.' },
      { key: 'R', name: '심장 파괴', desc: '주변 적을 밀쳐내고 체력이 가장 낮은 적에게 돌진해 치명타 피해를 입힌다.' },
    ],
  },

  /* ===== 공허 ===== */
  {
    id: 'Khazix', nameKr: '카직스', nameEn: "Kha'Zix", title: '공허의 약탈자',
    region: 'void', roles: ['암살자'], lane: '정글', damage: '물리', difficulty: 2,
    lore: '죽인 생명체의 형질을 흡수해 끝없이 진화하는 공허의 포식자. 더 강한 먹이를 사냥할수록 더 완벽한 형태로 변모하며, 진화 자체가 그의 존재 이유다. 자신을 궁극의 사냥감으로 여기는 렝가와는 서로를 사냥하는 숙명의 관계에 있다.',
    abilities: [
      { key: 'P', name: '보이지 않는 위협', desc: '수풀에서 나온 뒤 첫 공격이 추가 피해를 주고 적을 둔화시킨다.' },
      { key: 'Q', name: '공포의 맛', desc: '적을 베어 피해를 주며, 고립된 적에게는 피해량이 증가한다.' },
      { key: 'W', name: '공허 쐐기', desc: '가시를 발사해 적을 둔화시키고 체력을 회복한다.' },
      { key: 'E', name: '도약', desc: '지정 위치로 뛰어올라 착지하며 주변 적에게 피해를 준다.' },
      { key: 'R', name: '공허 강습', desc: '잠시 투명 상태가 되고 이동 속도가 증가하며, 스킬을 진화시킬 수 있다.' },
    ],
  },
  {
    id: 'KogMaw', nameKr: '코그모', nameEn: "Kog'Maw", title: '심연의 아가리',
    region: 'void', roles: ['원거리 딜러', '마법사'], lane: '바텀', damage: '혼합', difficulty: 2,
    lore: '공허의 균열에서 기어 나온 작고 탐욕스러운 생명체. 호기심이 넘쳐 눈에 보이는 모든 것을 먹어치우려 하지만, 정작 자신이 얼마나 끔찍한 파괴를 일으키는지는 이해하지 못한다. 그가 흘리는 침과 소화액은 바위조차 순식간에 녹여버린다.',
    abilities: [
      { key: 'P', name: '이카시아의 선물', desc: '죽은 뒤 잠시 움직이다 폭발해 주변 적에게 큰 고정 피해를 준다.' },
      { key: 'Q', name: '부식성 침', desc: '침을 뱉어 적의 방어력과 마법 저항력을 감소시킨다.' },
      { key: 'W', name: '생체 마법 포탄', desc: '기본 공격의 사거리가 늘고 최대 체력 비례 마법 피해를 준다.' },
      { key: 'E', name: '공허의 진액', desc: '끈적한 액체를 발사해 지나간 자리의 적을 둔화시킨다.' },
      { key: 'R', name: '살아있는 대포', desc: '먼 거리의 지정 지역에 포탄을 떨어뜨려 광역 피해를 준다.' },
    ],
  },
  {
    id: 'Chogath', nameKr: '초가스', nameEn: "Cho'Gath", title: '공허의 공포',
    region: 'void', roles: ['탱커', '마법사'], lane: '탑', damage: '마법', difficulty: 1,
    lore: '먹어치울수록 거대해지는 공허의 괴물. 룬테라에 발을 디딘 순간부터 끝없는 굶주림에 지배당해 살아있는 모든 것을 삼켜왔다. 그가 먹는 것은 단순한 포식이 아니라 공허가 이 세계를 침식하는 과정 그 자체다.',
    abilities: [
      { key: 'P', name: '육식', desc: '적을 처치하면 체력과 마나를 회복한다.' },
      { key: 'Q', name: '깨물기', desc: '지정 지역에서 가시를 솟구치게 해 적을 공중에 띄운다.' },
      { key: 'W', name: '고함', desc: '전방의 적들에게 피해를 주고 침묵시킨다.' },
      { key: 'E', name: '가시 돋힌 등껍질', desc: '기본 공격이 주변 적에게도 마법 피해를 준다.' },
      { key: 'R', name: '포식', desc: '적을 집어삼켜 고정 피해를 주고, 최대 체력이 영구히 증가한다.' },
    ],
  },
  {
    id: 'Velkoz', nameKr: '벨코즈', nameEn: "Vel'Koz", title: '공허의 눈',
    region: 'void', roles: ['마법사'], lane: '미드 · 서포터', damage: '마법', difficulty: 2,
    lore: '다른 공허 생명체와 달리 지성을 지닌 고대의 관측자. 룬테라의 물질과 생명체를 해체하고 분석해 그 본질을 기록하며, 이해를 마친 대상은 가차 없이 소멸시킨다. 그에게 파괴는 분노가 아니라 연구의 마지막 단계일 뿐이다.',
    abilities: [
      { key: 'P', name: '유기물 분해', desc: '세 번 적중한 적을 분해해 최대 체력 비례 고정 피해를 준다.' },
      { key: 'Q', name: '플라즈마 분열', desc: '플라즈마 구체를 발사하고 재사용 시 갈라져 양옆으로 퍼진다.' },
      { key: 'W', name: '공허 균열', desc: '땅을 갈라 직선상의 적에게 피해를 주고 마법 저항력을 낮춘다.' },
      { key: 'E', name: '지각 붕괴', desc: '지정 지역을 폭발시켜 적을 공중에 띄운다.' },
      { key: 'R', name: '생명체 분해 광선', desc: '강력한 광선을 조종하며 지속적으로 마법 피해를 준다.' },
    ],
  },
];

/* 헬퍼 함수 */
function getRegion(id) {
  return REGIONS.find((r) => r.id === id);
}
function getChampion(id) {
  return CHAMPIONS.find((c) => c.id === id);
}
function championsOfRegion(regionId) {
  return CHAMPIONS.filter((c) => c.region === regionId);
}
