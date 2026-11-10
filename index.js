const STORAGE_KEY = "nabra-articles-v1";

const iconMarkup = {
  grid: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><rect x="3.5" y="3.5" width="7" height="7" rx="1.5"/><rect x="13.5" y="3.5" width="7" height="7" rx="1.5"/><rect x="3.5" y="13.5" width="7" height="7" rx="1.5"/><rect x="13.5" y="13.5" width="7" height="7" rx="1.5"/></svg>',
  send: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><path d="m21 3-7.4 18-3.8-7.8L2 9.4 21 3Z"/><path d="M21 3 9.8 13.2"/></svg>',
  file: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><path d="M13.5 3.5H6.8a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2h10.4a2 2 0 0 0 2-2V9.2Z"/><path d="M13.5 3.5v5.7h5.7M8.5 13h7M8.5 16.5h7"/></svg>',
  eye: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><path d="M2.8 12s3.2-6 9.2-6 9.2 6 9.2 6-3.2 6-9.2 6-9.2-6-9.2-6Z"/><circle cx="12" cy="12" r="2.5"/></svg>',
  search: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"><circle cx="10.8" cy="10.8" r="6.8"/><path d="m16 16 4.5 4.5"/></svg>',
  sort: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><path d="M4 7h12M4 12h8M4 17h4M19 5v14m-3-3 3 3 3-3"/></svg>',
  bell: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><path d="M18 8a6 6 0 0 0-12 0c0 7-3 7-3 9h18c0-2-3-2-3-9"/><path d="M10 21h4"/></svg>',
  more: '<svg viewBox="0 0 24 24" fill="currentColor"><circle cx="5" cy="12" r="1.5"/><circle cx="12" cy="12" r="1.5"/><circle cx="19" cy="12" r="1.5"/></svg>',
  close: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"><path d="m6 6 12 12M18 6 6 18"/></svg>',
  edit: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><path d="m14 5 5 5M4 20l4.3-.9L19 8.4a2.1 2.1 0 0 0-3-3L5.3 16.1 4 20Z"/></svg>',
  trash: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><path d="M4 7h16M10 11v6M14 11v6M6 7l1 13h10l1-13M9 7V4h6v3"/></svg>',
  preview: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><path d="M2.8 12s3.2-6 9.2-6 9.2 6 9.2 6-3.2 6-9.2 6-9.2-6-9.2-6Z"/><circle cx="12" cy="12" r="2.5"/></svg>'
};

document.querySelectorAll("[data-icon]").forEach((element) => {
  element.innerHTML = iconMarkup[element.dataset.icon] || "";
});

const categories = ["أفكار وإلهام", "ثقافة", "تقنية", "أسلوب حياة", "أعمال", "بدون تصنيف"];
const coverStyles = ["cover-mint", "cover-peach", "cover-lilac", "cover-sky", "cover-sun"];
const coverSymbols = { "أفكار وإلهام": "✳", "ثقافة": "❋", "تقنية": "⌘", "أسلوب حياة": "☼", "أعمال": "◒", "بدون تصنيف": "✧" };
const now = Date.now();

function daysAgo(days) {
  return new Date(now - days * 86400000).toISOString();
}

