/* ===== EDIT HERE: all text in English (en) and Chinese (zh) ===== */
const T = {
  en: {
    brand: "Kadampa Monasteries",
    title: "Kadampa Monasteries: Nepal, Taiwan and beyond",
    nav_events: "Events", nav_monasteries: "Monasteries", nav_news: "Daily life", nav_visit: "Visit",
    hero_h1: "What is happening at our monasteries this week",
    hero_p: "Teachings, retreats, festivals and everyday life at Kadampa monasteries in Nepal, Taiwan and other countries, all in one place.",
    hero_btn: "See upcoming events",
    ev_h2: "Upcoming events",
    ev_note: "Sample content. Edit the EVENTS list in site.js to add your real events.",
    all: "All", none: "No events listed yet.",
    mon_h2: "Our monasteries",
    nepal: "Nepal", taiwan: "Taiwan",
    nepal_where: "City or region: add here", taiwan_where: "City or region: add here",
    nepal_blurb: "Write two or three sentences about this monastery: when it was founded, who lives there and what it offers visitors.",
    taiwan_blurb: "Write two or three sentences about this monastery: its teachers, regular classes and how to join.",
    visit_page: "Open monastery page",
    news_h2: "Daily life and news",
    post1_t: "Sample post: morning prayers", post1_p: "Replace this with a short update and a photo from the monastery.",
    post2_t: "Sample post: new class schedule", post2_p: "Replace this with real news. One or two sentences is enough.",
    visit_h2: "Visit or get in touch",
    visit_p: "Add visitor guidelines, opening hours and a contact email for each monastery here. You can also add a donation link.",
    footer: "Kadampa Monasteries website. Updated by volunteers. Contact:",
    back: "Back to all monasteries",
    about: "About this monastery",
    nepal_about: "Add the history, teachers, daily schedule and what visitors can expect at the Nepal monastery.",
    taiwan_about: "Add the history, teachers, daily schedule and what visitors can expect at the Taiwan monastery.",
    ev_here: "Events at this monastery",
    contact_h: "Visit and contact",
    nepal_contact: "Add address, map link, opening hours and email for the Nepal monastery.",
    taiwan_contact: "Add address, map link, opening hours and email for the Taiwan monastery.",
    toggle: "中文"
  },
  zh: {
    brand: "嘎檔派寺院",
    title: "嘎檔派寺院：尼泊爾、台灣及各地",
    nav_events: "活動", nav_monasteries: "寺院", nav_news: "日常消息", nav_visit: "參訪",
    hero_h1: "本週寺院的最新動態",
    hero_p: "尼泊爾、台灣及其他國家嘎檔派寺院的開示、閉關、節慶與日常生活，盡在這裡。",
    hero_btn: "查看近期活動",
    ev_h2: "近期活動",
    ev_note: "範例內容。請在 site.js 的 EVENTS 清單中加入真實活動。",
    all: "全部", none: "目前沒有活動。",
    mon_h2: "我們的寺院",
    nepal: "尼泊爾", taiwan: "台灣",
    nepal_where: "城市或地區：請在此填寫", taiwan_where: "城市或地區：請在此填寫",
    nepal_blurb: "請用兩三句話介紹這間寺院：創立時間、住眾，以及提供給訪客的活動。",
    taiwan_blurb: "請用兩三句話介紹這間寺院：師長、定期課程與參加方式。",
    visit_page: "前往寺院頁面",
    news_h2: "日常消息",
    post1_t: "範例文章：早課", post1_p: "請換成一則簡短消息和寺院照片。",
    post2_t: "範例文章：新課程時間表", post2_p: "請換成真實消息，一兩句話即可。",
    visit_h2: "參訪與聯絡",
    visit_p: "請在此加入各寺院的參訪須知、開放時間與聯絡信箱，也可加入捐款連結。",
    footer: "嘎檔派寺院網站，由志工維護。聯絡信箱：",
    back: "回到所有寺院",
    about: "寺院簡介",
    nepal_about: "請加入尼泊爾寺院的歷史、師長、每日作息與訪客須知。",
    taiwan_about: "請加入台灣寺院的歷史、師長、每日作息與訪客須知。",
    ev_here: "本寺院的活動",
    contact_h: "參訪與聯絡",
    nepal_contact: "請加入尼泊爾寺院的地址、地圖連結、開放時間與信箱。",
    taiwan_contact: "請加入台灣寺院的地址、地圖連結、開放時間與信箱。",
    toggle: "EN"
  }
};

