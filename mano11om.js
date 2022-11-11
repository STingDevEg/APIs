

// Trade  in HTML
const EN = document.querySelector(".StingPremierLeague");
const SP = document.querySelector(".StingLaLiga");
const FR = document.querySelector(".StingFrenchleague");
const GE = document.querySelector(".StingBundesliga");
const IT = document.querySelector(".StingItalianLeague");
const TU = document.querySelector(".StingTurkishLeague");
const AM = document.querySelector(".StingAmericanLeague");
const EG = document.querySelector(".StingEgyptianLeague");
const MO = document.querySelector(".StingMoroccanLeague");
const SU = document.querySelector(".StingSaudiLeague");
const EM = document.querySelector(".StingUAELeague");
const IR = document.querySelector(".StingIraqiLeague");
const Al = document.querySelector(".StingAlgerianLeague");
const SY = document.querySelector(".StingSyrianLeague");
const JO = document.querySelector(".StingJordanianLeague");

// Button
const Goals = document.querySelector(".Goals");

// Fetch & innerHTML
const ScoureApiSting = async function get() {
  if (EN) {
    const RECONFIG = await fetch(
        "https://webws.365scores.com/web/standings/?appTypeId=5&langId=27&timezoneName=Africa/Cairo&userCountryId=131&competitions=7&live=false&stageNum=1&seasonNum=128"
      ),
      APIS = await RECONFIG.json();

    EN.innerHTML = `
<div class="TopLeagia"> <img src="https://imagecache.365scores.com/image/upload/f_png,w_68,h_68,c_limit,q_auto:eco,dpr_2,d_Countries:Round:1.png/v${APIS.competitions[0].imageVersion}/Competitions/light/${APIS.competitions[0].id}"/>${APIS.competitions[0].name}</div>
<table class="table">
<tbody class="tbody">
<tr class="tr">
<th></th>
<th style="text-align: center;">فريق</th>
<th>لعب</th>
<th>فاز</th>
<th>تعادل</th>
<th>خسر</th>
<th>نقاط</th>
</tr>

<tr>
<th>${APIS.standings[0].rows[0].position}</th>
<th><img class="scorelogo" src="https://imagecache.365scores.com/image/upload/f_png,w_24,h_24,c_limit,q_auto:eco,dpr_3,d_Competitors:default1.png/v${APIS.standings[0].rows[0].competitor.imageVersion}/Competitors/${APIS.standings[0].rows[0].competitor.id}"/> ${APIS.standings[0].rows[0].competitor.name}</th>
<th>${APIS.standings[0].rows[0].gamePlayed}</th>
<th>${APIS.standings[0].rows[0].gamesWon}</th>
<th>${APIS.standings[0].rows[0].gamesEven}</th>
<th>${APIS.standings[0].rows[0].gamesLost}</th>
<th>${APIS.standings[0].rows[0].points}</th>
</tr>

<tr>
<th>${APIS.standings[0].rows[1].position}</th>
<th><img class="scorelogo" src="https://imagecache.365scores.com/image/upload/f_png,w_24,h_24,c_limit,q_auto:eco,dpr_3,d_Competitors:default1.png/v${APIS.standings[0].rows[1].competitor.imageVersion}/Competitors/${APIS.standings[0].rows[1].competitor.id}"/>${APIS.standings[0].rows[1].competitor.name}</th>
<th>${APIS.standings[0].rows[1].gamePlayed}</th>
<th>${APIS.standings[0].rows[1].gamesWon}</th>
<th>${APIS.standings[0].rows[1].gamesEven}</th>
<th>${APIS.standings[0].rows[1].gamesLost}</th>
<th>${APIS.standings[0].rows[1].points}</th>
</tr>

<tr>
<th>${APIS.standings[0].rows[2].position}</th>
<th><img class="scorelogo" src="https://imagecache.365scores.com/image/upload/f_png,w_24,h_24,c_limit,q_auto:eco,dpr_3,d_Competitors:default1.png/v${APIS.standings[0].rows[2].competitor.imageVersion}/Competitors/${APIS.standings[0].rows[2].competitor.id}"/>${APIS.standings[0].rows[2].competitor.name}</th>
<th>${APIS.standings[0].rows[2].gamePlayed}</th>
<th>${APIS.standings[0].rows[2].gamesWon}</th>
<th>${APIS.standings[0].rows[2].gamesEven}</th>
<th>${APIS.standings[0].rows[2].gamesLost}</th>
<th>${APIS.standings[0].rows[2].points}</th>
</tr>

<tr>
<th>${APIS.standings[0].rows[3].position}</th>
<th><img class="scorelogo" src="https://imagecache.365scores.com/image/upload/f_png,w_24,h_24,c_limit,q_auto:eco,dpr_3,d_Competitors:default1.png/v${APIS.standings[0].rows[3].competitor.imageVersion}/Competitors/${APIS.standings[0].rows[3].competitor.id}"/>${APIS.standings[0].rows[3].competitor.name}</th>
<th>${APIS.standings[0].rows[3].gamePlayed}</th>
<th>${APIS.standings[0].rows[3].gamesWon}</th>
<th>${APIS.standings[0].rows[3].gamesEven}</th>
<th>${APIS.standings[0].rows[3].gamesLost}</th>
<th>${APIS.standings[0].rows[3].points}</th>
</tr>

<tr>
<th>${APIS.standings[0].rows[4].position}</th>
<th><img class="scorelogo" src="https://imagecache.365scores.com/image/upload/f_png,w_24,h_24,c_limit,q_auto:eco,dpr_3,d_Competitors:default1.png/v${APIS.standings[0].rows[4].competitor.imageVersion}/Competitors/${APIS.standings[0].rows[4].competitor.id}"/>${APIS.standings[0].rows[4].competitor.name}</th>
<th>${APIS.standings[0].rows[4].gamePlayed}</th>
<th>${APIS.standings[0].rows[4].gamesWon}</th>
<th>${APIS.standings[0].rows[4].gamesEven}</th>
<th>${APIS.standings[0].rows[4].gamesLost}</th>
<th>${APIS.standings[0].rows[4].points}</th>
</tr>

<tr>
<th>${APIS.standings[0].rows[5].position}</th>
<th><img class="scorelogo" src="https://imagecache.365scores.com/image/upload/f_png,w_24,h_24,c_limit,q_auto:eco,dpr_3,d_Competitors:default1.png/v${APIS.standings[0].rows[5].competitor.imageVersion}/Competitors/${APIS.standings[0].rows[5].competitor.id}"/>${APIS.standings[0].rows[5].competitor.name}</th>
<th>${APIS.standings[0].rows[5].gamePlayed}</th>
<th>${APIS.standings[0].rows[5].gamesWon}</th>
<th>${APIS.standings[0].rows[5].gamesEven}</th>
<th>${APIS.standings[0].rows[5].gamesLost}</th>
<th>${APIS.standings[0].rows[5].points}</th>
</tr>

<tr>
<th>${APIS.standings[0].rows[6].position}</th>
<th><img class="scorelogo" src="https://imagecache.365scores.com/image/upload/f_png,w_24,h_24,c_limit,q_auto:eco,dpr_3,d_Competitors:default1.png/v${APIS.standings[0].rows[6].competitor.imageVersion}/Competitors/${APIS.standings[0].rows[6].competitor.id}"/>${APIS.standings[0].rows[6].competitor.name}</th>
<th>${APIS.standings[0].rows[6].gamePlayed}</th>
<th>${APIS.standings[0].rows[6].gamesWon}</th>
<th>${APIS.standings[0].rows[6].gamesEven}</th>
<th>${APIS.standings[0].rows[6].gamesLost}</th>
<th>${APIS.standings[0].rows[6].points}</th>
</tr>

<tr>
<th>${APIS.standings[0].rows[7].position}</th>
<th><img class="scorelogo" src="https://imagecache.365scores.com/image/upload/f_png,w_24,h_24,c_limit,q_auto:eco,dpr_3,d_Competitors:default1.png/v${APIS.standings[0].rows[7].competitor.imageVersion}/Competitors/${APIS.standings[0].rows[7].competitor.id}"/>${APIS.standings[0].rows[7].competitor.name}</th>
<th>${APIS.standings[0].rows[7].gamePlayed}</th>
<th>${APIS.standings[0].rows[7].gamesWon}</th>
<th>${APIS.standings[0].rows[7].gamesEven}</th>
<th>${APIS.standings[0].rows[7].gamesLost}</th>
<th>${APIS.standings[0].rows[7].points}</th>
</tr>

<tr>
<th>${APIS.standings[0].rows[8].position}</th>
<th><img class="scorelogo" src="https://imagecache.365scores.com/image/upload/f_png,w_24,h_24,c_limit,q_auto:eco,dpr_3,d_Competitors:default1.png/v${APIS.standings[0].rows[8].competitor.imageVersion}/Competitors/${APIS.standings[0].rows[8].competitor.id}"/>${APIS.standings[0].rows[8].competitor.name}</th>
<th>${APIS.standings[0].rows[8].gamePlayed}</th>
<th>${APIS.standings[0].rows[8].gamesWon}</th>
<th>${APIS.standings[0].rows[8].gamesEven}</th>
<th>${APIS.standings[0].rows[8].gamesLost}</th>
<th>${APIS.standings[0].rows[8].points}</th>
</tr>

<tr>
<th>${APIS.standings[0].rows[9].position}</th>
<th><img class="scorelogo" src="https://imagecache.365scores.com/image/upload/f_png,w_24,h_24,c_limit,q_auto:eco,dpr_3,d_Competitors:default1.png/v${APIS.standings[0].rows[9].competitor.imageVersion}/Competitors/${APIS.standings[0].rows[9].competitor.id}"/>${APIS.standings[0].rows[9].competitor.name}</th>
<th>${APIS.standings[0].rows[9].gamePlayed}</th>
<th>${APIS.standings[0].rows[9].gamesWon}</th>
<th>${APIS.standings[0].rows[9].gamesEven}</th>
<th>${APIS.standings[0].rows[9].gamesLost}</th>
<th>${APIS.standings[0].rows[9].points}</th>
</tr>

<tr>
<th>${APIS.standings[0].rows[10].position}</th>
<th><img class="scorelogo" src="https://imagecache.365scores.com/image/upload/f_png,w_24,h_24,c_limit,q_auto:eco,dpr_3,d_Competitors:default1.png/v${APIS.standings[0].rows[10].competitor.imageVersion}/Competitors/${APIS.standings[0].rows[10].competitor.id}"/>${APIS.standings[0].rows[10].competitor.name}</th>
<th>${APIS.standings[0].rows[10].gamePlayed}</th>
<th>${APIS.standings[0].rows[10].gamesWon}</th>
<th>${APIS.standings[0].rows[10].gamesEven}</th>
<th>${APIS.standings[0].rows[10].gamesLost}</th>
<th>${APIS.standings[0].rows[10].points}</th>
</tr>

<tr>
<th>${APIS.standings[0].rows[11].position}</th>
<th><img class="scorelogo" src="https://imagecache.365scores.com/image/upload/f_png,w_24,h_24,c_limit,q_auto:eco,dpr_3,d_Competitors:default1.png/v${APIS.standings[0].rows[11].competitor.imageVersion}/Competitors/${APIS.standings[0].rows[11].competitor.id}"/>${APIS.standings[0].rows[11].competitor.name}</th>
<th>${APIS.standings[0].rows[11].gamePlayed}</th>
<th>${APIS.standings[0].rows[11].gamesWon}</th>
<th>${APIS.standings[0].rows[11].gamesEven}</th>
<th>${APIS.standings[0].rows[11].gamesLost}</th>
<th>${APIS.standings[0].rows[11].points}</th>
</tr>


<tr>
<th>${APIS.standings[0].rows[12].position}</th>
<th><img class="scorelogo" src="https://imagecache.365scores.com/image/upload/f_png,w_24,h_24,c_limit,q_auto:eco,dpr_3,d_Competitors:default1.png/v${APIS.standings[0].rows[12].competitor.imageVersion}/Competitors/${APIS.standings[0].rows[12].competitor.id}"/>${APIS.standings[0].rows[12].competitor.name}</th>
<th>${APIS.standings[0].rows[12].gamePlayed}</th>
<th>${APIS.standings[0].rows[12].gamesWon}</th>
<th>${APIS.standings[0].rows[12].gamesEven}</th>
<th>${APIS.standings[0].rows[12].gamesLost}</th>
<th>${APIS.standings[0].rows[12].points}</th>
</tr>


<tr>
<th>${APIS.standings[0].rows[13].position}</th>
<th><img class="scorelogo" src="https://imagecache.365scores.com/image/upload/f_png,w_24,h_24,c_limit,q_auto:eco,dpr_3,d_Competitors:default1.png/v${APIS.standings[0].rows[13].competitor.imageVersion}/Competitors/${APIS.standings[0].rows[13].competitor.id}"/>${APIS.standings[0].rows[13].competitor.name}</th>
<th>${APIS.standings[0].rows[13].gamePlayed}</th>
<th>${APIS.standings[0].rows[13].gamesWon}</th>
<th>${APIS.standings[0].rows[13].gamesEven}</th>
<th>${APIS.standings[0].rows[13].gamesLost}</th>
<th>${APIS.standings[0].rows[13].points}</th>
</tr>


<tr>
<th>${APIS.standings[0].rows[14].position}</th>
<th><img class="scorelogo" src="https://imagecache.365scores.com/image/upload/f_png,w_24,h_24,c_limit,q_auto:eco,dpr_3,d_Competitors:default1.png/v${APIS.standings[0].rows[14].competitor.imageVersion}/Competitors/${APIS.standings[0].rows[14].competitor.id}"/>${APIS.standings[0].rows[14].competitor.name}</th>
<th>${APIS.standings[0].rows[14].gamePlayed}</th>
<th>${APIS.standings[0].rows[14].gamesWon}</th>
<th>${APIS.standings[0].rows[14].gamesEven}</th>
<th>${APIS.standings[0].rows[14].gamesLost}</th>
<th>${APIS.standings[0].rows[14].points}</th>
</tr>


<tr>
<th>${APIS.standings[0].rows[15].position}</th>
<th><img class="scorelogo" src="https://imagecache.365scores.com/image/upload/f_png,w_24,h_24,c_limit,q_auto:eco,dpr_3,d_Competitors:default1.png/v${APIS.standings[0].rows[15].competitor.imageVersion}/Competitors/${APIS.standings[0].rows[15].competitor.id}"/>${APIS.standings[0].rows[15].competitor.name}</th>
<th>${APIS.standings[0].rows[15].gamePlayed}</th>
<th>${APIS.standings[0].rows[15].gamesWon}</th>
<th>${APIS.standings[0].rows[15].gamesEven}</th>
<th>${APIS.standings[0].rows[15].gamesLost}</th>
<th>${APIS.standings[0].rows[15].points}</th>
</tr>


<tr>
<th>${APIS.standings[0].rows[16].position}</th>
<th><img class="scorelogo" src="https://imagecache.365scores.com/image/upload/f_png,w_24,h_24,c_limit,q_auto:eco,dpr_3,d_Competitors:default1.png/v${APIS.standings[0].rows[16].competitor.imageVersion}/Competitors/${APIS.standings[0].rows[16].competitor.id}"/>${APIS.standings[0].rows[16].competitor.name}</th>
<th>${APIS.standings[0].rows[16].gamePlayed}</th>
<th>${APIS.standings[0].rows[16].gamesWon}</th>
<th>${APIS.standings[0].rows[16].gamesEven}</th>
<th>${APIS.standings[0].rows[16].gamesLost}</th>
<th>${APIS.standings[0].rows[16].points}</th>
</tr>


<tr>
<th>${APIS.standings[0].rows[17].position}</th>
<th><img class="scorelogo" src="https://imagecache.365scores.com/image/upload/f_png,w_24,h_24,c_limit,q_auto:eco,dpr_3,d_Competitors:default1.png/v${APIS.standings[0].rows[17].competitor.imageVersion}/Competitors/${APIS.standings[0].rows[17].competitor.id}"/>${APIS.standings[0].rows[17].competitor.name}</th>
<th>${APIS.standings[0].rows[17].gamePlayed}</th>
<th>${APIS.standings[0].rows[17].gamesWon}</th>
<th>${APIS.standings[0].rows[17].gamesEven}</th>
<th>${APIS.standings[0].rows[17].gamesLost}</th>
<th>${APIS.standings[0].rows[17].points}</th>
</tr>


<tr>
<th>${APIS.standings[0].rows[18].position}</th>
<th><img class="scorelogo" src="https://imagecache.365scores.com/image/upload/f_png,w_24,h_24,c_limit,q_auto:eco,dpr_3,d_Competitors:default1.png/v${APIS.standings[0].rows[18].competitor.imageVersion}/Competitors/${APIS.standings[0].rows[18].competitor.id}"/>${APIS.standings[0].rows[18].competitor.name}</th>
<th>${APIS.standings[0].rows[18].gamePlayed}</th>
<th>${APIS.standings[0].rows[18].gamesWon}</th>
<th>${APIS.standings[0].rows[18].gamesEven}</th>
<th>${APIS.standings[0].rows[18].gamesLost}</th>
<th>${APIS.standings[0].rows[18].points}</th>
</tr>


<tr>
<th>${APIS.standings[0].rows[19].position}</th>
<th><img class="scorelogo" src="https://imagecache.365scores.com/image/upload/f_png,w_24,h_24,c_limit,q_auto:eco,dpr_3,d_Competitors:default1.png/v${APIS.standings[0].rows[19].competitor.imageVersion}/Competitors/${APIS.standings[0].rows[19].competitor.id}"/>${APIS.standings[0].rows[19].competitor.name}</th>
<th>${APIS.standings[0].rows[19].gamePlayed}</th>
<th>${APIS.standings[0].rows[19].gamesWon}</th>
<th>${APIS.standings[0].rows[19].gamesEven}</th>
<th>${APIS.standings[0].rows[19].gamesLost}</th>
<th>${APIS.standings[0].rows[19].points}</th>
</tr>


</tbody>
</table>`;

    const RECONFIGG = await fetch(
        "https://webws.365scores.com/web/stats/?appTypeId=5&langId=27&timezoneName=Africa/Cairo&userCountryId=131&competition=7"
      ),
      APISGoals = await RECONFIGG.json();

    Goals.innerHTML = `

<div class="TopLeagia"> <img src="https://imagecache.365scores.com/image/upload/f_png,w_68,h_68,c_limit,q_auto:eco,dpr_2,d_Countries:Round:1.png/v${APIS.competitions[0].imageVersion}/Competitions/light/${APIS.competitions[0].id}"/>${APIS.competitions[0].name}</div>
<div class="Gooals">
<div class="topthree">
<div class="topim">
<div class="One">2</div>
<img src="https://imagecache.365scores.com/image/upload/f_png,w_80,h_80,c_limit,q_auto:eco,dpr_2,d_Athletes:default.png,r_max,c_thumb,g_face,z_0.65/v${APISGoals.stats[0].rows[1].entity.imgVer}/Athletes/${APISGoals.stats[0].rows[1].entity.id}"/>
<span class="Goali">${APISGoals.stats[0].rows[1].stats[0].value}</span>
<span class="nameplyr">${APISGoals.stats[0].rows[1].entity.name}</span>
<span class="cuping">${APISGoals.stats[0].rows[1].entity.positionName}</span>
</div>
<div class="topim">
<div class="One">1</div>
<img src="https://imagecache.365scores.com/image/upload/f_png,w_80,h_80,c_limit,q_auto:eco,dpr_2,d_Athletes:default.png,r_max,c_thumb,g_face,z_0.65/v${APISGoals.stats[0].rows[0].entity.imgVer}/Athletes/${APISGoals.stats[0].rows[0].entity.id}"/>
<span class="Goali">${APISGoals.stats[0].rows[0].stats[0].value}</span>
<span class="nameplyr">${APISGoals.stats[0].rows[0].entity.name}</span>
<span class="cuping">${APISGoals.stats[0].rows[0].entity.positionName}</span>
</div>
<div class="topim">
<div class="One">3</div>
<img src="https://imagecache.365scores.com/image/upload/f_png,w_80,h_80,c_limit,q_auto:eco,dpr_2,d_Athletes:default.png,r_max,c_thumb,g_face,z_0.65/v${APISGoals.stats[0].rows[2].entity.imgVer}/Athletes/${APISGoals.stats[0].rows[2].entity.id}"/>
<span class="Goali">${APISGoals.stats[0].rows[2].stats[0].value}</span>
<span class="nameplyr">${APISGoals.stats[0].rows[2].entity.name}</span>
<span class="cuping">${APISGoals.stats[0].rows[2].entity.positionName}</span>
</div>
</div>


<div class="tabolla">
<div class="tabollaintro" style="font-size: 20px  !important;padding: 5px 12px;border-radius: 15px;">
<span class="nameplyr">صورة اللاعب</span>
<span class="nameplyr">اسم اللاعب</span>
<span class="cuping">الصفة</span>
<span class="cuping">الاهداف</span>
</div>

<div class="tabollaintro">
<img src="https://imagecache.365scores.com/image/upload/f_png,w_80,h_80,c_limit,q_auto:eco,dpr_2,d_Athletes:default.png,r_max,c_thumb,g_face,z_0.65/v${APISGoals.stats[0].rows[3].entity.imgVer}/Athletes/${APISGoals.stats[0].rows[3].entity.id}"/>
<span class="nameplyr">${APISGoals.stats[0].rows[3].entity.name}</span>
<span class="cuping">${APISGoals.stats[0].rows[3].entity.positionName}</span>
<span class="Goali">${APISGoals.stats[0].rows[3].stats[0].value}</span>
</div>

<div class="tabollaintro">
<img src="https://imagecache.365scores.com/image/upload/f_png,w_80,h_80,c_limit,q_auto:eco,dpr_2,d_Athletes:default.png,r_max,c_thumb,g_face,z_0.65/v${APISGoals.stats[0].rows[4].entity.imgVer}/Athletes/${APISGoals.stats[0].rows[4].entity.id}"/>
<span class="nameplyr">${APISGoals.stats[0].rows[4].entity.name}</span>
<span class="cuping">${APISGoals.stats[0].rows[4].entity.positionName}</span>
<span class="Goali">${APISGoals.stats[0].rows[4].stats[0].value}</span>
</div>

<div class="tabollaintro">
<img src="https://imagecache.365scores.com/image/upload/f_png,w_80,h_80,c_limit,q_auto:eco,dpr_2,d_Athletes:default.png,r_max,c_thumb,g_face,z_0.65/v${APISGoals.stats[0].rows[5].entity.imgVer}/Athletes/${APISGoals.stats[0].rows[5].entity.id}"/>
<span class="nameplyr">${APISGoals.stats[0].rows[5].entity.name}</span>
<span class="cuping">${APISGoals.stats[0].rows[5].entity.positionName}</span>
<span class="Goali">${APISGoals.stats[0].rows[5].stats[0].value}</span>
</div>

<div class="tabollaintro">
<img src="https://imagecache.365scores.com/image/upload/f_png,w_80,h_80,c_limit,q_auto:eco,dpr_2,d_Athletes:default.png,r_max,c_thumb,g_face,z_0.65/v${APISGoals.stats[0].rows[6].entity.imgVer}/Athletes/${APISGoals.stats[0].rows[6].entity.id}"/>
<span class="nameplyr">${APISGoals.stats[0].rows[6].entity.name}</span>
<span class="cuping">${APISGoals.stats[0].rows[6].entity.positionName}</span>
<span class="Goali">${APISGoals.stats[0].rows[6].stats[0].value}</span>
</div>

<div class="tabollaintro">
<img src="https://imagecache.365scores.com/image/upload/f_png,w_80,h_80,c_limit,q_auto:eco,dpr_2,d_Athletes:default.png,r_max,c_thumb,g_face,z_0.65/v${APISGoals.stats[0].rows[7].entity.imgVer}/Athletes/${APISGoals.stats[0].rows[7].entity.id}"/>
<span class="nameplyr">${APISGoals.stats[0].rows[7].entity.name}</span>
<span class="cuping">${APISGoals.stats[0].rows[7].entity.positionName}</span>
<span class="Goali">${APISGoals.stats[0].rows[7].stats[0].value}</span>
</div>

<div class="tabollaintro">
<img src="https://imagecache.365scores.com/image/upload/f_png,w_80,h_80,c_limit,q_auto:eco,dpr_2,d_Athletes:default.png,r_max,c_thumb,g_face,z_0.65/v${APISGoals.stats[0].rows[8].entity.imgVer}/Athletes/${APISGoals.stats[0].rows[8].entity.id}"/>
<span class="nameplyr">${APISGoals.stats[0].rows[8].entity.name}</span>
<span class="cuping">${APISGoals.stats[0].rows[8].entity.positionName}</span>
<span class="Goali">${APISGoals.stats[0].rows[8].stats[0].value}</span>
</div>

<div class="tabollaintro">
<img src="https://imagecache.365scores.com/image/upload/f_png,w_80,h_80,c_limit,q_auto:eco,dpr_2,d_Athletes:default.png,r_max,c_thumb,g_face,z_0.65/v${APISGoals.stats[0].rows[9].entity.imgVer}/Athletes/${APISGoals.stats[0].rows[9].entity.id}"/>
<span class="nameplyr">${APISGoals.stats[0].rows[9].entity.name}</span>
<span class="cuping">${APISGoals.stats[0].rows[9].entity.positionName}</span>
<span class="Goali">${APISGoals.stats[0].rows[9].stats[0].value}</span>
</div>

<div class="tabollaintro">
<img src="https://imagecache.365scores.com/image/upload/f_png,w_80,h_80,c_limit,q_auto:eco,dpr_2,d_Athletes:default.png,r_max,c_thumb,g_face,z_0.65/v${APISGoals.stats[0].rows[10].entity.imgVer}/Athletes/${APISGoals.stats[0].rows[10].entity.id}"/>
<span class="nameplyr">${APISGoals.stats[0].rows[10].entity.name}</span>
<span class="cuping">${APISGoals.stats[0].rows[10].entity.positionName}</span>
<span class="Goali">${APISGoals.stats[0].rows[10].stats[0].value}</span>
</div>

<div class="tabollaintro">
<img src="https://imagecache.365scores.com/image/upload/f_png,w_80,h_80,c_limit,q_auto:eco,dpr_2,d_Athletes:default.png,r_max,c_thumb,g_face,z_0.65/v${APISGoals.stats[0].rows[11].entity.imgVer}/Athletes/${APISGoals.stats[0].rows[11].entity.id}"/>
<span class="nameplyr">${APISGoals.stats[0].rows[11].entity.name}</span>
<span class="cuping">${APISGoals.stats[0].rows[11].entity.positionName}</span>
<span class="Goali">${APISGoals.stats[0].rows[11].stats[0].value}</span>
</div>

<div class="tabollaintro">
<img src="https://imagecache.365scores.com/image/upload/f_png,w_80,h_80,c_limit,q_auto:eco,dpr_2,d_Athletes:default.png,r_max,c_thumb,g_face,z_0.65/v${APISGoals.stats[0].rows[12].entity.imgVer}/Athletes/${APISGoals.stats[0].rows[12].entity.id}"/>
<span class="nameplyr">${APISGoals.stats[0].rows[12].entity.name}</span>
<span class="cuping">${APISGoals.stats[0].rows[12].entity.positionName}</span>
<span class="Goali">${APISGoals.stats[0].rows[12].stats[0].value}</span>
</div>

<div class="tabollaintro">
<img src="https://imagecache.365scores.com/image/upload/f_png,w_80,h_80,c_limit,q_auto:eco,dpr_2,d_Athletes:default.png,r_max,c_thumb,g_face,z_0.65/v${APISGoals.stats[0].rows[13].entity.imgVer}/Athletes/${APISGoals.stats[0].rows[13].entity.id}"/>
<span class="nameplyr">${APISGoals.stats[0].rows[13].entity.name}</span>
<span class="cuping">${APISGoals.stats[0].rows[13].entity.positionName}</span>
<span class="Goali">${APISGoals.stats[0].rows[13].stats[0].value}</span>
</div>

<div class="tabollaintro">
<img src="https://imagecache.365scores.com/image/upload/f_png,w_80,h_80,c_limit,q_auto:eco,dpr_2,d_Athletes:default.png,r_max,c_thumb,g_face,z_0.65/v${APISGoals.stats[0].rows[14].entity.imgVer}/Athletes/${APISGoals.stats[0].rows[14].entity.id}"/>
<span class="nameplyr">${APISGoals.stats[0].rows[14].entity.name}</span>
<span class="cuping">${APISGoals.stats[0].rows[14].entity.positionName}</span>
<span class="Goali">${APISGoals.stats[0].rows[14].stats[0].value}</span>
</div>
</div>
</div>`;
  } else {
  }

  if (SP) {
    const RECONFIG = await fetch(
        "https://webws.365scores.com/web/standings/?appTypeId=5&langId=27&timezoneName=Africa/Cairo&userCountryId=131&competitions=11&live=false&stageNum=1&seasonNum=94"
      ),
      APIS = await RECONFIG.json();

    SP.innerHTML = `
    <div class="TopLeagia"> <img src="https://imagecache.365scores.com/image/upload/f_png,w_68,h_68,c_limit,q_auto:eco,dpr_2,d_Countries:Round:1.png/v${APIS.competitions[0].imageVersion}/Competitions/light/${APIS.competitions[0].id}"/>${APIS.competitions[0].name}</div>
    <table class="table">
    <tbody class="tbody">
    <tr class="tr">
    <th></th>
    <th style="text-align: center;">فريق</th>
    <th>لعب</th>
    <th>فاز</th>
    <th>تعادل</th>
    <th>خسر</th>
    <th>نقاط</th>
    </tr>
    
    <tr>
    <th>${APIS.standings[0].rows[0].position}</th>
    <th><img class="scorelogo" src="https://imagecache.365scores.com/image/upload/f_png,w_24,h_24,c_limit,q_auto:eco,dpr_3,d_Competitors:default1.png/v${APIS.standings[0].rows[0].competitor.imageVersion}/Competitors/${APIS.standings[0].rows[0].competitor.id}"/> ${APIS.standings[0].rows[0].competitor.name}</th>
    <th>${APIS.standings[0].rows[0].gamePlayed}</th>
    <th>${APIS.standings[0].rows[0].gamesWon}</th>
    <th>${APIS.standings[0].rows[0].gamesEven}</th>
    <th>${APIS.standings[0].rows[0].gamesLost}</th>
    <th>${APIS.standings[0].rows[0].points}</th>
    </tr>
    
    <tr>
    <th>${APIS.standings[0].rows[1].position}</th>
    <th><img class="scorelogo" src="https://imagecache.365scores.com/image/upload/f_png,w_24,h_24,c_limit,q_auto:eco,dpr_3,d_Competitors:default1.png/v${APIS.standings[0].rows[1].competitor.imageVersion}/Competitors/${APIS.standings[0].rows[1].competitor.id}"/>${APIS.standings[0].rows[1].competitor.name}</th>
    <th>${APIS.standings[0].rows[1].gamePlayed}</th>
    <th>${APIS.standings[0].rows[1].gamesWon}</th>
    <th>${APIS.standings[0].rows[1].gamesEven}</th>
    <th>${APIS.standings[0].rows[1].gamesLost}</th>
    <th>${APIS.standings[0].rows[1].points}</th>
    </tr>
    
    <tr>
    <th>${APIS.standings[0].rows[2].position}</th>
    <th><img class="scorelogo" src="https://imagecache.365scores.com/image/upload/f_png,w_24,h_24,c_limit,q_auto:eco,dpr_3,d_Competitors:default1.png/v${APIS.standings[0].rows[2].competitor.imageVersion}/Competitors/${APIS.standings[0].rows[2].competitor.id}"/>${APIS.standings[0].rows[2].competitor.name}</th>
    <th>${APIS.standings[0].rows[2].gamePlayed}</th>
    <th>${APIS.standings[0].rows[2].gamesWon}</th>
    <th>${APIS.standings[0].rows[2].gamesEven}</th>
    <th>${APIS.standings[0].rows[2].gamesLost}</th>
    <th>${APIS.standings[0].rows[2].points}</th>
    </tr>
    
    <tr>
    <th>${APIS.standings[0].rows[3].position}</th>
    <th><img class="scorelogo" src="https://imagecache.365scores.com/image/upload/f_png,w_24,h_24,c_limit,q_auto:eco,dpr_3,d_Competitors:default1.png/v${APIS.standings[0].rows[3].competitor.imageVersion}/Competitors/${APIS.standings[0].rows[3].competitor.id}"/>${APIS.standings[0].rows[3].competitor.name}</th>
    <th>${APIS.standings[0].rows[3].gamePlayed}</th>
    <th>${APIS.standings[0].rows[3].gamesWon}</th>
    <th>${APIS.standings[0].rows[3].gamesEven}</th>
    <th>${APIS.standings[0].rows[3].gamesLost}</th>
    <th>${APIS.standings[0].rows[3].points}</th>
    </tr>
    
    <tr>
    <th>${APIS.standings[0].rows[4].position}</th>
    <th><img class="scorelogo" src="https://imagecache.365scores.com/image/upload/f_png,w_24,h_24,c_limit,q_auto:eco,dpr_3,d_Competitors:default1.png/v${APIS.standings[0].rows[4].competitor.imageVersion}/Competitors/${APIS.standings[0].rows[4].competitor.id}"/>${APIS.standings[0].rows[4].competitor.name}</th>
    <th>${APIS.standings[0].rows[4].gamePlayed}</th>
    <th>${APIS.standings[0].rows[4].gamesWon}</th>
    <th>${APIS.standings[0].rows[4].gamesEven}</th>
    <th>${APIS.standings[0].rows[4].gamesLost}</th>
    <th>${APIS.standings[0].rows[4].points}</th>
    </tr>
    
    <tr>
    <th>${APIS.standings[0].rows[5].position}</th>
    <th><img class="scorelogo" src="https://imagecache.365scores.com/image/upload/f_png,w_24,h_24,c_limit,q_auto:eco,dpr_3,d_Competitors:default1.png/v${APIS.standings[0].rows[5].competitor.imageVersion}/Competitors/${APIS.standings[0].rows[5].competitor.id}"/>${APIS.standings[0].rows[5].competitor.name}</th>
    <th>${APIS.standings[0].rows[5].gamePlayed}</th>
    <th>${APIS.standings[0].rows[5].gamesWon}</th>
    <th>${APIS.standings[0].rows[5].gamesEven}</th>
    <th>${APIS.standings[0].rows[5].gamesLost}</th>
    <th>${APIS.standings[0].rows[5].points}</th>
    </tr>
    
    <tr>
    <th>${APIS.standings[0].rows[6].position}</th>
    <th><img class="scorelogo" src="https://imagecache.365scores.com/image/upload/f_png,w_24,h_24,c_limit,q_auto:eco,dpr_3,d_Competitors:default1.png/v${APIS.standings[0].rows[6].competitor.imageVersion}/Competitors/${APIS.standings[0].rows[6].competitor.id}"/>${APIS.standings[0].rows[6].competitor.name}</th>
    <th>${APIS.standings[0].rows[6].gamePlayed}</th>
    <th>${APIS.standings[0].rows[6].gamesWon}</th>
    <th>${APIS.standings[0].rows[6].gamesEven}</th>
    <th>${APIS.standings[0].rows[6].gamesLost}</th>
    <th>${APIS.standings[0].rows[6].points}</th>
    </tr>
    
    <tr>
    <th>${APIS.standings[0].rows[7].position}</th>
    <th><img class="scorelogo" src="https://imagecache.365scores.com/image/upload/f_png,w_24,h_24,c_limit,q_auto:eco,dpr_3,d_Competitors:default1.png/v${APIS.standings[0].rows[7].competitor.imageVersion}/Competitors/${APIS.standings[0].rows[7].competitor.id}"/>${APIS.standings[0].rows[7].competitor.name}</th>
    <th>${APIS.standings[0].rows[7].gamePlayed}</th>
    <th>${APIS.standings[0].rows[7].gamesWon}</th>
    <th>${APIS.standings[0].rows[7].gamesEven}</th>
    <th>${APIS.standings[0].rows[7].gamesLost}</th>
    <th>${APIS.standings[0].rows[7].points}</th>
    </tr>
    
    <tr>
    <th>${APIS.standings[0].rows[8].position}</th>
    <th><img class="scorelogo" src="https://imagecache.365scores.com/image/upload/f_png,w_24,h_24,c_limit,q_auto:eco,dpr_3,d_Competitors:default1.png/v${APIS.standings[0].rows[8].competitor.imageVersion}/Competitors/${APIS.standings[0].rows[8].competitor.id}"/>${APIS.standings[0].rows[8].competitor.name}</th>
    <th>${APIS.standings[0].rows[8].gamePlayed}</th>
    <th>${APIS.standings[0].rows[8].gamesWon}</th>
    <th>${APIS.standings[0].rows[8].gamesEven}</th>
    <th>${APIS.standings[0].rows[8].gamesLost}</th>
    <th>${APIS.standings[0].rows[8].points}</th>
    </tr>
    
    <tr>
    <th>${APIS.standings[0].rows[9].position}</th>
    <th><img class="scorelogo" src="https://imagecache.365scores.com/image/upload/f_png,w_24,h_24,c_limit,q_auto:eco,dpr_3,d_Competitors:default1.png/v${APIS.standings[0].rows[9].competitor.imageVersion}/Competitors/${APIS.standings[0].rows[9].competitor.id}"/>${APIS.standings[0].rows[9].competitor.name}</th>
    <th>${APIS.standings[0].rows[9].gamePlayed}</th>
    <th>${APIS.standings[0].rows[9].gamesWon}</th>
    <th>${APIS.standings[0].rows[9].gamesEven}</th>
    <th>${APIS.standings[0].rows[9].gamesLost}</th>
    <th>${APIS.standings[0].rows[9].points}</th>
    </tr>
    
    <tr>
    <th>${APIS.standings[0].rows[10].position}</th>
    <th><img class="scorelogo" src="https://imagecache.365scores.com/image/upload/f_png,w_24,h_24,c_limit,q_auto:eco,dpr_3,d_Competitors:default1.png/v${APIS.standings[0].rows[10].competitor.imageVersion}/Competitors/${APIS.standings[0].rows[10].competitor.id}"/>${APIS.standings[0].rows[10].competitor.name}</th>
    <th>${APIS.standings[0].rows[10].gamePlayed}</th>
    <th>${APIS.standings[0].rows[10].gamesWon}</th>
    <th>${APIS.standings[0].rows[10].gamesEven}</th>
    <th>${APIS.standings[0].rows[10].gamesLost}</th>
    <th>${APIS.standings[0].rows[10].points}</th>
    </tr>
    
    <tr>
    <th>${APIS.standings[0].rows[11].position}</th>
    <th><img class="scorelogo" src="https://imagecache.365scores.com/image/upload/f_png,w_24,h_24,c_limit,q_auto:eco,dpr_3,d_Competitors:default1.png/v${APIS.standings[0].rows[11].competitor.imageVersion}/Competitors/${APIS.standings[0].rows[11].competitor.id}"/>${APIS.standings[0].rows[11].competitor.name}</th>
    <th>${APIS.standings[0].rows[11].gamePlayed}</th>
    <th>${APIS.standings[0].rows[11].gamesWon}</th>
    <th>${APIS.standings[0].rows[11].gamesEven}</th>
    <th>${APIS.standings[0].rows[11].gamesLost}</th>
    <th>${APIS.standings[0].rows[11].points}</th>
    </tr>
    
    
    <tr>
    <th>${APIS.standings[0].rows[12].position}</th>
    <th><img class="scorelogo" src="https://imagecache.365scores.com/image/upload/f_png,w_24,h_24,c_limit,q_auto:eco,dpr_3,d_Competitors:default1.png/v${APIS.standings[0].rows[12].competitor.imageVersion}/Competitors/${APIS.standings[0].rows[12].competitor.id}"/>${APIS.standings[0].rows[12].competitor.name}</th>
    <th>${APIS.standings[0].rows[12].gamePlayed}</th>
    <th>${APIS.standings[0].rows[12].gamesWon}</th>
    <th>${APIS.standings[0].rows[12].gamesEven}</th>
    <th>${APIS.standings[0].rows[12].gamesLost}</th>
    <th>${APIS.standings[0].rows[12].points}</th>
    </tr>
    
    
    <tr>
    <th>${APIS.standings[0].rows[13].position}</th>
    <th><img class="scorelogo" src="https://imagecache.365scores.com/image/upload/f_png,w_24,h_24,c_limit,q_auto:eco,dpr_3,d_Competitors:default1.png/v${APIS.standings[0].rows[13].competitor.imageVersion}/Competitors/${APIS.standings[0].rows[13].competitor.id}"/>${APIS.standings[0].rows[13].competitor.name}</th>
    <th>${APIS.standings[0].rows[13].gamePlayed}</th>
    <th>${APIS.standings[0].rows[13].gamesWon}</th>
    <th>${APIS.standings[0].rows[13].gamesEven}</th>
    <th>${APIS.standings[0].rows[13].gamesLost}</th>
    <th>${APIS.standings[0].rows[13].points}</th>
    </tr>
    
    
    <tr>
    <th>${APIS.standings[0].rows[14].position}</th>
    <th><img class="scorelogo" src="https://imagecache.365scores.com/image/upload/f_png,w_24,h_24,c_limit,q_auto:eco,dpr_3,d_Competitors:default1.png/v${APIS.standings[0].rows[14].competitor.imageVersion}/Competitors/${APIS.standings[0].rows[14].competitor.id}"/>${APIS.standings[0].rows[14].competitor.name}</th>
    <th>${APIS.standings[0].rows[14].gamePlayed}</th>
    <th>${APIS.standings[0].rows[14].gamesWon}</th>
    <th>${APIS.standings[0].rows[14].gamesEven}</th>
    <th>${APIS.standings[0].rows[14].gamesLost}</th>
    <th>${APIS.standings[0].rows[14].points}</th>
    </tr>
    
    
    <tr>
    <th>${APIS.standings[0].rows[15].position}</th>
    <th><img class="scorelogo" src="https://imagecache.365scores.com/image/upload/f_png,w_24,h_24,c_limit,q_auto:eco,dpr_3,d_Competitors:default1.png/v${APIS.standings[0].rows[15].competitor.imageVersion}/Competitors/${APIS.standings[0].rows[15].competitor.id}"/>${APIS.standings[0].rows[15].competitor.name}</th>
    <th>${APIS.standings[0].rows[15].gamePlayed}</th>
    <th>${APIS.standings[0].rows[15].gamesWon}</th>
    <th>${APIS.standings[0].rows[15].gamesEven}</th>
    <th>${APIS.standings[0].rows[15].gamesLost}</th>
    <th>${APIS.standings[0].rows[15].points}</th>
    </tr>
    
    
    <tr>
    <th>${APIS.standings[0].rows[16].position}</th>
    <th><img class="scorelogo" src="https://imagecache.365scores.com/image/upload/f_png,w_24,h_24,c_limit,q_auto:eco,dpr_3,d_Competitors:default1.png/v${APIS.standings[0].rows[16].competitor.imageVersion}/Competitors/${APIS.standings[0].rows[16].competitor.id}"/>${APIS.standings[0].rows[16].competitor.name}</th>
    <th>${APIS.standings[0].rows[16].gamePlayed}</th>
    <th>${APIS.standings[0].rows[16].gamesWon}</th>
    <th>${APIS.standings[0].rows[16].gamesEven}</th>
    <th>${APIS.standings[0].rows[16].gamesLost}</th>
    <th>${APIS.standings[0].rows[16].points}</th>
    </tr>
    
    
    <tr>
    <th>${APIS.standings[0].rows[17].position}</th>
    <th><img class="scorelogo" src="https://imagecache.365scores.com/image/upload/f_png,w_24,h_24,c_limit,q_auto:eco,dpr_3,d_Competitors:default1.png/v${APIS.standings[0].rows[17].competitor.imageVersion}/Competitors/${APIS.standings[0].rows[17].competitor.id}"/>${APIS.standings[0].rows[17].competitor.name}</th>
    <th>${APIS.standings[0].rows[17].gamePlayed}</th>
    <th>${APIS.standings[0].rows[17].gamesWon}</th>
    <th>${APIS.standings[0].rows[17].gamesEven}</th>
    <th>${APIS.standings[0].rows[17].gamesLost}</th>
    <th>${APIS.standings[0].rows[17].points}</th>
    </tr>
    
    
    <tr>
    <th>${APIS.standings[0].rows[18].position}</th>
    <th><img class="scorelogo" src="https://imagecache.365scores.com/image/upload/f_png,w_24,h_24,c_limit,q_auto:eco,dpr_3,d_Competitors:default1.png/v${APIS.standings[0].rows[18].competitor.imageVersion}/Competitors/${APIS.standings[0].rows[18].competitor.id}"/>${APIS.standings[0].rows[18].competitor.name}</th>
    <th>${APIS.standings[0].rows[18].gamePlayed}</th>
    <th>${APIS.standings[0].rows[18].gamesWon}</th>
    <th>${APIS.standings[0].rows[18].gamesEven}</th>
    <th>${APIS.standings[0].rows[18].gamesLost}</th>
    <th>${APIS.standings[0].rows[18].points}</th>
    </tr>
    
    
    <tr>
    <th>${APIS.standings[0].rows[19].position}</th>
    <th><img class="scorelogo" src="https://imagecache.365scores.com/image/upload/f_png,w_24,h_24,c_limit,q_auto:eco,dpr_3,d_Competitors:default1.png/v${APIS.standings[0].rows[19].competitor.imageVersion}/Competitors/${APIS.standings[0].rows[19].competitor.id}"/>${APIS.standings[0].rows[19].competitor.name}</th>
    <th>${APIS.standings[0].rows[19].gamePlayed}</th>
    <th>${APIS.standings[0].rows[19].gamesWon}</th>
    <th>${APIS.standings[0].rows[19].gamesEven}</th>
    <th>${APIS.standings[0].rows[19].gamesLost}</th>
    <th>${APIS.standings[0].rows[19].points}</th>
    </tr>
    
    
    </tbody>
    </table>`;

    const RECONFIGG = await fetch(
        "https://webws.365scores.com/web/stats/?appTypeId=5&langId=27&timezoneName=Africa/Cairo&userCountryId=131&competition=11"
      ),
      APISGoals = await RECONFIGG.json();

    Goals.innerHTML = `

<div class="TopLeagia"> <img src="https://imagecache.365scores.com/image/upload/f_png,w_68,h_68,c_limit,q_auto:eco,dpr_2,d_Countries:Round:1.png/v${APIS.competitions[0].imageVersion}/Competitions/light/${APIS.competitions[0].id}"/>${APIS.competitions[0].name}</div>
<div class="Gooals">
<div class="topthree">
<div class="topim">
<div class="One">2</div>
<img src="https://imagecache.365scores.com/image/upload/f_png,w_80,h_80,c_limit,q_auto:eco,dpr_2,d_Athletes:default.png,r_max,c_thumb,g_face,z_0.65/v${APISGoals.stats[0].rows[1].entity.imgVer}/Athletes/${APISGoals.stats[0].rows[1].entity.id}"/>
<span class="Goali">${APISGoals.stats[0].rows[1].stats[0].value}</span>
<span class="nameplyr">${APISGoals.stats[0].rows[1].entity.name}</span>
<span class="cuping">${APISGoals.stats[0].rows[1].entity.positionName}</span>
</div>
<div class="topim">
<div class="One">1</div>
<img src="https://imagecache.365scores.com/image/upload/f_png,w_80,h_80,c_limit,q_auto:eco,dpr_2,d_Athletes:default.png,r_max,c_thumb,g_face,z_0.65/v${APISGoals.stats[0].rows[0].entity.imgVer}/Athletes/${APISGoals.stats[0].rows[0].entity.id}"/>
<span class="Goali">${APISGoals.stats[0].rows[0].stats[0].value}</span>
<span class="nameplyr">${APISGoals.stats[0].rows[0].entity.name}</span>
<span class="cuping">${APISGoals.stats[0].rows[0].entity.positionName}</span>
</div>
<div class="topim">
<div class="One">3</div>
<img src="https://imagecache.365scores.com/image/upload/f_png,w_80,h_80,c_limit,q_auto:eco,dpr_2,d_Athletes:default.png,r_max,c_thumb,g_face,z_0.65/v${APISGoals.stats[0].rows[2].entity.imgVer}/Athletes/${APISGoals.stats[0].rows[2].entity.id}"/>
<span class="Goali">${APISGoals.stats[0].rows[2].stats[0].value}</span>
<span class="nameplyr">${APISGoals.stats[0].rows[2].entity.name}</span>
<span class="cuping">${APISGoals.stats[0].rows[2].entity.positionName}</span>
</div>
</div>


<div class="tabolla">
<div class="tabollaintro" style="font-size: 20px  !important;padding: 5px 12px;border-radius: 15px;">
<span class="nameplyr">صورة اللاعب</span>
<span class="nameplyr">اسم اللاعب</span>
<span class="cuping">الصفة</span>
<span class="cuping">الاهداف</span>
</div>

<div class="tabollaintro">
<img src="https://imagecache.365scores.com/image/upload/f_png,w_80,h_80,c_limit,q_auto:eco,dpr_2,d_Athletes:default.png,r_max,c_thumb,g_face,z_0.65/v${APISGoals.stats[0].rows[3].entity.imgVer}/Athletes/${APISGoals.stats[0].rows[3].entity.id}"/>
<span class="nameplyr">${APISGoals.stats[0].rows[3].entity.name}</span>
<span class="cuping">${APISGoals.stats[0].rows[3].entity.positionName}</span>
<span class="Goali">${APISGoals.stats[0].rows[3].stats[0].value}</span>
</div>

<div class="tabollaintro">
<img src="https://imagecache.365scores.com/image/upload/f_png,w_80,h_80,c_limit,q_auto:eco,dpr_2,d_Athletes:default.png,r_max,c_thumb,g_face,z_0.65/v${APISGoals.stats[0].rows[4].entity.imgVer}/Athletes/${APISGoals.stats[0].rows[4].entity.id}"/>
<span class="nameplyr">${APISGoals.stats[0].rows[4].entity.name}</span>
<span class="cuping">${APISGoals.stats[0].rows[4].entity.positionName}</span>
<span class="Goali">${APISGoals.stats[0].rows[4].stats[0].value}</span>
</div>

<div class="tabollaintro">
<img src="https://imagecache.365scores.com/image/upload/f_png,w_80,h_80,c_limit,q_auto:eco,dpr_2,d_Athletes:default.png,r_max,c_thumb,g_face,z_0.65/v${APISGoals.stats[0].rows[5].entity.imgVer}/Athletes/${APISGoals.stats[0].rows[5].entity.id}"/>
<span class="nameplyr">${APISGoals.stats[0].rows[5].entity.name}</span>
<span class="cuping">${APISGoals.stats[0].rows[5].entity.positionName}</span>
<span class="Goali">${APISGoals.stats[0].rows[5].stats[0].value}</span>
</div>

<div class="tabollaintro">
<img src="https://imagecache.365scores.com/image/upload/f_png,w_80,h_80,c_limit,q_auto:eco,dpr_2,d_Athletes:default.png,r_max,c_thumb,g_face,z_0.65/v${APISGoals.stats[0].rows[6].entity.imgVer}/Athletes/${APISGoals.stats[0].rows[6].entity.id}"/>
<span class="nameplyr">${APISGoals.stats[0].rows[6].entity.name}</span>
<span class="cuping">${APISGoals.stats[0].rows[6].entity.positionName}</span>
<span class="Goali">${APISGoals.stats[0].rows[6].stats[0].value}</span>
</div>

<div class="tabollaintro">
<img src="https://imagecache.365scores.com/image/upload/f_png,w_80,h_80,c_limit,q_auto:eco,dpr_2,d_Athletes:default.png,r_max,c_thumb,g_face,z_0.65/v${APISGoals.stats[0].rows[7].entity.imgVer}/Athletes/${APISGoals.stats[0].rows[7].entity.id}"/>
<span class="nameplyr">${APISGoals.stats[0].rows[7].entity.name}</span>
<span class="cuping">${APISGoals.stats[0].rows[7].entity.positionName}</span>
<span class="Goali">${APISGoals.stats[0].rows[7].stats[0].value}</span>
</div>

<div class="tabollaintro">
<img src="https://imagecache.365scores.com/image/upload/f_png,w_80,h_80,c_limit,q_auto:eco,dpr_2,d_Athletes:default.png,r_max,c_thumb,g_face,z_0.65/v${APISGoals.stats[0].rows[8].entity.imgVer}/Athletes/${APISGoals.stats[0].rows[8].entity.id}"/>
<span class="nameplyr">${APISGoals.stats[0].rows[8].entity.name}</span>
<span class="cuping">${APISGoals.stats[0].rows[8].entity.positionName}</span>
<span class="Goali">${APISGoals.stats[0].rows[8].stats[0].value}</span>
</div>

<div class="tabollaintro">
<img src="https://imagecache.365scores.com/image/upload/f_png,w_80,h_80,c_limit,q_auto:eco,dpr_2,d_Athletes:default.png,r_max,c_thumb,g_face,z_0.65/v${APISGoals.stats[0].rows[9].entity.imgVer}/Athletes/${APISGoals.stats[0].rows[9].entity.id}"/>
<span class="nameplyr">${APISGoals.stats[0].rows[9].entity.name}</span>
<span class="cuping">${APISGoals.stats[0].rows[9].entity.positionName}</span>
<span class="Goali">${APISGoals.stats[0].rows[9].stats[0].value}</span>
</div>

<div class="tabollaintro">
<img src="https://imagecache.365scores.com/image/upload/f_png,w_80,h_80,c_limit,q_auto:eco,dpr_2,d_Athletes:default.png,r_max,c_thumb,g_face,z_0.65/v${APISGoals.stats[0].rows[10].entity.imgVer}/Athletes/${APISGoals.stats[0].rows[10].entity.id}"/>
<span class="nameplyr">${APISGoals.stats[0].rows[10].entity.name}</span>
<span class="cuping">${APISGoals.stats[0].rows[10].entity.positionName}</span>
<span class="Goali">${APISGoals.stats[0].rows[10].stats[0].value}</span>
</div>

<div class="tabollaintro">
<img src="https://imagecache.365scores.com/image/upload/f_png,w_80,h_80,c_limit,q_auto:eco,dpr_2,d_Athletes:default.png,r_max,c_thumb,g_face,z_0.65/v${APISGoals.stats[0].rows[11].entity.imgVer}/Athletes/${APISGoals.stats[0].rows[11].entity.id}"/>
<span class="nameplyr">${APISGoals.stats[0].rows[11].entity.name}</span>
<span class="cuping">${APISGoals.stats[0].rows[11].entity.positionName}</span>
<span class="Goali">${APISGoals.stats[0].rows[11].stats[0].value}</span>
</div>

<div class="tabollaintro">
<img src="https://imagecache.365scores.com/image/upload/f_png,w_80,h_80,c_limit,q_auto:eco,dpr_2,d_Athletes:default.png,r_max,c_thumb,g_face,z_0.65/v${APISGoals.stats[0].rows[12].entity.imgVer}/Athletes/${APISGoals.stats[0].rows[12].entity.id}"/>
<span class="nameplyr">${APISGoals.stats[0].rows[12].entity.name}</span>
<span class="cuping">${APISGoals.stats[0].rows[12].entity.positionName}</span>
<span class="Goali">${APISGoals.stats[0].rows[12].stats[0].value}</span>
</div>

<div class="tabollaintro">
<img src="https://imagecache.365scores.com/image/upload/f_png,w_80,h_80,c_limit,q_auto:eco,dpr_2,d_Athletes:default.png,r_max,c_thumb,g_face,z_0.65/v${APISGoals.stats[0].rows[13].entity.imgVer}/Athletes/${APISGoals.stats[0].rows[13].entity.id}"/>
<span class="nameplyr">${APISGoals.stats[0].rows[13].entity.name}</span>
<span class="cuping">${APISGoals.stats[0].rows[13].entity.positionName}</span>
<span class="Goali">${APISGoals.stats[0].rows[13].stats[0].value}</span>
</div>

<div class="tabollaintro">
<img src="https://imagecache.365scores.com/image/upload/f_png,w_80,h_80,c_limit,q_auto:eco,dpr_2,d_Athletes:default.png,r_max,c_thumb,g_face,z_0.65/v${APISGoals.stats[0].rows[14].entity.imgVer}/Athletes/${APISGoals.stats[0].rows[14].entity.id}"/>
<span class="nameplyr">${APISGoals.stats[0].rows[14].entity.name}</span>
<span class="cuping">${APISGoals.stats[0].rows[14].entity.positionName}</span>
<span class="Goali">${APISGoals.stats[0].rows[14].stats[0].value}</span>
</div>
</div>
</div>`;
  } else {
  }

  if (FR) {
    const RECONFIG = await fetch(
        "https://webws.365scores.com/web/standings/?appTypeId=5&langId=27&timezoneName=Africa/Cairo&userCountryId=131&competitions=35&live=false&stageNum=1&seasonNum=84"
      ),
      APIS = await RECONFIG.json();

    FR.innerHTML = `
    <div class="TopLeagia"> <img src="https://imagecache.365scores.com/image/upload/f_png,w_68,h_68,c_limit,q_auto:eco,dpr_2,d_Countries:Round:1.png/v${APIS.competitions[0].imageVersion}/Competitions/light/${APIS.competitions[0].id}"/>${APIS.competitions[0].name}</div>
    <table class="table">
    <tbody class="tbody">
    <tr class="tr">
    <th></th>
    <th style="text-align: center;">فريق</th>
    <th>لعب</th>
    <th>فاز</th>
    <th>تعادل</th>
    <th>خسر</th>
    <th>نقاط</th>
    </tr>
    
    <tr>
    <th>${APIS.standings[0].rows[0].position}</th>
    <th><img class="scorelogo" src="https://imagecache.365scores.com/image/upload/f_png,w_24,h_24,c_limit,q_auto:eco,dpr_3,d_Competitors:default1.png/v${APIS.standings[0].rows[0].competitor.imageVersion}/Competitors/${APIS.standings[0].rows[0].competitor.id}"/> ${APIS.standings[0].rows[0].competitor.name}</th>
    <th>${APIS.standings[0].rows[0].gamePlayed}</th>
    <th>${APIS.standings[0].rows[0].gamesWon}</th>
    <th>${APIS.standings[0].rows[0].gamesEven}</th>
    <th>${APIS.standings[0].rows[0].gamesLost}</th>
    <th>${APIS.standings[0].rows[0].points}</th>
    </tr>
    
    <tr>
    <th>${APIS.standings[0].rows[1].position}</th>
    <th><img class="scorelogo" src="https://imagecache.365scores.com/image/upload/f_png,w_24,h_24,c_limit,q_auto:eco,dpr_3,d_Competitors:default1.png/v${APIS.standings[0].rows[1].competitor.imageVersion}/Competitors/${APIS.standings[0].rows[1].competitor.id}"/>${APIS.standings[0].rows[1].competitor.name}</th>
    <th>${APIS.standings[0].rows[1].gamePlayed}</th>
    <th>${APIS.standings[0].rows[1].gamesWon}</th>
    <th>${APIS.standings[0].rows[1].gamesEven}</th>
    <th>${APIS.standings[0].rows[1].gamesLost}</th>
    <th>${APIS.standings[0].rows[1].points}</th>
    </tr>
    
    <tr>
    <th>${APIS.standings[0].rows[2].position}</th>
    <th><img class="scorelogo" src="https://imagecache.365scores.com/image/upload/f_png,w_24,h_24,c_limit,q_auto:eco,dpr_3,d_Competitors:default1.png/v${APIS.standings[0].rows[2].competitor.imageVersion}/Competitors/${APIS.standings[0].rows[2].competitor.id}"/>${APIS.standings[0].rows[2].competitor.name}</th>
    <th>${APIS.standings[0].rows[2].gamePlayed}</th>
    <th>${APIS.standings[0].rows[2].gamesWon}</th>
    <th>${APIS.standings[0].rows[2].gamesEven}</th>
    <th>${APIS.standings[0].rows[2].gamesLost}</th>
    <th>${APIS.standings[0].rows[2].points}</th>
    </tr>
    
    <tr>
    <th>${APIS.standings[0].rows[3].position}</th>
    <th><img class="scorelogo" src="https://imagecache.365scores.com/image/upload/f_png,w_24,h_24,c_limit,q_auto:eco,dpr_3,d_Competitors:default1.png/v${APIS.standings[0].rows[3].competitor.imageVersion}/Competitors/${APIS.standings[0].rows[3].competitor.id}"/>${APIS.standings[0].rows[3].competitor.name}</th>
    <th>${APIS.standings[0].rows[3].gamePlayed}</th>
    <th>${APIS.standings[0].rows[3].gamesWon}</th>
    <th>${APIS.standings[0].rows[3].gamesEven}</th>
    <th>${APIS.standings[0].rows[3].gamesLost}</th>
    <th>${APIS.standings[0].rows[3].points}</th>
    </tr>
    
    <tr>
    <th>${APIS.standings[0].rows[4].position}</th>
    <th><img class="scorelogo" src="https://imagecache.365scores.com/image/upload/f_png,w_24,h_24,c_limit,q_auto:eco,dpr_3,d_Competitors:default1.png/v${APIS.standings[0].rows[4].competitor.imageVersion}/Competitors/${APIS.standings[0].rows[4].competitor.id}"/>${APIS.standings[0].rows[4].competitor.name}</th>
    <th>${APIS.standings[0].rows[4].gamePlayed}</th>
    <th>${APIS.standings[0].rows[4].gamesWon}</th>
    <th>${APIS.standings[0].rows[4].gamesEven}</th>
    <th>${APIS.standings[0].rows[4].gamesLost}</th>
    <th>${APIS.standings[0].rows[4].points}</th>
    </tr>
    
    <tr>
    <th>${APIS.standings[0].rows[5].position}</th>
    <th><img class="scorelogo" src="https://imagecache.365scores.com/image/upload/f_png,w_24,h_24,c_limit,q_auto:eco,dpr_3,d_Competitors:default1.png/v${APIS.standings[0].rows[5].competitor.imageVersion}/Competitors/${APIS.standings[0].rows[5].competitor.id}"/>${APIS.standings[0].rows[5].competitor.name}</th>
    <th>${APIS.standings[0].rows[5].gamePlayed}</th>
    <th>${APIS.standings[0].rows[5].gamesWon}</th>
    <th>${APIS.standings[0].rows[5].gamesEven}</th>
    <th>${APIS.standings[0].rows[5].gamesLost}</th>
    <th>${APIS.standings[0].rows[5].points}</th>
    </tr>
    
    <tr>
    <th>${APIS.standings[0].rows[6].position}</th>
    <th><img class="scorelogo" src="https://imagecache.365scores.com/image/upload/f_png,w_24,h_24,c_limit,q_auto:eco,dpr_3,d_Competitors:default1.png/v${APIS.standings[0].rows[6].competitor.imageVersion}/Competitors/${APIS.standings[0].rows[6].competitor.id}"/>${APIS.standings[0].rows[6].competitor.name}</th>
    <th>${APIS.standings[0].rows[6].gamePlayed}</th>
    <th>${APIS.standings[0].rows[6].gamesWon}</th>
    <th>${APIS.standings[0].rows[6].gamesEven}</th>
    <th>${APIS.standings[0].rows[6].gamesLost}</th>
    <th>${APIS.standings[0].rows[6].points}</th>
    </tr>
    
    <tr>
    <th>${APIS.standings[0].rows[7].position}</th>
    <th><img class="scorelogo" src="https://imagecache.365scores.com/image/upload/f_png,w_24,h_24,c_limit,q_auto:eco,dpr_3,d_Competitors:default1.png/v${APIS.standings[0].rows[7].competitor.imageVersion}/Competitors/${APIS.standings[0].rows[7].competitor.id}"/>${APIS.standings[0].rows[7].competitor.name}</th>
    <th>${APIS.standings[0].rows[7].gamePlayed}</th>
    <th>${APIS.standings[0].rows[7].gamesWon}</th>
    <th>${APIS.standings[0].rows[7].gamesEven}</th>
    <th>${APIS.standings[0].rows[7].gamesLost}</th>
    <th>${APIS.standings[0].rows[7].points}</th>
    </tr>
    
    <tr>
    <th>${APIS.standings[0].rows[8].position}</th>
    <th><img class="scorelogo" src="https://imagecache.365scores.com/image/upload/f_png,w_24,h_24,c_limit,q_auto:eco,dpr_3,d_Competitors:default1.png/v${APIS.standings[0].rows[8].competitor.imageVersion}/Competitors/${APIS.standings[0].rows[8].competitor.id}"/>${APIS.standings[0].rows[8].competitor.name}</th>
    <th>${APIS.standings[0].rows[8].gamePlayed}</th>
    <th>${APIS.standings[0].rows[8].gamesWon}</th>
    <th>${APIS.standings[0].rows[8].gamesEven}</th>
    <th>${APIS.standings[0].rows[8].gamesLost}</th>
    <th>${APIS.standings[0].rows[8].points}</th>
    </tr>
    
    <tr>
    <th>${APIS.standings[0].rows[9].position}</th>
    <th><img class="scorelogo" src="https://imagecache.365scores.com/image/upload/f_png,w_24,h_24,c_limit,q_auto:eco,dpr_3,d_Competitors:default1.png/v${APIS.standings[0].rows[9].competitor.imageVersion}/Competitors/${APIS.standings[0].rows[9].competitor.id}"/>${APIS.standings[0].rows[9].competitor.name}</th>
    <th>${APIS.standings[0].rows[9].gamePlayed}</th>
    <th>${APIS.standings[0].rows[9].gamesWon}</th>
    <th>${APIS.standings[0].rows[9].gamesEven}</th>
    <th>${APIS.standings[0].rows[9].gamesLost}</th>
    <th>${APIS.standings[0].rows[9].points}</th>
    </tr>
    
    <tr>
    <th>${APIS.standings[0].rows[10].position}</th>
    <th><img class="scorelogo" src="https://imagecache.365scores.com/image/upload/f_png,w_24,h_24,c_limit,q_auto:eco,dpr_3,d_Competitors:default1.png/v${APIS.standings[0].rows[10].competitor.imageVersion}/Competitors/${APIS.standings[0].rows[10].competitor.id}"/>${APIS.standings[0].rows[10].competitor.name}</th>
    <th>${APIS.standings[0].rows[10].gamePlayed}</th>
    <th>${APIS.standings[0].rows[10].gamesWon}</th>
    <th>${APIS.standings[0].rows[10].gamesEven}</th>
    <th>${APIS.standings[0].rows[10].gamesLost}</th>
    <th>${APIS.standings[0].rows[10].points}</th>
    </tr>
    
    <tr>
    <th>${APIS.standings[0].rows[11].position}</th>
    <th><img class="scorelogo" src="https://imagecache.365scores.com/image/upload/f_png,w_24,h_24,c_limit,q_auto:eco,dpr_3,d_Competitors:default1.png/v${APIS.standings[0].rows[11].competitor.imageVersion}/Competitors/${APIS.standings[0].rows[11].competitor.id}"/>${APIS.standings[0].rows[11].competitor.name}</th>
    <th>${APIS.standings[0].rows[11].gamePlayed}</th>
    <th>${APIS.standings[0].rows[11].gamesWon}</th>
    <th>${APIS.standings[0].rows[11].gamesEven}</th>
    <th>${APIS.standings[0].rows[11].gamesLost}</th>
    <th>${APIS.standings[0].rows[11].points}</th>
    </tr>
    
    
    <tr>
    <th>${APIS.standings[0].rows[12].position}</th>
    <th><img class="scorelogo" src="https://imagecache.365scores.com/image/upload/f_png,w_24,h_24,c_limit,q_auto:eco,dpr_3,d_Competitors:default1.png/v${APIS.standings[0].rows[12].competitor.imageVersion}/Competitors/${APIS.standings[0].rows[12].competitor.id}"/>${APIS.standings[0].rows[12].competitor.name}</th>
    <th>${APIS.standings[0].rows[12].gamePlayed}</th>
    <th>${APIS.standings[0].rows[12].gamesWon}</th>
    <th>${APIS.standings[0].rows[12].gamesEven}</th>
    <th>${APIS.standings[0].rows[12].gamesLost}</th>
    <th>${APIS.standings[0].rows[12].points}</th>
    </tr>
    
    
    <tr>
    <th>${APIS.standings[0].rows[13].position}</th>
    <th><img class="scorelogo" src="https://imagecache.365scores.com/image/upload/f_png,w_24,h_24,c_limit,q_auto:eco,dpr_3,d_Competitors:default1.png/v${APIS.standings[0].rows[13].competitor.imageVersion}/Competitors/${APIS.standings[0].rows[13].competitor.id}"/>${APIS.standings[0].rows[13].competitor.name}</th>
    <th>${APIS.standings[0].rows[13].gamePlayed}</th>
    <th>${APIS.standings[0].rows[13].gamesWon}</th>
    <th>${APIS.standings[0].rows[13].gamesEven}</th>
    <th>${APIS.standings[0].rows[13].gamesLost}</th>
    <th>${APIS.standings[0].rows[13].points}</th>
    </tr>
    
    
    <tr>
    <th>${APIS.standings[0].rows[14].position}</th>
    <th><img class="scorelogo" src="https://imagecache.365scores.com/image/upload/f_png,w_24,h_24,c_limit,q_auto:eco,dpr_3,d_Competitors:default1.png/v${APIS.standings[0].rows[14].competitor.imageVersion}/Competitors/${APIS.standings[0].rows[14].competitor.id}"/>${APIS.standings[0].rows[14].competitor.name}</th>
    <th>${APIS.standings[0].rows[14].gamePlayed}</th>
    <th>${APIS.standings[0].rows[14].gamesWon}</th>
    <th>${APIS.standings[0].rows[14].gamesEven}</th>
    <th>${APIS.standings[0].rows[14].gamesLost}</th>
    <th>${APIS.standings[0].rows[14].points}</th>
    </tr>
    
    
    <tr>
    <th>${APIS.standings[0].rows[15].position}</th>
    <th><img class="scorelogo" src="https://imagecache.365scores.com/image/upload/f_png,w_24,h_24,c_limit,q_auto:eco,dpr_3,d_Competitors:default1.png/v${APIS.standings[0].rows[15].competitor.imageVersion}/Competitors/${APIS.standings[0].rows[15].competitor.id}"/>${APIS.standings[0].rows[15].competitor.name}</th>
    <th>${APIS.standings[0].rows[15].gamePlayed}</th>
    <th>${APIS.standings[0].rows[15].gamesWon}</th>
    <th>${APIS.standings[0].rows[15].gamesEven}</th>
    <th>${APIS.standings[0].rows[15].gamesLost}</th>
    <th>${APIS.standings[0].rows[15].points}</th>
    </tr>
    
    
    <tr>
    <th>${APIS.standings[0].rows[16].position}</th>
    <th><img class="scorelogo" src="https://imagecache.365scores.com/image/upload/f_png,w_24,h_24,c_limit,q_auto:eco,dpr_3,d_Competitors:default1.png/v${APIS.standings[0].rows[16].competitor.imageVersion}/Competitors/${APIS.standings[0].rows[16].competitor.id}"/>${APIS.standings[0].rows[16].competitor.name}</th>
    <th>${APIS.standings[0].rows[16].gamePlayed}</th>
    <th>${APIS.standings[0].rows[16].gamesWon}</th>
    <th>${APIS.standings[0].rows[16].gamesEven}</th>
    <th>${APIS.standings[0].rows[16].gamesLost}</th>
    <th>${APIS.standings[0].rows[16].points}</th>
    </tr>
    
    
    <tr>
    <th>${APIS.standings[0].rows[17].position}</th>
    <th><img class="scorelogo" src="https://imagecache.365scores.com/image/upload/f_png,w_24,h_24,c_limit,q_auto:eco,dpr_3,d_Competitors:default1.png/v${APIS.standings[0].rows[17].competitor.imageVersion}/Competitors/${APIS.standings[0].rows[17].competitor.id}"/>${APIS.standings[0].rows[17].competitor.name}</th>
    <th>${APIS.standings[0].rows[17].gamePlayed}</th>
    <th>${APIS.standings[0].rows[17].gamesWon}</th>
    <th>${APIS.standings[0].rows[17].gamesEven}</th>
    <th>${APIS.standings[0].rows[17].gamesLost}</th>
    <th>${APIS.standings[0].rows[17].points}</th>
    </tr>
    
    
    <tr>
    <th>${APIS.standings[0].rows[18].position}</th>
    <th><img class="scorelogo" src="https://imagecache.365scores.com/image/upload/f_png,w_24,h_24,c_limit,q_auto:eco,dpr_3,d_Competitors:default1.png/v${APIS.standings[0].rows[18].competitor.imageVersion}/Competitors/${APIS.standings[0].rows[18].competitor.id}"/>${APIS.standings[0].rows[18].competitor.name}</th>
    <th>${APIS.standings[0].rows[18].gamePlayed}</th>
    <th>${APIS.standings[0].rows[18].gamesWon}</th>
    <th>${APIS.standings[0].rows[18].gamesEven}</th>
    <th>${APIS.standings[0].rows[18].gamesLost}</th>
    <th>${APIS.standings[0].rows[18].points}</th>
    </tr>
    
    
    <tr>
    <th>${APIS.standings[0].rows[19].position}</th>
    <th><img class="scorelogo" src="https://imagecache.365scores.com/image/upload/f_png,w_24,h_24,c_limit,q_auto:eco,dpr_3,d_Competitors:default1.png/v${APIS.standings[0].rows[19].competitor.imageVersion}/Competitors/${APIS.standings[0].rows[19].competitor.id}"/>${APIS.standings[0].rows[19].competitor.name}</th>
    <th>${APIS.standings[0].rows[19].gamePlayed}</th>
    <th>${APIS.standings[0].rows[19].gamesWon}</th>
    <th>${APIS.standings[0].rows[19].gamesEven}</th>
    <th>${APIS.standings[0].rows[19].gamesLost}</th>
    <th>${APIS.standings[0].rows[19].points}</th>
    </tr>
    
    
    </tbody>
    </table>`;

    const RECONFIGG = await fetch(
        "https://webws.365scores.com/web/stats/?appTypeId=5&langId=27&timezoneName=Africa/Cairo&userCountryId=131&competition=35"
      ),
      APISGoals = await RECONFIGG.json();

    Goals.innerHTML = `
    
    <div class="TopLeagia"> <img src="https://imagecache.365scores.com/image/upload/f_png,w_68,h_68,c_limit,q_auto:eco,dpr_2,d_Countries:Round:1.png/v${APIS.competitions[0].imageVersion}/Competitions/light/${APIS.competitions[0].id}"/>${APIS.competitions[0].name}</div>
    <div class="Gooals">
    <div class="topthree">
    <div class="topim">
    <div class="One">2</div>
    <img src="https://imagecache.365scores.com/image/upload/f_png,w_80,h_80,c_limit,q_auto:eco,dpr_2,d_Athletes:default.png,r_max,c_thumb,g_face,z_0.65/v${APISGoals.stats[0].rows[1].entity.imgVer}/Athletes/${APISGoals.stats[0].rows[1].entity.id}"/>
    <span class="Goali">${APISGoals.stats[0].rows[1].stats[0].value}</span>
    <span class="nameplyr">${APISGoals.stats[0].rows[1].entity.name}</span>
    <span class="cuping">${APISGoals.stats[0].rows[1].entity.positionName}</span>
    </div>
    <div class="topim">
    <div class="One">1</div>
    <img src="https://imagecache.365scores.com/image/upload/f_png,w_80,h_80,c_limit,q_auto:eco,dpr_2,d_Athletes:default.png,r_max,c_thumb,g_face,z_0.65/v${APISGoals.stats[0].rows[0].entity.imgVer}/Athletes/${APISGoals.stats[0].rows[0].entity.id}"/>
    <span class="Goali">${APISGoals.stats[0].rows[0].stats[0].value}</span>
    <span class="nameplyr">${APISGoals.stats[0].rows[0].entity.name}</span>
    <span class="cuping">${APISGoals.stats[0].rows[0].entity.positionName}</span>
    </div>
    <div class="topim">
    <div class="One">3</div>
    <img src="https://imagecache.365scores.com/image/upload/f_png,w_80,h_80,c_limit,q_auto:eco,dpr_2,d_Athletes:default.png,r_max,c_thumb,g_face,z_0.65/v${APISGoals.stats[0].rows[2].entity.imgVer}/Athletes/${APISGoals.stats[0].rows[2].entity.id}"/>
    <span class="Goali">${APISGoals.stats[0].rows[2].stats[0].value}</span>
    <span class="nameplyr">${APISGoals.stats[0].rows[2].entity.name}</span>
    <span class="cuping">${APISGoals.stats[0].rows[2].entity.positionName}</span>
    </div>
    </div>
    
    
    <div class="tabolla">
    <div class="tabollaintro" style="font-size: 20px  !important;padding: 5px 12px;border-radius: 15px;">
    <span class="nameplyr">صورة اللاعب</span>
    <span class="nameplyr">اسم اللاعب</span>
    <span class="cuping">الصفة</span>
    <span class="cuping">الاهداف</span>
    </div>
    
    <div class="tabollaintro">
    <img src="https://imagecache.365scores.com/image/upload/f_png,w_80,h_80,c_limit,q_auto:eco,dpr_2,d_Athletes:default.png,r_max,c_thumb,g_face,z_0.65/v${APISGoals.stats[0].rows[3].entity.imgVer}/Athletes/${APISGoals.stats[0].rows[3].entity.id}"/>
    <span class="nameplyr">${APISGoals.stats[0].rows[3].entity.name}</span>
    <span class="cuping">${APISGoals.stats[0].rows[3].entity.positionName}</span>
    <span class="Goali">${APISGoals.stats[0].rows[3].stats[0].value}</span>
    </div>
    
    <div class="tabollaintro">
    <img src="https://imagecache.365scores.com/image/upload/f_png,w_80,h_80,c_limit,q_auto:eco,dpr_2,d_Athletes:default.png,r_max,c_thumb,g_face,z_0.65/v${APISGoals.stats[0].rows[4].entity.imgVer}/Athletes/${APISGoals.stats[0].rows[4].entity.id}"/>
    <span class="nameplyr">${APISGoals.stats[0].rows[4].entity.name}</span>
    <span class="cuping">${APISGoals.stats[0].rows[4].entity.positionName}</span>
    <span class="Goali">${APISGoals.stats[0].rows[4].stats[0].value}</span>
    </div>
    
    <div class="tabollaintro">
    <img src="https://imagecache.365scores.com/image/upload/f_png,w_80,h_80,c_limit,q_auto:eco,dpr_2,d_Athletes:default.png,r_max,c_thumb,g_face,z_0.65/v${APISGoals.stats[0].rows[5].entity.imgVer}/Athletes/${APISGoals.stats[0].rows[5].entity.id}"/>
    <span class="nameplyr">${APISGoals.stats[0].rows[5].entity.name}</span>
    <span class="cuping">${APISGoals.stats[0].rows[5].entity.positionName}</span>
    <span class="Goali">${APISGoals.stats[0].rows[5].stats[0].value}</span>
    </div>
    
    <div class="tabollaintro">
    <img src="https://imagecache.365scores.com/image/upload/f_png,w_80,h_80,c_limit,q_auto:eco,dpr_2,d_Athletes:default.png,r_max,c_thumb,g_face,z_0.65/v${APISGoals.stats[0].rows[6].entity.imgVer}/Athletes/${APISGoals.stats[0].rows[6].entity.id}"/>
    <span class="nameplyr">${APISGoals.stats[0].rows[6].entity.name}</span>
    <span class="cuping">${APISGoals.stats[0].rows[6].entity.positionName}</span>
    <span class="Goali">${APISGoals.stats[0].rows[6].stats[0].value}</span>
    </div>
    
    <div class="tabollaintro">
    <img src="https://imagecache.365scores.com/image/upload/f_png,w_80,h_80,c_limit,q_auto:eco,dpr_2,d_Athletes:default.png,r_max,c_thumb,g_face,z_0.65/v${APISGoals.stats[0].rows[7].entity.imgVer}/Athletes/${APISGoals.stats[0].rows[7].entity.id}"/>
    <span class="nameplyr">${APISGoals.stats[0].rows[7].entity.name}</span>
    <span class="cuping">${APISGoals.stats[0].rows[7].entity.positionName}</span>
    <span class="Goali">${APISGoals.stats[0].rows[7].stats[0].value}</span>
    </div>
    
    <div class="tabollaintro">
    <img src="https://imagecache.365scores.com/image/upload/f_png,w_80,h_80,c_limit,q_auto:eco,dpr_2,d_Athletes:default.png,r_max,c_thumb,g_face,z_0.65/v${APISGoals.stats[0].rows[8].entity.imgVer}/Athletes/${APISGoals.stats[0].rows[8].entity.id}"/>
    <span class="nameplyr">${APISGoals.stats[0].rows[8].entity.name}</span>
    <span class="cuping">${APISGoals.stats[0].rows[8].entity.positionName}</span>
    <span class="Goali">${APISGoals.stats[0].rows[8].stats[0].value}</span>
    </div>
    
    <div class="tabollaintro">
    <img src="https://imagecache.365scores.com/image/upload/f_png,w_80,h_80,c_limit,q_auto:eco,dpr_2,d_Athletes:default.png,r_max,c_thumb,g_face,z_0.65/v${APISGoals.stats[0].rows[9].entity.imgVer}/Athletes/${APISGoals.stats[0].rows[9].entity.id}"/>
    <span class="nameplyr">${APISGoals.stats[0].rows[9].entity.name}</span>
    <span class="cuping">${APISGoals.stats[0].rows[9].entity.positionName}</span>
    <span class="Goali">${APISGoals.stats[0].rows[9].stats[0].value}</span>
    </div>
    
    <div class="tabollaintro">
    <img src="https://imagecache.365scores.com/image/upload/f_png,w_80,h_80,c_limit,q_auto:eco,dpr_2,d_Athletes:default.png,r_max,c_thumb,g_face,z_0.65/v${APISGoals.stats[0].rows[10].entity.imgVer}/Athletes/${APISGoals.stats[0].rows[10].entity.id}"/>
    <span class="nameplyr">${APISGoals.stats[0].rows[10].entity.name}</span>
    <span class="cuping">${APISGoals.stats[0].rows[10].entity.positionName}</span>
    <span class="Goali">${APISGoals.stats[0].rows[10].stats[0].value}</span>
    </div>
    
    <div class="tabollaintro">
    <img src="https://imagecache.365scores.com/image/upload/f_png,w_80,h_80,c_limit,q_auto:eco,dpr_2,d_Athletes:default.png,r_max,c_thumb,g_face,z_0.65/v${APISGoals.stats[0].rows[11].entity.imgVer}/Athletes/${APISGoals.stats[0].rows[11].entity.id}"/>
    <span class="nameplyr">${APISGoals.stats[0].rows[11].entity.name}</span>
    <span class="cuping">${APISGoals.stats[0].rows[11].entity.positionName}</span>
    <span class="Goali">${APISGoals.stats[0].rows[11].stats[0].value}</span>
    </div>
    
    <div class="tabollaintro">
    <img src="https://imagecache.365scores.com/image/upload/f_png,w_80,h_80,c_limit,q_auto:eco,dpr_2,d_Athletes:default.png,r_max,c_thumb,g_face,z_0.65/v${APISGoals.stats[0].rows[12].entity.imgVer}/Athletes/${APISGoals.stats[0].rows[12].entity.id}"/>
    <span class="nameplyr">${APISGoals.stats[0].rows[12].entity.name}</span>
    <span class="cuping">${APISGoals.stats[0].rows[12].entity.positionName}</span>
    <span class="Goali">${APISGoals.stats[0].rows[12].stats[0].value}</span>
    </div>
    
    <div class="tabollaintro">
    <img src="https://imagecache.365scores.com/image/upload/f_png,w_80,h_80,c_limit,q_auto:eco,dpr_2,d_Athletes:default.png,r_max,c_thumb,g_face,z_0.65/v${APISGoals.stats[0].rows[13].entity.imgVer}/Athletes/${APISGoals.stats[0].rows[13].entity.id}"/>
    <span class="nameplyr">${APISGoals.stats[0].rows[13].entity.name}</span>
    <span class="cuping">${APISGoals.stats[0].rows[13].entity.positionName}</span>
    <span class="Goali">${APISGoals.stats[0].rows[13].stats[0].value}</span>
    </div>
    
    <div class="tabollaintro">
    <img src="https://imagecache.365scores.com/image/upload/f_png,w_80,h_80,c_limit,q_auto:eco,dpr_2,d_Athletes:default.png,r_max,c_thumb,g_face,z_0.65/v${APISGoals.stats[0].rows[14].entity.imgVer}/Athletes/${APISGoals.stats[0].rows[14].entity.id}"/>
    <span class="nameplyr">${APISGoals.stats[0].rows[14].entity.name}</span>
    <span class="cuping">${APISGoals.stats[0].rows[14].entity.positionName}</span>
    <span class="Goali">${APISGoals.stats[0].rows[14].stats[0].value}</span>
    </div>
    </div>
    </div>`;
  } else {
  }

  if (GE) {
    const RECONFIG = await fetch(
        "https://webws.365scores.com/web/standings/?appTypeId=5&langId=27&timezoneName=Africa/Cairo&userCountryId=131&competitions=25&live=false&stageNum=1&seasonNum=101"
      ),
      APIS = await RECONFIG.json();

    GE.innerHTML = `
    <div class="TopLeagia"> <img src="https://imagecache.365scores.com/image/upload/f_png,w_68,h_68,c_limit,q_auto:eco,dpr_2,d_Countries:Round:1.png/v${APIS.competitions[0].imageVersion}/Competitions/light/${APIS.competitions[0].id}"/>${APIS.competitions[0].name}</div>
    <table class="table">
    <tbody class="tbody">
    <tr class="tr">
    <th></th>
    <th style="text-align: center;">فريق</th>
    <th>لعب</th>
    <th>فاز</th>
    <th>تعادل</th>
    <th>خسر</th>
    <th>نقاط</th>
    </tr>
    
    <tr>
    <th>${APIS.standings[0].rows[0].position}</th>
    <th><img class="scorelogo" src="https://imagecache.365scores.com/image/upload/f_png,w_24,h_24,c_limit,q_auto:eco,dpr_3,d_Competitors:default1.png/v${APIS.standings[0].rows[0].competitor.imageVersion}/Competitors/${APIS.standings[0].rows[0].competitor.id}"/> ${APIS.standings[0].rows[0].competitor.name}</th>
    <th>${APIS.standings[0].rows[0].gamePlayed}</th>
    <th>${APIS.standings[0].rows[0].gamesWon}</th>
    <th>${APIS.standings[0].rows[0].gamesEven}</th>
    <th>${APIS.standings[0].rows[0].gamesLost}</th>
    <th>${APIS.standings[0].rows[0].points}</th>
    </tr>
    
    <tr>
    <th>${APIS.standings[0].rows[1].position}</th>
    <th><img class="scorelogo" src="https://imagecache.365scores.com/image/upload/f_png,w_24,h_24,c_limit,q_auto:eco,dpr_3,d_Competitors:default1.png/v${APIS.standings[0].rows[1].competitor.imageVersion}/Competitors/${APIS.standings[0].rows[1].competitor.id}"/>${APIS.standings[0].rows[1].competitor.name}</th>
    <th>${APIS.standings[0].rows[1].gamePlayed}</th>
    <th>${APIS.standings[0].rows[1].gamesWon}</th>
    <th>${APIS.standings[0].rows[1].gamesEven}</th>
    <th>${APIS.standings[0].rows[1].gamesLost}</th>
    <th>${APIS.standings[0].rows[1].points}</th>
    </tr>
    
    <tr>
    <th>${APIS.standings[0].rows[2].position}</th>
    <th><img class="scorelogo" src="https://imagecache.365scores.com/image/upload/f_png,w_24,h_24,c_limit,q_auto:eco,dpr_3,d_Competitors:default1.png/v${APIS.standings[0].rows[2].competitor.imageVersion}/Competitors/${APIS.standings[0].rows[2].competitor.id}"/>${APIS.standings[0].rows[2].competitor.name}</th>
    <th>${APIS.standings[0].rows[2].gamePlayed}</th>
    <th>${APIS.standings[0].rows[2].gamesWon}</th>
    <th>${APIS.standings[0].rows[2].gamesEven}</th>
    <th>${APIS.standings[0].rows[2].gamesLost}</th>
    <th>${APIS.standings[0].rows[2].points}</th>
    </tr>
    
    <tr>
    <th>${APIS.standings[0].rows[3].position}</th>
    <th><img class="scorelogo" src="https://imagecache.365scores.com/image/upload/f_png,w_24,h_24,c_limit,q_auto:eco,dpr_3,d_Competitors:default1.png/v${APIS.standings[0].rows[3].competitor.imageVersion}/Competitors/${APIS.standings[0].rows[3].competitor.id}"/>${APIS.standings[0].rows[3].competitor.name}</th>
    <th>${APIS.standings[0].rows[3].gamePlayed}</th>
    <th>${APIS.standings[0].rows[3].gamesWon}</th>
    <th>${APIS.standings[0].rows[3].gamesEven}</th>
    <th>${APIS.standings[0].rows[3].gamesLost}</th>
    <th>${APIS.standings[0].rows[3].points}</th>
    </tr>
    
    <tr>
    <th>${APIS.standings[0].rows[4].position}</th>
    <th><img class="scorelogo" src="https://imagecache.365scores.com/image/upload/f_png,w_24,h_24,c_limit,q_auto:eco,dpr_3,d_Competitors:default1.png/v${APIS.standings[0].rows[4].competitor.imageVersion}/Competitors/${APIS.standings[0].rows[4].competitor.id}"/>${APIS.standings[0].rows[4].competitor.name}</th>
    <th>${APIS.standings[0].rows[4].gamePlayed}</th>
    <th>${APIS.standings[0].rows[4].gamesWon}</th>
    <th>${APIS.standings[0].rows[4].gamesEven}</th>
    <th>${APIS.standings[0].rows[4].gamesLost}</th>
    <th>${APIS.standings[0].rows[4].points}</th>
    </tr>
    
    <tr>
    <th>${APIS.standings[0].rows[5].position}</th>
    <th><img class="scorelogo" src="https://imagecache.365scores.com/image/upload/f_png,w_24,h_24,c_limit,q_auto:eco,dpr_3,d_Competitors:default1.png/v${APIS.standings[0].rows[5].competitor.imageVersion}/Competitors/${APIS.standings[0].rows[5].competitor.id}"/>${APIS.standings[0].rows[5].competitor.name}</th>
    <th>${APIS.standings[0].rows[5].gamePlayed}</th>
    <th>${APIS.standings[0].rows[5].gamesWon}</th>
    <th>${APIS.standings[0].rows[5].gamesEven}</th>
    <th>${APIS.standings[0].rows[5].gamesLost}</th>
    <th>${APIS.standings[0].rows[5].points}</th>
    </tr>
    
    <tr>
    <th>${APIS.standings[0].rows[6].position}</th>
    <th><img class="scorelogo" src="https://imagecache.365scores.com/image/upload/f_png,w_24,h_24,c_limit,q_auto:eco,dpr_3,d_Competitors:default1.png/v${APIS.standings[0].rows[6].competitor.imageVersion}/Competitors/${APIS.standings[0].rows[6].competitor.id}"/>${APIS.standings[0].rows[6].competitor.name}</th>
    <th>${APIS.standings[0].rows[6].gamePlayed}</th>
    <th>${APIS.standings[0].rows[6].gamesWon}</th>
    <th>${APIS.standings[0].rows[6].gamesEven}</th>
    <th>${APIS.standings[0].rows[6].gamesLost}</th>
    <th>${APIS.standings[0].rows[6].points}</th>
    </tr>
    
    <tr>
    <th>${APIS.standings[0].rows[7].position}</th>
    <th><img class="scorelogo" src="https://imagecache.365scores.com/image/upload/f_png,w_24,h_24,c_limit,q_auto:eco,dpr_3,d_Competitors:default1.png/v${APIS.standings[0].rows[7].competitor.imageVersion}/Competitors/${APIS.standings[0].rows[7].competitor.id}"/>${APIS.standings[0].rows[7].competitor.name}</th>
    <th>${APIS.standings[0].rows[7].gamePlayed}</th>
    <th>${APIS.standings[0].rows[7].gamesWon}</th>
    <th>${APIS.standings[0].rows[7].gamesEven}</th>
    <th>${APIS.standings[0].rows[7].gamesLost}</th>
    <th>${APIS.standings[0].rows[7].points}</th>
    </tr>
    
    <tr>
    <th>${APIS.standings[0].rows[8].position}</th>
    <th><img class="scorelogo" src="https://imagecache.365scores.com/image/upload/f_png,w_24,h_24,c_limit,q_auto:eco,dpr_3,d_Competitors:default1.png/v${APIS.standings[0].rows[8].competitor.imageVersion}/Competitors/${APIS.standings[0].rows[8].competitor.id}"/>${APIS.standings[0].rows[8].competitor.name}</th>
    <th>${APIS.standings[0].rows[8].gamePlayed}</th>
    <th>${APIS.standings[0].rows[8].gamesWon}</th>
    <th>${APIS.standings[0].rows[8].gamesEven}</th>
    <th>${APIS.standings[0].rows[8].gamesLost}</th>
    <th>${APIS.standings[0].rows[8].points}</th>
    </tr>
    
    <tr>
    <th>${APIS.standings[0].rows[9].position}</th>
    <th><img class="scorelogo" src="https://imagecache.365scores.com/image/upload/f_png,w_24,h_24,c_limit,q_auto:eco,dpr_3,d_Competitors:default1.png/v${APIS.standings[0].rows[9].competitor.imageVersion}/Competitors/${APIS.standings[0].rows[9].competitor.id}"/>${APIS.standings[0].rows[9].competitor.name}</th>
    <th>${APIS.standings[0].rows[9].gamePlayed}</th>
    <th>${APIS.standings[0].rows[9].gamesWon}</th>
    <th>${APIS.standings[0].rows[9].gamesEven}</th>
    <th>${APIS.standings[0].rows[9].gamesLost}</th>
    <th>${APIS.standings[0].rows[9].points}</th>
    </tr>
    
    <tr>
    <th>${APIS.standings[0].rows[10].position}</th>
    <th><img class="scorelogo" src="https://imagecache.365scores.com/image/upload/f_png,w_24,h_24,c_limit,q_auto:eco,dpr_3,d_Competitors:default1.png/v${APIS.standings[0].rows[10].competitor.imageVersion}/Competitors/${APIS.standings[0].rows[10].competitor.id}"/>${APIS.standings[0].rows[10].competitor.name}</th>
    <th>${APIS.standings[0].rows[10].gamePlayed}</th>
    <th>${APIS.standings[0].rows[10].gamesWon}</th>
    <th>${APIS.standings[0].rows[10].gamesEven}</th>
    <th>${APIS.standings[0].rows[10].gamesLost}</th>
    <th>${APIS.standings[0].rows[10].points}</th>
    </tr>
    
    <tr>
    <th>${APIS.standings[0].rows[11].position}</th>
    <th><img class="scorelogo" src="https://imagecache.365scores.com/image/upload/f_png,w_24,h_24,c_limit,q_auto:eco,dpr_3,d_Competitors:default1.png/v${APIS.standings[0].rows[11].competitor.imageVersion}/Competitors/${APIS.standings[0].rows[11].competitor.id}"/>${APIS.standings[0].rows[11].competitor.name}</th>
    <th>${APIS.standings[0].rows[11].gamePlayed}</th>
    <th>${APIS.standings[0].rows[11].gamesWon}</th>
    <th>${APIS.standings[0].rows[11].gamesEven}</th>
    <th>${APIS.standings[0].rows[11].gamesLost}</th>
    <th>${APIS.standings[0].rows[11].points}</th>
    </tr>
    
    
    <tr>
    <th>${APIS.standings[0].rows[12].position}</th>
    <th><img class="scorelogo" src="https://imagecache.365scores.com/image/upload/f_png,w_24,h_24,c_limit,q_auto:eco,dpr_3,d_Competitors:default1.png/v${APIS.standings[0].rows[12].competitor.imageVersion}/Competitors/${APIS.standings[0].rows[12].competitor.id}"/>${APIS.standings[0].rows[12].competitor.name}</th>
    <th>${APIS.standings[0].rows[12].gamePlayed}</th>
    <th>${APIS.standings[0].rows[12].gamesWon}</th>
    <th>${APIS.standings[0].rows[12].gamesEven}</th>
    <th>${APIS.standings[0].rows[12].gamesLost}</th>
    <th>${APIS.standings[0].rows[12].points}</th>
    </tr>
    
    
    <tr>
    <th>${APIS.standings[0].rows[13].position}</th>
    <th><img class="scorelogo" src="https://imagecache.365scores.com/image/upload/f_png,w_24,h_24,c_limit,q_auto:eco,dpr_3,d_Competitors:default1.png/v${APIS.standings[0].rows[13].competitor.imageVersion}/Competitors/${APIS.standings[0].rows[13].competitor.id}"/>${APIS.standings[0].rows[13].competitor.name}</th>
    <th>${APIS.standings[0].rows[13].gamePlayed}</th>
    <th>${APIS.standings[0].rows[13].gamesWon}</th>
    <th>${APIS.standings[0].rows[13].gamesEven}</th>
    <th>${APIS.standings[0].rows[13].gamesLost}</th>
    <th>${APIS.standings[0].rows[13].points}</th>
    </tr>
    
    
    <tr>
    <th>${APIS.standings[0].rows[14].position}</th>
    <th><img class="scorelogo" src="https://imagecache.365scores.com/image/upload/f_png,w_24,h_24,c_limit,q_auto:eco,dpr_3,d_Competitors:default1.png/v${APIS.standings[0].rows[14].competitor.imageVersion}/Competitors/${APIS.standings[0].rows[14].competitor.id}"/>${APIS.standings[0].rows[14].competitor.name}</th>
    <th>${APIS.standings[0].rows[14].gamePlayed}</th>
    <th>${APIS.standings[0].rows[14].gamesWon}</th>
    <th>${APIS.standings[0].rows[14].gamesEven}</th>
    <th>${APIS.standings[0].rows[14].gamesLost}</th>
    <th>${APIS.standings[0].rows[14].points}</th>
    </tr>
    
    
    <tr>
    <th>${APIS.standings[0].rows[15].position}</th>
    <th><img class="scorelogo" src="https://imagecache.365scores.com/image/upload/f_png,w_24,h_24,c_limit,q_auto:eco,dpr_3,d_Competitors:default1.png/v${APIS.standings[0].rows[15].competitor.imageVersion}/Competitors/${APIS.standings[0].rows[15].competitor.id}"/>${APIS.standings[0].rows[15].competitor.name}</th>
    <th>${APIS.standings[0].rows[15].gamePlayed}</th>
    <th>${APIS.standings[0].rows[15].gamesWon}</th>
    <th>${APIS.standings[0].rows[15].gamesEven}</th>
    <th>${APIS.standings[0].rows[15].gamesLost}</th>
    <th>${APIS.standings[0].rows[15].points}</th>
    </tr>
    
    
    <tr>
    <th>${APIS.standings[0].rows[16].position}</th>
    <th><img class="scorelogo" src="https://imagecache.365scores.com/image/upload/f_png,w_24,h_24,c_limit,q_auto:eco,dpr_3,d_Competitors:default1.png/v${APIS.standings[0].rows[16].competitor.imageVersion}/Competitors/${APIS.standings[0].rows[16].competitor.id}"/>${APIS.standings[0].rows[16].competitor.name}</th>
    <th>${APIS.standings[0].rows[16].gamePlayed}</th>
    <th>${APIS.standings[0].rows[16].gamesWon}</th>
    <th>${APIS.standings[0].rows[16].gamesEven}</th>
    <th>${APIS.standings[0].rows[16].gamesLost}</th>
    <th>${APIS.standings[0].rows[16].points}</th>
    </tr>
    
    
    <tr>
    <th>${APIS.standings[0].rows[17].position}</th>
    <th><img class="scorelogo" src="https://imagecache.365scores.com/image/upload/f_png,w_24,h_24,c_limit,q_auto:eco,dpr_3,d_Competitors:default1.png/v${APIS.standings[0].rows[17].competitor.imageVersion}/Competitors/${APIS.standings[0].rows[17].competitor.id}"/>${APIS.standings[0].rows[17].competitor.name}</th>
    <th>${APIS.standings[0].rows[17].gamePlayed}</th>
    <th>${APIS.standings[0].rows[17].gamesWon}</th>
    <th>${APIS.standings[0].rows[17].gamesEven}</th>
    <th>${APIS.standings[0].rows[17].gamesLost}</th>
    <th>${APIS.standings[0].rows[17].points}</th>
    </tr>
    
    
    </tbody>
    </table>`;

    const RECONFIGG = await fetch(
        "https://webws.365scores.com/web/stats/?appTypeId=5&langId=27&timezoneName=Africa/Cairo&userCountryId=131&competition=25"
      ),
      APISGoals = await RECONFIGG.json();

    Goals.innerHTML = `
    
    <div class="TopLeagia"> <img src="https://imagecache.365scores.com/image/upload/f_png,w_68,h_68,c_limit,q_auto:eco,dpr_2,d_Countries:Round:1.png/v${APIS.competitions[0].imageVersion}/Competitions/light/${APIS.competitions[0].id}"/>${APIS.competitions[0].name}</div>
    <div class="Gooals">
    <div class="topthree">
    <div class="topim">
    <div class="One">2</div>
    <img src="https://imagecache.365scores.com/image/upload/f_png,w_80,h_80,c_limit,q_auto:eco,dpr_2,d_Athletes:default.png,r_max,c_thumb,g_face,z_0.65/v${APISGoals.stats[0].rows[1].entity.imgVer}/Athletes/${APISGoals.stats[0].rows[1].entity.id}"/>
    <span class="Goali">${APISGoals.stats[0].rows[1].stats[0].value}</span>
    <span class="nameplyr">${APISGoals.stats[0].rows[1].entity.name}</span>
    <span class="cuping">${APISGoals.stats[0].rows[1].entity.positionName}</span>
    </div>
    <div class="topim">
    <div class="One">1</div>
    <img src="https://imagecache.365scores.com/image/upload/f_png,w_80,h_80,c_limit,q_auto:eco,dpr_2,d_Athletes:default.png,r_max,c_thumb,g_face,z_0.65/v${APISGoals.stats[0].rows[0].entity.imgVer}/Athletes/${APISGoals.stats[0].rows[0].entity.id}"/>
    <span class="Goali">${APISGoals.stats[0].rows[0].stats[0].value}</span>
    <span class="nameplyr">${APISGoals.stats[0].rows[0].entity.name}</span>
    <span class="cuping">${APISGoals.stats[0].rows[0].entity.positionName}</span>
    </div>
    <div class="topim">
    <div class="One">3</div>
    <img src="https://imagecache.365scores.com/image/upload/f_png,w_80,h_80,c_limit,q_auto:eco,dpr_2,d_Athletes:default.png,r_max,c_thumb,g_face,z_0.65/v${APISGoals.stats[0].rows[2].entity.imgVer}/Athletes/${APISGoals.stats[0].rows[2].entity.id}"/>
    <span class="Goali">${APISGoals.stats[0].rows[2].stats[0].value}</span>
    <span class="nameplyr">${APISGoals.stats[0].rows[2].entity.name}</span>
    <span class="cuping">${APISGoals.stats[0].rows[2].entity.positionName}</span>
    </div>
    </div>
    
    
    <div class="tabolla">
    <div class="tabollaintro" style="font-size: 20px  !important;padding: 5px 12px;border-radius: 15px;">
    <span class="nameplyr">صورة اللاعب</span>
    <span class="nameplyr">اسم اللاعب</span>
    <span class="cuping">الصفة</span>
    <span class="cuping">الاهداف</span>
    </div>
    
    <div class="tabollaintro">
    <img src="https://imagecache.365scores.com/image/upload/f_png,w_80,h_80,c_limit,q_auto:eco,dpr_2,d_Athletes:default.png,r_max,c_thumb,g_face,z_0.65/v${APISGoals.stats[0].rows[3].entity.imgVer}/Athletes/${APISGoals.stats[0].rows[3].entity.id}"/>
    <span class="nameplyr">${APISGoals.stats[0].rows[3].entity.name}</span>
    <span class="cuping">${APISGoals.stats[0].rows[3].entity.positionName}</span>
    <span class="Goali">${APISGoals.stats[0].rows[3].stats[0].value}</span>
    </div>
    
    <div class="tabollaintro">
    <img src="https://imagecache.365scores.com/image/upload/f_png,w_80,h_80,c_limit,q_auto:eco,dpr_2,d_Athletes:default.png,r_max,c_thumb,g_face,z_0.65/v${APISGoals.stats[0].rows[4].entity.imgVer}/Athletes/${APISGoals.stats[0].rows[4].entity.id}"/>
    <span class="nameplyr">${APISGoals.stats[0].rows[4].entity.name}</span>
    <span class="cuping">${APISGoals.stats[0].rows[4].entity.positionName}</span>
    <span class="Goali">${APISGoals.stats[0].rows[4].stats[0].value}</span>
    </div>
    
    <div class="tabollaintro">
    <img src="https://imagecache.365scores.com/image/upload/f_png,w_80,h_80,c_limit,q_auto:eco,dpr_2,d_Athletes:default.png,r_max,c_thumb,g_face,z_0.65/v${APISGoals.stats[0].rows[5].entity.imgVer}/Athletes/${APISGoals.stats[0].rows[5].entity.id}"/>
    <span class="nameplyr">${APISGoals.stats[0].rows[5].entity.name}</span>
    <span class="cuping">${APISGoals.stats[0].rows[5].entity.positionName}</span>
    <span class="Goali">${APISGoals.stats[0].rows[5].stats[0].value}</span>
    </div>
    
    <div class="tabollaintro">
    <img src="https://imagecache.365scores.com/image/upload/f_png,w_80,h_80,c_limit,q_auto:eco,dpr_2,d_Athletes:default.png,r_max,c_thumb,g_face,z_0.65/v${APISGoals.stats[0].rows[6].entity.imgVer}/Athletes/${APISGoals.stats[0].rows[6].entity.id}"/>
    <span class="nameplyr">${APISGoals.stats[0].rows[6].entity.name}</span>
    <span class="cuping">${APISGoals.stats[0].rows[6].entity.positionName}</span>
    <span class="Goali">${APISGoals.stats[0].rows[6].stats[0].value}</span>
    </div>
    
    <div class="tabollaintro">
    <img src="https://imagecache.365scores.com/image/upload/f_png,w_80,h_80,c_limit,q_auto:eco,dpr_2,d_Athletes:default.png,r_max,c_thumb,g_face,z_0.65/v${APISGoals.stats[0].rows[7].entity.imgVer}/Athletes/${APISGoals.stats[0].rows[7].entity.id}"/>
    <span class="nameplyr">${APISGoals.stats[0].rows[7].entity.name}</span>
    <span class="cuping">${APISGoals.stats[0].rows[7].entity.positionName}</span>
    <span class="Goali">${APISGoals.stats[0].rows[7].stats[0].value}</span>
    </div>
    
    <div class="tabollaintro">
    <img src="https://imagecache.365scores.com/image/upload/f_png,w_80,h_80,c_limit,q_auto:eco,dpr_2,d_Athletes:default.png,r_max,c_thumb,g_face,z_0.65/v${APISGoals.stats[0].rows[8].entity.imgVer}/Athletes/${APISGoals.stats[0].rows[8].entity.id}"/>
    <span class="nameplyr">${APISGoals.stats[0].rows[8].entity.name}</span>
    <span class="cuping">${APISGoals.stats[0].rows[8].entity.positionName}</span>
    <span class="Goali">${APISGoals.stats[0].rows[8].stats[0].value}</span>
    </div>
    
    <div class="tabollaintro">
    <img src="https://imagecache.365scores.com/image/upload/f_png,w_80,h_80,c_limit,q_auto:eco,dpr_2,d_Athletes:default.png,r_max,c_thumb,g_face,z_0.65/v${APISGoals.stats[0].rows[9].entity.imgVer}/Athletes/${APISGoals.stats[0].rows[9].entity.id}"/>
    <span class="nameplyr">${APISGoals.stats[0].rows[9].entity.name}</span>
    <span class="cuping">${APISGoals.stats[0].rows[9].entity.positionName}</span>
    <span class="Goali">${APISGoals.stats[0].rows[9].stats[0].value}</span>
    </div>
    
    <div class="tabollaintro">
    <img src="https://imagecache.365scores.com/image/upload/f_png,w_80,h_80,c_limit,q_auto:eco,dpr_2,d_Athletes:default.png,r_max,c_thumb,g_face,z_0.65/v${APISGoals.stats[0].rows[10].entity.imgVer}/Athletes/${APISGoals.stats[0].rows[10].entity.id}"/>
    <span class="nameplyr">${APISGoals.stats[0].rows[10].entity.name}</span>
    <span class="cuping">${APISGoals.stats[0].rows[10].entity.positionName}</span>
    <span class="Goali">${APISGoals.stats[0].rows[10].stats[0].value}</span>
    </div>
    
    <div class="tabollaintro">
    <img src="https://imagecache.365scores.com/image/upload/f_png,w_80,h_80,c_limit,q_auto:eco,dpr_2,d_Athletes:default.png,r_max,c_thumb,g_face,z_0.65/v${APISGoals.stats[0].rows[11].entity.imgVer}/Athletes/${APISGoals.stats[0].rows[11].entity.id}"/>
    <span class="nameplyr">${APISGoals.stats[0].rows[11].entity.name}</span>
    <span class="cuping">${APISGoals.stats[0].rows[11].entity.positionName}</span>
    <span class="Goali">${APISGoals.stats[0].rows[11].stats[0].value}</span>
    </div>
    
    <div class="tabollaintro">
    <img src="https://imagecache.365scores.com/image/upload/f_png,w_80,h_80,c_limit,q_auto:eco,dpr_2,d_Athletes:default.png,r_max,c_thumb,g_face,z_0.65/v${APISGoals.stats[0].rows[12].entity.imgVer}/Athletes/${APISGoals.stats[0].rows[12].entity.id}"/>
    <span class="nameplyr">${APISGoals.stats[0].rows[12].entity.name}</span>
    <span class="cuping">${APISGoals.stats[0].rows[12].entity.positionName}</span>
    <span class="Goali">${APISGoals.stats[0].rows[12].stats[0].value}</span>
    </div>
    
    <div class="tabollaintro">
    <img src="https://imagecache.365scores.com/image/upload/f_png,w_80,h_80,c_limit,q_auto:eco,dpr_2,d_Athletes:default.png,r_max,c_thumb,g_face,z_0.65/v${APISGoals.stats[0].rows[13].entity.imgVer}/Athletes/${APISGoals.stats[0].rows[13].entity.id}"/>
    <span class="nameplyr">${APISGoals.stats[0].rows[13].entity.name}</span>
    <span class="cuping">${APISGoals.stats[0].rows[13].entity.positionName}</span>
    <span class="Goali">${APISGoals.stats[0].rows[13].stats[0].value}</span>
    </div>
    
    <div class="tabollaintro">
    <img src="https://imagecache.365scores.com/image/upload/f_png,w_80,h_80,c_limit,q_auto:eco,dpr_2,d_Athletes:default.png,r_max,c_thumb,g_face,z_0.65/v${APISGoals.stats[0].rows[14].entity.imgVer}/Athletes/${APISGoals.stats[0].rows[14].entity.id}"/>
    <span class="nameplyr">${APISGoals.stats[0].rows[14].entity.name}</span>
    <span class="cuping">${APISGoals.stats[0].rows[14].entity.positionName}</span>
    <span class="Goali">${APISGoals.stats[0].rows[14].stats[0].value}</span>
    </div>
    </div>
    </div>`;
  } else {
  }

  if (IT) {
    const RECONFIG = await fetch(
        "https://webws.365scores.com/web/standings/?appTypeId=5&langId=27&timezoneName=Africa/Cairo&userCountryId=131&competitions=17&live=false&stageNum=1&seasonNum=120"
      ),
      APIS = await RECONFIG.json();

    IT.innerHTML = `
    <div class="TopLeagia"> <img src="https://imagecache.365scores.com/image/upload/f_png,w_68,h_68,c_limit,q_auto:eco,dpr_2,d_Countries:Round:1.png/v${APIS.competitions[0].imageVersion}/Competitions/light/${APIS.competitions[0].id}"/>${APIS.competitions[0].name}</div>
    <table class="table">
    <tbody class="tbody">
    <tr class="tr">
    <th></th>
    <th style="text-align: center;">فريق</th>
    <th>لعب</th>
    <th>فاز</th>
    <th>تعادل</th>
    <th>خسر</th>
    <th>نقاط</th>
    </tr>
    
    <tr>
    <th>${APIS.standings[0].rows[0].position}</th>
    <th><img class="scorelogo" src="https://imagecache.365scores.com/image/upload/f_png,w_24,h_24,c_limit,q_auto:eco,dpr_3,d_Competitors:default1.png/v${APIS.standings[0].rows[0].competitor.imageVersion}/Competitors/${APIS.standings[0].rows[0].competitor.id}"/> ${APIS.standings[0].rows[0].competitor.name}</th>
    <th>${APIS.standings[0].rows[0].gamePlayed}</th>
    <th>${APIS.standings[0].rows[0].gamesWon}</th>
    <th>${APIS.standings[0].rows[0].gamesEven}</th>
    <th>${APIS.standings[0].rows[0].gamesLost}</th>
    <th>${APIS.standings[0].rows[0].points}</th>
    </tr>
    
    <tr>
    <th>${APIS.standings[0].rows[1].position}</th>
    <th><img class="scorelogo" src="https://imagecache.365scores.com/image/upload/f_png,w_24,h_24,c_limit,q_auto:eco,dpr_3,d_Competitors:default1.png/v${APIS.standings[0].rows[1].competitor.imageVersion}/Competitors/${APIS.standings[0].rows[1].competitor.id}"/>${APIS.standings[0].rows[1].competitor.name}</th>
    <th>${APIS.standings[0].rows[1].gamePlayed}</th>
    <th>${APIS.standings[0].rows[1].gamesWon}</th>
    <th>${APIS.standings[0].rows[1].gamesEven}</th>
    <th>${APIS.standings[0].rows[1].gamesLost}</th>
    <th>${APIS.standings[0].rows[1].points}</th>
    </tr>
    
    <tr>
    <th>${APIS.standings[0].rows[2].position}</th>
    <th><img class="scorelogo" src="https://imagecache.365scores.com/image/upload/f_png,w_24,h_24,c_limit,q_auto:eco,dpr_3,d_Competitors:default1.png/v${APIS.standings[0].rows[2].competitor.imageVersion}/Competitors/${APIS.standings[0].rows[2].competitor.id}"/>${APIS.standings[0].rows[2].competitor.name}</th>
    <th>${APIS.standings[0].rows[2].gamePlayed}</th>
    <th>${APIS.standings[0].rows[2].gamesWon}</th>
    <th>${APIS.standings[0].rows[2].gamesEven}</th>
    <th>${APIS.standings[0].rows[2].gamesLost}</th>
    <th>${APIS.standings[0].rows[2].points}</th>
    </tr>
    
    <tr>
    <th>${APIS.standings[0].rows[3].position}</th>
    <th><img class="scorelogo" src="https://imagecache.365scores.com/image/upload/f_png,w_24,h_24,c_limit,q_auto:eco,dpr_3,d_Competitors:default1.png/v${APIS.standings[0].rows[3].competitor.imageVersion}/Competitors/${APIS.standings[0].rows[3].competitor.id}"/>${APIS.standings[0].rows[3].competitor.name}</th>
    <th>${APIS.standings[0].rows[3].gamePlayed}</th>
    <th>${APIS.standings[0].rows[3].gamesWon}</th>
    <th>${APIS.standings[0].rows[3].gamesEven}</th>
    <th>${APIS.standings[0].rows[3].gamesLost}</th>
    <th>${APIS.standings[0].rows[3].points}</th>
    </tr>
    
    <tr>
    <th>${APIS.standings[0].rows[4].position}</th>
    <th><img class="scorelogo" src="https://imagecache.365scores.com/image/upload/f_png,w_24,h_24,c_limit,q_auto:eco,dpr_3,d_Competitors:default1.png/v${APIS.standings[0].rows[4].competitor.imageVersion}/Competitors/${APIS.standings[0].rows[4].competitor.id}"/>${APIS.standings[0].rows[4].competitor.name}</th>
    <th>${APIS.standings[0].rows[4].gamePlayed}</th>
    <th>${APIS.standings[0].rows[4].gamesWon}</th>
    <th>${APIS.standings[0].rows[4].gamesEven}</th>
    <th>${APIS.standings[0].rows[4].gamesLost}</th>
    <th>${APIS.standings[0].rows[4].points}</th>
    </tr>
    
    <tr>
    <th>${APIS.standings[0].rows[5].position}</th>
    <th><img class="scorelogo" src="https://imagecache.365scores.com/image/upload/f_png,w_24,h_24,c_limit,q_auto:eco,dpr_3,d_Competitors:default1.png/v${APIS.standings[0].rows[5].competitor.imageVersion}/Competitors/${APIS.standings[0].rows[5].competitor.id}"/>${APIS.standings[0].rows[5].competitor.name}</th>
    <th>${APIS.standings[0].rows[5].gamePlayed}</th>
    <th>${APIS.standings[0].rows[5].gamesWon}</th>
    <th>${APIS.standings[0].rows[5].gamesEven}</th>
    <th>${APIS.standings[0].rows[5].gamesLost}</th>
    <th>${APIS.standings[0].rows[5].points}</th>
    </tr>
    
    <tr>
    <th>${APIS.standings[0].rows[6].position}</th>
    <th><img class="scorelogo" src="https://imagecache.365scores.com/image/upload/f_png,w_24,h_24,c_limit,q_auto:eco,dpr_3,d_Competitors:default1.png/v${APIS.standings[0].rows[6].competitor.imageVersion}/Competitors/${APIS.standings[0].rows[6].competitor.id}"/>${APIS.standings[0].rows[6].competitor.name}</th>
    <th>${APIS.standings[0].rows[6].gamePlayed}</th>
    <th>${APIS.standings[0].rows[6].gamesWon}</th>
    <th>${APIS.standings[0].rows[6].gamesEven}</th>
    <th>${APIS.standings[0].rows[6].gamesLost}</th>
    <th>${APIS.standings[0].rows[6].points}</th>
    </tr>
    
    <tr>
    <th>${APIS.standings[0].rows[7].position}</th>
    <th><img class="scorelogo" src="https://imagecache.365scores.com/image/upload/f_png,w_24,h_24,c_limit,q_auto:eco,dpr_3,d_Competitors:default1.png/v${APIS.standings[0].rows[7].competitor.imageVersion}/Competitors/${APIS.standings[0].rows[7].competitor.id}"/>${APIS.standings[0].rows[7].competitor.name}</th>
    <th>${APIS.standings[0].rows[7].gamePlayed}</th>
    <th>${APIS.standings[0].rows[7].gamesWon}</th>
    <th>${APIS.standings[0].rows[7].gamesEven}</th>
    <th>${APIS.standings[0].rows[7].gamesLost}</th>
    <th>${APIS.standings[0].rows[7].points}</th>
    </tr>
    
    <tr>
    <th>${APIS.standings[0].rows[8].position}</th>
    <th><img class="scorelogo" src="https://imagecache.365scores.com/image/upload/f_png,w_24,h_24,c_limit,q_auto:eco,dpr_3,d_Competitors:default1.png/v${APIS.standings[0].rows[8].competitor.imageVersion}/Competitors/${APIS.standings[0].rows[8].competitor.id}"/>${APIS.standings[0].rows[8].competitor.name}</th>
    <th>${APIS.standings[0].rows[8].gamePlayed}</th>
    <th>${APIS.standings[0].rows[8].gamesWon}</th>
    <th>${APIS.standings[0].rows[8].gamesEven}</th>
    <th>${APIS.standings[0].rows[8].gamesLost}</th>
    <th>${APIS.standings[0].rows[8].points}</th>
    </tr>
    
    <tr>
    <th>${APIS.standings[0].rows[9].position}</th>
    <th><img class="scorelogo" src="https://imagecache.365scores.com/image/upload/f_png,w_24,h_24,c_limit,q_auto:eco,dpr_3,d_Competitors:default1.png/v${APIS.standings[0].rows[9].competitor.imageVersion}/Competitors/${APIS.standings[0].rows[9].competitor.id}"/>${APIS.standings[0].rows[9].competitor.name}</th>
    <th>${APIS.standings[0].rows[9].gamePlayed}</th>
    <th>${APIS.standings[0].rows[9].gamesWon}</th>
    <th>${APIS.standings[0].rows[9].gamesEven}</th>
    <th>${APIS.standings[0].rows[9].gamesLost}</th>
    <th>${APIS.standings[0].rows[9].points}</th>
    </tr>
    
    <tr>
    <th>${APIS.standings[0].rows[10].position}</th>
    <th><img class="scorelogo" src="https://imagecache.365scores.com/image/upload/f_png,w_24,h_24,c_limit,q_auto:eco,dpr_3,d_Competitors:default1.png/v${APIS.standings[0].rows[10].competitor.imageVersion}/Competitors/${APIS.standings[0].rows[10].competitor.id}"/>${APIS.standings[0].rows[10].competitor.name}</th>
    <th>${APIS.standings[0].rows[10].gamePlayed}</th>
    <th>${APIS.standings[0].rows[10].gamesWon}</th>
    <th>${APIS.standings[0].rows[10].gamesEven}</th>
    <th>${APIS.standings[0].rows[10].gamesLost}</th>
    <th>${APIS.standings[0].rows[10].points}</th>
    </tr>
    
    <tr>
    <th>${APIS.standings[0].rows[11].position}</th>
    <th><img class="scorelogo" src="https://imagecache.365scores.com/image/upload/f_png,w_24,h_24,c_limit,q_auto:eco,dpr_3,d_Competitors:default1.png/v${APIS.standings[0].rows[11].competitor.imageVersion}/Competitors/${APIS.standings[0].rows[11].competitor.id}"/>${APIS.standings[0].rows[11].competitor.name}</th>
    <th>${APIS.standings[0].rows[11].gamePlayed}</th>
    <th>${APIS.standings[0].rows[11].gamesWon}</th>
    <th>${APIS.standings[0].rows[11].gamesEven}</th>
    <th>${APIS.standings[0].rows[11].gamesLost}</th>
    <th>${APIS.standings[0].rows[11].points}</th>
    </tr>
    
    
    <tr>
    <th>${APIS.standings[0].rows[12].position}</th>
    <th><img class="scorelogo" src="https://imagecache.365scores.com/image/upload/f_png,w_24,h_24,c_limit,q_auto:eco,dpr_3,d_Competitors:default1.png/v${APIS.standings[0].rows[12].competitor.imageVersion}/Competitors/${APIS.standings[0].rows[12].competitor.id}"/>${APIS.standings[0].rows[12].competitor.name}</th>
    <th>${APIS.standings[0].rows[12].gamePlayed}</th>
    <th>${APIS.standings[0].rows[12].gamesWon}</th>
    <th>${APIS.standings[0].rows[12].gamesEven}</th>
    <th>${APIS.standings[0].rows[12].gamesLost}</th>
    <th>${APIS.standings[0].rows[12].points}</th>
    </tr>
    
    
    <tr>
    <th>${APIS.standings[0].rows[13].position}</th>
    <th><img class="scorelogo" src="https://imagecache.365scores.com/image/upload/f_png,w_24,h_24,c_limit,q_auto:eco,dpr_3,d_Competitors:default1.png/v${APIS.standings[0].rows[13].competitor.imageVersion}/Competitors/${APIS.standings[0].rows[13].competitor.id}"/>${APIS.standings[0].rows[13].competitor.name}</th>
    <th>${APIS.standings[0].rows[13].gamePlayed}</th>
    <th>${APIS.standings[0].rows[13].gamesWon}</th>
    <th>${APIS.standings[0].rows[13].gamesEven}</th>
    <th>${APIS.standings[0].rows[13].gamesLost}</th>
    <th>${APIS.standings[0].rows[13].points}</th>
    </tr>
    
    
    <tr>
    <th>${APIS.standings[0].rows[14].position}</th>
    <th><img class="scorelogo" src="https://imagecache.365scores.com/image/upload/f_png,w_24,h_24,c_limit,q_auto:eco,dpr_3,d_Competitors:default1.png/v${APIS.standings[0].rows[14].competitor.imageVersion}/Competitors/${APIS.standings[0].rows[14].competitor.id}"/>${APIS.standings[0].rows[14].competitor.name}</th>
    <th>${APIS.standings[0].rows[14].gamePlayed}</th>
    <th>${APIS.standings[0].rows[14].gamesWon}</th>
    <th>${APIS.standings[0].rows[14].gamesEven}</th>
    <th>${APIS.standings[0].rows[14].gamesLost}</th>
    <th>${APIS.standings[0].rows[14].points}</th>
    </tr>
    
    
    <tr>
    <th>${APIS.standings[0].rows[15].position}</th>
    <th><img class="scorelogo" src="https://imagecache.365scores.com/image/upload/f_png,w_24,h_24,c_limit,q_auto:eco,dpr_3,d_Competitors:default1.png/v${APIS.standings[0].rows[15].competitor.imageVersion}/Competitors/${APIS.standings[0].rows[15].competitor.id}"/>${APIS.standings[0].rows[15].competitor.name}</th>
    <th>${APIS.standings[0].rows[15].gamePlayed}</th>
    <th>${APIS.standings[0].rows[15].gamesWon}</th>
    <th>${APIS.standings[0].rows[15].gamesEven}</th>
    <th>${APIS.standings[0].rows[15].gamesLost}</th>
    <th>${APIS.standings[0].rows[15].points}</th>
    </tr>
    
    
    <tr>
    <th>${APIS.standings[0].rows[16].position}</th>
    <th><img class="scorelogo" src="https://imagecache.365scores.com/image/upload/f_png,w_24,h_24,c_limit,q_auto:eco,dpr_3,d_Competitors:default1.png/v${APIS.standings[0].rows[16].competitor.imageVersion}/Competitors/${APIS.standings[0].rows[16].competitor.id}"/>${APIS.standings[0].rows[16].competitor.name}</th>
    <th>${APIS.standings[0].rows[16].gamePlayed}</th>
    <th>${APIS.standings[0].rows[16].gamesWon}</th>
    <th>${APIS.standings[0].rows[16].gamesEven}</th>
    <th>${APIS.standings[0].rows[16].gamesLost}</th>
    <th>${APIS.standings[0].rows[16].points}</th>
    </tr>
    
    
    <tr>
    <th>${APIS.standings[0].rows[17].position}</th>
    <th><img class="scorelogo" src="https://imagecache.365scores.com/image/upload/f_png,w_24,h_24,c_limit,q_auto:eco,dpr_3,d_Competitors:default1.png/v${APIS.standings[0].rows[17].competitor.imageVersion}/Competitors/${APIS.standings[0].rows[17].competitor.id}"/>${APIS.standings[0].rows[17].competitor.name}</th>
    <th>${APIS.standings[0].rows[17].gamePlayed}</th>
    <th>${APIS.standings[0].rows[17].gamesWon}</th>
    <th>${APIS.standings[0].rows[17].gamesEven}</th>
    <th>${APIS.standings[0].rows[17].gamesLost}</th>
    <th>${APIS.standings[0].rows[17].points}</th>
    </tr>
    
    
    <tr>
    <th>${APIS.standings[0].rows[18].position}</th>
    <th><img class="scorelogo" src="https://imagecache.365scores.com/image/upload/f_png,w_24,h_24,c_limit,q_auto:eco,dpr_3,d_Competitors:default1.png/v${APIS.standings[0].rows[18].competitor.imageVersion}/Competitors/${APIS.standings[0].rows[18].competitor.id}"/>${APIS.standings[0].rows[18].competitor.name}</th>
    <th>${APIS.standings[0].rows[18].gamePlayed}</th>
    <th>${APIS.standings[0].rows[18].gamesWon}</th>
    <th>${APIS.standings[0].rows[18].gamesEven}</th>
    <th>${APIS.standings[0].rows[18].gamesLost}</th>
    <th>${APIS.standings[0].rows[18].points}</th>
    </tr>
    
    
    <tr>
    <th>${APIS.standings[0].rows[19].position}</th>
    <th><img class="scorelogo" src="https://imagecache.365scores.com/image/upload/f_png,w_24,h_24,c_limit,q_auto:eco,dpr_3,d_Competitors:default1.png/v${APIS.standings[0].rows[19].competitor.imageVersion}/Competitors/${APIS.standings[0].rows[19].competitor.id}"/>${APIS.standings[0].rows[19].competitor.name}</th>
    <th>${APIS.standings[0].rows[19].gamePlayed}</th>
    <th>${APIS.standings[0].rows[19].gamesWon}</th>
    <th>${APIS.standings[0].rows[19].gamesEven}</th>
    <th>${APIS.standings[0].rows[19].gamesLost}</th>
    <th>${APIS.standings[0].rows[19].points}</th>
    </tr>
    
    
    </tbody>
    </table>`;

    const RECONFIGG = await fetch(
        "https://webws.365scores.com/web/stats/?appTypeId=5&langId=27&timezoneName=Africa/Cairo&userCountryId=131&competition=17"
      ),
      APISGoals = await RECONFIGG.json();

    Goals.innerHTML = `
    
    <div class="TopLeagia"> <img src="https://imagecache.365scores.com/image/upload/f_png,w_68,h_68,c_limit,q_auto:eco,dpr_2,d_Countries:Round:1.png/v${APIS.competitions[0].imageVersion}/Competitions/light/${APIS.competitions[0].id}"/>${APIS.competitions[0].name}</div>
    <div class="Gooals">
    <div class="topthree">
    <div class="topim">
    <div class="One">2</div>
    <img src="https://imagecache.365scores.com/image/upload/f_png,w_80,h_80,c_limit,q_auto:eco,dpr_2,d_Athletes:default.png,r_max,c_thumb,g_face,z_0.65/v${APISGoals.stats[0].rows[1].entity.imgVer}/Athletes/${APISGoals.stats[0].rows[1].entity.id}"/>
    <span class="Goali">${APISGoals.stats[0].rows[1].stats[0].value}</span>
    <span class="nameplyr">${APISGoals.stats[0].rows[1].entity.name}</span>
    <span class="cuping">${APISGoals.stats[0].rows[1].entity.positionName}</span>
    </div>
    <div class="topim">
    <div class="One">1</div>
    <img src="https://imagecache.365scores.com/image/upload/f_png,w_80,h_80,c_limit,q_auto:eco,dpr_2,d_Athletes:default.png,r_max,c_thumb,g_face,z_0.65/v${APISGoals.stats[0].rows[0].entity.imgVer}/Athletes/${APISGoals.stats[0].rows[0].entity.id}"/>
    <span class="Goali">${APISGoals.stats[0].rows[0].stats[0].value}</span>
    <span class="nameplyr">${APISGoals.stats[0].rows[0].entity.name}</span>
    <span class="cuping">${APISGoals.stats[0].rows[0].entity.positionName}</span>
    </div>
    <div class="topim">
    <div class="One">3</div>
    <img src="https://imagecache.365scores.com/image/upload/f_png,w_80,h_80,c_limit,q_auto:eco,dpr_2,d_Athletes:default.png,r_max,c_thumb,g_face,z_0.65/v${APISGoals.stats[0].rows[2].entity.imgVer}/Athletes/${APISGoals.stats[0].rows[2].entity.id}"/>
    <span class="Goali">${APISGoals.stats[0].rows[2].stats[0].value}</span>
    <span class="nameplyr">${APISGoals.stats[0].rows[2].entity.name}</span>
    <span class="cuping">${APISGoals.stats[0].rows[2].entity.positionName}</span>
    </div>
    </div>
    
    
    <div class="tabolla">
    <div class="tabollaintro" style="font-size: 20px  !important;padding: 5px 12px;border-radius: 15px;">
    <span class="nameplyr">صورة اللاعب</span>
    <span class="nameplyr">اسم اللاعب</span>
    <span class="cuping">الصفة</span>
    <span class="cuping">الاهداف</span>
    </div>
    
    <div class="tabollaintro">
    <img src="https://imagecache.365scores.com/image/upload/f_png,w_80,h_80,c_limit,q_auto:eco,dpr_2,d_Athletes:default.png,r_max,c_thumb,g_face,z_0.65/v${APISGoals.stats[0].rows[3].entity.imgVer}/Athletes/${APISGoals.stats[0].rows[3].entity.id}"/>
    <span class="nameplyr">${APISGoals.stats[0].rows[3].entity.name}</span>
    <span class="cuping">${APISGoals.stats[0].rows[3].entity.positionName}</span>
    <span class="Goali">${APISGoals.stats[0].rows[3].stats[0].value}</span>
    </div>
    
    <div class="tabollaintro">
    <img src="https://imagecache.365scores.com/image/upload/f_png,w_80,h_80,c_limit,q_auto:eco,dpr_2,d_Athletes:default.png,r_max,c_thumb,g_face,z_0.65/v${APISGoals.stats[0].rows[4].entity.imgVer}/Athletes/${APISGoals.stats[0].rows[4].entity.id}"/>
    <span class="nameplyr">${APISGoals.stats[0].rows[4].entity.name}</span>
    <span class="cuping">${APISGoals.stats[0].rows[4].entity.positionName}</span>
    <span class="Goali">${APISGoals.stats[0].rows[4].stats[0].value}</span>
    </div>
    
    <div class="tabollaintro">
    <img src="https://imagecache.365scores.com/image/upload/f_png,w_80,h_80,c_limit,q_auto:eco,dpr_2,d_Athletes:default.png,r_max,c_thumb,g_face,z_0.65/v${APISGoals.stats[0].rows[5].entity.imgVer}/Athletes/${APISGoals.stats[0].rows[5].entity.id}"/>
    <span class="nameplyr">${APISGoals.stats[0].rows[5].entity.name}</span>
    <span class="cuping">${APISGoals.stats[0].rows[5].entity.positionName}</span>
    <span class="Goali">${APISGoals.stats[0].rows[5].stats[0].value}</span>
    </div>
    
    <div class="tabollaintro">
    <img src="https://imagecache.365scores.com/image/upload/f_png,w_80,h_80,c_limit,q_auto:eco,dpr_2,d_Athletes:default.png,r_max,c_thumb,g_face,z_0.65/v${APISGoals.stats[0].rows[6].entity.imgVer}/Athletes/${APISGoals.stats[0].rows[6].entity.id}"/>
    <span class="nameplyr">${APISGoals.stats[0].rows[6].entity.name}</span>
    <span class="cuping">${APISGoals.stats[0].rows[6].entity.positionName}</span>
    <span class="Goali">${APISGoals.stats[0].rows[6].stats[0].value}</span>
    </div>
    
    <div class="tabollaintro">
    <img src="https://imagecache.365scores.com/image/upload/f_png,w_80,h_80,c_limit,q_auto:eco,dpr_2,d_Athletes:default.png,r_max,c_thumb,g_face,z_0.65/v${APISGoals.stats[0].rows[7].entity.imgVer}/Athletes/${APISGoals.stats[0].rows[7].entity.id}"/>
    <span class="nameplyr">${APISGoals.stats[0].rows[7].entity.name}</span>
    <span class="cuping">${APISGoals.stats[0].rows[7].entity.positionName}</span>
    <span class="Goali">${APISGoals.stats[0].rows[7].stats[0].value}</span>
    </div>
    
    <div class="tabollaintro">
    <img src="https://imagecache.365scores.com/image/upload/f_png,w_80,h_80,c_limit,q_auto:eco,dpr_2,d_Athletes:default.png,r_max,c_thumb,g_face,z_0.65/v${APISGoals.stats[0].rows[8].entity.imgVer}/Athletes/${APISGoals.stats[0].rows[8].entity.id}"/>
    <span class="nameplyr">${APISGoals.stats[0].rows[8].entity.name}</span>
    <span class="cuping">${APISGoals.stats[0].rows[8].entity.positionName}</span>
    <span class="Goali">${APISGoals.stats[0].rows[8].stats[0].value}</span>
    </div>
    
    <div class="tabollaintro">
    <img src="https://imagecache.365scores.com/image/upload/f_png,w_80,h_80,c_limit,q_auto:eco,dpr_2,d_Athletes:default.png,r_max,c_thumb,g_face,z_0.65/v${APISGoals.stats[0].rows[9].entity.imgVer}/Athletes/${APISGoals.stats[0].rows[9].entity.id}"/>
    <span class="nameplyr">${APISGoals.stats[0].rows[9].entity.name}</span>
    <span class="cuping">${APISGoals.stats[0].rows[9].entity.positionName}</span>
    <span class="Goali">${APISGoals.stats[0].rows[9].stats[0].value}</span>
    </div>
    
    <div class="tabollaintro">
    <img src="https://imagecache.365scores.com/image/upload/f_png,w_80,h_80,c_limit,q_auto:eco,dpr_2,d_Athletes:default.png,r_max,c_thumb,g_face,z_0.65/v${APISGoals.stats[0].rows[10].entity.imgVer}/Athletes/${APISGoals.stats[0].rows[10].entity.id}"/>
    <span class="nameplyr">${APISGoals.stats[0].rows[10].entity.name}</span>
    <span class="cuping">${APISGoals.stats[0].rows[10].entity.positionName}</span>
    <span class="Goali">${APISGoals.stats[0].rows[10].stats[0].value}</span>
    </div>
    
    <div class="tabollaintro">
    <img src="https://imagecache.365scores.com/image/upload/f_png,w_80,h_80,c_limit,q_auto:eco,dpr_2,d_Athletes:default.png,r_max,c_thumb,g_face,z_0.65/v${APISGoals.stats[0].rows[11].entity.imgVer}/Athletes/${APISGoals.stats[0].rows[11].entity.id}"/>
    <span class="nameplyr">${APISGoals.stats[0].rows[11].entity.name}</span>
    <span class="cuping">${APISGoals.stats[0].rows[11].entity.positionName}</span>
    <span class="Goali">${APISGoals.stats[0].rows[11].stats[0].value}</span>
    </div>
    
    <div class="tabollaintro">
    <img src="https://imagecache.365scores.com/image/upload/f_png,w_80,h_80,c_limit,q_auto:eco,dpr_2,d_Athletes:default.png,r_max,c_thumb,g_face,z_0.65/v${APISGoals.stats[0].rows[12].entity.imgVer}/Athletes/${APISGoals.stats[0].rows[12].entity.id}"/>
    <span class="nameplyr">${APISGoals.stats[0].rows[12].entity.name}</span>
    <span class="cuping">${APISGoals.stats[0].rows[12].entity.positionName}</span>
    <span class="Goali">${APISGoals.stats[0].rows[12].stats[0].value}</span>
    </div>
    
    <div class="tabollaintro">
    <img src="https://imagecache.365scores.com/image/upload/f_png,w_80,h_80,c_limit,q_auto:eco,dpr_2,d_Athletes:default.png,r_max,c_thumb,g_face,z_0.65/v${APISGoals.stats[0].rows[13].entity.imgVer}/Athletes/${APISGoals.stats[0].rows[13].entity.id}"/>
    <span class="nameplyr">${APISGoals.stats[0].rows[13].entity.name}</span>
    <span class="cuping">${APISGoals.stats[0].rows[13].entity.positionName}</span>
    <span class="Goali">${APISGoals.stats[0].rows[13].stats[0].value}</span>
    </div>
    
    <div class="tabollaintro">
    <img src="https://imagecache.365scores.com/image/upload/f_png,w_80,h_80,c_limit,q_auto:eco,dpr_2,d_Athletes:default.png,r_max,c_thumb,g_face,z_0.65/v${APISGoals.stats[0].rows[14].entity.imgVer}/Athletes/${APISGoals.stats[0].rows[14].entity.id}"/>
    <span class="nameplyr">${APISGoals.stats[0].rows[14].entity.name}</span>
    <span class="cuping">${APISGoals.stats[0].rows[14].entity.positionName}</span>
    <span class="Goali">${APISGoals.stats[0].rows[14].stats[0].value}</span>
    </div>
    </div>
    </div>`;
  } else {
  }

  if (MO) {
    const RECONFIG = await fetch(
        "https://webws.365scores.com/web/standings/?appTypeId=5&langId=27&timezoneName=Africa/Cairo&userCountryId=131&competitions=557&live=false&stageNum=1&seasonNum=63"
      ),
      APIS = await RECONFIG.json();

    MO.innerHTML = `
    <div class="TopLeagia"> <img src="https://imagecache.365scores.com/image/upload/f_png,w_68,h_68,c_limit,q_auto:eco,dpr_2,d_Countries:Round:1.png/v${APIS.competitions[0].imageVersion}/Competitions/light/${APIS.competitions[0].id}"/>${APIS.competitions[0].name}</div>
    <table class="table">
    <tbody class="tbody">
    <tr class="tr">
    <th></th>
    <th style="text-align: center;">فريق</th>
    <th>لعب</th>
    <th>فاز</th>
    <th>تعادل</th>
    <th>خسر</th>
    <th>نقاط</th>
    </tr>
    
    <tr>
    <th>${APIS.standings[0].rows[0].position}</th>
    <th><img class="scorelogo" src="https://imagecache.365scores.com/image/upload/f_png,w_24,h_24,c_limit,q_auto:eco,dpr_3,d_Competitors:default1.png/v${APIS.standings[0].rows[0].competitor.imageVersion}/Competitors/${APIS.standings[0].rows[0].competitor.id}"/> ${APIS.standings[0].rows[0].competitor.name}</th>
    <th>${APIS.standings[0].rows[0].gamePlayed}</th>
    <th>${APIS.standings[0].rows[0].gamesWon}</th>
    <th>${APIS.standings[0].rows[0].gamesEven}</th>
    <th>${APIS.standings[0].rows[0].gamesLost}</th>
    <th>${APIS.standings[0].rows[0].points}</th>
    </tr>
    
    <tr>
    <th>${APIS.standings[0].rows[1].position}</th>
    <th><img class="scorelogo" src="https://imagecache.365scores.com/image/upload/f_png,w_24,h_24,c_limit,q_auto:eco,dpr_3,d_Competitors:default1.png/v${APIS.standings[0].rows[1].competitor.imageVersion}/Competitors/${APIS.standings[0].rows[1].competitor.id}"/>${APIS.standings[0].rows[1].competitor.name}</th>
    <th>${APIS.standings[0].rows[1].gamePlayed}</th>
    <th>${APIS.standings[0].rows[1].gamesWon}</th>
    <th>${APIS.standings[0].rows[1].gamesEven}</th>
    <th>${APIS.standings[0].rows[1].gamesLost}</th>
    <th>${APIS.standings[0].rows[1].points}</th>
    </tr>
    
    <tr>
    <th>${APIS.standings[0].rows[2].position}</th>
    <th><img class="scorelogo" src="https://imagecache.365scores.com/image/upload/f_png,w_24,h_24,c_limit,q_auto:eco,dpr_3,d_Competitors:default1.png/v${APIS.standings[0].rows[2].competitor.imageVersion}/Competitors/${APIS.standings[0].rows[2].competitor.id}"/>${APIS.standings[0].rows[2].competitor.name}</th>
    <th>${APIS.standings[0].rows[2].gamePlayed}</th>
    <th>${APIS.standings[0].rows[2].gamesWon}</th>
    <th>${APIS.standings[0].rows[2].gamesEven}</th>
    <th>${APIS.standings[0].rows[2].gamesLost}</th>
    <th>${APIS.standings[0].rows[2].points}</th>
    </tr>
    
    <tr>
    <th>${APIS.standings[0].rows[3].position}</th>
    <th><img class="scorelogo" src="https://imagecache.365scores.com/image/upload/f_png,w_24,h_24,c_limit,q_auto:eco,dpr_3,d_Competitors:default1.png/v${APIS.standings[0].rows[3].competitor.imageVersion}/Competitors/${APIS.standings[0].rows[3].competitor.id}"/>${APIS.standings[0].rows[3].competitor.name}</th>
    <th>${APIS.standings[0].rows[3].gamePlayed}</th>
    <th>${APIS.standings[0].rows[3].gamesWon}</th>
    <th>${APIS.standings[0].rows[3].gamesEven}</th>
    <th>${APIS.standings[0].rows[3].gamesLost}</th>
    <th>${APIS.standings[0].rows[3].points}</th>
    </tr>
    
    <tr>
    <th>${APIS.standings[0].rows[4].position}</th>
    <th><img class="scorelogo" src="https://imagecache.365scores.com/image/upload/f_png,w_24,h_24,c_limit,q_auto:eco,dpr_3,d_Competitors:default1.png/v${APIS.standings[0].rows[4].competitor.imageVersion}/Competitors/${APIS.standings[0].rows[4].competitor.id}"/>${APIS.standings[0].rows[4].competitor.name}</th>
    <th>${APIS.standings[0].rows[4].gamePlayed}</th>
    <th>${APIS.standings[0].rows[4].gamesWon}</th>
    <th>${APIS.standings[0].rows[4].gamesEven}</th>
    <th>${APIS.standings[0].rows[4].gamesLost}</th>
    <th>${APIS.standings[0].rows[4].points}</th>
    </tr>
    
    <tr>
    <th>${APIS.standings[0].rows[5].position}</th>
    <th><img class="scorelogo" src="https://imagecache.365scores.com/image/upload/f_png,w_24,h_24,c_limit,q_auto:eco,dpr_3,d_Competitors:default1.png/v${APIS.standings[0].rows[5].competitor.imageVersion}/Competitors/${APIS.standings[0].rows[5].competitor.id}"/>${APIS.standings[0].rows[5].competitor.name}</th>
    <th>${APIS.standings[0].rows[5].gamePlayed}</th>
    <th>${APIS.standings[0].rows[5].gamesWon}</th>
    <th>${APIS.standings[0].rows[5].gamesEven}</th>
    <th>${APIS.standings[0].rows[5].gamesLost}</th>
    <th>${APIS.standings[0].rows[5].points}</th>
    </tr>
    
    <tr>
    <th>${APIS.standings[0].rows[6].position}</th>
    <th><img class="scorelogo" src="https://imagecache.365scores.com/image/upload/f_png,w_24,h_24,c_limit,q_auto:eco,dpr_3,d_Competitors:default1.png/v${APIS.standings[0].rows[6].competitor.imageVersion}/Competitors/${APIS.standings[0].rows[6].competitor.id}"/>${APIS.standings[0].rows[6].competitor.name}</th>
    <th>${APIS.standings[0].rows[6].gamePlayed}</th>
    <th>${APIS.standings[0].rows[6].gamesWon}</th>
    <th>${APIS.standings[0].rows[6].gamesEven}</th>
    <th>${APIS.standings[0].rows[6].gamesLost}</th>
    <th>${APIS.standings[0].rows[6].points}</th>
    </tr>
    
    <tr>
    <th>${APIS.standings[0].rows[7].position}</th>
    <th><img class="scorelogo" src="https://imagecache.365scores.com/image/upload/f_png,w_24,h_24,c_limit,q_auto:eco,dpr_3,d_Competitors:default1.png/v${APIS.standings[0].rows[7].competitor.imageVersion}/Competitors/${APIS.standings[0].rows[7].competitor.id}"/>${APIS.standings[0].rows[7].competitor.name}</th>
    <th>${APIS.standings[0].rows[7].gamePlayed}</th>
    <th>${APIS.standings[0].rows[7].gamesWon}</th>
    <th>${APIS.standings[0].rows[7].gamesEven}</th>
    <th>${APIS.standings[0].rows[7].gamesLost}</th>
    <th>${APIS.standings[0].rows[7].points}</th>
    </tr>
    
    <tr>
    <th>${APIS.standings[0].rows[8].position}</th>
    <th><img class="scorelogo" src="https://imagecache.365scores.com/image/upload/f_png,w_24,h_24,c_limit,q_auto:eco,dpr_3,d_Competitors:default1.png/v${APIS.standings[0].rows[8].competitor.imageVersion}/Competitors/${APIS.standings[0].rows[8].competitor.id}"/>${APIS.standings[0].rows[8].competitor.name}</th>
    <th>${APIS.standings[0].rows[8].gamePlayed}</th>
    <th>${APIS.standings[0].rows[8].gamesWon}</th>
    <th>${APIS.standings[0].rows[8].gamesEven}</th>
    <th>${APIS.standings[0].rows[8].gamesLost}</th>
    <th>${APIS.standings[0].rows[8].points}</th>
    </tr>
    
    <tr>
    <th>${APIS.standings[0].rows[9].position}</th>
    <th><img class="scorelogo" src="https://imagecache.365scores.com/image/upload/f_png,w_24,h_24,c_limit,q_auto:eco,dpr_3,d_Competitors:default1.png/v${APIS.standings[0].rows[9].competitor.imageVersion}/Competitors/${APIS.standings[0].rows[9].competitor.id}"/>${APIS.standings[0].rows[9].competitor.name}</th>
    <th>${APIS.standings[0].rows[9].gamePlayed}</th>
    <th>${APIS.standings[0].rows[9].gamesWon}</th>
    <th>${APIS.standings[0].rows[9].gamesEven}</th>
    <th>${APIS.standings[0].rows[9].gamesLost}</th>
    <th>${APIS.standings[0].rows[9].points}</th>
    </tr>
    
    <tr>
    <th>${APIS.standings[0].rows[10].position}</th>
    <th><img class="scorelogo" src="https://imagecache.365scores.com/image/upload/f_png,w_24,h_24,c_limit,q_auto:eco,dpr_3,d_Competitors:default1.png/v${APIS.standings[0].rows[10].competitor.imageVersion}/Competitors/${APIS.standings[0].rows[10].competitor.id}"/>${APIS.standings[0].rows[10].competitor.name}</th>
    <th>${APIS.standings[0].rows[10].gamePlayed}</th>
    <th>${APIS.standings[0].rows[10].gamesWon}</th>
    <th>${APIS.standings[0].rows[10].gamesEven}</th>
    <th>${APIS.standings[0].rows[10].gamesLost}</th>
    <th>${APIS.standings[0].rows[10].points}</th>
    </tr>
    
    <tr>
    <th>${APIS.standings[0].rows[11].position}</th>
    <th><img class="scorelogo" src="https://imagecache.365scores.com/image/upload/f_png,w_24,h_24,c_limit,q_auto:eco,dpr_3,d_Competitors:default1.png/v${APIS.standings[0].rows[11].competitor.imageVersion}/Competitors/${APIS.standings[0].rows[11].competitor.id}"/>${APIS.standings[0].rows[11].competitor.name}</th>
    <th>${APIS.standings[0].rows[11].gamePlayed}</th>
    <th>${APIS.standings[0].rows[11].gamesWon}</th>
    <th>${APIS.standings[0].rows[11].gamesEven}</th>
    <th>${APIS.standings[0].rows[11].gamesLost}</th>
    <th>${APIS.standings[0].rows[11].points}</th>
    </tr>
    
    
    <tr>
    <th>${APIS.standings[0].rows[12].position}</th>
    <th><img class="scorelogo" src="https://imagecache.365scores.com/image/upload/f_png,w_24,h_24,c_limit,q_auto:eco,dpr_3,d_Competitors:default1.png/v${APIS.standings[0].rows[12].competitor.imageVersion}/Competitors/${APIS.standings[0].rows[12].competitor.id}"/>${APIS.standings[0].rows[12].competitor.name}</th>
    <th>${APIS.standings[0].rows[12].gamePlayed}</th>
    <th>${APIS.standings[0].rows[12].gamesWon}</th>
    <th>${APIS.standings[0].rows[12].gamesEven}</th>
    <th>${APIS.standings[0].rows[12].gamesLost}</th>
    <th>${APIS.standings[0].rows[12].points}</th>
    </tr>
    
    
    <tr>
    <th>${APIS.standings[0].rows[13].position}</th>
    <th><img class="scorelogo" src="https://imagecache.365scores.com/image/upload/f_png,w_24,h_24,c_limit,q_auto:eco,dpr_3,d_Competitors:default1.png/v${APIS.standings[0].rows[13].competitor.imageVersion}/Competitors/${APIS.standings[0].rows[13].competitor.id}"/>${APIS.standings[0].rows[13].competitor.name}</th>
    <th>${APIS.standings[0].rows[13].gamePlayed}</th>
    <th>${APIS.standings[0].rows[13].gamesWon}</th>
    <th>${APIS.standings[0].rows[13].gamesEven}</th>
    <th>${APIS.standings[0].rows[13].gamesLost}</th>
    <th>${APIS.standings[0].rows[13].points}</th>
    </tr>
    
    
    <tr>
    <th>${APIS.standings[0].rows[14].position}</th>
    <th><img class="scorelogo" src="https://imagecache.365scores.com/image/upload/f_png,w_24,h_24,c_limit,q_auto:eco,dpr_3,d_Competitors:default1.png/v${APIS.standings[0].rows[14].competitor.imageVersion}/Competitors/${APIS.standings[0].rows[14].competitor.id}"/>${APIS.standings[0].rows[14].competitor.name}</th>
    <th>${APIS.standings[0].rows[14].gamePlayed}</th>
    <th>${APIS.standings[0].rows[14].gamesWon}</th>
    <th>${APIS.standings[0].rows[14].gamesEven}</th>
    <th>${APIS.standings[0].rows[14].gamesLost}</th>
    <th>${APIS.standings[0].rows[14].points}</th>
    </tr>
    
    
    <tr>
    <th>${APIS.standings[0].rows[15].position}</th>
    <th><img class="scorelogo" src="https://imagecache.365scores.com/image/upload/f_png,w_24,h_24,c_limit,q_auto:eco,dpr_3,d_Competitors:default1.png/v${APIS.standings[0].rows[15].competitor.imageVersion}/Competitors/${APIS.standings[0].rows[15].competitor.id}"/>${APIS.standings[0].rows[15].competitor.name}</th>
    <th>${APIS.standings[0].rows[15].gamePlayed}</th>
    <th>${APIS.standings[0].rows[15].gamesWon}</th>
    <th>${APIS.standings[0].rows[15].gamesEven}</th>
    <th>${APIS.standings[0].rows[15].gamesLost}</th>
    <th>${APIS.standings[0].rows[15].points}</th>
    </tr>
    
    
    </tbody>
    </table>`;

    const RECONFIGG = await fetch(
        "https://webws.365scores.com/web/stats/?appTypeId=5&langId=27&timezoneName=Africa/Cairo&userCountryId=131&competition=557"
      ),
      APISGoals = await RECONFIGG.json();

    Goals.innerHTML = `
    
    <div class="TopLeagia"> <img src="https://imagecache.365scores.com/image/upload/f_png,w_68,h_68,c_limit,q_auto:eco,dpr_2,d_Countries:Round:1.png/v${APIS.competitions[0].imageVersion}/Competitions/light/${APIS.competitions[0].id}"/>${APIS.competitions[0].name}</div>
    <div class="Gooals">
    <div class="topthree">
    <div class="topim">
    <div class="One">2</div>
    <img src="https://imagecache.365scores.com/image/upload/f_png,w_80,h_80,c_limit,q_auto:eco,dpr_2,d_Athletes:default.png,r_max,c_thumb,g_face,z_0.65/v${APISGoals.stats[0].rows[1].entity.imgVer}/Athletes/${APISGoals.stats[0].rows[1].entity.id}"/>
    <span class="Goali">${APISGoals.stats[0].rows[1].stats[0].value}</span>
    <span class="nameplyr">${APISGoals.stats[0].rows[1].entity.name}</span>
    <span class="cuping">${APISGoals.stats[0].rows[1].entity.positionName}</span>
    </div>
    <div class="topim">
    <div class="One">1</div>
    <img src="https://imagecache.365scores.com/image/upload/f_png,w_80,h_80,c_limit,q_auto:eco,dpr_2,d_Athletes:default.png,r_max,c_thumb,g_face,z_0.65/v${APISGoals.stats[0].rows[0].entity.imgVer}/Athletes/${APISGoals.stats[0].rows[0].entity.id}"/>
    <span class="Goali">${APISGoals.stats[0].rows[0].stats[0].value}</span>
    <span class="nameplyr">${APISGoals.stats[0].rows[0].entity.name}</span>
    <span class="cuping">${APISGoals.stats[0].rows[0].entity.positionName}</span>
    </div>
    <div class="topim">
    <div class="One">3</div>
    <img src="https://imagecache.365scores.com/image/upload/f_png,w_80,h_80,c_limit,q_auto:eco,dpr_2,d_Athletes:default.png,r_max,c_thumb,g_face,z_0.65/v${APISGoals.stats[0].rows[2].entity.imgVer}/Athletes/${APISGoals.stats[0].rows[2].entity.id}"/>
    <span class="Goali">${APISGoals.stats[0].rows[2].stats[0].value}</span>
    <span class="nameplyr">${APISGoals.stats[0].rows[2].entity.name}</span>
    <span class="cuping">${APISGoals.stats[0].rows[2].entity.positionName}</span>
    </div>
    </div>
    
    
    <div class="tabolla">
    <div class="tabollaintro" style="font-size: 20px  !important;padding: 5px 12px;border-radius: 15px;">
    <span class="nameplyr">صورة اللاعب</span>
    <span class="nameplyr">اسم اللاعب</span>
    <span class="cuping">الصفة</span>
    <span class="cuping">الاهداف</span>
    </div>
    
    <div class="tabollaintro">
    <img src="https://imagecache.365scores.com/image/upload/f_png,w_80,h_80,c_limit,q_auto:eco,dpr_2,d_Athletes:default.png,r_max,c_thumb,g_face,z_0.65/v${APISGoals.stats[0].rows[3].entity.imgVer}/Athletes/${APISGoals.stats[0].rows[3].entity.id}"/>
    <span class="nameplyr">${APISGoals.stats[0].rows[3].entity.name}</span>
    <span class="cuping">${APISGoals.stats[0].rows[3].entity.positionName}</span>
    <span class="Goali">${APISGoals.stats[0].rows[3].stats[0].value}</span>
    </div>
    
    <div class="tabollaintro">
    <img src="https://imagecache.365scores.com/image/upload/f_png,w_80,h_80,c_limit,q_auto:eco,dpr_2,d_Athletes:default.png,r_max,c_thumb,g_face,z_0.65/v${APISGoals.stats[0].rows[4].entity.imgVer}/Athletes/${APISGoals.stats[0].rows[4].entity.id}"/>
    <span class="nameplyr">${APISGoals.stats[0].rows[4].entity.name}</span>
    <span class="cuping">${APISGoals.stats[0].rows[4].entity.positionName}</span>
    <span class="Goali">${APISGoals.stats[0].rows[4].stats[0].value}</span>
    </div>
    
    <div class="tabollaintro">
    <img src="https://imagecache.365scores.com/image/upload/f_png,w_80,h_80,c_limit,q_auto:eco,dpr_2,d_Athletes:default.png,r_max,c_thumb,g_face,z_0.65/v${APISGoals.stats[0].rows[5].entity.imgVer}/Athletes/${APISGoals.stats[0].rows[5].entity.id}"/>
    <span class="nameplyr">${APISGoals.stats[0].rows[5].entity.name}</span>
    <span class="cuping">${APISGoals.stats[0].rows[5].entity.positionName}</span>
    <span class="Goali">${APISGoals.stats[0].rows[5].stats[0].value}</span>
    </div>
    
    <div class="tabollaintro">
    <img src="https://imagecache.365scores.com/image/upload/f_png,w_80,h_80,c_limit,q_auto:eco,dpr_2,d_Athletes:default.png,r_max,c_thumb,g_face,z_0.65/v${APISGoals.stats[0].rows[6].entity.imgVer}/Athletes/${APISGoals.stats[0].rows[6].entity.id}"/>
    <span class="nameplyr">${APISGoals.stats[0].rows[6].entity.name}</span>
    <span class="cuping">${APISGoals.stats[0].rows[6].entity.positionName}</span>
    <span class="Goali">${APISGoals.stats[0].rows[6].stats[0].value}</span>
    </div>
    
    <div class="tabollaintro">
    <img src="https://imagecache.365scores.com/image/upload/f_png,w_80,h_80,c_limit,q_auto:eco,dpr_2,d_Athletes:default.png,r_max,c_thumb,g_face,z_0.65/v${APISGoals.stats[0].rows[7].entity.imgVer}/Athletes/${APISGoals.stats[0].rows[7].entity.id}"/>
    <span class="nameplyr">${APISGoals.stats[0].rows[7].entity.name}</span>
    <span class="cuping">${APISGoals.stats[0].rows[7].entity.positionName}</span>
    <span class="Goali">${APISGoals.stats[0].rows[7].stats[0].value}</span>
    </div>
    
    <div class="tabollaintro">
    <img src="https://imagecache.365scores.com/image/upload/f_png,w_80,h_80,c_limit,q_auto:eco,dpr_2,d_Athletes:default.png,r_max,c_thumb,g_face,z_0.65/v${APISGoals.stats[0].rows[8].entity.imgVer}/Athletes/${APISGoals.stats[0].rows[8].entity.id}"/>
    <span class="nameplyr">${APISGoals.stats[0].rows[8].entity.name}</span>
    <span class="cuping">${APISGoals.stats[0].rows[8].entity.positionName}</span>
    <span class="Goali">${APISGoals.stats[0].rows[8].stats[0].value}</span>
    </div>
    
    <div class="tabollaintro">
    <img src="https://imagecache.365scores.com/image/upload/f_png,w_80,h_80,c_limit,q_auto:eco,dpr_2,d_Athletes:default.png,r_max,c_thumb,g_face,z_0.65/v${APISGoals.stats[0].rows[9].entity.imgVer}/Athletes/${APISGoals.stats[0].rows[9].entity.id}"/>
    <span class="nameplyr">${APISGoals.stats[0].rows[9].entity.name}</span>
    <span class="cuping">${APISGoals.stats[0].rows[9].entity.positionName}</span>
    <span class="Goali">${APISGoals.stats[0].rows[9].stats[0].value}</span>
    </div>
    
    <div class="tabollaintro">
    <img src="https://imagecache.365scores.com/image/upload/f_png,w_80,h_80,c_limit,q_auto:eco,dpr_2,d_Athletes:default.png,r_max,c_thumb,g_face,z_0.65/v${APISGoals.stats[0].rows[10].entity.imgVer}/Athletes/${APISGoals.stats[0].rows[10].entity.id}"/>
    <span class="nameplyr">${APISGoals.stats[0].rows[10].entity.name}</span>
    <span class="cuping">${APISGoals.stats[0].rows[10].entity.positionName}</span>
    <span class="Goali">${APISGoals.stats[0].rows[10].stats[0].value}</span>
    </div>
    
    <div class="tabollaintro">
    <img src="https://imagecache.365scores.com/image/upload/f_png,w_80,h_80,c_limit,q_auto:eco,dpr_2,d_Athletes:default.png,r_max,c_thumb,g_face,z_0.65/v${APISGoals.stats[0].rows[11].entity.imgVer}/Athletes/${APISGoals.stats[0].rows[11].entity.id}"/>
    <span class="nameplyr">${APISGoals.stats[0].rows[11].entity.name}</span>
    <span class="cuping">${APISGoals.stats[0].rows[11].entity.positionName}</span>
    <span class="Goali">${APISGoals.stats[0].rows[11].stats[0].value}</span>
    </div>
    
    <div class="tabollaintro">
    <img src="https://imagecache.365scores.com/image/upload/f_png,w_80,h_80,c_limit,q_auto:eco,dpr_2,d_Athletes:default.png,r_max,c_thumb,g_face,z_0.65/v${APISGoals.stats[0].rows[12].entity.imgVer}/Athletes/${APISGoals.stats[0].rows[12].entity.id}"/>
    <span class="nameplyr">${APISGoals.stats[0].rows[12].entity.name}</span>
    <span class="cuping">${APISGoals.stats[0].rows[12].entity.positionName}</span>
    <span class="Goali">${APISGoals.stats[0].rows[12].stats[0].value}</span>
    </div>
    
    <div class="tabollaintro">
    <img src="https://imagecache.365scores.com/image/upload/f_png,w_80,h_80,c_limit,q_auto:eco,dpr_2,d_Athletes:default.png,r_max,c_thumb,g_face,z_0.65/v${APISGoals.stats[0].rows[13].entity.imgVer}/Athletes/${APISGoals.stats[0].rows[13].entity.id}"/>
    <span class="nameplyr">${APISGoals.stats[0].rows[13].entity.name}</span>
    <span class="cuping">${APISGoals.stats[0].rows[13].entity.positionName}</span>
    <span class="Goali">${APISGoals.stats[0].rows[13].stats[0].value}</span>
    </div>
    
    <div class="tabollaintro">
    <img src="https://imagecache.365scores.com/image/upload/f_png,w_80,h_80,c_limit,q_auto:eco,dpr_2,d_Athletes:default.png,r_max,c_thumb,g_face,z_0.65/v${APISGoals.stats[0].rows[14].entity.imgVer}/Athletes/${APISGoals.stats[0].rows[14].entity.id}"/>
    <span class="nameplyr">${APISGoals.stats[0].rows[14].entity.name}</span>
    <span class="cuping">${APISGoals.stats[0].rows[14].entity.positionName}</span>
    <span class="Goali">${APISGoals.stats[0].rows[14].stats[0].value}</span>
    </div>
    </div>
    </div>`;
  } else {
  }

  if (EG) {
    const RECONFIG = await fetch(
        "https://webws.365scores.com/web/standings/?appTypeId=5&langId=27&timezoneName=Africa/Cairo&userCountryId=131&competitions=552&live=false&stageNum=1&seasonNum=69"
      ),
      APIS = await RECONFIG.json();

    EG.innerHTML = `
    <div class="TopLeagia"> <img src="https://imagecache.365scores.com/image/upload/f_png,w_68,h_68,c_limit,q_auto:eco,dpr_2,d_Countries:Round:1.png/v${APIS.competitions[0].imageVersion}/Competitions/light/${APIS.competitions[0].id}"/>${APIS.competitions[0].name}</div>
    <table class="table">
    <tbody class="tbody">
    <tr class="tr">
    <th></th>
    <th style="text-align: center;">فريق</th>
    <th>لعب</th>
    <th>فاز</th>
    <th>تعادل</th>
    <th>خسر</th>
    <th>نقاط</th>
    </tr>
    
    <tr>
    <th>${APIS.standings[0].rows[0].position}</th>
    <th><img class="scorelogo" src="https://imagecache.365scores.com/image/upload/f_png,w_24,h_24,c_limit,q_auto:eco,dpr_3,d_Competitors:default1.png/v${APIS.standings[0].rows[0].competitor.imageVersion}/Competitors/${APIS.standings[0].rows[0].competitor.id}"/> ${APIS.standings[0].rows[0].competitor.name}</th>
    <th>${APIS.standings[0].rows[0].gamePlayed}</th>
    <th>${APIS.standings[0].rows[0].gamesWon}</th>
    <th>${APIS.standings[0].rows[0].gamesEven}</th>
    <th>${APIS.standings[0].rows[0].gamesLost}</th>
    <th>${APIS.standings[0].rows[0].points}</th>
    </tr>
    
    <tr>
    <th>${APIS.standings[0].rows[1].position}</th>
    <th><img class="scorelogo" src="https://imagecache.365scores.com/image/upload/f_png,w_24,h_24,c_limit,q_auto:eco,dpr_3,d_Competitors:default1.png/v${APIS.standings[0].rows[1].competitor.imageVersion}/Competitors/${APIS.standings[0].rows[1].competitor.id}"/>${APIS.standings[0].rows[1].competitor.name}</th>
    <th>${APIS.standings[0].rows[1].gamePlayed}</th>
    <th>${APIS.standings[0].rows[1].gamesWon}</th>
    <th>${APIS.standings[0].rows[1].gamesEven}</th>
    <th>${APIS.standings[0].rows[1].gamesLost}</th>
    <th>${APIS.standings[0].rows[1].points}</th>
    </tr>
    
    <tr>
    <th>${APIS.standings[0].rows[2].position}</th>
    <th><img class="scorelogo" src="https://imagecache.365scores.com/image/upload/f_png,w_24,h_24,c_limit,q_auto:eco,dpr_3,d_Competitors:default1.png/v${APIS.standings[0].rows[2].competitor.imageVersion}/Competitors/${APIS.standings[0].rows[2].competitor.id}"/>${APIS.standings[0].rows[2].competitor.name}</th>
    <th>${APIS.standings[0].rows[2].gamePlayed}</th>
    <th>${APIS.standings[0].rows[2].gamesWon}</th>
    <th>${APIS.standings[0].rows[2].gamesEven}</th>
    <th>${APIS.standings[0].rows[2].gamesLost}</th>
    <th>${APIS.standings[0].rows[2].points}</th>
    </tr>
    
    <tr>
    <th>${APIS.standings[0].rows[3].position}</th>
    <th><img class="scorelogo" src="https://imagecache.365scores.com/image/upload/f_png,w_24,h_24,c_limit,q_auto:eco,dpr_3,d_Competitors:default1.png/v${APIS.standings[0].rows[3].competitor.imageVersion}/Competitors/${APIS.standings[0].rows[3].competitor.id}"/>${APIS.standings[0].rows[3].competitor.name}</th>
    <th>${APIS.standings[0].rows[3].gamePlayed}</th>
    <th>${APIS.standings[0].rows[3].gamesWon}</th>
    <th>${APIS.standings[0].rows[3].gamesEven}</th>
    <th>${APIS.standings[0].rows[3].gamesLost}</th>
    <th>${APIS.standings[0].rows[3].points}</th>
    </tr>
    
    <tr>
    <th>${APIS.standings[0].rows[4].position}</th>
    <th><img class="scorelogo" src="https://imagecache.365scores.com/image/upload/f_png,w_24,h_24,c_limit,q_auto:eco,dpr_3,d_Competitors:default1.png/v${APIS.standings[0].rows[4].competitor.imageVersion}/Competitors/${APIS.standings[0].rows[4].competitor.id}"/>${APIS.standings[0].rows[4].competitor.name}</th>
    <th>${APIS.standings[0].rows[4].gamePlayed}</th>
    <th>${APIS.standings[0].rows[4].gamesWon}</th>
    <th>${APIS.standings[0].rows[4].gamesEven}</th>
    <th>${APIS.standings[0].rows[4].gamesLost}</th>
    <th>${APIS.standings[0].rows[4].points}</th>
    </tr>
    
    <tr>
    <th>${APIS.standings[0].rows[5].position}</th>
    <th><img class="scorelogo" src="https://imagecache.365scores.com/image/upload/f_png,w_24,h_24,c_limit,q_auto:eco,dpr_3,d_Competitors:default1.png/v${APIS.standings[0].rows[5].competitor.imageVersion}/Competitors/${APIS.standings[0].rows[5].competitor.id}"/>${APIS.standings[0].rows[5].competitor.name}</th>
    <th>${APIS.standings[0].rows[5].gamePlayed}</th>
    <th>${APIS.standings[0].rows[5].gamesWon}</th>
    <th>${APIS.standings[0].rows[5].gamesEven}</th>
    <th>${APIS.standings[0].rows[5].gamesLost}</th>
    <th>${APIS.standings[0].rows[5].points}</th>
    </tr>
    
    <tr>
    <th>${APIS.standings[0].rows[6].position}</th>
    <th><img class="scorelogo" src="https://imagecache.365scores.com/image/upload/f_png,w_24,h_24,c_limit,q_auto:eco,dpr_3,d_Competitors:default1.png/v${APIS.standings[0].rows[6].competitor.imageVersion}/Competitors/${APIS.standings[0].rows[6].competitor.id}"/>${APIS.standings[0].rows[6].competitor.name}</th>
    <th>${APIS.standings[0].rows[6].gamePlayed}</th>
    <th>${APIS.standings[0].rows[6].gamesWon}</th>
    <th>${APIS.standings[0].rows[6].gamesEven}</th>
    <th>${APIS.standings[0].rows[6].gamesLost}</th>
    <th>${APIS.standings[0].rows[6].points}</th>
    </tr>
    
    <tr>
    <th>${APIS.standings[0].rows[7].position}</th>
    <th><img class="scorelogo" src="https://imagecache.365scores.com/image/upload/f_png,w_24,h_24,c_limit,q_auto:eco,dpr_3,d_Competitors:default1.png/v${APIS.standings[0].rows[7].competitor.imageVersion}/Competitors/${APIS.standings[0].rows[7].competitor.id}"/>${APIS.standings[0].rows[7].competitor.name}</th>
    <th>${APIS.standings[0].rows[7].gamePlayed}</th>
    <th>${APIS.standings[0].rows[7].gamesWon}</th>
    <th>${APIS.standings[0].rows[7].gamesEven}</th>
    <th>${APIS.standings[0].rows[7].gamesLost}</th>
    <th>${APIS.standings[0].rows[7].points}</th>
    </tr>
    
    <tr>
    <th>${APIS.standings[0].rows[8].position}</th>
    <th><img class="scorelogo" src="https://imagecache.365scores.com/image/upload/f_png,w_24,h_24,c_limit,q_auto:eco,dpr_3,d_Competitors:default1.png/v${APIS.standings[0].rows[8].competitor.imageVersion}/Competitors/${APIS.standings[0].rows[8].competitor.id}"/>${APIS.standings[0].rows[8].competitor.name}</th>
    <th>${APIS.standings[0].rows[8].gamePlayed}</th>
    <th>${APIS.standings[0].rows[8].gamesWon}</th>
    <th>${APIS.standings[0].rows[8].gamesEven}</th>
    <th>${APIS.standings[0].rows[8].gamesLost}</th>
    <th>${APIS.standings[0].rows[8].points}</th>
    </tr>
    
    <tr>
    <th>${APIS.standings[0].rows[9].position}</th>
    <th><img class="scorelogo" src="https://imagecache.365scores.com/image/upload/f_png,w_24,h_24,c_limit,q_auto:eco,dpr_3,d_Competitors:default1.png/v${APIS.standings[0].rows[9].competitor.imageVersion}/Competitors/${APIS.standings[0].rows[9].competitor.id}"/>${APIS.standings[0].rows[9].competitor.name}</th>
    <th>${APIS.standings[0].rows[9].gamePlayed}</th>
    <th>${APIS.standings[0].rows[9].gamesWon}</th>
    <th>${APIS.standings[0].rows[9].gamesEven}</th>
    <th>${APIS.standings[0].rows[9].gamesLost}</th>
    <th>${APIS.standings[0].rows[9].points}</th>
    </tr>
    
    <tr>
    <th>${APIS.standings[0].rows[10].position}</th>
    <th><img class="scorelogo" src="https://imagecache.365scores.com/image/upload/f_png,w_24,h_24,c_limit,q_auto:eco,dpr_3,d_Competitors:default1.png/v${APIS.standings[0].rows[10].competitor.imageVersion}/Competitors/${APIS.standings[0].rows[10].competitor.id}"/>${APIS.standings[0].rows[10].competitor.name}</th>
    <th>${APIS.standings[0].rows[10].gamePlayed}</th>
    <th>${APIS.standings[0].rows[10].gamesWon}</th>
    <th>${APIS.standings[0].rows[10].gamesEven}</th>
    <th>${APIS.standings[0].rows[10].gamesLost}</th>
    <th>${APIS.standings[0].rows[10].points}</th>
    </tr>
    
    <tr>
    <th>${APIS.standings[0].rows[11].position}</th>
    <th><img class="scorelogo" src="https://imagecache.365scores.com/image/upload/f_png,w_24,h_24,c_limit,q_auto:eco,dpr_3,d_Competitors:default1.png/v${APIS.standings[0].rows[11].competitor.imageVersion}/Competitors/${APIS.standings[0].rows[11].competitor.id}"/>${APIS.standings[0].rows[11].competitor.name}</th>
    <th>${APIS.standings[0].rows[11].gamePlayed}</th>
    <th>${APIS.standings[0].rows[11].gamesWon}</th>
    <th>${APIS.standings[0].rows[11].gamesEven}</th>
    <th>${APIS.standings[0].rows[11].gamesLost}</th>
    <th>${APIS.standings[0].rows[11].points}</th>
    </tr>
    
    
    <tr>
    <th>${APIS.standings[0].rows[12].position}</th>
    <th><img class="scorelogo" src="https://imagecache.365scores.com/image/upload/f_png,w_24,h_24,c_limit,q_auto:eco,dpr_3,d_Competitors:default1.png/v${APIS.standings[0].rows[12].competitor.imageVersion}/Competitors/${APIS.standings[0].rows[12].competitor.id}"/>${APIS.standings[0].rows[12].competitor.name}</th>
    <th>${APIS.standings[0].rows[12].gamePlayed}</th>
    <th>${APIS.standings[0].rows[12].gamesWon}</th>
    <th>${APIS.standings[0].rows[12].gamesEven}</th>
    <th>${APIS.standings[0].rows[12].gamesLost}</th>
    <th>${APIS.standings[0].rows[12].points}</th>
    </tr>
    
    
    <tr>
    <th>${APIS.standings[0].rows[13].position}</th>
    <th><img class="scorelogo" src="https://imagecache.365scores.com/image/upload/f_png,w_24,h_24,c_limit,q_auto:eco,dpr_3,d_Competitors:default1.png/v${APIS.standings[0].rows[13].competitor.imageVersion}/Competitors/${APIS.standings[0].rows[13].competitor.id}"/>${APIS.standings[0].rows[13].competitor.name}</th>
    <th>${APIS.standings[0].rows[13].gamePlayed}</th>
    <th>${APIS.standings[0].rows[13].gamesWon}</th>
    <th>${APIS.standings[0].rows[13].gamesEven}</th>
    <th>${APIS.standings[0].rows[13].gamesLost}</th>
    <th>${APIS.standings[0].rows[13].points}</th>
    </tr>
    
    
    <tr>
    <th>${APIS.standings[0].rows[14].position}</th>
    <th><img class="scorelogo" src="https://imagecache.365scores.com/image/upload/f_png,w_24,h_24,c_limit,q_auto:eco,dpr_3,d_Competitors:default1.png/v${APIS.standings[0].rows[14].competitor.imageVersion}/Competitors/${APIS.standings[0].rows[14].competitor.id}"/>${APIS.standings[0].rows[14].competitor.name}</th>
    <th>${APIS.standings[0].rows[14].gamePlayed}</th>
    <th>${APIS.standings[0].rows[14].gamesWon}</th>
    <th>${APIS.standings[0].rows[14].gamesEven}</th>
    <th>${APIS.standings[0].rows[14].gamesLost}</th>
    <th>${APIS.standings[0].rows[14].points}</th>
    </tr>
    
    
    <tr>
    <th>${APIS.standings[0].rows[15].position}</th>
    <th><img class="scorelogo" src="https://imagecache.365scores.com/image/upload/f_png,w_24,h_24,c_limit,q_auto:eco,dpr_3,d_Competitors:default1.png/v${APIS.standings[0].rows[15].competitor.imageVersion}/Competitors/${APIS.standings[0].rows[15].competitor.id}"/>${APIS.standings[0].rows[15].competitor.name}</th>
    <th>${APIS.standings[0].rows[15].gamePlayed}</th>
    <th>${APIS.standings[0].rows[15].gamesWon}</th>
    <th>${APIS.standings[0].rows[15].gamesEven}</th>
    <th>${APIS.standings[0].rows[15].gamesLost}</th>
    <th>${APIS.standings[0].rows[15].points}</th>
    </tr>
    
    
    <tr>
    <th>${APIS.standings[0].rows[16].position}</th>
    <th><img class="scorelogo" src="https://imagecache.365scores.com/image/upload/f_png,w_24,h_24,c_limit,q_auto:eco,dpr_3,d_Competitors:default1.png/v${APIS.standings[0].rows[16].competitor.imageVersion}/Competitors/${APIS.standings[0].rows[16].competitor.id}"/>${APIS.standings[0].rows[16].competitor.name}</th>
    <th>${APIS.standings[0].rows[16].gamePlayed}</th>
    <th>${APIS.standings[0].rows[16].gamesWon}</th>
    <th>${APIS.standings[0].rows[16].gamesEven}</th>
    <th>${APIS.standings[0].rows[16].gamesLost}</th>
    <th>${APIS.standings[0].rows[16].points}</th>
    </tr>
    
    
    <tr>
    <th>${APIS.standings[0].rows[17].position}</th>
    <th><img class="scorelogo" src="https://imagecache.365scores.com/image/upload/f_png,w_24,h_24,c_limit,q_auto:eco,dpr_3,d_Competitors:default1.png/v${APIS.standings[0].rows[17].competitor.imageVersion}/Competitors/${APIS.standings[0].rows[17].competitor.id}"/>${APIS.standings[0].rows[17].competitor.name}</th>
    <th>${APIS.standings[0].rows[17].gamePlayed}</th>
    <th>${APIS.standings[0].rows[17].gamesWon}</th>
    <th>${APIS.standings[0].rows[17].gamesEven}</th>
    <th>${APIS.standings[0].rows[17].gamesLost}</th>
    <th>${APIS.standings[0].rows[17].points}</th>
    </tr>
    
    
    </tbody>
    </table>`;

    const RECONFIGG = await fetch(
        "https://webws.365scores.com/web/stats/?appTypeId=5&langId=27&timezoneName=Africa/Cairo&userCountryId=131&competition=552"
      ),
      APISGoals = await RECONFIGG.json();

    Goals.innerHTML = `
    
    <div class="TopLeagia"> <img src="https://imagecache.365scores.com/image/upload/f_png,w_68,h_68,c_limit,q_auto:eco,dpr_2,d_Countries:Round:1.png/v${APIS.competitions[0].imageVersion}/Competitions/light/${APIS.competitions[0].id}"/>${APIS.competitions[0].name}</div>
    <div class="Gooals">
    <div class="topthree">
    <div class="topim">
    <div class="One">2</div>
    <img src="https://imagecache.365scores.com/image/upload/f_png,w_80,h_80,c_limit,q_auto:eco,dpr_2,d_Athletes:default.png,r_max,c_thumb,g_face,z_0.65/v${APISGoals.stats[0].rows[1].entity.imgVer}/Athletes/${APISGoals.stats[0].rows[1].entity.id}"/>
    <span class="Goali">${APISGoals.stats[0].rows[1].stats[0].value}</span>
    <span class="nameplyr">${APISGoals.stats[0].rows[1].entity.name}</span>
    <span class="cuping">${APISGoals.stats[0].rows[1].entity.positionName}</span>
    </div>
    <div class="topim">
    <div class="One">1</div>
    <img src="https://imagecache.365scores.com/image/upload/f_png,w_80,h_80,c_limit,q_auto:eco,dpr_2,d_Athletes:default.png,r_max,c_thumb,g_face,z_0.65/v${APISGoals.stats[0].rows[0].entity.imgVer}/Athletes/${APISGoals.stats[0].rows[0].entity.id}"/>
    <span class="Goali">${APISGoals.stats[0].rows[0].stats[0].value}</span>
    <span class="nameplyr">${APISGoals.stats[0].rows[0].entity.name}</span>
    <span class="cuping">${APISGoals.stats[0].rows[0].entity.positionName}</span>
    </div>
    <div class="topim">
    <div class="One">3</div>
    <img src="https://imagecache.365scores.com/image/upload/f_png,w_80,h_80,c_limit,q_auto:eco,dpr_2,d_Athletes:default.png,r_max,c_thumb,g_face,z_0.65/v${APISGoals.stats[0].rows[2].entity.imgVer}/Athletes/${APISGoals.stats[0].rows[2].entity.id}"/>
    <span class="Goali">${APISGoals.stats[0].rows[2].stats[0].value}</span>
    <span class="nameplyr">${APISGoals.stats[0].rows[2].entity.name}</span>
    <span class="cuping">${APISGoals.stats[0].rows[2].entity.positionName}</span>
    </div>
    </div>
    
    
    <div class="tabolla">
    <div class="tabollaintro" style="font-size: 20px  !important;padding: 5px 12px;border-radius: 15px;">
    <span class="nameplyr">صورة اللاعب</span>
    <span class="nameplyr">اسم اللاعب</span>
    <span class="cuping">الصفة</span>
    <span class="cuping">الاهداف</span>
    </div>
    
    <div class="tabollaintro">
    <img src="https://imagecache.365scores.com/image/upload/f_png,w_80,h_80,c_limit,q_auto:eco,dpr_2,d_Athletes:default.png,r_max,c_thumb,g_face,z_0.65/v${APISGoals.stats[0].rows[3].entity.imgVer}/Athletes/${APISGoals.stats[0].rows[3].entity.id}"/>
    <span class="nameplyr">${APISGoals.stats[0].rows[3].entity.name}</span>
    <span class="cuping">${APISGoals.stats[0].rows[3].entity.positionName}</span>
    <span class="Goali">${APISGoals.stats[0].rows[3].stats[0].value}</span>
    </div>
    
    <div class="tabollaintro">
    <img src="https://imagecache.365scores.com/image/upload/f_png,w_80,h_80,c_limit,q_auto:eco,dpr_2,d_Athletes:default.png,r_max,c_thumb,g_face,z_0.65/v${APISGoals.stats[0].rows[4].entity.imgVer}/Athletes/${APISGoals.stats[0].rows[4].entity.id}"/>
    <span class="nameplyr">${APISGoals.stats[0].rows[4].entity.name}</span>
    <span class="cuping">${APISGoals.stats[0].rows[4].entity.positionName}</span>
    <span class="Goali">${APISGoals.stats[0].rows[4].stats[0].value}</span>
    </div>
    
    <div class="tabollaintro">
    <img src="https://imagecache.365scores.com/image/upload/f_png,w_80,h_80,c_limit,q_auto:eco,dpr_2,d_Athletes:default.png,r_max,c_thumb,g_face,z_0.65/v${APISGoals.stats[0].rows[5].entity.imgVer}/Athletes/${APISGoals.stats[0].rows[5].entity.id}"/>
    <span class="nameplyr">${APISGoals.stats[0].rows[5].entity.name}</span>
    <span class="cuping">${APISGoals.stats[0].rows[5].entity.positionName}</span>
    <span class="Goali">${APISGoals.stats[0].rows[5].stats[0].value}</span>
    </div>
    
    <div class="tabollaintro">
    <img src="https://imagecache.365scores.com/image/upload/f_png,w_80,h_80,c_limit,q_auto:eco,dpr_2,d_Athletes:default.png,r_max,c_thumb,g_face,z_0.65/v${APISGoals.stats[0].rows[6].entity.imgVer}/Athletes/${APISGoals.stats[0].rows[6].entity.id}"/>
    <span class="nameplyr">${APISGoals.stats[0].rows[6].entity.name}</span>
    <span class="cuping">${APISGoals.stats[0].rows[6].entity.positionName}</span>
    <span class="Goali">${APISGoals.stats[0].rows[6].stats[0].value}</span>
    </div>
    
    <div class="tabollaintro">
    <img src="https://imagecache.365scores.com/image/upload/f_png,w_80,h_80,c_limit,q_auto:eco,dpr_2,d_Athletes:default.png,r_max,c_thumb,g_face,z_0.65/v${APISGoals.stats[0].rows[7].entity.imgVer}/Athletes/${APISGoals.stats[0].rows[7].entity.id}"/>
    <span class="nameplyr">${APISGoals.stats[0].rows[7].entity.name}</span>
    <span class="cuping">${APISGoals.stats[0].rows[7].entity.positionName}</span>
    <span class="Goali">${APISGoals.stats[0].rows[7].stats[0].value}</span>
    </div>
    
    <div class="tabollaintro">
    <img src="https://imagecache.365scores.com/image/upload/f_png,w_80,h_80,c_limit,q_auto:eco,dpr_2,d_Athletes:default.png,r_max,c_thumb,g_face,z_0.65/v${APISGoals.stats[0].rows[8].entity.imgVer}/Athletes/${APISGoals.stats[0].rows[8].entity.id}"/>
    <span class="nameplyr">${APISGoals.stats[0].rows[8].entity.name}</span>
    <span class="cuping">${APISGoals.stats[0].rows[8].entity.positionName}</span>
    <span class="Goali">${APISGoals.stats[0].rows[8].stats[0].value}</span>
    </div>
    
    <div class="tabollaintro">
    <img src="https://imagecache.365scores.com/image/upload/f_png,w_80,h_80,c_limit,q_auto:eco,dpr_2,d_Athletes:default.png,r_max,c_thumb,g_face,z_0.65/v${APISGoals.stats[0].rows[9].entity.imgVer}/Athletes/${APISGoals.stats[0].rows[9].entity.id}"/>
    <span class="nameplyr">${APISGoals.stats[0].rows[9].entity.name}</span>
    <span class="cuping">${APISGoals.stats[0].rows[9].entity.positionName}</span>
    <span class="Goali">${APISGoals.stats[0].rows[9].stats[0].value}</span>
    </div>
    
    <div class="tabollaintro">
    <img src="https://imagecache.365scores.com/image/upload/f_png,w_80,h_80,c_limit,q_auto:eco,dpr_2,d_Athletes:default.png,r_max,c_thumb,g_face,z_0.65/v${APISGoals.stats[0].rows[10].entity.imgVer}/Athletes/${APISGoals.stats[0].rows[10].entity.id}"/>
    <span class="nameplyr">${APISGoals.stats[0].rows[10].entity.name}</span>
    <span class="cuping">${APISGoals.stats[0].rows[10].entity.positionName}</span>
    <span class="Goali">${APISGoals.stats[0].rows[10].stats[0].value}</span>
    </div>
    
    <div class="tabollaintro">
    <img src="https://imagecache.365scores.com/image/upload/f_png,w_80,h_80,c_limit,q_auto:eco,dpr_2,d_Athletes:default.png,r_max,c_thumb,g_face,z_0.65/v${APISGoals.stats[0].rows[11].entity.imgVer}/Athletes/${APISGoals.stats[0].rows[11].entity.id}"/>
    <span class="nameplyr">${APISGoals.stats[0].rows[11].entity.name}</span>
    <span class="cuping">${APISGoals.stats[0].rows[11].entity.positionName}</span>
    <span class="Goali">${APISGoals.stats[0].rows[11].stats[0].value}</span>
    </div>
    
    <div class="tabollaintro">
    <img src="https://imagecache.365scores.com/image/upload/f_png,w_80,h_80,c_limit,q_auto:eco,dpr_2,d_Athletes:default.png,r_max,c_thumb,g_face,z_0.65/v${APISGoals.stats[0].rows[12].entity.imgVer}/Athletes/${APISGoals.stats[0].rows[12].entity.id}"/>
    <span class="nameplyr">${APISGoals.stats[0].rows[12].entity.name}</span>
    <span class="cuping">${APISGoals.stats[0].rows[12].entity.positionName}</span>
    <span class="Goali">${APISGoals.stats[0].rows[12].stats[0].value}</span>
    </div>
    
    <div class="tabollaintro">
    <img src="https://imagecache.365scores.com/image/upload/f_png,w_80,h_80,c_limit,q_auto:eco,dpr_2,d_Athletes:default.png,r_max,c_thumb,g_face,z_0.65/v${APISGoals.stats[0].rows[13].entity.imgVer}/Athletes/${APISGoals.stats[0].rows[13].entity.id}"/>
    <span class="nameplyr">${APISGoals.stats[0].rows[13].entity.name}</span>
    <span class="cuping">${APISGoals.stats[0].rows[13].entity.positionName}</span>
    <span class="Goali">${APISGoals.stats[0].rows[13].stats[0].value}</span>
    </div>
    
    <div class="tabollaintro">
    <img src="https://imagecache.365scores.com/image/upload/f_png,w_80,h_80,c_limit,q_auto:eco,dpr_2,d_Athletes:default.png,r_max,c_thumb,g_face,z_0.65/v${APISGoals.stats[0].rows[14].entity.imgVer}/Athletes/${APISGoals.stats[0].rows[14].entity.id}"/>
    <span class="nameplyr">${APISGoals.stats[0].rows[14].entity.name}</span>
    <span class="cuping">${APISGoals.stats[0].rows[14].entity.positionName}</span>
    <span class="Goali">${APISGoals.stats[0].rows[14].stats[0].value}</span>
    </div>
    </div>
    </div>`;
  } else {
  }

  if (SU) {
    const RECONFIG = await fetch(
        "https://webws.365scores.com/web/standings/?appTypeId=5&langId=27&timezoneName=Africa/Cairo&userCountryId=131&competitions=649&live=false&stageNum=1&seasonNum=19"
      ),
      APIS = await RECONFIG.json();

    SU.innerHTML = `
<div class="TopLeagia"> <img src="https://imagecache.365scores.com/image/upload/f_png,w_68,h_68,c_limit,q_auto:eco,dpr_2,d_Countries:Round:1.png/v${APIS.competitions[0].imageVersion}/Competitions/light/${APIS.competitions[0].id}"/>${APIS.competitions[0].name}</div>
<table class="table">
<tbody class="tbody">
<tr class="tr">
<th></th>
<th style="text-align: center;">فريق</th>
<th>لعب</th>
<th>فاز</th>
<th>تعادل</th>
<th>خسر</th>
<th>نقاط</th>
</tr>

<tr>
<th>${APIS.standings[0].rows[0].position}</th>
<th><img class="scorelogo" src="https://imagecache.365scores.com/image/upload/f_png,w_24,h_24,c_limit,q_auto:eco,dpr_3,d_Competitors:default1.png/v${APIS.standings[0].rows[0].competitor.imageVersion}/Competitors/${APIS.standings[0].rows[0].competitor.id}"/> ${APIS.standings[0].rows[0].competitor.name}</th>
<th>${APIS.standings[0].rows[0].gamePlayed}</th>
<th>${APIS.standings[0].rows[0].gamesWon}</th>
<th>${APIS.standings[0].rows[0].gamesEven}</th>
<th>${APIS.standings[0].rows[0].gamesLost}</th>
<th>${APIS.standings[0].rows[0].points}</th>
</tr>

<tr>
<th>${APIS.standings[0].rows[1].position}</th>
<th><img class="scorelogo" src="https://imagecache.365scores.com/image/upload/f_png,w_24,h_24,c_limit,q_auto:eco,dpr_3,d_Competitors:default1.png/v${APIS.standings[0].rows[1].competitor.imageVersion}/Competitors/${APIS.standings[0].rows[1].competitor.id}"/>${APIS.standings[0].rows[1].competitor.name}</th>
<th>${APIS.standings[0].rows[1].gamePlayed}</th>
<th>${APIS.standings[0].rows[1].gamesWon}</th>
<th>${APIS.standings[0].rows[1].gamesEven}</th>
<th>${APIS.standings[0].rows[1].gamesLost}</th>
<th>${APIS.standings[0].rows[1].points}</th>
</tr>

<tr>
<th>${APIS.standings[0].rows[2].position}</th>
<th><img class="scorelogo" src="https://imagecache.365scores.com/image/upload/f_png,w_24,h_24,c_limit,q_auto:eco,dpr_3,d_Competitors:default1.png/v${APIS.standings[0].rows[2].competitor.imageVersion}/Competitors/${APIS.standings[0].rows[2].competitor.id}"/>${APIS.standings[0].rows[2].competitor.name}</th>
<th>${APIS.standings[0].rows[2].gamePlayed}</th>
<th>${APIS.standings[0].rows[2].gamesWon}</th>
<th>${APIS.standings[0].rows[2].gamesEven}</th>
<th>${APIS.standings[0].rows[2].gamesLost}</th>
<th>${APIS.standings[0].rows[2].points}</th>
</tr>

<tr>
<th>${APIS.standings[0].rows[3].position}</th>
<th><img class="scorelogo" src="https://imagecache.365scores.com/image/upload/f_png,w_24,h_24,c_limit,q_auto:eco,dpr_3,d_Competitors:default1.png/v${APIS.standings[0].rows[3].competitor.imageVersion}/Competitors/${APIS.standings[0].rows[3].competitor.id}"/>${APIS.standings[0].rows[3].competitor.name}</th>
<th>${APIS.standings[0].rows[3].gamePlayed}</th>
<th>${APIS.standings[0].rows[3].gamesWon}</th>
<th>${APIS.standings[0].rows[3].gamesEven}</th>
<th>${APIS.standings[0].rows[3].gamesLost}</th>
<th>${APIS.standings[0].rows[3].points}</th>
</tr>

<tr>
<th>${APIS.standings[0].rows[4].position}</th>
<th><img class="scorelogo" src="https://imagecache.365scores.com/image/upload/f_png,w_24,h_24,c_limit,q_auto:eco,dpr_3,d_Competitors:default1.png/v${APIS.standings[0].rows[4].competitor.imageVersion}/Competitors/${APIS.standings[0].rows[4].competitor.id}"/>${APIS.standings[0].rows[4].competitor.name}</th>
<th>${APIS.standings[0].rows[4].gamePlayed}</th>
<th>${APIS.standings[0].rows[4].gamesWon}</th>
<th>${APIS.standings[0].rows[4].gamesEven}</th>
<th>${APIS.standings[0].rows[4].gamesLost}</th>
<th>${APIS.standings[0].rows[4].points}</th>
</tr>

<tr>
<th>${APIS.standings[0].rows[5].position}</th>
<th><img class="scorelogo" src="https://imagecache.365scores.com/image/upload/f_png,w_24,h_24,c_limit,q_auto:eco,dpr_3,d_Competitors:default1.png/v${APIS.standings[0].rows[5].competitor.imageVersion}/Competitors/${APIS.standings[0].rows[5].competitor.id}"/>${APIS.standings[0].rows[5].competitor.name}</th>
<th>${APIS.standings[0].rows[5].gamePlayed}</th>
<th>${APIS.standings[0].rows[5].gamesWon}</th>
<th>${APIS.standings[0].rows[5].gamesEven}</th>
<th>${APIS.standings[0].rows[5].gamesLost}</th>
<th>${APIS.standings[0].rows[5].points}</th>
</tr>

<tr>
<th>${APIS.standings[0].rows[6].position}</th>
<th><img class="scorelogo" src="https://imagecache.365scores.com/image/upload/f_png,w_24,h_24,c_limit,q_auto:eco,dpr_3,d_Competitors:default1.png/v${APIS.standings[0].rows[6].competitor.imageVersion}/Competitors/${APIS.standings[0].rows[6].competitor.id}"/>${APIS.standings[0].rows[6].competitor.name}</th>
<th>${APIS.standings[0].rows[6].gamePlayed}</th>
<th>${APIS.standings[0].rows[6].gamesWon}</th>
<th>${APIS.standings[0].rows[6].gamesEven}</th>
<th>${APIS.standings[0].rows[6].gamesLost}</th>
<th>${APIS.standings[0].rows[6].points}</th>
</tr>

<tr>
<th>${APIS.standings[0].rows[7].position}</th>
<th><img class="scorelogo" src="https://imagecache.365scores.com/image/upload/f_png,w_24,h_24,c_limit,q_auto:eco,dpr_3,d_Competitors:default1.png/v${APIS.standings[0].rows[7].competitor.imageVersion}/Competitors/${APIS.standings[0].rows[7].competitor.id}"/>${APIS.standings[0].rows[7].competitor.name}</th>
<th>${APIS.standings[0].rows[7].gamePlayed}</th>
<th>${APIS.standings[0].rows[7].gamesWon}</th>
<th>${APIS.standings[0].rows[7].gamesEven}</th>
<th>${APIS.standings[0].rows[7].gamesLost}</th>
<th>${APIS.standings[0].rows[7].points}</th>
</tr>

<tr>
<th>${APIS.standings[0].rows[8].position}</th>
<th><img class="scorelogo" src="https://imagecache.365scores.com/image/upload/f_png,w_24,h_24,c_limit,q_auto:eco,dpr_3,d_Competitors:default1.png/v${APIS.standings[0].rows[8].competitor.imageVersion}/Competitors/${APIS.standings[0].rows[8].competitor.id}"/>${APIS.standings[0].rows[8].competitor.name}</th>
<th>${APIS.standings[0].rows[8].gamePlayed}</th>
<th>${APIS.standings[0].rows[8].gamesWon}</th>
<th>${APIS.standings[0].rows[8].gamesEven}</th>
<th>${APIS.standings[0].rows[8].gamesLost}</th>
<th>${APIS.standings[0].rows[8].points}</th>
</tr>

<tr>
<th>${APIS.standings[0].rows[9].position}</th>
<th><img class="scorelogo" src="https://imagecache.365scores.com/image/upload/f_png,w_24,h_24,c_limit,q_auto:eco,dpr_3,d_Competitors:default1.png/v${APIS.standings[0].rows[9].competitor.imageVersion}/Competitors/${APIS.standings[0].rows[9].competitor.id}"/>${APIS.standings[0].rows[9].competitor.name}</th>
<th>${APIS.standings[0].rows[9].gamePlayed}</th>
<th>${APIS.standings[0].rows[9].gamesWon}</th>
<th>${APIS.standings[0].rows[9].gamesEven}</th>
<th>${APIS.standings[0].rows[9].gamesLost}</th>
<th>${APIS.standings[0].rows[9].points}</th>
</tr>

<tr>
<th>${APIS.standings[0].rows[10].position}</th>
<th><img class="scorelogo" src="https://imagecache.365scores.com/image/upload/f_png,w_24,h_24,c_limit,q_auto:eco,dpr_3,d_Competitors:default1.png/v${APIS.standings[0].rows[10].competitor.imageVersion}/Competitors/${APIS.standings[0].rows[10].competitor.id}"/>${APIS.standings[0].rows[10].competitor.name}</th>
<th>${APIS.standings[0].rows[10].gamePlayed}</th>
<th>${APIS.standings[0].rows[10].gamesWon}</th>
<th>${APIS.standings[0].rows[10].gamesEven}</th>
<th>${APIS.standings[0].rows[10].gamesLost}</th>
<th>${APIS.standings[0].rows[10].points}</th>
</tr>

<tr>
<th>${APIS.standings[0].rows[11].position}</th>
<th><img class="scorelogo" src="https://imagecache.365scores.com/image/upload/f_png,w_24,h_24,c_limit,q_auto:eco,dpr_3,d_Competitors:default1.png/v${APIS.standings[0].rows[11].competitor.imageVersion}/Competitors/${APIS.standings[0].rows[11].competitor.id}"/>${APIS.standings[0].rows[11].competitor.name}</th>
<th>${APIS.standings[0].rows[11].gamePlayed}</th>
<th>${APIS.standings[0].rows[11].gamesWon}</th>
<th>${APIS.standings[0].rows[11].gamesEven}</th>
<th>${APIS.standings[0].rows[11].gamesLost}</th>
<th>${APIS.standings[0].rows[11].points}</th>
</tr>


<tr>
<th>${APIS.standings[0].rows[12].position}</th>
<th><img class="scorelogo" src="https://imagecache.365scores.com/image/upload/f_png,w_24,h_24,c_limit,q_auto:eco,dpr_3,d_Competitors:default1.png/v${APIS.standings[0].rows[12].competitor.imageVersion}/Competitors/${APIS.standings[0].rows[12].competitor.id}"/>${APIS.standings[0].rows[12].competitor.name}</th>
<th>${APIS.standings[0].rows[12].gamePlayed}</th>
<th>${APIS.standings[0].rows[12].gamesWon}</th>
<th>${APIS.standings[0].rows[12].gamesEven}</th>
<th>${APIS.standings[0].rows[12].gamesLost}</th>
<th>${APIS.standings[0].rows[12].points}</th>
</tr>


<tr>
<th>${APIS.standings[0].rows[13].position}</th>
<th><img class="scorelogo" src="https://imagecache.365scores.com/image/upload/f_png,w_24,h_24,c_limit,q_auto:eco,dpr_3,d_Competitors:default1.png/v${APIS.standings[0].rows[13].competitor.imageVersion}/Competitors/${APIS.standings[0].rows[13].competitor.id}"/>${APIS.standings[0].rows[13].competitor.name}</th>
<th>${APIS.standings[0].rows[13].gamePlayed}</th>
<th>${APIS.standings[0].rows[13].gamesWon}</th>
<th>${APIS.standings[0].rows[13].gamesEven}</th>
<th>${APIS.standings[0].rows[13].gamesLost}</th>
<th>${APIS.standings[0].rows[13].points}</th>
</tr>


<tr>
<th>${APIS.standings[0].rows[14].position}</th>
<th><img class="scorelogo" src="https://imagecache.365scores.com/image/upload/f_png,w_24,h_24,c_limit,q_auto:eco,dpr_3,d_Competitors:default1.png/v${APIS.standings[0].rows[14].competitor.imageVersion}/Competitors/${APIS.standings[0].rows[14].competitor.id}"/>${APIS.standings[0].rows[14].competitor.name}</th>
<th>${APIS.standings[0].rows[14].gamePlayed}</th>
<th>${APIS.standings[0].rows[14].gamesWon}</th>
<th>${APIS.standings[0].rows[14].gamesEven}</th>
<th>${APIS.standings[0].rows[14].gamesLost}</th>
<th>${APIS.standings[0].rows[14].points}</th>
</tr>


<tr>
<th>${APIS.standings[0].rows[15].position}</th>
<th><img class="scorelogo" src="https://imagecache.365scores.com/image/upload/f_png,w_24,h_24,c_limit,q_auto:eco,dpr_3,d_Competitors:default1.png/v${APIS.standings[0].rows[15].competitor.imageVersion}/Competitors/${APIS.standings[0].rows[15].competitor.id}"/>${APIS.standings[0].rows[15].competitor.name}</th>
<th>${APIS.standings[0].rows[15].gamePlayed}</th>
<th>${APIS.standings[0].rows[15].gamesWon}</th>
<th>${APIS.standings[0].rows[15].gamesEven}</th>
<th>${APIS.standings[0].rows[15].gamesLost}</th>
<th>${APIS.standings[0].rows[15].points}</th>
</tr>


</tbody>
</table>`;

    const RECONFIGG = await fetch(
        "https://webws.365scores.com/web/stats/?appTypeId=5&langId=27&timezoneName=Africa/Cairo&userCountryId=131&competition=649"
      ),
      APISGoals = await RECONFIGG.json();

    Goals.innerHTML = `

<div class="TopLeagia"> <img src="https://imagecache.365scores.com/image/upload/f_png,w_68,h_68,c_limit,q_auto:eco,dpr_2,d_Countries:Round:1.png/v${APIS.competitions[0].imageVersion}/Competitions/light/${APIS.competitions[0].id}"/>${APIS.competitions[0].name}</div>
<div class="Gooals">
<div class="topthree">
<div class="topim">
<div class="One">2</div>
<img src="https://imagecache.365scores.com/image/upload/f_png,w_80,h_80,c_limit,q_auto:eco,dpr_2,d_Athletes:default.png,r_max,c_thumb,g_face,z_0.65/v${APISGoals.stats[0].rows[1].entity.imgVer}/Athletes/${APISGoals.stats[0].rows[1].entity.id}"/>
<span class="Goali">${APISGoals.stats[0].rows[1].stats[0].value}</span>
<span class="nameplyr">${APISGoals.stats[0].rows[1].entity.name}</span>
<span class="cuping">${APISGoals.stats[0].rows[1].entity.positionName}</span>
</div>
<div class="topim">
<div class="One">1</div>
<img src="https://imagecache.365scores.com/image/upload/f_png,w_80,h_80,c_limit,q_auto:eco,dpr_2,d_Athletes:default.png,r_max,c_thumb,g_face,z_0.65/v${APISGoals.stats[0].rows[0].entity.imgVer}/Athletes/${APISGoals.stats[0].rows[0].entity.id}"/>
<span class="Goali">${APISGoals.stats[0].rows[0].stats[0].value}</span>
<span class="nameplyr">${APISGoals.stats[0].rows[0].entity.name}</span>
<span class="cuping">${APISGoals.stats[0].rows[0].entity.positionName}</span>
</div>
<div class="topim">
<div class="One">3</div>
<img src="https://imagecache.365scores.com/image/upload/f_png,w_80,h_80,c_limit,q_auto:eco,dpr_2,d_Athletes:default.png,r_max,c_thumb,g_face,z_0.65/v${APISGoals.stats[0].rows[2].entity.imgVer}/Athletes/${APISGoals.stats[0].rows[2].entity.id}"/>
<span class="Goali">${APISGoals.stats[0].rows[2].stats[0].value}</span>
<span class="nameplyr">${APISGoals.stats[0].rows[2].entity.name}</span>
<span class="cuping">${APISGoals.stats[0].rows[2].entity.positionName}</span>
</div>
</div>


<div class="tabolla">
<div class="tabollaintro" style="font-size: 20px  !important;padding: 5px 12px;border-radius: 15px;">
<span class="nameplyr">صورة اللاعب</span>
<span class="nameplyr">اسم اللاعب</span>
<span class="cuping">الصفة</span>
<span class="cuping">الاهداف</span>
</div>

<div class="tabollaintro">
<img src="https://imagecache.365scores.com/image/upload/f_png,w_80,h_80,c_limit,q_auto:eco,dpr_2,d_Athletes:default.png,r_max,c_thumb,g_face,z_0.65/v${APISGoals.stats[0].rows[3].entity.imgVer}/Athletes/${APISGoals.stats[0].rows[3].entity.id}"/>
<span class="nameplyr">${APISGoals.stats[0].rows[3].entity.name}</span>
<span class="cuping">${APISGoals.stats[0].rows[3].entity.positionName}</span>
<span class="Goali">${APISGoals.stats[0].rows[3].stats[0].value}</span>
</div>

<div class="tabollaintro">
<img src="https://imagecache.365scores.com/image/upload/f_png,w_80,h_80,c_limit,q_auto:eco,dpr_2,d_Athletes:default.png,r_max,c_thumb,g_face,z_0.65/v${APISGoals.stats[0].rows[4].entity.imgVer}/Athletes/${APISGoals.stats[0].rows[4].entity.id}"/>
<span class="nameplyr">${APISGoals.stats[0].rows[4].entity.name}</span>
<span class="cuping">${APISGoals.stats[0].rows[4].entity.positionName}</span>
<span class="Goali">${APISGoals.stats[0].rows[4].stats[0].value}</span>
</div>

<div class="tabollaintro">
<img src="https://imagecache.365scores.com/image/upload/f_png,w_80,h_80,c_limit,q_auto:eco,dpr_2,d_Athletes:default.png,r_max,c_thumb,g_face,z_0.65/v${APISGoals.stats[0].rows[5].entity.imgVer}/Athletes/${APISGoals.stats[0].rows[5].entity.id}"/>
<span class="nameplyr">${APISGoals.stats[0].rows[5].entity.name}</span>
<span class="cuping">${APISGoals.stats[0].rows[5].entity.positionName}</span>
<span class="Goali">${APISGoals.stats[0].rows[5].stats[0].value}</span>
</div>

<div class="tabollaintro">
<img src="https://imagecache.365scores.com/image/upload/f_png,w_80,h_80,c_limit,q_auto:eco,dpr_2,d_Athletes:default.png,r_max,c_thumb,g_face,z_0.65/v${APISGoals.stats[0].rows[6].entity.imgVer}/Athletes/${APISGoals.stats[0].rows[6].entity.id}"/>
<span class="nameplyr">${APISGoals.stats[0].rows[6].entity.name}</span>
<span class="cuping">${APISGoals.stats[0].rows[6].entity.positionName}</span>
<span class="Goali">${APISGoals.stats[0].rows[6].stats[0].value}</span>
</div>

<div class="tabollaintro">
<img src="https://imagecache.365scores.com/image/upload/f_png,w_80,h_80,c_limit,q_auto:eco,dpr_2,d_Athletes:default.png,r_max,c_thumb,g_face,z_0.65/v${APISGoals.stats[0].rows[7].entity.imgVer}/Athletes/${APISGoals.stats[0].rows[7].entity.id}"/>
<span class="nameplyr">${APISGoals.stats[0].rows[7].entity.name}</span>
<span class="cuping">${APISGoals.stats[0].rows[7].entity.positionName}</span>
<span class="Goali">${APISGoals.stats[0].rows[7].stats[0].value}</span>
</div>

<div class="tabollaintro">
<img src="https://imagecache.365scores.com/image/upload/f_png,w_80,h_80,c_limit,q_auto:eco,dpr_2,d_Athletes:default.png,r_max,c_thumb,g_face,z_0.65/v${APISGoals.stats[0].rows[8].entity.imgVer}/Athletes/${APISGoals.stats[0].rows[8].entity.id}"/>
<span class="nameplyr">${APISGoals.stats[0].rows[8].entity.name}</span>
<span class="cuping">${APISGoals.stats[0].rows[8].entity.positionName}</span>
<span class="Goali">${APISGoals.stats[0].rows[8].stats[0].value}</span>
</div>

<div class="tabollaintro">
<img src="https://imagecache.365scores.com/image/upload/f_png,w_80,h_80,c_limit,q_auto:eco,dpr_2,d_Athletes:default.png,r_max,c_thumb,g_face,z_0.65/v${APISGoals.stats[0].rows[9].entity.imgVer}/Athletes/${APISGoals.stats[0].rows[9].entity.id}"/>
<span class="nameplyr">${APISGoals.stats[0].rows[9].entity.name}</span>
<span class="cuping">${APISGoals.stats[0].rows[9].entity.positionName}</span>
<span class="Goali">${APISGoals.stats[0].rows[9].stats[0].value}</span>
</div>

<div class="tabollaintro">
<img src="https://imagecache.365scores.com/image/upload/f_png,w_80,h_80,c_limit,q_auto:eco,dpr_2,d_Athletes:default.png,r_max,c_thumb,g_face,z_0.65/v${APISGoals.stats[0].rows[10].entity.imgVer}/Athletes/${APISGoals.stats[0].rows[10].entity.id}"/>
<span class="nameplyr">${APISGoals.stats[0].rows[10].entity.name}</span>
<span class="cuping">${APISGoals.stats[0].rows[10].entity.positionName}</span>
<span class="Goali">${APISGoals.stats[0].rows[10].stats[0].value}</span>
</div>

<div class="tabollaintro">
<img src="https://imagecache.365scores.com/image/upload/f_png,w_80,h_80,c_limit,q_auto:eco,dpr_2,d_Athletes:default.png,r_max,c_thumb,g_face,z_0.65/v${APISGoals.stats[0].rows[11].entity.imgVer}/Athletes/${APISGoals.stats[0].rows[11].entity.id}"/>
<span class="nameplyr">${APISGoals.stats[0].rows[11].entity.name}</span>
<span class="cuping">${APISGoals.stats[0].rows[11].entity.positionName}</span>
<span class="Goali">${APISGoals.stats[0].rows[11].stats[0].value}</span>
</div>

<div class="tabollaintro">
<img src="https://imagecache.365scores.com/image/upload/f_png,w_80,h_80,c_limit,q_auto:eco,dpr_2,d_Athletes:default.png,r_max,c_thumb,g_face,z_0.65/v${APISGoals.stats[0].rows[12].entity.imgVer}/Athletes/${APISGoals.stats[0].rows[12].entity.id}"/>
<span class="nameplyr">${APISGoals.stats[0].rows[12].entity.name}</span>
<span class="cuping">${APISGoals.stats[0].rows[12].entity.positionName}</span>
<span class="Goali">${APISGoals.stats[0].rows[12].stats[0].value}</span>
</div>

<div class="tabollaintro">
<img src="https://imagecache.365scores.com/image/upload/f_png,w_80,h_80,c_limit,q_auto:eco,dpr_2,d_Athletes:default.png,r_max,c_thumb,g_face,z_0.65/v${APISGoals.stats[0].rows[13].entity.imgVer}/Athletes/${APISGoals.stats[0].rows[13].entity.id}"/>
<span class="nameplyr">${APISGoals.stats[0].rows[13].entity.name}</span>
<span class="cuping">${APISGoals.stats[0].rows[13].entity.positionName}</span>
<span class="Goali">${APISGoals.stats[0].rows[13].stats[0].value}</span>
</div>

<div class="tabollaintro">
<img src="https://imagecache.365scores.com/image/upload/f_png,w_80,h_80,c_limit,q_auto:eco,dpr_2,d_Athletes:default.png,r_max,c_thumb,g_face,z_0.65/v${APISGoals.stats[0].rows[14].entity.imgVer}/Athletes/${APISGoals.stats[0].rows[14].entity.id}"/>
<span class="nameplyr">${APISGoals.stats[0].rows[14].entity.name}</span>
<span class="cuping">${APISGoals.stats[0].rows[14].entity.positionName}</span>
<span class="Goali">${APISGoals.stats[0].rows[14].stats[0].value}</span>
</div>
</div>
</div>`;
  } else {
  }

  if (EM) {
    const RECONFIG = await fetch(
        "https://webws.365scores.com/web/standings/?appTypeId=5&langId=27&timezoneName=Africa/Cairo&userCountryId=131&competitions=549&live=false&stageNum=1&seasonNum=18"
      ),
      APIS = await RECONFIG.json();

    EM.innerHTML = `
<div class="TopLeagia"> <img src="https://imagecache.365scores.com/image/upload/f_png,w_68,h_68,c_limit,q_auto:eco,dpr_2,d_Countries:Round:1.png/v${APIS.competitions[0].imageVersion}/Competitions/light/${APIS.competitions[0].id}"/>${APIS.competitions[0].name}</div>
<table class="table">
<tbody class="tbody">
<tr class="tr">
<th></th>
<th style="text-align: center;">فريق</th>
<th>لعب</th>
<th>فاز</th>
<th>تعادل</th>
<th>خسر</th>
<th>نقاط</th>
</tr>

<tr>
<th>${APIS.standings[0].rows[0].position}</th>
<th><img class="scorelogo" src="https://imagecache.365scores.com/image/upload/f_png,w_24,h_24,c_limit,q_auto:eco,dpr_3,d_Competitors:default1.png/v${APIS.standings[0].rows[0].competitor.imageVersion}/Competitors/${APIS.standings[0].rows[0].competitor.id}"/> ${APIS.standings[0].rows[0].competitor.name}</th>
<th>${APIS.standings[0].rows[0].gamePlayed}</th>
<th>${APIS.standings[0].rows[0].gamesWon}</th>
<th>${APIS.standings[0].rows[0].gamesEven}</th>
<th>${APIS.standings[0].rows[0].gamesLost}</th>
<th>${APIS.standings[0].rows[0].points}</th>
</tr>

<tr>
<th>${APIS.standings[0].rows[1].position}</th>
<th><img class="scorelogo" src="https://imagecache.365scores.com/image/upload/f_png,w_24,h_24,c_limit,q_auto:eco,dpr_3,d_Competitors:default1.png/v${APIS.standings[0].rows[1].competitor.imageVersion}/Competitors/${APIS.standings[0].rows[1].competitor.id}"/>${APIS.standings[0].rows[1].competitor.name}</th>
<th>${APIS.standings[0].rows[1].gamePlayed}</th>
<th>${APIS.standings[0].rows[1].gamesWon}</th>
<th>${APIS.standings[0].rows[1].gamesEven}</th>
<th>${APIS.standings[0].rows[1].gamesLost}</th>
<th>${APIS.standings[0].rows[1].points}</th>
</tr>

<tr>
<th>${APIS.standings[0].rows[2].position}</th>
<th><img class="scorelogo" src="https://imagecache.365scores.com/image/upload/f_png,w_24,h_24,c_limit,q_auto:eco,dpr_3,d_Competitors:default1.png/v${APIS.standings[0].rows[2].competitor.imageVersion}/Competitors/${APIS.standings[0].rows[2].competitor.id}"/>${APIS.standings[0].rows[2].competitor.name}</th>
<th>${APIS.standings[0].rows[2].gamePlayed}</th>
<th>${APIS.standings[0].rows[2].gamesWon}</th>
<th>${APIS.standings[0].rows[2].gamesEven}</th>
<th>${APIS.standings[0].rows[2].gamesLost}</th>
<th>${APIS.standings[0].rows[2].points}</th>
</tr>

<tr>
<th>${APIS.standings[0].rows[3].position}</th>
<th><img class="scorelogo" src="https://imagecache.365scores.com/image/upload/f_png,w_24,h_24,c_limit,q_auto:eco,dpr_3,d_Competitors:default1.png/v${APIS.standings[0].rows[3].competitor.imageVersion}/Competitors/${APIS.standings[0].rows[3].competitor.id}"/>${APIS.standings[0].rows[3].competitor.name}</th>
<th>${APIS.standings[0].rows[3].gamePlayed}</th>
<th>${APIS.standings[0].rows[3].gamesWon}</th>
<th>${APIS.standings[0].rows[3].gamesEven}</th>
<th>${APIS.standings[0].rows[3].gamesLost}</th>
<th>${APIS.standings[0].rows[3].points}</th>
</tr>

<tr>
<th>${APIS.standings[0].rows[4].position}</th>
<th><img class="scorelogo" src="https://imagecache.365scores.com/image/upload/f_png,w_24,h_24,c_limit,q_auto:eco,dpr_3,d_Competitors:default1.png/v${APIS.standings[0].rows[4].competitor.imageVersion}/Competitors/${APIS.standings[0].rows[4].competitor.id}"/>${APIS.standings[0].rows[4].competitor.name}</th>
<th>${APIS.standings[0].rows[4].gamePlayed}</th>
<th>${APIS.standings[0].rows[4].gamesWon}</th>
<th>${APIS.standings[0].rows[4].gamesEven}</th>
<th>${APIS.standings[0].rows[4].gamesLost}</th>
<th>${APIS.standings[0].rows[4].points}</th>
</tr>

<tr>
<th>${APIS.standings[0].rows[5].position}</th>
<th><img class="scorelogo" src="https://imagecache.365scores.com/image/upload/f_png,w_24,h_24,c_limit,q_auto:eco,dpr_3,d_Competitors:default1.png/v${APIS.standings[0].rows[5].competitor.imageVersion}/Competitors/${APIS.standings[0].rows[5].competitor.id}"/>${APIS.standings[0].rows[5].competitor.name}</th>
<th>${APIS.standings[0].rows[5].gamePlayed}</th>
<th>${APIS.standings[0].rows[5].gamesWon}</th>
<th>${APIS.standings[0].rows[5].gamesEven}</th>
<th>${APIS.standings[0].rows[5].gamesLost}</th>
<th>${APIS.standings[0].rows[5].points}</th>
</tr>

<tr>
<th>${APIS.standings[0].rows[6].position}</th>
<th><img class="scorelogo" src="https://imagecache.365scores.com/image/upload/f_png,w_24,h_24,c_limit,q_auto:eco,dpr_3,d_Competitors:default1.png/v${APIS.standings[0].rows[6].competitor.imageVersion}/Competitors/${APIS.standings[0].rows[6].competitor.id}"/>${APIS.standings[0].rows[6].competitor.name}</th>
<th>${APIS.standings[0].rows[6].gamePlayed}</th>
<th>${APIS.standings[0].rows[6].gamesWon}</th>
<th>${APIS.standings[0].rows[6].gamesEven}</th>
<th>${APIS.standings[0].rows[6].gamesLost}</th>
<th>${APIS.standings[0].rows[6].points}</th>
</tr>

<tr>
<th>${APIS.standings[0].rows[7].position}</th>
<th><img class="scorelogo" src="https://imagecache.365scores.com/image/upload/f_png,w_24,h_24,c_limit,q_auto:eco,dpr_3,d_Competitors:default1.png/v${APIS.standings[0].rows[7].competitor.imageVersion}/Competitors/${APIS.standings[0].rows[7].competitor.id}"/>${APIS.standings[0].rows[7].competitor.name}</th>
<th>${APIS.standings[0].rows[7].gamePlayed}</th>
<th>${APIS.standings[0].rows[7].gamesWon}</th>
<th>${APIS.standings[0].rows[7].gamesEven}</th>
<th>${APIS.standings[0].rows[7].gamesLost}</th>
<th>${APIS.standings[0].rows[7].points}</th>
</tr>

<tr>
<th>${APIS.standings[0].rows[8].position}</th>
<th><img class="scorelogo" src="https://imagecache.365scores.com/image/upload/f_png,w_24,h_24,c_limit,q_auto:eco,dpr_3,d_Competitors:default1.png/v${APIS.standings[0].rows[8].competitor.imageVersion}/Competitors/${APIS.standings[0].rows[8].competitor.id}"/>${APIS.standings[0].rows[8].competitor.name}</th>
<th>${APIS.standings[0].rows[8].gamePlayed}</th>
<th>${APIS.standings[0].rows[8].gamesWon}</th>
<th>${APIS.standings[0].rows[8].gamesEven}</th>
<th>${APIS.standings[0].rows[8].gamesLost}</th>
<th>${APIS.standings[0].rows[8].points}</th>
</tr>

<tr>
<th>${APIS.standings[0].rows[9].position}</th>
<th><img class="scorelogo" src="https://imagecache.365scores.com/image/upload/f_png,w_24,h_24,c_limit,q_auto:eco,dpr_3,d_Competitors:default1.png/v${APIS.standings[0].rows[9].competitor.imageVersion}/Competitors/${APIS.standings[0].rows[9].competitor.id}"/>${APIS.standings[0].rows[9].competitor.name}</th>
<th>${APIS.standings[0].rows[9].gamePlayed}</th>
<th>${APIS.standings[0].rows[9].gamesWon}</th>
<th>${APIS.standings[0].rows[9].gamesEven}</th>
<th>${APIS.standings[0].rows[9].gamesLost}</th>
<th>${APIS.standings[0].rows[9].points}</th>
</tr>

<tr>
<th>${APIS.standings[0].rows[10].position}</th>
<th><img class="scorelogo" src="https://imagecache.365scores.com/image/upload/f_png,w_24,h_24,c_limit,q_auto:eco,dpr_3,d_Competitors:default1.png/v${APIS.standings[0].rows[10].competitor.imageVersion}/Competitors/${APIS.standings[0].rows[10].competitor.id}"/>${APIS.standings[0].rows[10].competitor.name}</th>
<th>${APIS.standings[0].rows[10].gamePlayed}</th>
<th>${APIS.standings[0].rows[10].gamesWon}</th>
<th>${APIS.standings[0].rows[10].gamesEven}</th>
<th>${APIS.standings[0].rows[10].gamesLost}</th>
<th>${APIS.standings[0].rows[10].points}</th>
</tr>

<tr>
<th>${APIS.standings[0].rows[11].position}</th>
<th><img class="scorelogo" src="https://imagecache.365scores.com/image/upload/f_png,w_24,h_24,c_limit,q_auto:eco,dpr_3,d_Competitors:default1.png/v${APIS.standings[0].rows[11].competitor.imageVersion}/Competitors/${APIS.standings[0].rows[11].competitor.id}"/>${APIS.standings[0].rows[11].competitor.name}</th>
<th>${APIS.standings[0].rows[11].gamePlayed}</th>
<th>${APIS.standings[0].rows[11].gamesWon}</th>
<th>${APIS.standings[0].rows[11].gamesEven}</th>
<th>${APIS.standings[0].rows[11].gamesLost}</th>
<th>${APIS.standings[0].rows[11].points}</th>
</tr>


<tr>
<th>${APIS.standings[0].rows[12].position}</th>
<th><img class="scorelogo" src="https://imagecache.365scores.com/image/upload/f_png,w_24,h_24,c_limit,q_auto:eco,dpr_3,d_Competitors:default1.png/v${APIS.standings[0].rows[12].competitor.imageVersion}/Competitors/${APIS.standings[0].rows[12].competitor.id}"/>${APIS.standings[0].rows[12].competitor.name}</th>
<th>${APIS.standings[0].rows[12].gamePlayed}</th>
<th>${APIS.standings[0].rows[12].gamesWon}</th>
<th>${APIS.standings[0].rows[12].gamesEven}</th>
<th>${APIS.standings[0].rows[12].gamesLost}</th>
<th>${APIS.standings[0].rows[12].points}</th>
</tr>


<tr>
<th>${APIS.standings[0].rows[13].position}</th>
<th><img class="scorelogo" src="https://imagecache.365scores.com/image/upload/f_png,w_24,h_24,c_limit,q_auto:eco,dpr_3,d_Competitors:default1.png/v${APIS.standings[0].rows[13].competitor.imageVersion}/Competitors/${APIS.standings[0].rows[13].competitor.id}"/>${APIS.standings[0].rows[13].competitor.name}</th>
<th>${APIS.standings[0].rows[13].gamePlayed}</th>
<th>${APIS.standings[0].rows[13].gamesWon}</th>
<th>${APIS.standings[0].rows[13].gamesEven}</th>
<th>${APIS.standings[0].rows[13].gamesLost}</th>
<th>${APIS.standings[0].rows[13].points}</th>
</tr>


</tbody>
</table>`;

    const RECONFIGG = await fetch(
        "https://webws.365scores.com/web/stats/?appTypeId=5&langId=27&timezoneName=Africa/Cairo&userCountryId=131&competition=549"
      ),
      APISGoals = await RECONFIGG.json();

    Goals.innerHTML = `

<div class="TopLeagia"> <img src="https://imagecache.365scores.com/image/upload/f_png,w_68,h_68,c_limit,q_auto:eco,dpr_2,d_Countries:Round:1.png/v${APIS.competitions[0].imageVersion}/Competitions/light/${APIS.competitions[0].id}"/>${APIS.competitions[0].name}</div>
<div class="Gooals">
<div class="topthree">
<div class="topim">
<div class="One">2</div>
<img src="https://imagecache.365scores.com/image/upload/f_png,w_80,h_80,c_limit,q_auto:eco,dpr_2,d_Athletes:default.png,r_max,c_thumb,g_face,z_0.65/v${APISGoals.stats[0].rows[1].entity.imgVer}/Athletes/${APISGoals.stats[0].rows[1].entity.id}"/>
<span class="Goali">${APISGoals.stats[0].rows[1].stats[0].value}</span>
<span class="nameplyr">${APISGoals.stats[0].rows[1].entity.name}</span>
<span class="cuping">${APISGoals.stats[0].rows[1].entity.positionName}</span>
</div>
<div class="topim">
<div class="One">1</div>
<img src="https://imagecache.365scores.com/image/upload/f_png,w_80,h_80,c_limit,q_auto:eco,dpr_2,d_Athletes:default.png,r_max,c_thumb,g_face,z_0.65/v${APISGoals.stats[0].rows[0].entity.imgVer}/Athletes/${APISGoals.stats[0].rows[0].entity.id}"/>
<span class="Goali">${APISGoals.stats[0].rows[0].stats[0].value}</span>
<span class="nameplyr">${APISGoals.stats[0].rows[0].entity.name}</span>
<span class="cuping">${APISGoals.stats[0].rows[0].entity.positionName}</span>
</div>
<div class="topim">
<div class="One">3</div>
<img src="https://imagecache.365scores.com/image/upload/f_png,w_80,h_80,c_limit,q_auto:eco,dpr_2,d_Athletes:default.png,r_max,c_thumb,g_face,z_0.65/v${APISGoals.stats[0].rows[2].entity.imgVer}/Athletes/${APISGoals.stats[0].rows[2].entity.id}"/>
<span class="Goali">${APISGoals.stats[0].rows[2].stats[0].value}</span>
<span class="nameplyr">${APISGoals.stats[0].rows[2].entity.name}</span>
<span class="cuping">${APISGoals.stats[0].rows[2].entity.positionName}</span>
</div>
</div>


<div class="tabolla">
<div class="tabollaintro" style="font-size: 20px  !important;padding: 5px 12px;border-radius: 15px;">
<span class="nameplyr">صورة اللاعب</span>
<span class="nameplyr">اسم اللاعب</span>
<span class="cuping">الصفة</span>
<span class="cuping">الاهداف</span>
</div>

<div class="tabollaintro">
<img src="https://imagecache.365scores.com/image/upload/f_png,w_80,h_80,c_limit,q_auto:eco,dpr_2,d_Athletes:default.png,r_max,c_thumb,g_face,z_0.65/v${APISGoals.stats[0].rows[3].entity.imgVer}/Athletes/${APISGoals.stats[0].rows[3].entity.id}"/>
<span class="nameplyr">${APISGoals.stats[0].rows[3].entity.name}</span>
<span class="cuping">${APISGoals.stats[0].rows[3].entity.positionName}</span>
<span class="Goali">${APISGoals.stats[0].rows[3].stats[0].value}</span>
</div>

<div class="tabollaintro">
<img src="https://imagecache.365scores.com/image/upload/f_png,w_80,h_80,c_limit,q_auto:eco,dpr_2,d_Athletes:default.png,r_max,c_thumb,g_face,z_0.65/v${APISGoals.stats[0].rows[4].entity.imgVer}/Athletes/${APISGoals.stats[0].rows[4].entity.id}"/>
<span class="nameplyr">${APISGoals.stats[0].rows[4].entity.name}</span>
<span class="cuping">${APISGoals.stats[0].rows[4].entity.positionName}</span>
<span class="Goali">${APISGoals.stats[0].rows[4].stats[0].value}</span>
</div>

<div class="tabollaintro">
<img src="https://imagecache.365scores.com/image/upload/f_png,w_80,h_80,c_limit,q_auto:eco,dpr_2,d_Athletes:default.png,r_max,c_thumb,g_face,z_0.65/v${APISGoals.stats[0].rows[5].entity.imgVer}/Athletes/${APISGoals.stats[0].rows[5].entity.id}"/>
<span class="nameplyr">${APISGoals.stats[0].rows[5].entity.name}</span>
<span class="cuping">${APISGoals.stats[0].rows[5].entity.positionName}</span>
<span class="Goali">${APISGoals.stats[0].rows[5].stats[0].value}</span>
</div>

<div class="tabollaintro">
<img src="https://imagecache.365scores.com/image/upload/f_png,w_80,h_80,c_limit,q_auto:eco,dpr_2,d_Athletes:default.png,r_max,c_thumb,g_face,z_0.65/v${APISGoals.stats[0].rows[6].entity.imgVer}/Athletes/${APISGoals.stats[0].rows[6].entity.id}"/>
<span class="nameplyr">${APISGoals.stats[0].rows[6].entity.name}</span>
<span class="cuping">${APISGoals.stats[0].rows[6].entity.positionName}</span>
<span class="Goali">${APISGoals.stats[0].rows[6].stats[0].value}</span>
</div>

<div class="tabollaintro">
<img src="https://imagecache.365scores.com/image/upload/f_png,w_80,h_80,c_limit,q_auto:eco,dpr_2,d_Athletes:default.png,r_max,c_thumb,g_face,z_0.65/v${APISGoals.stats[0].rows[7].entity.imgVer}/Athletes/${APISGoals.stats[0].rows[7].entity.id}"/>
<span class="nameplyr">${APISGoals.stats[0].rows[7].entity.name}</span>
<span class="cuping">${APISGoals.stats[0].rows[7].entity.positionName}</span>
<span class="Goali">${APISGoals.stats[0].rows[7].stats[0].value}</span>
</div>

<div class="tabollaintro">
<img src="https://imagecache.365scores.com/image/upload/f_png,w_80,h_80,c_limit,q_auto:eco,dpr_2,d_Athletes:default.png,r_max,c_thumb,g_face,z_0.65/v${APISGoals.stats[0].rows[8].entity.imgVer}/Athletes/${APISGoals.stats[0].rows[8].entity.id}"/>
<span class="nameplyr">${APISGoals.stats[0].rows[8].entity.name}</span>
<span class="cuping">${APISGoals.stats[0].rows[8].entity.positionName}</span>
<span class="Goali">${APISGoals.stats[0].rows[8].stats[0].value}</span>
</div>

<div class="tabollaintro">
<img src="https://imagecache.365scores.com/image/upload/f_png,w_80,h_80,c_limit,q_auto:eco,dpr_2,d_Athletes:default.png,r_max,c_thumb,g_face,z_0.65/v${APISGoals.stats[0].rows[9].entity.imgVer}/Athletes/${APISGoals.stats[0].rows[9].entity.id}"/>
<span class="nameplyr">${APISGoals.stats[0].rows[9].entity.name}</span>
<span class="cuping">${APISGoals.stats[0].rows[9].entity.positionName}</span>
<span class="Goali">${APISGoals.stats[0].rows[9].stats[0].value}</span>
</div>

<div class="tabollaintro">
<img src="https://imagecache.365scores.com/image/upload/f_png,w_80,h_80,c_limit,q_auto:eco,dpr_2,d_Athletes:default.png,r_max,c_thumb,g_face,z_0.65/v${APISGoals.stats[0].rows[10].entity.imgVer}/Athletes/${APISGoals.stats[0].rows[10].entity.id}"/>
<span class="nameplyr">${APISGoals.stats[0].rows[10].entity.name}</span>
<span class="cuping">${APISGoals.stats[0].rows[10].entity.positionName}</span>
<span class="Goali">${APISGoals.stats[0].rows[10].stats[0].value}</span>
</div>

<div class="tabollaintro">
<img src="https://imagecache.365scores.com/image/upload/f_png,w_80,h_80,c_limit,q_auto:eco,dpr_2,d_Athletes:default.png,r_max,c_thumb,g_face,z_0.65/v${APISGoals.stats[0].rows[11].entity.imgVer}/Athletes/${APISGoals.stats[0].rows[11].entity.id}"/>
<span class="nameplyr">${APISGoals.stats[0].rows[11].entity.name}</span>
<span class="cuping">${APISGoals.stats[0].rows[11].entity.positionName}</span>
<span class="Goali">${APISGoals.stats[0].rows[11].stats[0].value}</span>
</div>

<div class="tabollaintro">
<img src="https://imagecache.365scores.com/image/upload/f_png,w_80,h_80,c_limit,q_auto:eco,dpr_2,d_Athletes:default.png,r_max,c_thumb,g_face,z_0.65/v${APISGoals.stats[0].rows[12].entity.imgVer}/Athletes/${APISGoals.stats[0].rows[12].entity.id}"/>
<span class="nameplyr">${APISGoals.stats[0].rows[12].entity.name}</span>
<span class="cuping">${APISGoals.stats[0].rows[12].entity.positionName}</span>
<span class="Goali">${APISGoals.stats[0].rows[12].stats[0].value}</span>
</div>

<div class="tabollaintro">
<img src="https://imagecache.365scores.com/image/upload/f_png,w_80,h_80,c_limit,q_auto:eco,dpr_2,d_Athletes:default.png,r_max,c_thumb,g_face,z_0.65/v${APISGoals.stats[0].rows[13].entity.imgVer}/Athletes/${APISGoals.stats[0].rows[13].entity.id}"/>
<span class="nameplyr">${APISGoals.stats[0].rows[13].entity.name}</span>
<span class="cuping">${APISGoals.stats[0].rows[13].entity.positionName}</span>
<span class="Goali">${APISGoals.stats[0].rows[13].stats[0].value}</span>
</div>

<div class="tabollaintro">
<img src="https://imagecache.365scores.com/image/upload/f_png,w_80,h_80,c_limit,q_auto:eco,dpr_2,d_Athletes:default.png,r_max,c_thumb,g_face,z_0.65/v${APISGoals.stats[0].rows[14].entity.imgVer}/Athletes/${APISGoals.stats[0].rows[14].entity.id}"/>
<span class="nameplyr">${APISGoals.stats[0].rows[14].entity.name}</span>
<span class="cuping">${APISGoals.stats[0].rows[14].entity.positionName}</span>
<span class="Goali">${APISGoals.stats[0].rows[14].stats[0].value}</span>
</div>
</div>
</div>`;
  } else {
  }

  if (IR) {
    const RECONFIG = await fetch(
        "https://webws.365scores.com/web/standings/?appTypeId=5&langId=27&timezoneName=Africa/Cairo&userCountryId=131&competitions=6822&live=false&stageNum=1&seasonNum=20"
      ),
      APIS = await RECONFIG.json();

    IR.innerHTML = `
<div class="TopLeagia"> <img src="https://imagecache.365scores.com/image/upload/f_png,w_68,h_68,c_limit,q_auto:eco,dpr_2,d_Countries:Round:1.png/v${APIS.competitions[0].imageVersion}/Competitions/light/${APIS.competitions[0].id}"/>${APIS.competitions[0].name}</div>
<table class="table">
<tbody class="tbody">
<tr class="tr">
<th></th>
<th style="text-align: center;">فريق</th>
<th>لعب</th>
<th>فاز</th>
<th>تعادل</th>
<th>خسر</th>
<th>نقاط</th>
</tr>

<tr>
<th>${APIS.standings[0].rows[0].position}</th>
<th><img class="scorelogo" src="https://imagecache.365scores.com/image/upload/f_png,w_24,h_24,c_limit,q_auto:eco,dpr_3,d_Competitors:default1.png/v${APIS.standings[0].rows[0].competitor.imageVersion}/Competitors/${APIS.standings[0].rows[0].competitor.id}"/> ${APIS.standings[0].rows[0].competitor.name}</th>
<th>${APIS.standings[0].rows[0].gamePlayed}</th>
<th>${APIS.standings[0].rows[0].gamesWon}</th>
<th>${APIS.standings[0].rows[0].gamesEven}</th>
<th>${APIS.standings[0].rows[0].gamesLost}</th>
<th>${APIS.standings[0].rows[0].points}</th>
</tr>

<tr>
<th>${APIS.standings[0].rows[1].position}</th>
<th><img class="scorelogo" src="https://imagecache.365scores.com/image/upload/f_png,w_24,h_24,c_limit,q_auto:eco,dpr_3,d_Competitors:default1.png/v${APIS.standings[0].rows[1].competitor.imageVersion}/Competitors/${APIS.standings[0].rows[1].competitor.id}"/>${APIS.standings[0].rows[1].competitor.name}</th>
<th>${APIS.standings[0].rows[1].gamePlayed}</th>
<th>${APIS.standings[0].rows[1].gamesWon}</th>
<th>${APIS.standings[0].rows[1].gamesEven}</th>
<th>${APIS.standings[0].rows[1].gamesLost}</th>
<th>${APIS.standings[0].rows[1].points}</th>
</tr>

<tr>
<th>${APIS.standings[0].rows[2].position}</th>
<th><img class="scorelogo" src="https://imagecache.365scores.com/image/upload/f_png,w_24,h_24,c_limit,q_auto:eco,dpr_3,d_Competitors:default1.png/v${APIS.standings[0].rows[2].competitor.imageVersion}/Competitors/${APIS.standings[0].rows[2].competitor.id}"/>${APIS.standings[0].rows[2].competitor.name}</th>
<th>${APIS.standings[0].rows[2].gamePlayed}</th>
<th>${APIS.standings[0].rows[2].gamesWon}</th>
<th>${APIS.standings[0].rows[2].gamesEven}</th>
<th>${APIS.standings[0].rows[2].gamesLost}</th>
<th>${APIS.standings[0].rows[2].points}</th>
</tr>

<tr>
<th>${APIS.standings[0].rows[3].position}</th>
<th><img class="scorelogo" src="https://imagecache.365scores.com/image/upload/f_png,w_24,h_24,c_limit,q_auto:eco,dpr_3,d_Competitors:default1.png/v${APIS.standings[0].rows[3].competitor.imageVersion}/Competitors/${APIS.standings[0].rows[3].competitor.id}"/>${APIS.standings[0].rows[3].competitor.name}</th>
<th>${APIS.standings[0].rows[3].gamePlayed}</th>
<th>${APIS.standings[0].rows[3].gamesWon}</th>
<th>${APIS.standings[0].rows[3].gamesEven}</th>
<th>${APIS.standings[0].rows[3].gamesLost}</th>
<th>${APIS.standings[0].rows[3].points}</th>
</tr>

<tr>
<th>${APIS.standings[0].rows[4].position}</th>
<th><img class="scorelogo" src="https://imagecache.365scores.com/image/upload/f_png,w_24,h_24,c_limit,q_auto:eco,dpr_3,d_Competitors:default1.png/v${APIS.standings[0].rows[4].competitor.imageVersion}/Competitors/${APIS.standings[0].rows[4].competitor.id}"/>${APIS.standings[0].rows[4].competitor.name}</th>
<th>${APIS.standings[0].rows[4].gamePlayed}</th>
<th>${APIS.standings[0].rows[4].gamesWon}</th>
<th>${APIS.standings[0].rows[4].gamesEven}</th>
<th>${APIS.standings[0].rows[4].gamesLost}</th>
<th>${APIS.standings[0].rows[4].points}</th>
</tr>

<tr>
<th>${APIS.standings[0].rows[5].position}</th>
<th><img class="scorelogo" src="https://imagecache.365scores.com/image/upload/f_png,w_24,h_24,c_limit,q_auto:eco,dpr_3,d_Competitors:default1.png/v${APIS.standings[0].rows[5].competitor.imageVersion}/Competitors/${APIS.standings[0].rows[5].competitor.id}"/>${APIS.standings[0].rows[5].competitor.name}</th>
<th>${APIS.standings[0].rows[5].gamePlayed}</th>
<th>${APIS.standings[0].rows[5].gamesWon}</th>
<th>${APIS.standings[0].rows[5].gamesEven}</th>
<th>${APIS.standings[0].rows[5].gamesLost}</th>
<th>${APIS.standings[0].rows[5].points}</th>
</tr>

<tr>
<th>${APIS.standings[0].rows[6].position}</th>
<th><img class="scorelogo" src="https://imagecache.365scores.com/image/upload/f_png,w_24,h_24,c_limit,q_auto:eco,dpr_3,d_Competitors:default1.png/v${APIS.standings[0].rows[6].competitor.imageVersion}/Competitors/${APIS.standings[0].rows[6].competitor.id}"/>${APIS.standings[0].rows[6].competitor.name}</th>
<th>${APIS.standings[0].rows[6].gamePlayed}</th>
<th>${APIS.standings[0].rows[6].gamesWon}</th>
<th>${APIS.standings[0].rows[6].gamesEven}</th>
<th>${APIS.standings[0].rows[6].gamesLost}</th>
<th>${APIS.standings[0].rows[6].points}</th>
</tr>

<tr>
<th>${APIS.standings[0].rows[7].position}</th>
<th><img class="scorelogo" src="https://imagecache.365scores.com/image/upload/f_png,w_24,h_24,c_limit,q_auto:eco,dpr_3,d_Competitors:default1.png/v${APIS.standings[0].rows[7].competitor.imageVersion}/Competitors/${APIS.standings[0].rows[7].competitor.id}"/>${APIS.standings[0].rows[7].competitor.name}</th>
<th>${APIS.standings[0].rows[7].gamePlayed}</th>
<th>${APIS.standings[0].rows[7].gamesWon}</th>
<th>${APIS.standings[0].rows[7].gamesEven}</th>
<th>${APIS.standings[0].rows[7].gamesLost}</th>
<th>${APIS.standings[0].rows[7].points}</th>
</tr>

<tr>
<th>${APIS.standings[0].rows[8].position}</th>
<th><img class="scorelogo" src="https://imagecache.365scores.com/image/upload/f_png,w_24,h_24,c_limit,q_auto:eco,dpr_3,d_Competitors:default1.png/v${APIS.standings[0].rows[8].competitor.imageVersion}/Competitors/${APIS.standings[0].rows[8].competitor.id}"/>${APIS.standings[0].rows[8].competitor.name}</th>
<th>${APIS.standings[0].rows[8].gamePlayed}</th>
<th>${APIS.standings[0].rows[8].gamesWon}</th>
<th>${APIS.standings[0].rows[8].gamesEven}</th>
<th>${APIS.standings[0].rows[8].gamesLost}</th>
<th>${APIS.standings[0].rows[8].points}</th>
</tr>

<tr>
<th>${APIS.standings[0].rows[9].position}</th>
<th><img class="scorelogo" src="https://imagecache.365scores.com/image/upload/f_png,w_24,h_24,c_limit,q_auto:eco,dpr_3,d_Competitors:default1.png/v${APIS.standings[0].rows[9].competitor.imageVersion}/Competitors/${APIS.standings[0].rows[9].competitor.id}"/>${APIS.standings[0].rows[9].competitor.name}</th>
<th>${APIS.standings[0].rows[9].gamePlayed}</th>
<th>${APIS.standings[0].rows[9].gamesWon}</th>
<th>${APIS.standings[0].rows[9].gamesEven}</th>
<th>${APIS.standings[0].rows[9].gamesLost}</th>
<th>${APIS.standings[0].rows[9].points}</th>
</tr>

<tr>
<th>${APIS.standings[0].rows[10].position}</th>
<th><img class="scorelogo" src="https://imagecache.365scores.com/image/upload/f_png,w_24,h_24,c_limit,q_auto:eco,dpr_3,d_Competitors:default1.png/v${APIS.standings[0].rows[10].competitor.imageVersion}/Competitors/${APIS.standings[0].rows[10].competitor.id}"/>${APIS.standings[0].rows[10].competitor.name}</th>
<th>${APIS.standings[0].rows[10].gamePlayed}</th>
<th>${APIS.standings[0].rows[10].gamesWon}</th>
<th>${APIS.standings[0].rows[10].gamesEven}</th>
<th>${APIS.standings[0].rows[10].gamesLost}</th>
<th>${APIS.standings[0].rows[10].points}</th>
</tr>

<tr>
<th>${APIS.standings[0].rows[11].position}</th>
<th><img class="scorelogo" src="https://imagecache.365scores.com/image/upload/f_png,w_24,h_24,c_limit,q_auto:eco,dpr_3,d_Competitors:default1.png/v${APIS.standings[0].rows[11].competitor.imageVersion}/Competitors/${APIS.standings[0].rows[11].competitor.id}"/>${APIS.standings[0].rows[11].competitor.name}</th>
<th>${APIS.standings[0].rows[11].gamePlayed}</th>
<th>${APIS.standings[0].rows[11].gamesWon}</th>
<th>${APIS.standings[0].rows[11].gamesEven}</th>
<th>${APIS.standings[0].rows[11].gamesLost}</th>
<th>${APIS.standings[0].rows[11].points}</th>
</tr>


<tr>
<th>${APIS.standings[0].rows[12].position}</th>
<th><img class="scorelogo" src="https://imagecache.365scores.com/image/upload/f_png,w_24,h_24,c_limit,q_auto:eco,dpr_3,d_Competitors:default1.png/v${APIS.standings[0].rows[12].competitor.imageVersion}/Competitors/${APIS.standings[0].rows[12].competitor.id}"/>${APIS.standings[0].rows[12].competitor.name}</th>
<th>${APIS.standings[0].rows[12].gamePlayed}</th>
<th>${APIS.standings[0].rows[12].gamesWon}</th>
<th>${APIS.standings[0].rows[12].gamesEven}</th>
<th>${APIS.standings[0].rows[12].gamesLost}</th>
<th>${APIS.standings[0].rows[12].points}</th>
</tr>


<tr>
<th>${APIS.standings[0].rows[13].position}</th>
<th><img class="scorelogo" src="https://imagecache.365scores.com/image/upload/f_png,w_24,h_24,c_limit,q_auto:eco,dpr_3,d_Competitors:default1.png/v${APIS.standings[0].rows[13].competitor.imageVersion}/Competitors/${APIS.standings[0].rows[13].competitor.id}"/>${APIS.standings[0].rows[13].competitor.name}</th>
<th>${APIS.standings[0].rows[13].gamePlayed}</th>
<th>${APIS.standings[0].rows[13].gamesWon}</th>
<th>${APIS.standings[0].rows[13].gamesEven}</th>
<th>${APIS.standings[0].rows[13].gamesLost}</th>
<th>${APIS.standings[0].rows[13].points}</th>
</tr>


<tr>
<th>${APIS.standings[0].rows[14].position}</th>
<th><img class="scorelogo" src="https://imagecache.365scores.com/image/upload/f_png,w_24,h_24,c_limit,q_auto:eco,dpr_3,d_Competitors:default1.png/v${APIS.standings[0].rows[14].competitor.imageVersion}/Competitors/${APIS.standings[0].rows[14].competitor.id}"/>${APIS.standings[0].rows[14].competitor.name}</th>
<th>${APIS.standings[0].rows[14].gamePlayed}</th>
<th>${APIS.standings[0].rows[14].gamesWon}</th>
<th>${APIS.standings[0].rows[14].gamesEven}</th>
<th>${APIS.standings[0].rows[14].gamesLost}</th>
<th>${APIS.standings[0].rows[14].points}</th>
</tr>


<tr>
<th>${APIS.standings[0].rows[15].position}</th>
<th><img class="scorelogo" src="https://imagecache.365scores.com/image/upload/f_png,w_24,h_24,c_limit,q_auto:eco,dpr_3,d_Competitors:default1.png/v${APIS.standings[0].rows[15].competitor.imageVersion}/Competitors/${APIS.standings[0].rows[15].competitor.id}"/>${APIS.standings[0].rows[15].competitor.name}</th>
<th>${APIS.standings[0].rows[15].gamePlayed}</th>
<th>${APIS.standings[0].rows[15].gamesWon}</th>
<th>${APIS.standings[0].rows[15].gamesEven}</th>
<th>${APIS.standings[0].rows[15].gamesLost}</th>
<th>${APIS.standings[0].rows[15].points}</th>
</tr>


<tr>
<th>${APIS.standings[0].rows[16].position}</th>
<th><img class="scorelogo" src="https://imagecache.365scores.com/image/upload/f_png,w_24,h_24,c_limit,q_auto:eco,dpr_3,d_Competitors:default1.png/v${APIS.standings[0].rows[16].competitor.imageVersion}/Competitors/${APIS.standings[0].rows[16].competitor.id}"/>${APIS.standings[0].rows[16].competitor.name}</th>
<th>${APIS.standings[0].rows[16].gamePlayed}</th>
<th>${APIS.standings[0].rows[16].gamesWon}</th>
<th>${APIS.standings[0].rows[16].gamesEven}</th>
<th>${APIS.standings[0].rows[16].gamesLost}</th>
<th>${APIS.standings[0].rows[16].points}</th>
</tr>


<tr>
<th>${APIS.standings[0].rows[17].position}</th>
<th><img class="scorelogo" src="https://imagecache.365scores.com/image/upload/f_png,w_24,h_24,c_limit,q_auto:eco,dpr_3,d_Competitors:default1.png/v${APIS.standings[0].rows[17].competitor.imageVersion}/Competitors/${APIS.standings[0].rows[17].competitor.id}"/>${APIS.standings[0].rows[17].competitor.name}</th>
<th>${APIS.standings[0].rows[17].gamePlayed}</th>
<th>${APIS.standings[0].rows[17].gamesWon}</th>
<th>${APIS.standings[0].rows[17].gamesEven}</th>
<th>${APIS.standings[0].rows[17].gamesLost}</th>
<th>${APIS.standings[0].rows[17].points}</th>
</tr>


<tr>
<th>${APIS.standings[0].rows[18].position}</th>
<th><img class="scorelogo" src="https://imagecache.365scores.com/image/upload/f_png,w_24,h_24,c_limit,q_auto:eco,dpr_3,d_Competitors:default1.png/v${APIS.standings[0].rows[18].competitor.imageVersion}/Competitors/${APIS.standings[0].rows[18].competitor.id}"/>${APIS.standings[0].rows[18].competitor.name}</th>
<th>${APIS.standings[0].rows[18].gamePlayed}</th>
<th>${APIS.standings[0].rows[18].gamesWon}</th>
<th>${APIS.standings[0].rows[18].gamesEven}</th>
<th>${APIS.standings[0].rows[18].gamesLost}</th>
<th>${APIS.standings[0].rows[18].points}</th>
</tr>


<tr>
<th>${APIS.standings[0].rows[19].position}</th>
<th><img class="scorelogo" src="https://imagecache.365scores.com/image/upload/f_png,w_24,h_24,c_limit,q_auto:eco,dpr_3,d_Competitors:default1.png/v${APIS.standings[0].rows[19].competitor.imageVersion}/Competitors/${APIS.standings[0].rows[19].competitor.id}"/>${APIS.standings[0].rows[19].competitor.name}</th>
<th>${APIS.standings[0].rows[19].gamePlayed}</th>
<th>${APIS.standings[0].rows[19].gamesWon}</th>
<th>${APIS.standings[0].rows[19].gamesEven}</th>
<th>${APIS.standings[0].rows[19].gamesLost}</th>
<th>${APIS.standings[0].rows[19].points}</th>
</tr>


</tbody>
</table>`;

    const RECONFIGG = await fetch(
        "https://webws.365scores.com/web/stats/?appTypeId=5&langId=27&timezoneName=Africa/Cairo&userCountryId=131&competition=6822"
      ),
      APISGoals = await RECONFIGG.json();

    Goals.innerHTML = `

<div class="TopLeagia"> <img src="https://imagecache.365scores.com/image/upload/f_png,w_68,h_68,c_limit,q_auto:eco,dpr_2,d_Countries:Round:1.png/v${APIS.competitions[0].imageVersion}/Competitions/light/${APIS.competitions[0].id}"/>${APIS.competitions[0].name}</div>
<div class="Gooals">
<div class="topthree">
<div class="topim">
<div class="One">2</div>
<img src="https://imagecache.365scores.com/image/upload/f_png,w_80,h_80,c_limit,q_auto:eco,dpr_2,d_Athletes:default.png,r_max,c_thumb,g_face,z_0.65/v${APISGoals.stats[0].rows[1].entity.imgVer}/Athletes/${APISGoals.stats[0].rows[1].entity.id}"/>
<span class="Goali">${APISGoals.stats[0].rows[1].stats[0].value}</span>
<span class="nameplyr">${APISGoals.stats[0].rows[1].entity.name}</span>
<span class="cuping">${APISGoals.stats[0].rows[1].entity.positionName}</span>
</div>
<div class="topim">
<div class="One">1</div>
<img src="https://imagecache.365scores.com/image/upload/f_png,w_80,h_80,c_limit,q_auto:eco,dpr_2,d_Athletes:default.png,r_max,c_thumb,g_face,z_0.65/v${APISGoals.stats[0].rows[0].entity.imgVer}/Athletes/${APISGoals.stats[0].rows[0].entity.id}"/>
<span class="Goali">${APISGoals.stats[0].rows[0].stats[0].value}</span>
<span class="nameplyr">${APISGoals.stats[0].rows[0].entity.name}</span>
<span class="cuping">${APISGoals.stats[0].rows[0].entity.positionName}</span>
</div>
<div class="topim">
<div class="One">3</div>
<img src="https://imagecache.365scores.com/image/upload/f_png,w_80,h_80,c_limit,q_auto:eco,dpr_2,d_Athletes:default.png,r_max,c_thumb,g_face,z_0.65/v${APISGoals.stats[0].rows[2].entity.imgVer}/Athletes/${APISGoals.stats[0].rows[2].entity.id}"/>
<span class="Goali">${APISGoals.stats[0].rows[2].stats[0].value}</span>
<span class="nameplyr">${APISGoals.stats[0].rows[2].entity.name}</span>
<span class="cuping">${APISGoals.stats[0].rows[2].entity.positionName}</span>
</div>
</div>


<div class="tabolla">
<div class="tabollaintro" style="font-size: 20px  !important;padding: 5px 12px;border-radius: 15px;">
<span class="nameplyr">صورة اللاعب</span>
<span class="nameplyr">اسم اللاعب</span>
<span class="cuping">الصفة</span>
<span class="cuping">الاهداف</span>
</div>

<div class="tabollaintro">
<img src="https://imagecache.365scores.com/image/upload/f_png,w_80,h_80,c_limit,q_auto:eco,dpr_2,d_Athletes:default.png,r_max,c_thumb,g_face,z_0.65/v${APISGoals.stats[0].rows[3].entity.imgVer}/Athletes/${APISGoals.stats[0].rows[3].entity.id}"/>
<span class="nameplyr">${APISGoals.stats[0].rows[3].entity.name}</span>
<span class="cuping">${APISGoals.stats[0].rows[3].entity.positionName}</span>
<span class="Goali">${APISGoals.stats[0].rows[3].stats[0].value}</span>
</div>

<div class="tabollaintro">
<img src="https://imagecache.365scores.com/image/upload/f_png,w_80,h_80,c_limit,q_auto:eco,dpr_2,d_Athletes:default.png,r_max,c_thumb,g_face,z_0.65/v${APISGoals.stats[0].rows[4].entity.imgVer}/Athletes/${APISGoals.stats[0].rows[4].entity.id}"/>
<span class="nameplyr">${APISGoals.stats[0].rows[4].entity.name}</span>
<span class="cuping">${APISGoals.stats[0].rows[4].entity.positionName}</span>
<span class="Goali">${APISGoals.stats[0].rows[4].stats[0].value}</span>
</div>

<div class="tabollaintro">
<img src="https://imagecache.365scores.com/image/upload/f_png,w_80,h_80,c_limit,q_auto:eco,dpr_2,d_Athletes:default.png,r_max,c_thumb,g_face,z_0.65/v${APISGoals.stats[0].rows[5].entity.imgVer}/Athletes/${APISGoals.stats[0].rows[5].entity.id}"/>
<span class="nameplyr">${APISGoals.stats[0].rows[5].entity.name}</span>
<span class="cuping">${APISGoals.stats[0].rows[5].entity.positionName}</span>
<span class="Goali">${APISGoals.stats[0].rows[5].stats[0].value}</span>
</div>

<div class="tabollaintro">
<img src="https://imagecache.365scores.com/image/upload/f_png,w_80,h_80,c_limit,q_auto:eco,dpr_2,d_Athletes:default.png,r_max,c_thumb,g_face,z_0.65/v${APISGoals.stats[0].rows[6].entity.imgVer}/Athletes/${APISGoals.stats[0].rows[6].entity.id}"/>
<span class="nameplyr">${APISGoals.stats[0].rows[6].entity.name}</span>
<span class="cuping">${APISGoals.stats[0].rows[6].entity.positionName}</span>
<span class="Goali">${APISGoals.stats[0].rows[6].stats[0].value}</span>
</div>

<div class="tabollaintro">
<img src="https://imagecache.365scores.com/image/upload/f_png,w_80,h_80,c_limit,q_auto:eco,dpr_2,d_Athletes:default.png,r_max,c_thumb,g_face,z_0.65/v${APISGoals.stats[0].rows[7].entity.imgVer}/Athletes/${APISGoals.stats[0].rows[7].entity.id}"/>
<span class="nameplyr">${APISGoals.stats[0].rows[7].entity.name}</span>
<span class="cuping">${APISGoals.stats[0].rows[7].entity.positionName}</span>
<span class="Goali">${APISGoals.stats[0].rows[7].stats[0].value}</span>
</div>

<div class="tabollaintro">
<img src="https://imagecache.365scores.com/image/upload/f_png,w_80,h_80,c_limit,q_auto:eco,dpr_2,d_Athletes:default.png,r_max,c_thumb,g_face,z_0.65/v${APISGoals.stats[0].rows[8].entity.imgVer}/Athletes/${APISGoals.stats[0].rows[8].entity.id}"/>
<span class="nameplyr">${APISGoals.stats[0].rows[8].entity.name}</span>
<span class="cuping">${APISGoals.stats[0].rows[8].entity.positionName}</span>
<span class="Goali">${APISGoals.stats[0].rows[8].stats[0].value}</span>
</div>

<div class="tabollaintro">
<img src="https://imagecache.365scores.com/image/upload/f_png,w_80,h_80,c_limit,q_auto:eco,dpr_2,d_Athletes:default.png,r_max,c_thumb,g_face,z_0.65/v${APISGoals.stats[0].rows[9].entity.imgVer}/Athletes/${APISGoals.stats[0].rows[9].entity.id}"/>
<span class="nameplyr">${APISGoals.stats[0].rows[9].entity.name}</span>
<span class="cuping">${APISGoals.stats[0].rows[9].entity.positionName}</span>
<span class="Goali">${APISGoals.stats[0].rows[9].stats[0].value}</span>
</div>

<div class="tabollaintro">
<img src="https://imagecache.365scores.com/image/upload/f_png,w_80,h_80,c_limit,q_auto:eco,dpr_2,d_Athletes:default.png,r_max,c_thumb,g_face,z_0.65/v${APISGoals.stats[0].rows[10].entity.imgVer}/Athletes/${APISGoals.stats[0].rows[10].entity.id}"/>
<span class="nameplyr">${APISGoals.stats[0].rows[10].entity.name}</span>
<span class="cuping">${APISGoals.stats[0].rows[10].entity.positionName}</span>
<span class="Goali">${APISGoals.stats[0].rows[10].stats[0].value}</span>
</div>

<div class="tabollaintro">
<img src="https://imagecache.365scores.com/image/upload/f_png,w_80,h_80,c_limit,q_auto:eco,dpr_2,d_Athletes:default.png,r_max,c_thumb,g_face,z_0.65/v${APISGoals.stats[0].rows[11].entity.imgVer}/Athletes/${APISGoals.stats[0].rows[11].entity.id}"/>
<span class="nameplyr">${APISGoals.stats[0].rows[11].entity.name}</span>
<span class="cuping">${APISGoals.stats[0].rows[11].entity.positionName}</span>
<span class="Goali">${APISGoals.stats[0].rows[11].stats[0].value}</span>
</div>

<div class="tabollaintro">
<img src="https://imagecache.365scores.com/image/upload/f_png,w_80,h_80,c_limit,q_auto:eco,dpr_2,d_Athletes:default.png,r_max,c_thumb,g_face,z_0.65/v${APISGoals.stats[0].rows[12].entity.imgVer}/Athletes/${APISGoals.stats[0].rows[12].entity.id}"/>
<span class="nameplyr">${APISGoals.stats[0].rows[12].entity.name}</span>
<span class="cuping">${APISGoals.stats[0].rows[12].entity.positionName}</span>
<span class="Goali">${APISGoals.stats[0].rows[12].stats[0].value}</span>
</div>

<div class="tabollaintro">
<img src="https://imagecache.365scores.com/image/upload/f_png,w_80,h_80,c_limit,q_auto:eco,dpr_2,d_Athletes:default.png,r_max,c_thumb,g_face,z_0.65/v${APISGoals.stats[0].rows[13].entity.imgVer}/Athletes/${APISGoals.stats[0].rows[13].entity.id}"/>
<span class="nameplyr">${APISGoals.stats[0].rows[13].entity.name}</span>
<span class="cuping">${APISGoals.stats[0].rows[13].entity.positionName}</span>
<span class="Goali">${APISGoals.stats[0].rows[13].stats[0].value}</span>
</div>

<div class="tabollaintro">
<img src="https://imagecache.365scores.com/image/upload/f_png,w_80,h_80,c_limit,q_auto:eco,dpr_2,d_Athletes:default.png,r_max,c_thumb,g_face,z_0.65/v${APISGoals.stats[0].rows[14].entity.imgVer}/Athletes/${APISGoals.stats[0].rows[14].entity.id}"/>
<span class="nameplyr">${APISGoals.stats[0].rows[14].entity.name}</span>
<span class="cuping">${APISGoals.stats[0].rows[14].entity.positionName}</span>
<span class="Goali">${APISGoals.stats[0].rows[14].stats[0].value}</span>
</div>
</div>
</div>`;
  } else {
  }

  if (Al) {
    const RECONFIG = await fetch(
        "https://webws.365scores.com/web/standings/?appTypeId=5&langId=27&timezoneName=Africa/Cairo&userCountryId=131&competitions=560&live=false&stageNum=1&seasonNum=57"
      ),
      APIS = await RECONFIG.json();

    Al.innerHTML = `
  <div class="TopLeagia"> <img src="https://imagecache.365scores.com/image/upload/f_png,w_68,h_68,c_limit,q_auto:eco,dpr_2,d_Countries:Round:1.png/v${APIS.competitions[0].imageVersion}/Competitions/light/${APIS.competitions[0].id}"/>${APIS.competitions[0].name}</div>
  <table class="table">
  <tbody class="tbody">
  <tr class="tr">
  <th></th>
  <th style="text-align: center;">فريق</th>
  <th>لعب</th>
  <th>فاز</th>
  <th>تعادل</th>
  <th>خسر</th>
  <th>نقاط</th>
  </tr>
  
  <tr>
  <th>${APIS.standings[0].rows[0].position}</th>
  <th><img class="scorelogo" src="https://imagecache.365scores.com/image/upload/f_png,w_24,h_24,c_limit,q_auto:eco,dpr_3,d_Competitors:default1.png/v${APIS.standings[0].rows[0].competitor.imageVersion}/Competitors/${APIS.standings[0].rows[0].competitor.id}"/> ${APIS.standings[0].rows[0].competitor.name}</th>
  <th>${APIS.standings[0].rows[0].gamePlayed}</th>
  <th>${APIS.standings[0].rows[0].gamesWon}</th>
  <th>${APIS.standings[0].rows[0].gamesEven}</th>
  <th>${APIS.standings[0].rows[0].gamesLost}</th>
  <th>${APIS.standings[0].rows[0].points}</th>
  </tr>
  
  <tr>
  <th>${APIS.standings[0].rows[1].position}</th>
  <th><img class="scorelogo" src="https://imagecache.365scores.com/image/upload/f_png,w_24,h_24,c_limit,q_auto:eco,dpr_3,d_Competitors:default1.png/v${APIS.standings[0].rows[1].competitor.imageVersion}/Competitors/${APIS.standings[0].rows[1].competitor.id}"/>${APIS.standings[0].rows[1].competitor.name}</th>
  <th>${APIS.standings[0].rows[1].gamePlayed}</th>
  <th>${APIS.standings[0].rows[1].gamesWon}</th>
  <th>${APIS.standings[0].rows[1].gamesEven}</th>
  <th>${APIS.standings[0].rows[1].gamesLost}</th>
  <th>${APIS.standings[0].rows[1].points}</th>
  </tr>
  
  <tr>
  <th>${APIS.standings[0].rows[2].position}</th>
  <th><img class="scorelogo" src="https://imagecache.365scores.com/image/upload/f_png,w_24,h_24,c_limit,q_auto:eco,dpr_3,d_Competitors:default1.png/v${APIS.standings[0].rows[2].competitor.imageVersion}/Competitors/${APIS.standings[0].rows[2].competitor.id}"/>${APIS.standings[0].rows[2].competitor.name}</th>
  <th>${APIS.standings[0].rows[2].gamePlayed}</th>
  <th>${APIS.standings[0].rows[2].gamesWon}</th>
  <th>${APIS.standings[0].rows[2].gamesEven}</th>
  <th>${APIS.standings[0].rows[2].gamesLost}</th>
  <th>${APIS.standings[0].rows[2].points}</th>
  </tr>
  
  <tr>
  <th>${APIS.standings[0].rows[3].position}</th>
  <th><img class="scorelogo" src="https://imagecache.365scores.com/image/upload/f_png,w_24,h_24,c_limit,q_auto:eco,dpr_3,d_Competitors:default1.png/v${APIS.standings[0].rows[3].competitor.imageVersion}/Competitors/${APIS.standings[0].rows[3].competitor.id}"/>${APIS.standings[0].rows[3].competitor.name}</th>
  <th>${APIS.standings[0].rows[3].gamePlayed}</th>
  <th>${APIS.standings[0].rows[3].gamesWon}</th>
  <th>${APIS.standings[0].rows[3].gamesEven}</th>
  <th>${APIS.standings[0].rows[3].gamesLost}</th>
  <th>${APIS.standings[0].rows[3].points}</th>
  </tr>
  
  <tr>
  <th>${APIS.standings[0].rows[4].position}</th>
  <th><img class="scorelogo" src="https://imagecache.365scores.com/image/upload/f_png,w_24,h_24,c_limit,q_auto:eco,dpr_3,d_Competitors:default1.png/v${APIS.standings[0].rows[4].competitor.imageVersion}/Competitors/${APIS.standings[0].rows[4].competitor.id}"/>${APIS.standings[0].rows[4].competitor.name}</th>
  <th>${APIS.standings[0].rows[4].gamePlayed}</th>
  <th>${APIS.standings[0].rows[4].gamesWon}</th>
  <th>${APIS.standings[0].rows[4].gamesEven}</th>
  <th>${APIS.standings[0].rows[4].gamesLost}</th>
  <th>${APIS.standings[0].rows[4].points}</th>
  </tr>
  
  <tr>
  <th>${APIS.standings[0].rows[5].position}</th>
  <th><img class="scorelogo" src="https://imagecache.365scores.com/image/upload/f_png,w_24,h_24,c_limit,q_auto:eco,dpr_3,d_Competitors:default1.png/v${APIS.standings[0].rows[5].competitor.imageVersion}/Competitors/${APIS.standings[0].rows[5].competitor.id}"/>${APIS.standings[0].rows[5].competitor.name}</th>
  <th>${APIS.standings[0].rows[5].gamePlayed}</th>
  <th>${APIS.standings[0].rows[5].gamesWon}</th>
  <th>${APIS.standings[0].rows[5].gamesEven}</th>
  <th>${APIS.standings[0].rows[5].gamesLost}</th>
  <th>${APIS.standings[0].rows[5].points}</th>
  </tr>
  
  <tr>
  <th>${APIS.standings[0].rows[6].position}</th>
  <th><img class="scorelogo" src="https://imagecache.365scores.com/image/upload/f_png,w_24,h_24,c_limit,q_auto:eco,dpr_3,d_Competitors:default1.png/v${APIS.standings[0].rows[6].competitor.imageVersion}/Competitors/${APIS.standings[0].rows[6].competitor.id}"/>${APIS.standings[0].rows[6].competitor.name}</th>
  <th>${APIS.standings[0].rows[6].gamePlayed}</th>
  <th>${APIS.standings[0].rows[6].gamesWon}</th>
  <th>${APIS.standings[0].rows[6].gamesEven}</th>
  <th>${APIS.standings[0].rows[6].gamesLost}</th>
  <th>${APIS.standings[0].rows[6].points}</th>
  </tr>
  
  <tr>
  <th>${APIS.standings[0].rows[7].position}</th>
  <th><img class="scorelogo" src="https://imagecache.365scores.com/image/upload/f_png,w_24,h_24,c_limit,q_auto:eco,dpr_3,d_Competitors:default1.png/v${APIS.standings[0].rows[7].competitor.imageVersion}/Competitors/${APIS.standings[0].rows[7].competitor.id}"/>${APIS.standings[0].rows[7].competitor.name}</th>
  <th>${APIS.standings[0].rows[7].gamePlayed}</th>
  <th>${APIS.standings[0].rows[7].gamesWon}</th>
  <th>${APIS.standings[0].rows[7].gamesEven}</th>
  <th>${APIS.standings[0].rows[7].gamesLost}</th>
  <th>${APIS.standings[0].rows[7].points}</th>
  </tr>
  
  <tr>
  <th>${APIS.standings[0].rows[8].position}</th>
  <th><img class="scorelogo" src="https://imagecache.365scores.com/image/upload/f_png,w_24,h_24,c_limit,q_auto:eco,dpr_3,d_Competitors:default1.png/v${APIS.standings[0].rows[8].competitor.imageVersion}/Competitors/${APIS.standings[0].rows[8].competitor.id}"/>${APIS.standings[0].rows[8].competitor.name}</th>
  <th>${APIS.standings[0].rows[8].gamePlayed}</th>
  <th>${APIS.standings[0].rows[8].gamesWon}</th>
  <th>${APIS.standings[0].rows[8].gamesEven}</th>
  <th>${APIS.standings[0].rows[8].gamesLost}</th>
  <th>${APIS.standings[0].rows[8].points}</th>
  </tr>
  
  <tr>
  <th>${APIS.standings[0].rows[9].position}</th>
  <th><img class="scorelogo" src="https://imagecache.365scores.com/image/upload/f_png,w_24,h_24,c_limit,q_auto:eco,dpr_3,d_Competitors:default1.png/v${APIS.standings[0].rows[9].competitor.imageVersion}/Competitors/${APIS.standings[0].rows[9].competitor.id}"/>${APIS.standings[0].rows[9].competitor.name}</th>
  <th>${APIS.standings[0].rows[9].gamePlayed}</th>
  <th>${APIS.standings[0].rows[9].gamesWon}</th>
  <th>${APIS.standings[0].rows[9].gamesEven}</th>
  <th>${APIS.standings[0].rows[9].gamesLost}</th>
  <th>${APIS.standings[0].rows[9].points}</th>
  </tr>
  
  <tr>
  <th>${APIS.standings[0].rows[10].position}</th>
  <th><img class="scorelogo" src="https://imagecache.365scores.com/image/upload/f_png,w_24,h_24,c_limit,q_auto:eco,dpr_3,d_Competitors:default1.png/v${APIS.standings[0].rows[10].competitor.imageVersion}/Competitors/${APIS.standings[0].rows[10].competitor.id}"/>${APIS.standings[0].rows[10].competitor.name}</th>
  <th>${APIS.standings[0].rows[10].gamePlayed}</th>
  <th>${APIS.standings[0].rows[10].gamesWon}</th>
  <th>${APIS.standings[0].rows[10].gamesEven}</th>
  <th>${APIS.standings[0].rows[10].gamesLost}</th>
  <th>${APIS.standings[0].rows[10].points}</th>
  </tr>
  
  <tr>
  <th>${APIS.standings[0].rows[11].position}</th>
  <th><img class="scorelogo" src="https://imagecache.365scores.com/image/upload/f_png,w_24,h_24,c_limit,q_auto:eco,dpr_3,d_Competitors:default1.png/v${APIS.standings[0].rows[11].competitor.imageVersion}/Competitors/${APIS.standings[0].rows[11].competitor.id}"/>${APIS.standings[0].rows[11].competitor.name}</th>
  <th>${APIS.standings[0].rows[11].gamePlayed}</th>
  <th>${APIS.standings[0].rows[11].gamesWon}</th>
  <th>${APIS.standings[0].rows[11].gamesEven}</th>
  <th>${APIS.standings[0].rows[11].gamesLost}</th>
  <th>${APIS.standings[0].rows[11].points}</th>
  </tr>
  
  <tr>
  <th>${APIS.standings[0].rows[12].position}</th>
  <th><img class="scorelogo" src="https://imagecache.365scores.com/image/upload/f_png,w_24,h_24,c_limit,q_auto:eco,dpr_3,d_Competitors:default1.png/v${APIS.standings[0].rows[12].competitor.imageVersion}/Competitors/${APIS.standings[0].rows[12].competitor.id}"/>${APIS.standings[0].rows[12].competitor.name}</th>
  <th>${APIS.standings[0].rows[12].gamePlayed}</th>
  <th>${APIS.standings[0].rows[12].gamesWon}</th>
  <th>${APIS.standings[0].rows[12].gamesEven}</th>
  <th>${APIS.standings[0].rows[12].gamesLost}</th>
  <th>${APIS.standings[0].rows[12].points}</th>
  </tr>
  
  <tr>
  <th>${APIS.standings[0].rows[13].position}</th>
  <th><img class="scorelogo" src="https://imagecache.365scores.com/image/upload/f_png,w_24,h_24,c_limit,q_auto:eco,dpr_3,d_Competitors:default1.png/v${APIS.standings[0].rows[13].competitor.imageVersion}/Competitors/${APIS.standings[0].rows[13].competitor.id}"/>${APIS.standings[0].rows[13].competitor.name}</th>
  <th>${APIS.standings[0].rows[13].gamePlayed}</th>
  <th>${APIS.standings[0].rows[13].gamesWon}</th>
  <th>${APIS.standings[0].rows[13].gamesEven}</th>
  <th>${APIS.standings[0].rows[13].gamesLost}</th>
  <th>${APIS.standings[0].rows[13].points}</th>
  </tr>
  
  <tr>
  <th>${APIS.standings[0].rows[14].position}</th>
  <th><img class="scorelogo" src="https://imagecache.365scores.com/image/upload/f_png,w_24,h_24,c_limit,q_auto:eco,dpr_3,d_Competitors:default1.png/v${APIS.standings[0].rows[14].competitor.imageVersion}/Competitors/${APIS.standings[0].rows[14].competitor.id}"/>${APIS.standings[0].rows[14].competitor.name}</th>
  <th>${APIS.standings[0].rows[14].gamePlayed}</th>
  <th>${APIS.standings[0].rows[14].gamesWon}</th>
  <th>${APIS.standings[0].rows[14].gamesEven}</th>
  <th>${APIS.standings[0].rows[14].gamesLost}</th>
  <th>${APIS.standings[0].rows[14].points}</th>
  </tr>
  
  <tr>
  <th>${APIS.standings[0].rows[15].position}</th>
  <th><img class="scorelogo" src="https://imagecache.365scores.com/image/upload/f_png,w_24,h_24,c_limit,q_auto:eco,dpr_3,d_Competitors:default1.png/v${APIS.standings[0].rows[15].competitor.imageVersion}/Competitors/${APIS.standings[0].rows[15].competitor.id}"/>${APIS.standings[0].rows[15].competitor.name}</th>
  <th>${APIS.standings[0].rows[15].gamePlayed}</th>
  <th>${APIS.standings[0].rows[15].gamesWon}</th>
  <th>${APIS.standings[0].rows[15].gamesEven}</th>
  <th>${APIS.standings[0].rows[15].gamesLost}</th>
  <th>${APIS.standings[0].rows[15].points}</th>
  </tr>
  
  
  </tbody>
  </table>`;

    Goals.innerHTML = ` [ جاري تحديث ترتيب الهدافين بالدوري الجزائري عاود الرجوع في وقت لاحق ] `;
  } else {
  }

  if (SY) {
    const RECONFIG = await fetch(
        "https://webws.365scores.com/web/standings/?appTypeId=5&langId=27&timezoneName=Africa/Cairo&userCountryId=131&competitions=564&live=false&stageNum=1&seasonNum=22"
      ),
      APIS = await RECONFIG.json();

    SY.innerHTML = `
<div class="TopLeagia"> <img src="https://imagecache.365scores.com/image/upload/f_png,w_68,h_68,c_limit,q_auto:eco,dpr_2,d_Countries:Round:1.png/v${APIS.competitions[0].imageVersion}/Competitions/light/${APIS.competitions[0].id}"/>${APIS.competitions[0].name}</div>
<table class="table">
<tbody class="tbody">
<tr class="tr">
<th></th>
<th style="text-align: center;">فريق</th>
<th>لعب</th>
<th>فاز</th>
<th>تعادل</th>
<th>خسر</th>
<th>نقاط</th>
</tr>

<tr>
<th>${APIS.standings[0].rows[0].position}</th>
<th><img class="scorelogo" src="https://imagecache.365scores.com/image/upload/f_png,w_24,h_24,c_limit,q_auto:eco,dpr_3,d_Competitors:default1.png/v${APIS.standings[0].rows[0].competitor.imageVersion}/Competitors/${APIS.standings[0].rows[0].competitor.id}"/> ${APIS.standings[0].rows[0].competitor.name}</th>
<th>${APIS.standings[0].rows[0].gamePlayed}</th>
<th>${APIS.standings[0].rows[0].gamesWon}</th>
<th>${APIS.standings[0].rows[0].gamesEven}</th>
<th>${APIS.standings[0].rows[0].gamesLost}</th>
<th>${APIS.standings[0].rows[0].points}</th>
</tr>

<tr>
<th>${APIS.standings[0].rows[1].position}</th>
<th><img class="scorelogo" src="https://imagecache.365scores.com/image/upload/f_png,w_24,h_24,c_limit,q_auto:eco,dpr_3,d_Competitors:default1.png/v${APIS.standings[0].rows[1].competitor.imageVersion}/Competitors/${APIS.standings[0].rows[1].competitor.id}"/>${APIS.standings[0].rows[1].competitor.name}</th>
<th>${APIS.standings[0].rows[1].gamePlayed}</th>
<th>${APIS.standings[0].rows[1].gamesWon}</th>
<th>${APIS.standings[0].rows[1].gamesEven}</th>
<th>${APIS.standings[0].rows[1].gamesLost}</th>
<th>${APIS.standings[0].rows[1].points}</th>
</tr>

<tr>
<th>${APIS.standings[0].rows[2].position}</th>
<th><img class="scorelogo" src="https://imagecache.365scores.com/image/upload/f_png,w_24,h_24,c_limit,q_auto:eco,dpr_3,d_Competitors:default1.png/v${APIS.standings[0].rows[2].competitor.imageVersion}/Competitors/${APIS.standings[0].rows[2].competitor.id}"/>${APIS.standings[0].rows[2].competitor.name}</th>
<th>${APIS.standings[0].rows[2].gamePlayed}</th>
<th>${APIS.standings[0].rows[2].gamesWon}</th>
<th>${APIS.standings[0].rows[2].gamesEven}</th>
<th>${APIS.standings[0].rows[2].gamesLost}</th>
<th>${APIS.standings[0].rows[2].points}</th>
</tr>

<tr>
<th>${APIS.standings[0].rows[3].position}</th>
<th><img class="scorelogo" src="https://imagecache.365scores.com/image/upload/f_png,w_24,h_24,c_limit,q_auto:eco,dpr_3,d_Competitors:default1.png/v${APIS.standings[0].rows[3].competitor.imageVersion}/Competitors/${APIS.standings[0].rows[3].competitor.id}"/>${APIS.standings[0].rows[3].competitor.name}</th>
<th>${APIS.standings[0].rows[3].gamePlayed}</th>
<th>${APIS.standings[0].rows[3].gamesWon}</th>
<th>${APIS.standings[0].rows[3].gamesEven}</th>
<th>${APIS.standings[0].rows[3].gamesLost}</th>
<th>${APIS.standings[0].rows[3].points}</th>
</tr>

<tr>
<th>${APIS.standings[0].rows[4].position}</th>
<th><img class="scorelogo" src="https://imagecache.365scores.com/image/upload/f_png,w_24,h_24,c_limit,q_auto:eco,dpr_3,d_Competitors:default1.png/v${APIS.standings[0].rows[4].competitor.imageVersion}/Competitors/${APIS.standings[0].rows[4].competitor.id}"/>${APIS.standings[0].rows[4].competitor.name}</th>
<th>${APIS.standings[0].rows[4].gamePlayed}</th>
<th>${APIS.standings[0].rows[4].gamesWon}</th>
<th>${APIS.standings[0].rows[4].gamesEven}</th>
<th>${APIS.standings[0].rows[4].gamesLost}</th>
<th>${APIS.standings[0].rows[4].points}</th>
</tr>

<tr>
<th>${APIS.standings[0].rows[5].position}</th>
<th><img class="scorelogo" src="https://imagecache.365scores.com/image/upload/f_png,w_24,h_24,c_limit,q_auto:eco,dpr_3,d_Competitors:default1.png/v${APIS.standings[0].rows[5].competitor.imageVersion}/Competitors/${APIS.standings[0].rows[5].competitor.id}"/>${APIS.standings[0].rows[5].competitor.name}</th>
<th>${APIS.standings[0].rows[5].gamePlayed}</th>
<th>${APIS.standings[0].rows[5].gamesWon}</th>
<th>${APIS.standings[0].rows[5].gamesEven}</th>
<th>${APIS.standings[0].rows[5].gamesLost}</th>
<th>${APIS.standings[0].rows[5].points}</th>
</tr>

<tr>
<th>${APIS.standings[0].rows[6].position}</th>
<th><img class="scorelogo" src="https://imagecache.365scores.com/image/upload/f_png,w_24,h_24,c_limit,q_auto:eco,dpr_3,d_Competitors:default1.png/v${APIS.standings[0].rows[6].competitor.imageVersion}/Competitors/${APIS.standings[0].rows[6].competitor.id}"/>${APIS.standings[0].rows[6].competitor.name}</th>
<th>${APIS.standings[0].rows[6].gamePlayed}</th>
<th>${APIS.standings[0].rows[6].gamesWon}</th>
<th>${APIS.standings[0].rows[6].gamesEven}</th>
<th>${APIS.standings[0].rows[6].gamesLost}</th>
<th>${APIS.standings[0].rows[6].points}</th>
</tr>

<tr>
<th>${APIS.standings[0].rows[7].position}</th>
<th><img class="scorelogo" src="https://imagecache.365scores.com/image/upload/f_png,w_24,h_24,c_limit,q_auto:eco,dpr_3,d_Competitors:default1.png/v${APIS.standings[0].rows[7].competitor.imageVersion}/Competitors/${APIS.standings[0].rows[7].competitor.id}"/>${APIS.standings[0].rows[7].competitor.name}</th>
<th>${APIS.standings[0].rows[7].gamePlayed}</th>
<th>${APIS.standings[0].rows[7].gamesWon}</th>
<th>${APIS.standings[0].rows[7].gamesEven}</th>
<th>${APIS.standings[0].rows[7].gamesLost}</th>
<th>${APIS.standings[0].rows[7].points}</th>
</tr>

<tr>
<th>${APIS.standings[0].rows[8].position}</th>
<th><img class="scorelogo" src="https://imagecache.365scores.com/image/upload/f_png,w_24,h_24,c_limit,q_auto:eco,dpr_3,d_Competitors:default1.png/v${APIS.standings[0].rows[8].competitor.imageVersion}/Competitors/${APIS.standings[0].rows[8].competitor.id}"/>${APIS.standings[0].rows[8].competitor.name}</th>
<th>${APIS.standings[0].rows[8].gamePlayed}</th>
<th>${APIS.standings[0].rows[8].gamesWon}</th>
<th>${APIS.standings[0].rows[8].gamesEven}</th>
<th>${APIS.standings[0].rows[8].gamesLost}</th>
<th>${APIS.standings[0].rows[8].points}</th>
</tr>

<tr>
<th>${APIS.standings[0].rows[9].position}</th>
<th><img class="scorelogo" src="https://imagecache.365scores.com/image/upload/f_png,w_24,h_24,c_limit,q_auto:eco,dpr_3,d_Competitors:default1.png/v${APIS.standings[0].rows[9].competitor.imageVersion}/Competitors/${APIS.standings[0].rows[9].competitor.id}"/>${APIS.standings[0].rows[9].competitor.name}</th>
<th>${APIS.standings[0].rows[9].gamePlayed}</th>
<th>${APIS.standings[0].rows[9].gamesWon}</th>
<th>${APIS.standings[0].rows[9].gamesEven}</th>
<th>${APIS.standings[0].rows[9].gamesLost}</th>
<th>${APIS.standings[0].rows[9].points}</th>
</tr>

<tr>
<th>${APIS.standings[0].rows[10].position}</th>
<th><img class="scorelogo" src="https://imagecache.365scores.com/image/upload/f_png,w_24,h_24,c_limit,q_auto:eco,dpr_3,d_Competitors:default1.png/v${APIS.standings[0].rows[10].competitor.imageVersion}/Competitors/${APIS.standings[0].rows[10].competitor.id}"/>${APIS.standings[0].rows[10].competitor.name}</th>
<th>${APIS.standings[0].rows[10].gamePlayed}</th>
<th>${APIS.standings[0].rows[10].gamesWon}</th>
<th>${APIS.standings[0].rows[10].gamesEven}</th>
<th>${APIS.standings[0].rows[10].gamesLost}</th>
<th>${APIS.standings[0].rows[10].points}</th>
</tr>

<tr>
<th>${APIS.standings[0].rows[11].position}</th>
<th><img class="scorelogo" src="https://imagecache.365scores.com/image/upload/f_png,w_24,h_24,c_limit,q_auto:eco,dpr_3,d_Competitors:default1.png/v${APIS.standings[0].rows[11].competitor.imageVersion}/Competitors/${APIS.standings[0].rows[11].competitor.id}"/>${APIS.standings[0].rows[11].competitor.name}</th>
<th>${APIS.standings[0].rows[11].gamePlayed}</th>
<th>${APIS.standings[0].rows[11].gamesWon}</th>
<th>${APIS.standings[0].rows[11].gamesEven}</th>
<th>${APIS.standings[0].rows[11].gamesLost}</th>
<th>${APIS.standings[0].rows[11].points}</th>
</tr>

</tbody>
</table>`;

    Goals.innerHTML = ` [ جاري تحديث ترتيب الهدافين بالدوري السوري عاود الرجوع في وقت لاحق ] `;
  } else {
  }

  if (JO) {
    const RECONFIG = await fetch(
        "https://webws.365scores.com/web/standings/?appTypeId=5&langId=27&timezoneName=Africa/Cairo&userCountryId=131&competitions=565&live=false&stageNum=1&seasonNum=19"
      ),
      APIS = await RECONFIG.json();

    JO.innerHTML = `
<div class="TopLeagia"> <img src="https://imagecache.365scores.com/image/upload/f_png,w_68,h_68,c_limit,q_auto:eco,dpr_2,d_Countries:Round:1.png/v${APIS.competitions[0].imageVersion}/Competitions/light/${APIS.competitions[0].id}"/>${APIS.competitions[0].name}</div>
<table class="table">
<tbody class="tbody">
<tr class="tr">
<th></th>
<th style="text-align: center;">فريق</th>
<th>لعب</th>
<th>فاز</th>
<th>تعادل</th>
<th>خسر</th>
<th>نقاط</th>
</tr>

<tr>
<th>${APIS.standings[0].rows[0].position}</th>
<th><img class="scorelogo" src="https://imagecache.365scores.com/image/upload/f_png,w_24,h_24,c_limit,q_auto:eco,dpr_3,d_Competitors:default1.png/v${APIS.standings[0].rows[0].competitor.imageVersion}/Competitors/${APIS.standings[0].rows[0].competitor.id}"/> ${APIS.standings[0].rows[0].competitor.name}</th>
<th>${APIS.standings[0].rows[0].gamePlayed}</th>
<th>${APIS.standings[0].rows[0].gamesWon}</th>
<th>${APIS.standings[0].rows[0].gamesEven}</th>
<th>${APIS.standings[0].rows[0].gamesLost}</th>
<th>${APIS.standings[0].rows[0].points}</th>
</tr>

<tr>
<th>${APIS.standings[0].rows[1].position}</th>
<th><img class="scorelogo" src="https://imagecache.365scores.com/image/upload/f_png,w_24,h_24,c_limit,q_auto:eco,dpr_3,d_Competitors:default1.png/v${APIS.standings[0].rows[1].competitor.imageVersion}/Competitors/${APIS.standings[0].rows[1].competitor.id}"/>${APIS.standings[0].rows[1].competitor.name}</th>
<th>${APIS.standings[0].rows[1].gamePlayed}</th>
<th>${APIS.standings[0].rows[1].gamesWon}</th>
<th>${APIS.standings[0].rows[1].gamesEven}</th>
<th>${APIS.standings[0].rows[1].gamesLost}</th>
<th>${APIS.standings[0].rows[1].points}</th>
</tr>

<tr>
<th>${APIS.standings[0].rows[2].position}</th>
<th><img class="scorelogo" src="https://imagecache.365scores.com/image/upload/f_png,w_24,h_24,c_limit,q_auto:eco,dpr_3,d_Competitors:default1.png/v${APIS.standings[0].rows[2].competitor.imageVersion}/Competitors/${APIS.standings[0].rows[2].competitor.id}"/>${APIS.standings[0].rows[2].competitor.name}</th>
<th>${APIS.standings[0].rows[2].gamePlayed}</th>
<th>${APIS.standings[0].rows[2].gamesWon}</th>
<th>${APIS.standings[0].rows[2].gamesEven}</th>
<th>${APIS.standings[0].rows[2].gamesLost}</th>
<th>${APIS.standings[0].rows[2].points}</th>
</tr>

<tr>
<th>${APIS.standings[0].rows[3].position}</th>
<th><img class="scorelogo" src="https://imagecache.365scores.com/image/upload/f_png,w_24,h_24,c_limit,q_auto:eco,dpr_3,d_Competitors:default1.png/v${APIS.standings[0].rows[3].competitor.imageVersion}/Competitors/${APIS.standings[0].rows[3].competitor.id}"/>${APIS.standings[0].rows[3].competitor.name}</th>
<th>${APIS.standings[0].rows[3].gamePlayed}</th>
<th>${APIS.standings[0].rows[3].gamesWon}</th>
<th>${APIS.standings[0].rows[3].gamesEven}</th>
<th>${APIS.standings[0].rows[3].gamesLost}</th>
<th>${APIS.standings[0].rows[3].points}</th>
</tr>

<tr>
<th>${APIS.standings[0].rows[4].position}</th>
<th><img class="scorelogo" src="https://imagecache.365scores.com/image/upload/f_png,w_24,h_24,c_limit,q_auto:eco,dpr_3,d_Competitors:default1.png/v${APIS.standings[0].rows[4].competitor.imageVersion}/Competitors/${APIS.standings[0].rows[4].competitor.id}"/>${APIS.standings[0].rows[4].competitor.name}</th>
<th>${APIS.standings[0].rows[4].gamePlayed}</th>
<th>${APIS.standings[0].rows[4].gamesWon}</th>
<th>${APIS.standings[0].rows[4].gamesEven}</th>
<th>${APIS.standings[0].rows[4].gamesLost}</th>
<th>${APIS.standings[0].rows[4].points}</th>
</tr>

<tr>
<th>${APIS.standings[0].rows[5].position}</th>
<th><img class="scorelogo" src="https://imagecache.365scores.com/image/upload/f_png,w_24,h_24,c_limit,q_auto:eco,dpr_3,d_Competitors:default1.png/v${APIS.standings[0].rows[5].competitor.imageVersion}/Competitors/${APIS.standings[0].rows[5].competitor.id}"/>${APIS.standings[0].rows[5].competitor.name}</th>
<th>${APIS.standings[0].rows[5].gamePlayed}</th>
<th>${APIS.standings[0].rows[5].gamesWon}</th>
<th>${APIS.standings[0].rows[5].gamesEven}</th>
<th>${APIS.standings[0].rows[5].gamesLost}</th>
<th>${APIS.standings[0].rows[5].points}</th>
</tr>

<tr>
<th>${APIS.standings[0].rows[6].position}</th>
<th><img class="scorelogo" src="https://imagecache.365scores.com/image/upload/f_png,w_24,h_24,c_limit,q_auto:eco,dpr_3,d_Competitors:default1.png/v${APIS.standings[0].rows[6].competitor.imageVersion}/Competitors/${APIS.standings[0].rows[6].competitor.id}"/>${APIS.standings[0].rows[6].competitor.name}</th>
<th>${APIS.standings[0].rows[6].gamePlayed}</th>
<th>${APIS.standings[0].rows[6].gamesWon}</th>
<th>${APIS.standings[0].rows[6].gamesEven}</th>
<th>${APIS.standings[0].rows[6].gamesLost}</th>
<th>${APIS.standings[0].rows[6].points}</th>
</tr>

<tr>
<th>${APIS.standings[0].rows[7].position}</th>
<th><img class="scorelogo" src="https://imagecache.365scores.com/image/upload/f_png,w_24,h_24,c_limit,q_auto:eco,dpr_3,d_Competitors:default1.png/v${APIS.standings[0].rows[7].competitor.imageVersion}/Competitors/${APIS.standings[0].rows[7].competitor.id}"/>${APIS.standings[0].rows[7].competitor.name}</th>
<th>${APIS.standings[0].rows[7].gamePlayed}</th>
<th>${APIS.standings[0].rows[7].gamesWon}</th>
<th>${APIS.standings[0].rows[7].gamesEven}</th>
<th>${APIS.standings[0].rows[7].gamesLost}</th>
<th>${APIS.standings[0].rows[7].points}</th>
</tr>

<tr>
<th>${APIS.standings[0].rows[8].position}</th>
<th><img class="scorelogo" src="https://imagecache.365scores.com/image/upload/f_png,w_24,h_24,c_limit,q_auto:eco,dpr_3,d_Competitors:default1.png/v${APIS.standings[0].rows[8].competitor.imageVersion}/Competitors/${APIS.standings[0].rows[8].competitor.id}"/>${APIS.standings[0].rows[8].competitor.name}</th>
<th>${APIS.standings[0].rows[8].gamePlayed}</th>
<th>${APIS.standings[0].rows[8].gamesWon}</th>
<th>${APIS.standings[0].rows[8].gamesEven}</th>
<th>${APIS.standings[0].rows[8].gamesLost}</th>
<th>${APIS.standings[0].rows[8].points}</th>
</tr>

<tr>
<th>${APIS.standings[0].rows[9].position}</th>
<th><img class="scorelogo" src="https://imagecache.365scores.com/image/upload/f_png,w_24,h_24,c_limit,q_auto:eco,dpr_3,d_Competitors:default1.png/v${APIS.standings[0].rows[9].competitor.imageVersion}/Competitors/${APIS.standings[0].rows[9].competitor.id}"/>${APIS.standings[0].rows[9].competitor.name}</th>
<th>${APIS.standings[0].rows[9].gamePlayed}</th>
<th>${APIS.standings[0].rows[9].gamesWon}</th>
<th>${APIS.standings[0].rows[9].gamesEven}</th>
<th>${APIS.standings[0].rows[9].gamesLost}</th>
<th>${APIS.standings[0].rows[9].points}</th>
</tr>

<tr>
<th>${APIS.standings[0].rows[10].position}</th>
<th><img class="scorelogo" src="https://imagecache.365scores.com/image/upload/f_png,w_24,h_24,c_limit,q_auto:eco,dpr_3,d_Competitors:default1.png/v${APIS.standings[0].rows[10].competitor.imageVersion}/Competitors/${APIS.standings[0].rows[10].competitor.id}"/>${APIS.standings[0].rows[10].competitor.name}</th>
<th>${APIS.standings[0].rows[10].gamePlayed}</th>
<th>${APIS.standings[0].rows[10].gamesWon}</th>
<th>${APIS.standings[0].rows[10].gamesEven}</th>
<th>${APIS.standings[0].rows[10].gamesLost}</th>
<th>${APIS.standings[0].rows[10].points}</th>
</tr>

<tr>
<th>${APIS.standings[0].rows[11].position}</th>
<th><img class="scorelogo" src="https://imagecache.365scores.com/image/upload/f_png,w_24,h_24,c_limit,q_auto:eco,dpr_3,d_Competitors:default1.png/v${APIS.standings[0].rows[11].competitor.imageVersion}/Competitors/${APIS.standings[0].rows[11].competitor.id}"/>${APIS.standings[0].rows[11].competitor.name}</th>
<th>${APIS.standings[0].rows[11].gamePlayed}</th>
<th>${APIS.standings[0].rows[11].gamesWon}</th>
<th>${APIS.standings[0].rows[11].gamesEven}</th>
<th>${APIS.standings[0].rows[11].gamesLost}</th>
<th>${APIS.standings[0].rows[11].points}</th>
</tr>

</tbody>
</table>`;

    Goals.innerHTML = ` [ جاري تحديث ترتيب الهدافين بالدوري الاردني عاود الرجوع في وقت لاحق ] `;
  } else {
  }

  if (TU) {
    const RECONFIG = await fetch(
        "https://webws.365scores.com/web/standings/?appTypeId=5&langId=27&timezoneName=Africa/Cairo&userCountryId=131&competitions=78&live=false&stageNum=1&seasonNum=71"
      ),
      APIS = await RECONFIG.json();

    TU.innerHTML = `
  <div class="TopLeagia"> <img src="https://imagecache.365scores.com/image/upload/f_png,w_68,h_68,c_limit,q_auto:eco,dpr_2,d_Countries:Round:1.png/v${APIS.competitions[0].imageVersion}/Competitions/light/${APIS.competitions[0].id}"/>${APIS.competitions[0].name}</div>
  <table class="table">
  <tbody class="tbody">
  <tr class="tr">
  <th></th>
  <th style="text-align: center;">فريق</th>
  <th>لعب</th>
  <th>فاز</th>
  <th>تعادل</th>
  <th>خسر</th>
  <th>نقاط</th>
  </tr>
  
  <tr>
  <th>${APIS.standings[0].rows[0].position}</th>
  <th><img class="scorelogo" src="https://imagecache.365scores.com/image/upload/f_png,w_24,h_24,c_limit,q_auto:eco,dpr_3,d_Competitors:default1.png/v${APIS.standings[0].rows[0].competitor.imageVersion}/Competitors/${APIS.standings[0].rows[0].competitor.id}"/> ${APIS.standings[0].rows[0].competitor.name}</th>
  <th>${APIS.standings[0].rows[0].gamePlayed}</th>
  <th>${APIS.standings[0].rows[0].gamesWon}</th>
  <th>${APIS.standings[0].rows[0].gamesEven}</th>
  <th>${APIS.standings[0].rows[0].gamesLost}</th>
  <th>${APIS.standings[0].rows[0].points}</th>
  </tr>
  
  <tr>
  <th>${APIS.standings[0].rows[1].position}</th>
  <th><img class="scorelogo" src="https://imagecache.365scores.com/image/upload/f_png,w_24,h_24,c_limit,q_auto:eco,dpr_3,d_Competitors:default1.png/v${APIS.standings[0].rows[1].competitor.imageVersion}/Competitors/${APIS.standings[0].rows[1].competitor.id}"/>${APIS.standings[0].rows[1].competitor.name}</th>
  <th>${APIS.standings[0].rows[1].gamePlayed}</th>
  <th>${APIS.standings[0].rows[1].gamesWon}</th>
  <th>${APIS.standings[0].rows[1].gamesEven}</th>
  <th>${APIS.standings[0].rows[1].gamesLost}</th>
  <th>${APIS.standings[0].rows[1].points}</th>
  </tr>
  
  <tr>
  <th>${APIS.standings[0].rows[2].position}</th>
  <th><img class="scorelogo" src="https://imagecache.365scores.com/image/upload/f_png,w_24,h_24,c_limit,q_auto:eco,dpr_3,d_Competitors:default1.png/v${APIS.standings[0].rows[2].competitor.imageVersion}/Competitors/${APIS.standings[0].rows[2].competitor.id}"/>${APIS.standings[0].rows[2].competitor.name}</th>
  <th>${APIS.standings[0].rows[2].gamePlayed}</th>
  <th>${APIS.standings[0].rows[2].gamesWon}</th>
  <th>${APIS.standings[0].rows[2].gamesEven}</th>
  <th>${APIS.standings[0].rows[2].gamesLost}</th>
  <th>${APIS.standings[0].rows[2].points}</th>
  </tr>
  
  <tr>
  <th>${APIS.standings[0].rows[3].position}</th>
  <th><img class="scorelogo" src="https://imagecache.365scores.com/image/upload/f_png,w_24,h_24,c_limit,q_auto:eco,dpr_3,d_Competitors:default1.png/v${APIS.standings[0].rows[3].competitor.imageVersion}/Competitors/${APIS.standings[0].rows[3].competitor.id}"/>${APIS.standings[0].rows[3].competitor.name}</th>
  <th>${APIS.standings[0].rows[3].gamePlayed}</th>
  <th>${APIS.standings[0].rows[3].gamesWon}</th>
  <th>${APIS.standings[0].rows[3].gamesEven}</th>
  <th>${APIS.standings[0].rows[3].gamesLost}</th>
  <th>${APIS.standings[0].rows[3].points}</th>
  </tr>
  
  <tr>
  <th>${APIS.standings[0].rows[4].position}</th>
  <th><img class="scorelogo" src="https://imagecache.365scores.com/image/upload/f_png,w_24,h_24,c_limit,q_auto:eco,dpr_3,d_Competitors:default1.png/v${APIS.standings[0].rows[4].competitor.imageVersion}/Competitors/${APIS.standings[0].rows[4].competitor.id}"/>${APIS.standings[0].rows[4].competitor.name}</th>
  <th>${APIS.standings[0].rows[4].gamePlayed}</th>
  <th>${APIS.standings[0].rows[4].gamesWon}</th>
  <th>${APIS.standings[0].rows[4].gamesEven}</th>
  <th>${APIS.standings[0].rows[4].gamesLost}</th>
  <th>${APIS.standings[0].rows[4].points}</th>
  </tr>
  
  <tr>
  <th>${APIS.standings[0].rows[5].position}</th>
  <th><img class="scorelogo" src="https://imagecache.365scores.com/image/upload/f_png,w_24,h_24,c_limit,q_auto:eco,dpr_3,d_Competitors:default1.png/v${APIS.standings[0].rows[5].competitor.imageVersion}/Competitors/${APIS.standings[0].rows[5].competitor.id}"/>${APIS.standings[0].rows[5].competitor.name}</th>
  <th>${APIS.standings[0].rows[5].gamePlayed}</th>
  <th>${APIS.standings[0].rows[5].gamesWon}</th>
  <th>${APIS.standings[0].rows[5].gamesEven}</th>
  <th>${APIS.standings[0].rows[5].gamesLost}</th>
  <th>${APIS.standings[0].rows[5].points}</th>
  </tr>
  
  <tr>
  <th>${APIS.standings[0].rows[6].position}</th>
  <th><img class="scorelogo" src="https://imagecache.365scores.com/image/upload/f_png,w_24,h_24,c_limit,q_auto:eco,dpr_3,d_Competitors:default1.png/v${APIS.standings[0].rows[6].competitor.imageVersion}/Competitors/${APIS.standings[0].rows[6].competitor.id}"/>${APIS.standings[0].rows[6].competitor.name}</th>
  <th>${APIS.standings[0].rows[6].gamePlayed}</th>
  <th>${APIS.standings[0].rows[6].gamesWon}</th>
  <th>${APIS.standings[0].rows[6].gamesEven}</th>
  <th>${APIS.standings[0].rows[6].gamesLost}</th>
  <th>${APIS.standings[0].rows[6].points}</th>
  </tr>
  
  <tr>
  <th>${APIS.standings[0].rows[7].position}</th>
  <th><img class="scorelogo" src="https://imagecache.365scores.com/image/upload/f_png,w_24,h_24,c_limit,q_auto:eco,dpr_3,d_Competitors:default1.png/v${APIS.standings[0].rows[7].competitor.imageVersion}/Competitors/${APIS.standings[0].rows[7].competitor.id}"/>${APIS.standings[0].rows[7].competitor.name}</th>
  <th>${APIS.standings[0].rows[7].gamePlayed}</th>
  <th>${APIS.standings[0].rows[7].gamesWon}</th>
  <th>${APIS.standings[0].rows[7].gamesEven}</th>
  <th>${APIS.standings[0].rows[7].gamesLost}</th>
  <th>${APIS.standings[0].rows[7].points}</th>
  </tr>
  
  <tr>
  <th>${APIS.standings[0].rows[8].position}</th>
  <th><img class="scorelogo" src="https://imagecache.365scores.com/image/upload/f_png,w_24,h_24,c_limit,q_auto:eco,dpr_3,d_Competitors:default1.png/v${APIS.standings[0].rows[8].competitor.imageVersion}/Competitors/${APIS.standings[0].rows[8].competitor.id}"/>${APIS.standings[0].rows[8].competitor.name}</th>
  <th>${APIS.standings[0].rows[8].gamePlayed}</th>
  <th>${APIS.standings[0].rows[8].gamesWon}</th>
  <th>${APIS.standings[0].rows[8].gamesEven}</th>
  <th>${APIS.standings[0].rows[8].gamesLost}</th>
  <th>${APIS.standings[0].rows[8].points}</th>
  </tr>
  
  <tr>
  <th>${APIS.standings[0].rows[9].position}</th>
  <th><img class="scorelogo" src="https://imagecache.365scores.com/image/upload/f_png,w_24,h_24,c_limit,q_auto:eco,dpr_3,d_Competitors:default1.png/v${APIS.standings[0].rows[9].competitor.imageVersion}/Competitors/${APIS.standings[0].rows[9].competitor.id}"/>${APIS.standings[0].rows[9].competitor.name}</th>
  <th>${APIS.standings[0].rows[9].gamePlayed}</th>
  <th>${APIS.standings[0].rows[9].gamesWon}</th>
  <th>${APIS.standings[0].rows[9].gamesEven}</th>
  <th>${APIS.standings[0].rows[9].gamesLost}</th>
  <th>${APIS.standings[0].rows[9].points}</th>
  </tr>
  
  <tr>
  <th>${APIS.standings[0].rows[10].position}</th>
  <th><img class="scorelogo" src="https://imagecache.365scores.com/image/upload/f_png,w_24,h_24,c_limit,q_auto:eco,dpr_3,d_Competitors:default1.png/v${APIS.standings[0].rows[10].competitor.imageVersion}/Competitors/${APIS.standings[0].rows[10].competitor.id}"/>${APIS.standings[0].rows[10].competitor.name}</th>
  <th>${APIS.standings[0].rows[10].gamePlayed}</th>
  <th>${APIS.standings[0].rows[10].gamesWon}</th>
  <th>${APIS.standings[0].rows[10].gamesEven}</th>
  <th>${APIS.standings[0].rows[10].gamesLost}</th>
  <th>${APIS.standings[0].rows[10].points}</th>
  </tr>
  
  <tr>
  <th>${APIS.standings[0].rows[11].position}</th>
  <th><img class="scorelogo" src="https://imagecache.365scores.com/image/upload/f_png,w_24,h_24,c_limit,q_auto:eco,dpr_3,d_Competitors:default1.png/v${APIS.standings[0].rows[11].competitor.imageVersion}/Competitors/${APIS.standings[0].rows[11].competitor.id}"/>${APIS.standings[0].rows[11].competitor.name}</th>
  <th>${APIS.standings[0].rows[11].gamePlayed}</th>
  <th>${APIS.standings[0].rows[11].gamesWon}</th>
  <th>${APIS.standings[0].rows[11].gamesEven}</th>
  <th>${APIS.standings[0].rows[11].gamesLost}</th>
  <th>${APIS.standings[0].rows[11].points}</th>
  </tr>
  
  
  <tr>
  <th>${APIS.standings[0].rows[12].position}</th>
  <th><img class="scorelogo" src="https://imagecache.365scores.com/image/upload/f_png,w_24,h_24,c_limit,q_auto:eco,dpr_3,d_Competitors:default1.png/v${APIS.standings[0].rows[12].competitor.imageVersion}/Competitors/${APIS.standings[0].rows[12].competitor.id}"/>${APIS.standings[0].rows[12].competitor.name}</th>
  <th>${APIS.standings[0].rows[12].gamePlayed}</th>
  <th>${APIS.standings[0].rows[12].gamesWon}</th>
  <th>${APIS.standings[0].rows[12].gamesEven}</th>
  <th>${APIS.standings[0].rows[12].gamesLost}</th>
  <th>${APIS.standings[0].rows[12].points}</th>
  </tr>
  
  
  <tr>
  <th>${APIS.standings[0].rows[13].position}</th>
  <th><img class="scorelogo" src="https://imagecache.365scores.com/image/upload/f_png,w_24,h_24,c_limit,q_auto:eco,dpr_3,d_Competitors:default1.png/v${APIS.standings[0].rows[13].competitor.imageVersion}/Competitors/${APIS.standings[0].rows[13].competitor.id}"/>${APIS.standings[0].rows[13].competitor.name}</th>
  <th>${APIS.standings[0].rows[13].gamePlayed}</th>
  <th>${APIS.standings[0].rows[13].gamesWon}</th>
  <th>${APIS.standings[0].rows[13].gamesEven}</th>
  <th>${APIS.standings[0].rows[13].gamesLost}</th>
  <th>${APIS.standings[0].rows[13].points}</th>
  </tr>
  
  
  <tr>
  <th>${APIS.standings[0].rows[14].position}</th>
  <th><img class="scorelogo" src="https://imagecache.365scores.com/image/upload/f_png,w_24,h_24,c_limit,q_auto:eco,dpr_3,d_Competitors:default1.png/v${APIS.standings[0].rows[14].competitor.imageVersion}/Competitors/${APIS.standings[0].rows[14].competitor.id}"/>${APIS.standings[0].rows[14].competitor.name}</th>
  <th>${APIS.standings[0].rows[14].gamePlayed}</th>
  <th>${APIS.standings[0].rows[14].gamesWon}</th>
  <th>${APIS.standings[0].rows[14].gamesEven}</th>
  <th>${APIS.standings[0].rows[14].gamesLost}</th>
  <th>${APIS.standings[0].rows[14].points}</th>
  </tr>
  
  
  <tr>
  <th>${APIS.standings[0].rows[15].position}</th>
  <th><img class="scorelogo" src="https://imagecache.365scores.com/image/upload/f_png,w_24,h_24,c_limit,q_auto:eco,dpr_3,d_Competitors:default1.png/v${APIS.standings[0].rows[15].competitor.imageVersion}/Competitors/${APIS.standings[0].rows[15].competitor.id}"/>${APIS.standings[0].rows[15].competitor.name}</th>
  <th>${APIS.standings[0].rows[15].gamePlayed}</th>
  <th>${APIS.standings[0].rows[15].gamesWon}</th>
  <th>${APIS.standings[0].rows[15].gamesEven}</th>
  <th>${APIS.standings[0].rows[15].gamesLost}</th>
  <th>${APIS.standings[0].rows[15].points}</th>
  </tr>
  
  
  <tr>
  <th>${APIS.standings[0].rows[16].position}</th>
  <th><img class="scorelogo" src="https://imagecache.365scores.com/image/upload/f_png,w_24,h_24,c_limit,q_auto:eco,dpr_3,d_Competitors:default1.png/v${APIS.standings[0].rows[16].competitor.imageVersion}/Competitors/${APIS.standings[0].rows[16].competitor.id}"/>${APIS.standings[0].rows[16].competitor.name}</th>
  <th>${APIS.standings[0].rows[16].gamePlayed}</th>
  <th>${APIS.standings[0].rows[16].gamesWon}</th>
  <th>${APIS.standings[0].rows[16].gamesEven}</th>
  <th>${APIS.standings[0].rows[16].gamesLost}</th>
  <th>${APIS.standings[0].rows[16].points}</th>
  </tr>
  
  
  <tr>
  <th>${APIS.standings[0].rows[17].position}</th>
  <th><img class="scorelogo" src="https://imagecache.365scores.com/image/upload/f_png,w_24,h_24,c_limit,q_auto:eco,dpr_3,d_Competitors:default1.png/v${APIS.standings[0].rows[17].competitor.imageVersion}/Competitors/${APIS.standings[0].rows[17].competitor.id}"/>${APIS.standings[0].rows[17].competitor.name}</th>
  <th>${APIS.standings[0].rows[17].gamePlayed}</th>
  <th>${APIS.standings[0].rows[17].gamesWon}</th>
  <th>${APIS.standings[0].rows[17].gamesEven}</th>
  <th>${APIS.standings[0].rows[17].gamesLost}</th>
  <th>${APIS.standings[0].rows[17].points}</th>
  </tr>
  
  
  <tr>
  <th>${APIS.standings[0].rows[18].position}</th>
  <th><img class="scorelogo" src="https://imagecache.365scores.com/image/upload/f_png,w_24,h_24,c_limit,q_auto:eco,dpr_3,d_Competitors:default1.png/v${APIS.standings[0].rows[18].competitor.imageVersion}/Competitors/${APIS.standings[0].rows[18].competitor.id}"/>${APIS.standings[0].rows[18].competitor.name}</th>
  <th>${APIS.standings[0].rows[18].gamePlayed}</th>
  <th>${APIS.standings[0].rows[18].gamesWon}</th>
  <th>${APIS.standings[0].rows[18].gamesEven}</th>
  <th>${APIS.standings[0].rows[18].gamesLost}</th>
  <th>${APIS.standings[0].rows[18].points}</th>
  </tr>
  
  
  </tbody>
  </table>`;

    const RECONFIGG = await fetch(
        "https://webws.365scores.com/web/stats/?appTypeId=5&langId=27&timezoneName=Africa/Cairo&userCountryId=131&competition=78&competitor=946"
      ),
      APISGoals = await RECONFIGG.json();

    Goals.innerHTML = `

<div class="TopLeagia"> <img src="https://imagecache.365scores.com/image/upload/f_png,w_68,h_68,c_limit,q_auto:eco,dpr_2,d_Countries:Round:1.png/v${APIS.competitions[0].imageVersion}/Competitions/light/${APIS.competitions[0].id}"/>${APIS.competitions[0].name}</div>
<div class="Gooals">
<div class="topthree">
<div class="topim">
<div class="One">2</div>
<img src="https://imagecache.365scores.com/image/upload/f_png,w_80,h_80,c_limit,q_auto:eco,dpr_2,d_Athletes:default.png,r_max,c_thumb,g_face,z_0.65/v${APISGoals.stats[0].rows[1].entity.imgVer}/Athletes/${APISGoals.stats[0].rows[1].entity.id}"/>
<span class="Goali">${APISGoals.stats[0].rows[1].stats[0].value}</span>
<span class="nameplyr">${APISGoals.stats[0].rows[1].entity.name}</span>
<span class="cuping">${APISGoals.stats[0].rows[1].entity.positionName}</span>
</div>
<div class="topim">
<div class="One">1</div>
<img src="https://imagecache.365scores.com/image/upload/f_png,w_80,h_80,c_limit,q_auto:eco,dpr_2,d_Athletes:default.png,r_max,c_thumb,g_face,z_0.65/v${APISGoals.stats[0].rows[0].entity.imgVer}/Athletes/${APISGoals.stats[0].rows[0].entity.id}"/>
<span class="Goali">${APISGoals.stats[0].rows[0].stats[0].value}</span>
<span class="nameplyr">${APISGoals.stats[0].rows[0].entity.name}</span>
<span class="cuping">${APISGoals.stats[0].rows[0].entity.positionName}</span>
</div>
<div class="topim">
<div class="One">3</div>
<img src="https://imagecache.365scores.com/image/upload/f_png,w_80,h_80,c_limit,q_auto:eco,dpr_2,d_Athletes:default.png,r_max,c_thumb,g_face,z_0.65/v${APISGoals.stats[0].rows[2].entity.imgVer}/Athletes/${APISGoals.stats[0].rows[2].entity.id}"/>
<span class="Goali">${APISGoals.stats[0].rows[2].stats[0].value}</span>
<span class="nameplyr">${APISGoals.stats[0].rows[2].entity.name}</span>
<span class="cuping">${APISGoals.stats[0].rows[2].entity.positionName}</span>
</div>
</div>


<div class="tabolla">
<div class="tabollaintro" style="font-size: 20px  !important;padding: 5px 12px;border-radius: 15px;">
<span class="nameplyr">صورة اللاعب</span>
<span class="nameplyr">اسم اللاعب</span>
<span class="cuping">الصفة</span>
<span class="cuping">الاهداف</span>
</div>

<div class="tabollaintro">
<img src="https://imagecache.365scores.com/image/upload/f_png,w_80,h_80,c_limit,q_auto:eco,dpr_2,d_Athletes:default.png,r_max,c_thumb,g_face,z_0.65/v${APISGoals.stats[0].rows[3].entity.imgVer}/Athletes/${APISGoals.stats[0].rows[3].entity.id}"/>
<span class="nameplyr">${APISGoals.stats[0].rows[3].entity.name}</span>
<span class="cuping">${APISGoals.stats[0].rows[3].entity.positionName}</span>
<span class="Goali">${APISGoals.stats[0].rows[3].stats[0].value}</span>
</div>

<div class="tabollaintro">
<img src="https://imagecache.365scores.com/image/upload/f_png,w_80,h_80,c_limit,q_auto:eco,dpr_2,d_Athletes:default.png,r_max,c_thumb,g_face,z_0.65/v${APISGoals.stats[0].rows[4].entity.imgVer}/Athletes/${APISGoals.stats[0].rows[4].entity.id}"/>
<span class="nameplyr">${APISGoals.stats[0].rows[4].entity.name}</span>
<span class="cuping">${APISGoals.stats[0].rows[4].entity.positionName}</span>
<span class="Goali">${APISGoals.stats[0].rows[4].stats[0].value}</span>
</div>

<div class="tabollaintro">
<img src="https://imagecache.365scores.com/image/upload/f_png,w_80,h_80,c_limit,q_auto:eco,dpr_2,d_Athletes:default.png,r_max,c_thumb,g_face,z_0.65/v${APISGoals.stats[0].rows[5].entity.imgVer}/Athletes/${APISGoals.stats[0].rows[5].entity.id}"/>
<span class="nameplyr">${APISGoals.stats[0].rows[5].entity.name}</span>
<span class="cuping">${APISGoals.stats[0].rows[5].entity.positionName}</span>
<span class="Goali">${APISGoals.stats[0].rows[5].stats[0].value}</span>
</div>

<div class="tabollaintro">
<img src="https://imagecache.365scores.com/image/upload/f_png,w_80,h_80,c_limit,q_auto:eco,dpr_2,d_Athletes:default.png,r_max,c_thumb,g_face,z_0.65/v${APISGoals.stats[0].rows[6].entity.imgVer}/Athletes/${APISGoals.stats[0].rows[6].entity.id}"/>
<span class="nameplyr">${APISGoals.stats[0].rows[6].entity.name}</span>
<span class="cuping">${APISGoals.stats[0].rows[6].entity.positionName}</span>
<span class="Goali">${APISGoals.stats[0].rows[6].stats[0].value}</span>
</div>

<div class="tabollaintro">
<img src="https://imagecache.365scores.com/image/upload/f_png,w_80,h_80,c_limit,q_auto:eco,dpr_2,d_Athletes:default.png,r_max,c_thumb,g_face,z_0.65/v${APISGoals.stats[0].rows[7].entity.imgVer}/Athletes/${APISGoals.stats[0].rows[7].entity.id}"/>
<span class="nameplyr">${APISGoals.stats[0].rows[7].entity.name}</span>
<span class="cuping">${APISGoals.stats[0].rows[7].entity.positionName}</span>
<span class="Goali">${APISGoals.stats[0].rows[7].stats[0].value}</span>
</div>

<div class="tabollaintro">
<img src="https://imagecache.365scores.com/image/upload/f_png,w_80,h_80,c_limit,q_auto:eco,dpr_2,d_Athletes:default.png,r_max,c_thumb,g_face,z_0.65/v${APISGoals.stats[0].rows[8].entity.imgVer}/Athletes/${APISGoals.stats[0].rows[8].entity.id}"/>
<span class="nameplyr">${APISGoals.stats[0].rows[8].entity.name}</span>
<span class="cuping">${APISGoals.stats[0].rows[8].entity.positionName}</span>
<span class="Goali">${APISGoals.stats[0].rows[8].stats[0].value}</span>
</div>

<div class="tabollaintro">
<img src="https://imagecache.365scores.com/image/upload/f_png,w_80,h_80,c_limit,q_auto:eco,dpr_2,d_Athletes:default.png,r_max,c_thumb,g_face,z_0.65/v${APISGoals.stats[0].rows[9].entity.imgVer}/Athletes/${APISGoals.stats[0].rows[9].entity.id}"/>
<span class="nameplyr">${APISGoals.stats[0].rows[9].entity.name}</span>
<span class="cuping">${APISGoals.stats[0].rows[9].entity.positionName}</span>
<span class="Goali">${APISGoals.stats[0].rows[9].stats[0].value}</span>
</div>

<div class="tabollaintro">
<img src="https://imagecache.365scores.com/image/upload/f_png,w_80,h_80,c_limit,q_auto:eco,dpr_2,d_Athletes:default.png,r_max,c_thumb,g_face,z_0.65/v${APISGoals.stats[0].rows[10].entity.imgVer}/Athletes/${APISGoals.stats[0].rows[10].entity.id}"/>
<span class="nameplyr">${APISGoals.stats[0].rows[10].entity.name}</span>
<span class="cuping">${APISGoals.stats[0].rows[10].entity.positionName}</span>
<span class="Goali">${APISGoals.stats[0].rows[10].stats[0].value}</span>
</div>

<div class="tabollaintro">
<img src="https://imagecache.365scores.com/image/upload/f_png,w_80,h_80,c_limit,q_auto:eco,dpr_2,d_Athletes:default.png,r_max,c_thumb,g_face,z_0.65/v${APISGoals.stats[0].rows[11].entity.imgVer}/Athletes/${APISGoals.stats[0].rows[11].entity.id}"/>
<span class="nameplyr">${APISGoals.stats[0].rows[11].entity.name}</span>
<span class="cuping">${APISGoals.stats[0].rows[11].entity.positionName}</span>
<span class="Goali">${APISGoals.stats[0].rows[11].stats[0].value}</span>
</div>

<div class="tabollaintro">
<img src="https://imagecache.365scores.com/image/upload/f_png,w_80,h_80,c_limit,q_auto:eco,dpr_2,d_Athletes:default.png,r_max,c_thumb,g_face,z_0.65/v${APISGoals.stats[0].rows[12].entity.imgVer}/Athletes/${APISGoals.stats[0].rows[12].entity.id}"/>
<span class="nameplyr">${APISGoals.stats[0].rows[12].entity.name}</span>
<span class="cuping">${APISGoals.stats[0].rows[12].entity.positionName}</span>
<span class="Goali">${APISGoals.stats[0].rows[12].stats[0].value}</span>
</div>`;
  } else {
  }

  if (AM) {
    const RECONFIG = await fetch(
        "https://webws.365scores.com/web/standings/?appTypeId=5&langId=27&timezoneName=Africa/Cairo&userCountryId=131&competitions=104&competitor=7364"
      ),
      APIS = await RECONFIG.json();

    AM.innerHTML = `
  <div class="TopLeagia"> <img src="https://imagecache.365scores.com/image/upload/f_png,w_68,h_68,c_limit,q_auto:eco,dpr_2,d_Countries:Round:1.png/v${APIS.competitions[0].imageVersion}/Competitions/light/${APIS.competitions[0].id}"/>${APIS.competitions[0].name}</div>
  <table class="table">
  <tbody class="tbody">
  <tr class="tr">
  <th></th>
  <th style="text-align: center;">فريق</th>
  <th>لعب</th>
  <th>فاز</th>
  <th>تعادل</th>
  <th>خسر</th>
  <th>نقاط</th>
  </tr>
  
  <tr>
  <th>${APIS.standings[0].rows[0].position}</th>
  <th><img class="scorelogo" src="https://imagecache.365scores.com/image/upload/f_png,w_24,h_24,c_limit,q_auto:eco,dpr_3,d_Competitors:default1.png/v${APIS.standings[0].rows[0].competitor.imageVersion}/Competitors/${APIS.standings[0].rows[0].competitor.id}"/> ${APIS.standings[0].rows[0].competitor.name}</th>
  <th>${APIS.standings[0].rows[0].gamePlayed}</th>
  <th>${APIS.standings[0].rows[0].gamesWon}</th>
  <th>${APIS.standings[0].rows[0].gamesEven}</th>
  <th>${APIS.standings[0].rows[0].gamesLost}</th>
  <th>${APIS.standings[0].rows[0].points}</th>
  </tr>
  
  <tr>
  <th>${APIS.standings[0].rows[1].position}</th>
  <th><img class="scorelogo" src="https://imagecache.365scores.com/image/upload/f_png,w_24,h_24,c_limit,q_auto:eco,dpr_3,d_Competitors:default1.png/v${APIS.standings[0].rows[1].competitor.imageVersion}/Competitors/${APIS.standings[0].rows[1].competitor.id}"/>${APIS.standings[0].rows[1].competitor.name}</th>
  <th>${APIS.standings[0].rows[1].gamePlayed}</th>
  <th>${APIS.standings[0].rows[1].gamesWon}</th>
  <th>${APIS.standings[0].rows[1].gamesEven}</th>
  <th>${APIS.standings[0].rows[1].gamesLost}</th>
  <th>${APIS.standings[0].rows[1].points}</th>
  </tr>
  
  <tr>
  <th>${APIS.standings[0].rows[2].position}</th>
  <th><img class="scorelogo" src="https://imagecache.365scores.com/image/upload/f_png,w_24,h_24,c_limit,q_auto:eco,dpr_3,d_Competitors:default1.png/v${APIS.standings[0].rows[2].competitor.imageVersion}/Competitors/${APIS.standings[0].rows[2].competitor.id}"/>${APIS.standings[0].rows[2].competitor.name}</th>
  <th>${APIS.standings[0].rows[2].gamePlayed}</th>
  <th>${APIS.standings[0].rows[2].gamesWon}</th>
  <th>${APIS.standings[0].rows[2].gamesEven}</th>
  <th>${APIS.standings[0].rows[2].gamesLost}</th>
  <th>${APIS.standings[0].rows[2].points}</th>
  </tr>
  
  <tr>
  <th>${APIS.standings[0].rows[3].position}</th>
  <th><img class="scorelogo" src="https://imagecache.365scores.com/image/upload/f_png,w_24,h_24,c_limit,q_auto:eco,dpr_3,d_Competitors:default1.png/v${APIS.standings[0].rows[3].competitor.imageVersion}/Competitors/${APIS.standings[0].rows[3].competitor.id}"/>${APIS.standings[0].rows[3].competitor.name}</th>
  <th>${APIS.standings[0].rows[3].gamePlayed}</th>
  <th>${APIS.standings[0].rows[3].gamesWon}</th>
  <th>${APIS.standings[0].rows[3].gamesEven}</th>
  <th>${APIS.standings[0].rows[3].gamesLost}</th>
  <th>${APIS.standings[0].rows[3].points}</th>
  </tr>
  
  <tr>
  <th>${APIS.standings[0].rows[4].position}</th>
  <th><img class="scorelogo" src="https://imagecache.365scores.com/image/upload/f_png,w_24,h_24,c_limit,q_auto:eco,dpr_3,d_Competitors:default1.png/v${APIS.standings[0].rows[4].competitor.imageVersion}/Competitors/${APIS.standings[0].rows[4].competitor.id}"/>${APIS.standings[0].rows[4].competitor.name}</th>
  <th>${APIS.standings[0].rows[4].gamePlayed}</th>
  <th>${APIS.standings[0].rows[4].gamesWon}</th>
  <th>${APIS.standings[0].rows[4].gamesEven}</th>
  <th>${APIS.standings[0].rows[4].gamesLost}</th>
  <th>${APIS.standings[0].rows[4].points}</th>
  </tr>
  
  <tr>
  <th>${APIS.standings[0].rows[5].position}</th>
  <th><img class="scorelogo" src="https://imagecache.365scores.com/image/upload/f_png,w_24,h_24,c_limit,q_auto:eco,dpr_3,d_Competitors:default1.png/v${APIS.standings[0].rows[5].competitor.imageVersion}/Competitors/${APIS.standings[0].rows[5].competitor.id}"/>${APIS.standings[0].rows[5].competitor.name}</th>
  <th>${APIS.standings[0].rows[5].gamePlayed}</th>
  <th>${APIS.standings[0].rows[5].gamesWon}</th>
  <th>${APIS.standings[0].rows[5].gamesEven}</th>
  <th>${APIS.standings[0].rows[5].gamesLost}</th>
  <th>${APIS.standings[0].rows[5].points}</th>
  </tr>
  
  <tr>
  <th>${APIS.standings[0].rows[6].position}</th>
  <th><img class="scorelogo" src="https://imagecache.365scores.com/image/upload/f_png,w_24,h_24,c_limit,q_auto:eco,dpr_3,d_Competitors:default1.png/v${APIS.standings[0].rows[6].competitor.imageVersion}/Competitors/${APIS.standings[0].rows[6].competitor.id}"/>${APIS.standings[0].rows[6].competitor.name}</th>
  <th>${APIS.standings[0].rows[6].gamePlayed}</th>
  <th>${APIS.standings[0].rows[6].gamesWon}</th>
  <th>${APIS.standings[0].rows[6].gamesEven}</th>
  <th>${APIS.standings[0].rows[6].gamesLost}</th>
  <th>${APIS.standings[0].rows[6].points}</th>
  </tr>
  
  <tr>
  <th>${APIS.standings[0].rows[7].position}</th>
  <th><img class="scorelogo" src="https://imagecache.365scores.com/image/upload/f_png,w_24,h_24,c_limit,q_auto:eco,dpr_3,d_Competitors:default1.png/v${APIS.standings[0].rows[7].competitor.imageVersion}/Competitors/${APIS.standings[0].rows[7].competitor.id}"/>${APIS.standings[0].rows[7].competitor.name}</th>
  <th>${APIS.standings[0].rows[7].gamePlayed}</th>
  <th>${APIS.standings[0].rows[7].gamesWon}</th>
  <th>${APIS.standings[0].rows[7].gamesEven}</th>
  <th>${APIS.standings[0].rows[7].gamesLost}</th>
  <th>${APIS.standings[0].rows[7].points}</th>
  </tr>
  
  <tr>
  <th>${APIS.standings[0].rows[8].position}</th>
  <th><img class="scorelogo" src="https://imagecache.365scores.com/image/upload/f_png,w_24,h_24,c_limit,q_auto:eco,dpr_3,d_Competitors:default1.png/v${APIS.standings[0].rows[8].competitor.imageVersion}/Competitors/${APIS.standings[0].rows[8].competitor.id}"/>${APIS.standings[0].rows[8].competitor.name}</th>
  <th>${APIS.standings[0].rows[8].gamePlayed}</th>
  <th>${APIS.standings[0].rows[8].gamesWon}</th>
  <th>${APIS.standings[0].rows[8].gamesEven}</th>
  <th>${APIS.standings[0].rows[8].gamesLost}</th>
  <th>${APIS.standings[0].rows[8].points}</th>
  </tr>
  
  <tr>
  <th>${APIS.standings[0].rows[9].position}</th>
  <th><img class="scorelogo" src="https://imagecache.365scores.com/image/upload/f_png,w_24,h_24,c_limit,q_auto:eco,dpr_3,d_Competitors:default1.png/v${APIS.standings[0].rows[9].competitor.imageVersion}/Competitors/${APIS.standings[0].rows[9].competitor.id}"/>${APIS.standings[0].rows[9].competitor.name}</th>
  <th>${APIS.standings[0].rows[9].gamePlayed}</th>
  <th>${APIS.standings[0].rows[9].gamesWon}</th>
  <th>${APIS.standings[0].rows[9].gamesEven}</th>
  <th>${APIS.standings[0].rows[9].gamesLost}</th>
  <th>${APIS.standings[0].rows[9].points}</th>
  </tr>
  
  <tr>
  <th>${APIS.standings[0].rows[10].position}</th>
  <th><img class="scorelogo" src="https://imagecache.365scores.com/image/upload/f_png,w_24,h_24,c_limit,q_auto:eco,dpr_3,d_Competitors:default1.png/v${APIS.standings[0].rows[10].competitor.imageVersion}/Competitors/${APIS.standings[0].rows[10].competitor.id}"/>${APIS.standings[0].rows[10].competitor.name}</th>
  <th>${APIS.standings[0].rows[10].gamePlayed}</th>
  <th>${APIS.standings[0].rows[10].gamesWon}</th>
  <th>${APIS.standings[0].rows[10].gamesEven}</th>
  <th>${APIS.standings[0].rows[10].gamesLost}</th>
  <th>${APIS.standings[0].rows[10].points}</th>
  </tr>
  
  <tr>
  <th>${APIS.standings[0].rows[11].position}</th>
  <th><img class="scorelogo" src="https://imagecache.365scores.com/image/upload/f_png,w_24,h_24,c_limit,q_auto:eco,dpr_3,d_Competitors:default1.png/v${APIS.standings[0].rows[11].competitor.imageVersion}/Competitors/${APIS.standings[0].rows[11].competitor.id}"/>${APIS.standings[0].rows[11].competitor.name}</th>
  <th>${APIS.standings[0].rows[11].gamePlayed}</th>
  <th>${APIS.standings[0].rows[11].gamesWon}</th>
  <th>${APIS.standings[0].rows[11].gamesEven}</th>
  <th>${APIS.standings[0].rows[11].gamesLost}</th>
  <th>${APIS.standings[0].rows[11].points}</th>
  </tr>
  
  
  <tr>
  <th>${APIS.standings[0].rows[12].position}</th>
  <th><img class="scorelogo" src="https://imagecache.365scores.com/image/upload/f_png,w_24,h_24,c_limit,q_auto:eco,dpr_3,d_Competitors:default1.png/v${APIS.standings[0].rows[12].competitor.imageVersion}/Competitors/${APIS.standings[0].rows[12].competitor.id}"/>${APIS.standings[0].rows[12].competitor.name}</th>
  <th>${APIS.standings[0].rows[12].gamePlayed}</th>
  <th>${APIS.standings[0].rows[12].gamesWon}</th>
  <th>${APIS.standings[0].rows[12].gamesEven}</th>
  <th>${APIS.standings[0].rows[12].gamesLost}</th>
  <th>${APIS.standings[0].rows[12].points}</th>
  </tr>
  
  
  <tr>
  <th>${APIS.standings[0].rows[13].position}</th>
  <th><img class="scorelogo" src="https://imagecache.365scores.com/image/upload/f_png,w_24,h_24,c_limit,q_auto:eco,dpr_3,d_Competitors:default1.png/v${APIS.standings[0].rows[13].competitor.imageVersion}/Competitors/${APIS.standings[0].rows[13].competitor.id}"/>${APIS.standings[0].rows[13].competitor.name}</th>
  <th>${APIS.standings[0].rows[13].gamePlayed}</th>
  <th>${APIS.standings[0].rows[13].gamesWon}</th>
  <th>${APIS.standings[0].rows[13].gamesEven}</th>
  <th>${APIS.standings[0].rows[13].gamesLost}</th>
  <th>${APIS.standings[0].rows[13].points}</th>
  </tr>
  
  </tbody>
  </table>`;

    const RECONFIGG = await fetch(
        "https://webws.365scores.com/web/stats/?appTypeId=5&langId=27&timezoneName=Africa/Cairo&userCountryId=131&competition=104&competitor=7364"
      ),
      APISGoals = await RECONFIGG.json();

    Goals.innerHTML = `

<div class="TopLeagia"> <img src="https://imagecache.365scores.com/image/upload/f_png,w_68,h_68,c_limit,q_auto:eco,dpr_2,d_Countries:Round:1.png/v${APIS.competitions[0].imageVersion}/Competitions/light/${APIS.competitions[0].id}"/>${APIS.competitions[0].name}</div>
<div class="Gooals">
<div class="topthree">
<div class="topim">
<div class="One">2</div>
<img src="https://imagecache.365scores.com/image/upload/f_png,w_80,h_80,c_limit,q_auto:eco,dpr_2,d_Athletes:default.png,r_max,c_thumb,g_face,z_0.65/v${APISGoals.stats[0].rows[1].entity.imgVer}/Athletes/${APISGoals.stats[0].rows[1].entity.id}"/>
<span class="Goali">${APISGoals.stats[0].rows[1].stats[0].value}</span>
<span class="nameplyr">${APISGoals.stats[0].rows[1].entity.name}</span>
<span class="cuping">${APISGoals.stats[0].rows[1].entity.positionName}</span>
</div>
<div class="topim">
<div class="One">1</div>
<img src="https://imagecache.365scores.com/image/upload/f_png,w_80,h_80,c_limit,q_auto:eco,dpr_2,d_Athletes:default.png,r_max,c_thumb,g_face,z_0.65/v${APISGoals.stats[0].rows[0].entity.imgVer}/Athletes/${APISGoals.stats[0].rows[0].entity.id}"/>
<span class="Goali">${APISGoals.stats[0].rows[0].stats[0].value}</span>
<span class="nameplyr">${APISGoals.stats[0].rows[0].entity.name}</span>
<span class="cuping">${APISGoals.stats[0].rows[0].entity.positionName}</span>
</div>
<div class="topim">
<div class="One">3</div>
<img src="https://imagecache.365scores.com/image/upload/f_png,w_80,h_80,c_limit,q_auto:eco,dpr_2,d_Athletes:default.png,r_max,c_thumb,g_face,z_0.65/v${APISGoals.stats[0].rows[2].entity.imgVer}/Athletes/${APISGoals.stats[0].rows[2].entity.id}"/>
<span class="Goali">${APISGoals.stats[0].rows[2].stats[0].value}</span>
<span class="nameplyr">${APISGoals.stats[0].rows[2].entity.name}</span>
<span class="cuping">${APISGoals.stats[0].rows[2].entity.positionName}</span>
</div>
</div>


<div class="tabolla">
<div class="tabollaintro" style="font-size: 20px  !important;padding: 5px 12px;border-radius: 15px;">
<span class="nameplyr">صورة اللاعب</span>
<span class="nameplyr">اسم اللاعب</span>
<span class="cuping">الصفة</span>
<span class="cuping">الاهداف</span>
</div>

<div class="tabollaintro">
<img src="https://imagecache.365scores.com/image/upload/f_png,w_80,h_80,c_limit,q_auto:eco,dpr_2,d_Athletes:default.png,r_max,c_thumb,g_face,z_0.65/v${APISGoals.stats[0].rows[3].entity.imgVer}/Athletes/${APISGoals.stats[0].rows[3].entity.id}"/>
<span class="nameplyr">${APISGoals.stats[0].rows[3].entity.name}</span>
<span class="cuping">${APISGoals.stats[0].rows[3].entity.positionName}</span>
<span class="Goali">${APISGoals.stats[0].rows[3].stats[0].value}</span>
</div>

<div class="tabollaintro">
<img src="https://imagecache.365scores.com/image/upload/f_png,w_80,h_80,c_limit,q_auto:eco,dpr_2,d_Athletes:default.png,r_max,c_thumb,g_face,z_0.65/v${APISGoals.stats[0].rows[4].entity.imgVer}/Athletes/${APISGoals.stats[0].rows[4].entity.id}"/>
<span class="nameplyr">${APISGoals.stats[0].rows[4].entity.name}</span>
<span class="cuping">${APISGoals.stats[0].rows[4].entity.positionName}</span>
<span class="Goali">${APISGoals.stats[0].rows[4].stats[0].value}</span>
</div>

<div class="tabollaintro">
<img src="https://imagecache.365scores.com/image/upload/f_png,w_80,h_80,c_limit,q_auto:eco,dpr_2,d_Athletes:default.png,r_max,c_thumb,g_face,z_0.65/v${APISGoals.stats[0].rows[5].entity.imgVer}/Athletes/${APISGoals.stats[0].rows[5].entity.id}"/>
<span class="nameplyr">${APISGoals.stats[0].rows[5].entity.name}</span>
<span class="cuping">${APISGoals.stats[0].rows[5].entity.positionName}</span>
<span class="Goali">${APISGoals.stats[0].rows[5].stats[0].value}</span>
</div>

<div class="tabollaintro">
<img src="https://imagecache.365scores.com/image/upload/f_png,w_80,h_80,c_limit,q_auto:eco,dpr_2,d_Athletes:default.png,r_max,c_thumb,g_face,z_0.65/v${APISGoals.stats[0].rows[6].entity.imgVer}/Athletes/${APISGoals.stats[0].rows[6].entity.id}"/>
<span class="nameplyr">${APISGoals.stats[0].rows[6].entity.name}</span>
<span class="cuping">${APISGoals.stats[0].rows[6].entity.positionName}</span>
<span class="Goali">${APISGoals.stats[0].rows[6].stats[0].value}</span>
</div>

<div class="tabollaintro">
<img src="https://imagecache.365scores.com/image/upload/f_png,w_80,h_80,c_limit,q_auto:eco,dpr_2,d_Athletes:default.png,r_max,c_thumb,g_face,z_0.65/v${APISGoals.stats[0].rows[7].entity.imgVer}/Athletes/${APISGoals.stats[0].rows[7].entity.id}"/>
<span class="nameplyr">${APISGoals.stats[0].rows[7].entity.name}</span>
<span class="cuping">${APISGoals.stats[0].rows[7].entity.positionName}</span>
<span class="Goali">${APISGoals.stats[0].rows[7].stats[0].value}</span>
</div>

<div class="tabollaintro">
<img src="https://imagecache.365scores.com/image/upload/f_png,w_80,h_80,c_limit,q_auto:eco,dpr_2,d_Athletes:default.png,r_max,c_thumb,g_face,z_0.65/v${APISGoals.stats[0].rows[8].entity.imgVer}/Athletes/${APISGoals.stats[0].rows[8].entity.id}"/>
<span class="nameplyr">${APISGoals.stats[0].rows[8].entity.name}</span>
<span class="cuping">${APISGoals.stats[0].rows[8].entity.positionName}</span>
<span class="Goali">${APISGoals.stats[0].rows[8].stats[0].value}</span>
</div>

<div class="tabollaintro">
<img src="https://imagecache.365scores.com/image/upload/f_png,w_80,h_80,c_limit,q_auto:eco,dpr_2,d_Athletes:default.png,r_max,c_thumb,g_face,z_0.65/v${APISGoals.stats[0].rows[9].entity.imgVer}/Athletes/${APISGoals.stats[0].rows[9].entity.id}"/>
<span class="nameplyr">${APISGoals.stats[0].rows[9].entity.name}</span>
<span class="cuping">${APISGoals.stats[0].rows[9].entity.positionName}</span>
<span class="Goali">${APISGoals.stats[0].rows[9].stats[0].value}</span>
</div>

<div class="tabollaintro">
<img src="https://imagecache.365scores.com/image/upload/f_png,w_80,h_80,c_limit,q_auto:eco,dpr_2,d_Athletes:default.png,r_max,c_thumb,g_face,z_0.65/v${APISGoals.stats[0].rows[10].entity.imgVer}/Athletes/${APISGoals.stats[0].rows[10].entity.id}"/>
<span class="nameplyr">${APISGoals.stats[0].rows[10].entity.name}</span>
<span class="cuping">${APISGoals.stats[0].rows[10].entity.positionName}</span>
<span class="Goali">${APISGoals.stats[0].rows[10].stats[0].value}</span>
</div>

<div class="tabollaintro">
<img src="https://imagecache.365scores.com/image/upload/f_png,w_80,h_80,c_limit,q_auto:eco,dpr_2,d_Athletes:default.png,r_max,c_thumb,g_face,z_0.65/v${APISGoals.stats[0].rows[11].entity.imgVer}/Athletes/${APISGoals.stats[0].rows[11].entity.id}"/>
<span class="nameplyr">${APISGoals.stats[0].rows[11].entity.name}</span>
<span class="cuping">${APISGoals.stats[0].rows[11].entity.positionName}</span>
<span class="Goali">${APISGoals.stats[0].rows[11].stats[0].value}</span>
</div>

<div class="tabollaintro">
<img src="https://imagecache.365scores.com/image/upload/f_png,w_80,h_80,c_limit,q_auto:eco,dpr_2,d_Athletes:default.png,r_max,c_thumb,g_face,z_0.65/v${APISGoals.stats[0].rows[12].entity.imgVer}/Athletes/${APISGoals.stats[0].rows[12].entity.id}"/>
<span class="nameplyr">${APISGoals.stats[0].rows[12].entity.name}</span>
<span class="cuping">${APISGoals.stats[0].rows[12].entity.positionName}</span>
<span class="Goali">${APISGoals.stats[0].rows[12].stats[0].value}</span>
</div>

<div class="tabollaintro">
<img src="https://imagecache.365scores.com/image/upload/f_png,w_80,h_80,c_limit,q_auto:eco,dpr_2,d_Athletes:default.png,r_max,c_thumb,g_face,z_0.65/v${APISGoals.stats[0].rows[13].entity.imgVer}/Athletes/${APISGoals.stats[0].rows[13].entity.id}"/>
<span class="nameplyr">${APISGoals.stats[0].rows[13].entity.name}</span>
<span class="cuping">${APISGoals.stats[0].rows[13].entity.positionName}</span>
<span class="Goali">${APISGoals.stats[0].rows[13].stats[0].value}</span>
</div>`;
  } else {
  }


  console.group(
    "%cLive Scoure League - Sting web",
    "font-weight:bold;color:#931800;font-family:Tahoma;font-size:18px;"
  );
  console.log("» Designed by   : Mahmoud Abu Maher");
  console.log("» Programmed by : Sting Web - Dev Team");
  console.log("» FB Page URL   : https://www.facebook.com/stingweb.eg");
  console.log("» Version       : 1.2 rel - beta");
  console.log("»  اطلب نسخة لموقعك الان  - من خلالنا عبر ستينج ويب");
  console.groupEnd();
};

ScoureApiSting();