function createStarterArticles() {
  return [
    { id: "starter-1", title: "كيف نصنع مساحة هادئة وسط ضجيج الحياة؟", category: "أسلوب حياة", excerpt: "خطوات بسيطة تساعدك أن تعود إلى نفسك وتجد الهدوء في تفاصيل يومك.", content: "في عالم لا يتوقف عن الحركة، تصبح المساحة الهادئة ضرورة وليست رفاهية. ابدأ بخطوات صغيرة: امنح نفسك بضع دقائق بعيدًا عن الشاشات، رتّب زاوية تحبها، واكتب ما يشغل بالك.", status: "published", views: 1284, updatedAt: daysAgo(1), cover: "" },
    { id: "starter-2", title: "القراءة البطيئة: فن أن نمنح الكلمات وقتها", category: "ثقافة", excerpt: "عن متعة التمهّل في زمن السرعة، وكيف يعيدنا كتاب واحد إلى تركيزنا.", content: "ليست كل قراءة سباقًا نحو الصفحة الأخيرة. أحيانًا تكون أجمل الكتب تلك التي نعود إليها، ونترك جملة منها ترافقنا في الطريق.", status: "published", views: 846, updatedAt: daysAgo(2), cover: "" },
    { id: "starter-3", title: "أفكار صغيرة لمشاريع كبيرة", category: "أعمال", excerpt: "من ملاحظة يومية إلى بداية مشروع؛ كيف تمنح فكرتك فرصة حقيقية للنمو.", content: "غالبًا ما تبدأ المشاريع من سؤال بسيط: هل يمكن أن نجعل هذا الشيء أسهل؟ راقب ما حولك، استمع جيدًا، ثم جرّب حلًا صغيرًا قبل أن تبحث عن حل مثالي.", status: "published", views: 632, updatedAt: daysAgo(4), cover: "" },
    { id: "starter-4", title: "الذكاء الاصطناعي وحياتنا اليومية", category: "تقنية", excerpt: "تأملات أولية حول الأدوات الذكية وكيف نستخدمها بوعي وإنسانية.", content: "أصبحت الأدوات الذكية جزءًا من تفاصيل كثيرة في يومنا. والتحدي الحقيقي ليس أن نستخدم كل أداة جديدة، بل أن نعرف متى تضيف قيمة إلى ما نقوم به.", status: "draft", views: 0, updatedAt: daysAgo(5), cover: "" },
    { id: "starter-5", title: "دفتر الامتنان: عادة تستحق التجربة", category: "أفكار وإلهام", excerpt: "ثلاثة أسطر في نهاية اليوم قد تغيّر الطريقة التي نرى بها أيامنا.", content: "قبل أن ينتهي يومك، اكتب ثلاثة أشياء صغيرة جعلته أفضل. لا تحتاج إلى إنجازات كبيرة؛ كوب قهوة دافئ، مكالمة لطيفة، أو لحظة راحة تكفي.", status: "draft", views: 0, updatedAt: daysAgo(8), cover: "" }
  ];
}

function loadArticles() {
  const saved = localStorage.getItem(STORAGE_KEY);
  if (saved === null) {
    const starter = createStarterArticles();
    localStorage.setItem(STORAGE_KEY, JSON.stringify(starter));
    return starter;
  }
  try {
    const parsed = JSON.parse(saved);
    if (!Array.isArray(parsed)) throw new Error("بيانات المقالات المحفوظة ليست قائمة.");
    return parsed.filter((article) => article && typeof article.id === "string" && typeof article.title === "string");
  } catch (error) {
    console.error("تعذر قراءة المقالات المحفوظة:", error);
    showToast("تعذر قراءة البيانات المحفوظة. أعد تحميل الصفحة بعد التحقق من التخزين.");
    return [];
  }
}

const elements = {
  body: document.getElementById("articles-body"),
  search: document.getElementById("search-input"),
  category: document.getElementById("category-filter"),
  empty: document.getElementById("empty-state"),
  modal: document.getElementById("editor-modal"),
  form: document.getElementById("article-form"),
  toast: document.getElementById("toast")
};

let toastTimer;
let articles = loadArticles();
let activeView = "all";
let oldestFirst = false;

function escapeHtml(value = "") {
  return String(value).replace(/[&<>"']/g, (character) => ({
    "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;"
  })[character]);
}

function persistArticles() {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(articles));
    return true;
  } catch (error) {
    console.error("تعذر حفظ المقالات:", error);
    showToast("لم نتمكن من حفظ التغييرات. تحقق من مساحة التخزين في المتصفح.");
    return false;
  }
}

function showToast(message) {
  elements.toast.textContent = message;
  elements.toast.classList.add("show");
  window.clearTimeout(toastTimer);
  toastTimer = window.setTimeout(() => elements.toast.classList.remove("show"), 2800);
}

function formatDate(value) {
  const date = new Date(value);
  if (Number.isNaN(date.getTime())) return "—";
  return new Intl.DateTimeFormat("ar-EG", { day: "numeric", month: "short", year: "numeric" }).format(date);
}