/* Dates use YYYY-MM-DD. place must be "nepal" or "taiwan". */
const EVENTS = [
  {date:"2026-10-18", place:"nepal",  title:{en:"Sample teaching", zh:"範例開示"}, note:{en:"Open to all. Add time and language.", zh:"歡迎參加。請填寫時間與語言。"}},
  {date:"2026-10-25", place:"taiwan", title:{en:"Sample weekend retreat", zh:"範例週末閉關"}, note:{en:"Registration required. Add link.", zh:"需報名。請加入連結。"}},
  {date:"2026-11-08", place:"nepal",  title:{en:"Sample festival day", zh:"範例節慶日"}, note:{en:"Add schedule and what to bring.", zh:"請填寫流程與攜帶物品。"}},
  {date:"2026-11-15", place:"taiwan", title:{en:"Sample online class", zh:"範例線上課程"}, note:{en:"Online. Add meeting link.", zh:"線上進行。請加入會議連結。"}}
];
/* ===== end of editable section ===== */

let lang = "en";
lang = (navigator.language || "").toLowerCase().startsWith("zh") ? "zh" : "en";
try { lang = localStorage.getItem("lang") || lang; } catch (e) {}
let filter = "all";

const t = k => T[lang][k];
const fmt = d => new Date(d + "T00:00:00").toLocaleDateString(lang === "zh" ? "zh-TW" : "en-GB", {day:"numeric", month:"short", year:"numeric"});

function chrome() {
  const h = document.getElementById("hdr");
  if (h) {
    h.innerHTML = '<div class="wrap"><a class="brand" href="index.html" data-i18n="brand"></a>' +
      '<nav aria-label="Main"><a href="index.html#events" data-i18n="nav_events"></a>' +
      '<a href="index.html#monasteries" data-i18n="nav_monasteries"></a>' +
      '<a href="index.html#news" data-i18n="nav_news"></a>' +
      '<a href="index.html#visit" data-i18n="nav_visit"></a>' +
      '<button class="lang" id="langBtn" type="button"></button></nav></div>';
    document.getElementById("langBtn").onclick = () => setLang(lang === "en" ? "zh" : "en");
  }
  const f = document.getElementById("ftr");
  if (f) f.innerHTML = '<div class="wrap"><p><span data-i18n="footer"></span> <a href="mailto:you@example.com">you@example.com</a></p></div>';
}

function drawEvents() {
  const box = document.getElementById("eventList");
  if (!box) return;
  const fixed = box.dataset.place;           /* set on monastery pages */
  const want = fixed || filter;
  const items = EVENTS.filter(e => want === "all" || e.place === want).sort((a, b) => a.date.localeCompare(b.date));
  box.innerHTML = items.length ? "" : "<p>" + t("none") + "</p>";
  items.forEach(e => {
    const el = document.createElement("article");
    el.className = "event";
    el.innerHTML = '<div class="date"></div><div><h3></h3><p></p><span class="tag"><a></a></span></div>';
    el.querySelector(".date").textContent = fmt(e.date);
    el.querySelector("h3").textContent = e.title[lang];
    el.querySelector("p").textContent = e.note[lang];
    const a = el.querySelector("a");
    a.textContent = t(e.place);
    a.href = e.place + ".html";
    box.appendChild(el);
  });
}

function drawFilters() {
  const bar = document.getElementById("filters");
  if (!bar) return;
  bar.innerHTML = "";
  ["all", "nepal", "taiwan"].forEach(k => {
    const b = document.createElement("button");
    b.type = "button";
    b.textContent = t(k);
    b.setAttribute("aria-pressed", k === filter);
    b.onclick = () => { filter = k; drawFilters(); drawEvents(); };
    bar.appendChild(b);
  });
}

function setLang(l) {
  lang = l;
  try { localStorage.setItem("lang", l); } catch (e) {}
  document.documentElement.lang = l === "zh" ? "zh-Hant" : "en";
  document.querySelectorAll("[data-i18n]").forEach(el => { el.textContent = t(el.dataset.i18n); });
  document.querySelectorAll("[data-date]").forEach(el => { el.textContent = fmt(el.dataset.date); });
  const btn = document.getElementById("langBtn");
  if (btn) btn.textContent = t("toggle");
  const pt = document.body.dataset.title;     /* monastery page title key */
  document.title = pt ? t(pt) + " | " + t("brand") : t("title");
  drawFilters();
  drawEvents();
}

chrome();
setLang(lang);