function populateCategories() {
  const used = new Set(articles.map((article) => article.category).filter(Boolean));
  const selected = elements.category.value || "all";
  elements.category.innerHTML = '<option value="all">كل التصنيفات</option>' +
    [...used].sort((a, b) => a.localeCompare(b, "ar")).map((category) => `<option value="${escapeHtml(category)}">${escapeHtml(category)}</option>`).join("");
  elements.category.value = [...elements.category.options].some((option) => option.value === selected) ? selected : "all";
}

function getVisibleArticles() {
  const query = elements.search.value.trim().toLocaleLowerCase("ar");
  const category = elements.category.value;
  return articles.filter((article) => {
    const matchesStatus = activeView === "all" || article.status === activeView;
    const matchesCategory = category === "all" || article.category === category;
    const matchesQuery = !query || `${article.title} ${article.excerpt || ""} ${article.category || ""}`.toLocaleLowerCase("ar").includes(query);
    return matchesStatus && matchesCategory && matchesQuery;
  }).sort((a, b) => {
    const difference = new Date(a.updatedAt).getTime() - new Date(b.updatedAt).getTime();
    return oldestFirst ? difference : -difference;
  });
}

function coverMarkup(article) {
  const style = coverStyles[Math.max(0, categories.indexOf(article.category)) % coverStyles.length];
  if (article.cover) {
    const safeCover = escapeHtml(article.cover);
    return `<div class="article-cover cover-image" style="background-image:url('${safeCover}')"><span></span></div>`;
  }
  return `<div class="article-cover ${style}"><span>${escapeHtml(coverSymbols[article.category] || "✧")}</span></div>`;
}

function articleRow(article) {
  const published = article.status === "published";
  const stateLabel = published ? "منشور" : "مسودة";
  const toggleButton = published ? "" : `<button class="row-action publish-action" data-action="publish" data-id="${escapeHtml(article.id)}" aria-label="نشر المقال" title="نشر المقال">${iconMarkup.send}</button>`;
  return `<tr>
    <td><div class="article-cell">${coverMarkup(article)}<div class="article-title-wrap"><div class="article-title">${escapeHtml(article.title)}</div><div class="article-excerpt">${escapeHtml(article.excerpt || "لا توجد نبذة مضافة")}</div></div></div></td>
    <td><span class="category-tag">${escapeHtml(article.category || "بدون تصنيف")}</span></td>
    <td><span class="status-pill ${published ? "status-published" : "status-draft"}">${stateLabel}</span></td>
    <td class="date-cell">${formatDate(article.updatedAt)}</td>
    <td class="views-cell">${published ? new Intl.NumberFormat("ar-EG").format(Number(article.views) || 0) : "—"}</td>
    <td><div class="row-actions">
      <button class="row-action" data-action="preview" data-id="${escapeHtml(article.id)}" aria-label="معاينة المقال" title="معاينة">${iconMarkup.preview}</button>
      <button class="row-action edit-action" data-action="edit" data-id="${escapeHtml(article.id)}" aria-label="تعديل المقال" title="تعديل">${iconMarkup.edit}</button>
      ${toggleButton}
      <button class="row-action delete-action" data-action="delete" data-id="${escapeHtml(article.id)}" aria-label="حذف المقال" title="حذف">${iconMarkup.trash}</button>
    </div></td>
  </tr>`;
}

function render() {
  populateCategories();
  const publishedCount = articles.filter((article) => article.status === "published").length;
  const draftCount = articles.length - publishedCount;
  const views = articles.filter((article) => article.status === "published").reduce((total, article) => total + (Number(article.views) || 0), 0);
  document.getElementById("stat-total").textContent = new Intl.NumberFormat("ar-EG").format(articles.length);
  document.getElementById("stat-published").textContent = new Intl.NumberFormat("ar-EG").format(publishedCount);
  document.getElementById("stat-views").textContent = new Intl.NumberFormat("ar-EG", { notation: "compact", maximumFractionDigits: 1 }).format(views);
  document.getElementById("nav-all-count").textContent = articles.length;
  document.getElementById("nav-draft-count").textContent = draftCount;
  document.getElementById("tab-all-count").textContent = articles.length;
  document.getElementById("tab-published-count").textContent = publishedCount;
  document.getElementById("tab-draft-count").textContent = draftCount;
  document.getElementById("heading-count").textContent = getVisibleArticles().length;

  const visible = getVisibleArticles();
  elements.body.innerHTML = visible.map(articleRow).join("");
  elements.empty.hidden = visible.length > 0;
  document.querySelector(".articles-table").hidden = visible.length === 0;
  document.querySelector(".table-footer").hidden = visible.length === 0;
  document.getElementById("results-label").textContent = `عرض ${new Intl.NumberFormat("ar-EG").format(visible.length)} من ${new Intl.NumberFormat("ar-EG").format(articles.length)} مقال`;

  const noArticles = articles.length === 0;
  document.getElementById("empty-title").textContent = noArticles ? "لا توجد مقالات بعد" : "لا توجد نتائج مطابقة";
  document.getElementById("empty-description").textContent = noArticles ? "مساحتك جاهزة لأول فكرة. ابدأ بكتابة مقال جديد." : "جرّب تغيير كلمات البحث أو اختيار تصنيف آخر.";
  document.getElementById("empty-create").hidden = !noArticles;

  document.querySelectorAll("[data-view]").forEach((button) => {
    const isActive = button.dataset.view === activeView;
    if (button.classList.contains("tab")) {
      button.classList.toggle("active", isActive);
      button.setAttribute("aria-selected", String(isActive));
    } else {
      button.classList.toggle("active", isActive);
    }
  });
  document.getElementById("page-title").innerHTML = `${activeView === "draft" ? "مسوداتك" : activeView === "published" ? "مقالاتك المنشورة" : "مكتبة مقالاتك"}<span class="title-period">.</span>`;
}

function openEditor(article = null) {
  elements.form.reset();
  document.getElementById("form-message").textContent = "";
  document.getElementById("article-id").value = article?.id || "";
  document.getElementById("article-title").value = article?.title || "";
  document.getElementById("article-category").value = article?.category || categories[0];
  document.getElementById("article-cover").value = article?.cover || "";
  document.getElementById("article-excerpt").value = article?.excerpt || "";
  document.getElementById("article-content").value = article?.content || "";
  document.getElementById("modal-title").textContent = article ? "تعديل المقال" : "مقال جديد";
  document.getElementById("publish-article").innerHTML = `${iconMarkup.send}نشر المقال`;
  document.getElementById("editor-delete").hidden = !article;
  elements.modal.hidden = false;
  document.body.style.overflow = "hidden";
  document.getElementById("article-title").focus();
}

function closeModals() {
  document.querySelectorAll(".modal-backdrop").forEach((modal) => { modal.hidden = true; });
  document.body.style.overflow = "";
}

function getFormArticle(status) {
  const id = document.getElementById("article-id").value;
  const existing = articles.find((article) => article.id === id);
  return {
    id: id || (window.crypto?.randomUUID ? window.crypto.randomUUID() : `article-${Date.now()}`),
    title: document.getElementById("article-title").value.trim(),
    category: document.getElementById("article-category").value,
    cover: document.getElementById("article-cover").value.trim(),
    excerpt: document.getElementById("article-excerpt").value.trim(),
    content: document.getElementById("article-content").value.trim(),
    status,
    views: existing?.views || 0,
    updatedAt: new Date().toISOString()
  };
}

function saveArticle(status) {
  const title = document.getElementById("article-title").value.trim();
  const content = document.getElementById("article-content").value.trim();
  if (!title) {
    document.getElementById("form-message").textContent = "أضف عنوانًا للمقال قبل حفظه.";
    document.getElementById("article-title").focus();
    return;
  }
  if (status === "published" && !content) {
    document.getElementById("form-message").textContent = "أضف محتوى المقال قبل نشره.";
    document.getElementById("article-content").focus();
    return;
  }
  const article = getFormArticle(status);
  const previousArticles = articles;
  articles = [...articles];
  const existingIndex = articles.findIndex((item) => item.id === article.id);
  if (existingIndex < 0) articles.unshift(article);
  else articles[existingIndex] = article;
  if (!persistArticles()) {
    articles = previousArticles;
    return;
  }
  closeModals();
  render();
  showToast(status === "published" ? "تم نشر مقالك بنجاح ✨" : "تم حفظ المقال كمسودة");
}

function previewArticle(article) {
  document.getElementById("preview-title").textContent = article.title;
  document.getElementById("preview-category").textContent = article.category || "بدون تصنيف";
  document.getElementById("preview-meta").textContent = `${article.status === "published" ? "مقال منشور" : "مسودة"} · ${formatDate(article.updatedAt)}`;
  document.getElementById("preview-excerpt").textContent = article.excerpt || "لا توجد نبذة مضافة لهذا المقال.";
  document.getElementById("preview-excerpt").hidden = !article.excerpt;
  document.getElementById("preview-body").textContent = article.content || "لا يوجد محتوى مضاف بعد.";
  const cover = document.getElementById("preview-cover");
  cover.style.backgroundImage = article.cover
    ? `linear-gradient(rgba(20,40,30,.08), rgba(20,40,30,.08)), url("${article.cover.replace(/["\\\n\r]/g, "")}")`
    : "";
  cover.style.backgroundColor = article.cover ? "" : "#dcebdd";
  document.getElementById("preview-modal").hidden = false;
  document.body.style.overflow = "hidden";
}

function deleteArticle(article) {
  if (!window.confirm(`هل تريد حذف مقال «${article.title}»؟ لا يمكن التراجع عن هذا الإجراء.`)) return;
  const previousArticles = articles;
  articles = articles.filter((item) => item.id !== article.id);
  if (!persistArticles()) {
    articles = previousArticles;
    return;
  }
  closeModals();
  render();
  showToast("تم حذف المقال");
}

document.getElementById("today-label").textContent = new Intl.DateTimeFormat("ar-EG", { weekday: "long", day: "numeric", month: "long" }).format(new Date());
document.querySelectorAll("[data-view]").forEach((button) => {
  button.addEventListener("click", () => { activeView = button.dataset.view; render(); });
});
["create-article", "sidebar-create", "featured-create"].forEach((id) => document.getElementById(id).addEventListener("click", () => openEditor()));
document.getElementById("empty-create").addEventListener("click", () => openEditor());
elements.search.addEventListener("input", render);
elements.category.addEventListener("change", render);
document.getElementById("sort-button").addEventListener("click", (event) => {
  oldestFirst = !oldestFirst;
  event.currentTarget.title = oldestFirst ? "ترتيب من الأقدم" : "ترتيب من الأحدث";
  render();
});
document.querySelectorAll("[data-close-modal]").forEach((button) => button.addEventListener("click", closeModals));
document.querySelectorAll(".modal-backdrop").forEach((backdrop) => backdrop.addEventListener("click", (event) => {
  if (event.target === backdrop) closeModals();
}));
elements.form.addEventListener("submit", (event) => { event.preventDefault(); saveArticle("published"); });
document.getElementById("save-draft").addEventListener("click", () => saveArticle("draft"));
document.getElementById("editor-delete").addEventListener("click", () => {
  const article = articles.find((item) => item.id === document.getElementById("article-id").value);
  if (article) deleteArticle(article);
});
elements.body.addEventListener("click", (event) => {
  const button = event.target.closest("[data-action]");
  if (!button) return;
  const article = articles.find((item) => item.id === button.dataset.id);
  if (!article) return;
  if (button.dataset.action === "preview") previewArticle(article);
  if (button.dataset.action === "edit") openEditor(article);
  if (button.dataset.action === "publish") {
    const previousArticles = articles;
    articles = articles.map((item) => item.id === article.id ? { ...item, status: "published", updatedAt: new Date().toISOString() } : item);
    if (persistArticles()) { render(); showToast("تم نشر المقال بنجاح ✨"); }
    else articles = previousArticles;
  }
  if (button.dataset.action === "delete") deleteArticle(article);
});
document.addEventListener("keydown", (event) => {
  if ((event.ctrlKey || event.metaKey) && event.key.toLowerCase() === "k") {
    event.preventDefault();
    elements.search.focus();
  }
  if (event.key === "Escape") closeModals();
});

render();
