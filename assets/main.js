const content = window.SITE_CONTENT;

function setText(selector, value) {
  const element = document.querySelector(selector);
  if (element && value !== undefined) element.textContent = value;
}

function setAttribute(selector, name, value) {
  const element = document.querySelector(selector);
  if (element && value) element.setAttribute(name, value);
}

function normalizeHref(href) {
  if (!href) return "#";
  const trimmed = href.trim();
  if (/^[a-z][a-z0-9+.-]*:/i.test(trimmed)) return trimmed;
  const isEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(trimmed);
  return isEmail ? `mailto:${trimmed}` : trimmed;
}

function hasUsableHref(link) {
  return link.label && normalizeHref(link.href) !== "#";
}

function createLink(link, className) {
  const anchor = document.createElement("a");
  anchor.textContent = link.label;
  anchor.href = normalizeHref(link.href);
  if (className) anchor.className = className;
  if (/^https?:$/.test(anchor.protocol) && anchor.hostname !== window.location.hostname) {
    anchor.target = "_blank";
    anchor.rel = "noreferrer";
  }
  return anchor;
}

function renderLinks(selector, links) {
  const container = document.querySelector(selector);
  if (!container) return;

  container.innerHTML = "";
  links.filter(hasUsableHref).forEach((link) => {
    container.appendChild(createLink(link));
  });
}

function renderList(selector, items) {
  const container = document.querySelector(selector);
  if (!container) return;

  container.innerHTML = "";
  items.forEach((item) => {
    const li = document.createElement("li");
    li.textContent = item;
    container.appendChild(li);
  });
}

function renderProfile(profile) {
  setText("[data-brand-name]", profile.name);
  setText("[data-profile-title]", profile.title);
  setText("[data-profile-name]", profile.name);
  setText("[data-profile-affiliation]", profile.affiliation);
  setText("[data-profile-summary]", profile.summary);
  setText("[data-profile-collaboration]", profile.collaboration);
  setAttribute("[data-profile-photo]", "src", profile.photo);
  setAttribute("[data-profile-photo]", "alt", profile.photoAlt || `Portrait of ${profile.name}`);
  renderLinks("[data-profile-links]", profile.links || []);

  const meta = document.querySelector("[data-profile-meta]");
  if (meta) {
    meta.innerHTML = "";
    (profile.meta || []).forEach((item) => {
      const wrapper = document.createElement("div");
      const dt = document.createElement("dt");
      const dd = document.createElement("dd");
      dt.textContent = item.label;
      dd.textContent = item.value;
      wrapper.append(dt, dd);
      meta.appendChild(wrapper);
    });
  }
}

function renderHero(hero) {
  setText("[data-hero-kicker]", hero.kicker);
  setText("[data-hero-title]", hero.title);
  setText("[data-hero-description]", hero.description);

  const stats = document.querySelector("[data-stats]");
  if (!stats) return;

  stats.innerHTML = "";
  stats.classList.toggle("is-hidden", !hero.stats?.length);
  (hero.stats || []).forEach((stat) => {
    const item = document.createElement("div");
    const value = document.createElement("strong");
    const label = document.createElement("span");
    value.textContent = stat.value;
    label.textContent = stat.label;
    item.append(value, label);
    stats.appendChild(item);
  });
}

function renderNews(news) {
  setText("[data-news-kicker]", news.kicker);
  setText("[data-news-title]", news.title);

  const list = document.querySelector("[data-news-list]");
  if (!list) return;

  list.innerHTML = "";
  (news.items || []).forEach((item, index) => {
    const li = document.createElement("li");
    if (index >= (news.visibleCount || 3)) li.classList.add("is-hidden");

    const time = document.createElement("time");
    time.dateTime = item.date;
    time.textContent = item.label;

    const text = document.createElement("p");
    text.textContent = item.text;

    li.append(time, text);
    list.appendChild(li);
  });
}

function renderResearch(research) {
  setText("[data-research-kicker]", research.kicker);
  setText("[data-research-title]", research.title);

  const grid = document.querySelector("[data-interests]");
  if (!grid) return;

  grid.innerHTML = "";
  (research.interests || []).forEach((interest, index) => {
    const article = document.createElement("article");
    const number = document.createElement("span");
    const title = document.createElement("h3");
    const description = document.createElement("p");
    number.className = "interest-index";
    number.textContent = String(index + 1).padStart(2, "0");
    title.textContent = interest.title;
    description.textContent = interest.description;
    article.append(number, title, description);
    grid.appendChild(article);
  });
}

function renderPublications(publications) {
  setText("[data-publications-kicker]", publications.kicker);
  setText("[data-publications-title]", publications.title);

  const filters = document.querySelector("[data-publication-filters]");
  const list = document.querySelector("[data-publications-list]");
  if (!filters || !list) return;

  const years = [...new Set((publications.items || []).map((item) => item.year))];
  filters.innerHTML = "";
  [{ label: "All", year: "all" }, ...years.map((year) => ({ label: year, year }))].forEach((filter, index) => {
    const button = document.createElement("button");
    button.className = `filter-button${index === 0 ? " is-active" : ""}`;
    button.type = "button";
    button.dataset.filter = filter.year;
    button.textContent = filter.label;
    filters.appendChild(button);
  });

  list.innerHTML = "";
  (publications.items || []).forEach((publication) => {
    const article = document.createElement("article");
    article.className = "publication-item";
    article.dataset.year = publication.year;

    const year = document.createElement("div");
    year.className = "pub-year";
    year.textContent = publication.year;

    const body = document.createElement("div");
    const title = document.createElement("h3");
    title.textContent = publication.title;

    const badges = document.createElement("div");
    badges.className = "pub-badges";
    (publication.levels || []).forEach((level) => {
      const badge = document.createElement("span");
      badge.className = "pub-badge";
      badge.textContent = level;
      badges.appendChild(badge);
    });
    if (publication.correspondingAuthor) {
      const badge = document.createElement("span");
      badge.className = "pub-badge pub-badge-corresponding";
      badge.textContent = "通讯作者";
      badges.appendChild(badge);
    }

    const authors = document.createElement("p");
    authors.className = "authors";
    (publication.authors || []).forEach((author, index) => {
      if (index > 0) authors.appendChild(document.createTextNode(", "));
      if (author.highlight) {
        const strong = document.createElement("strong");
        strong.textContent = author.name;
        authors.appendChild(strong);
      } else {
        authors.appendChild(document.createTextNode(author.name));
      }
    });
    authors.appendChild(document.createTextNode("."));

    const venue = document.createElement("p");
    venue.className = "venue";
    venue.textContent = publication.venue;

    const links = document.createElement("div");
    links.className = "pub-links";
    (publication.links || []).filter(hasUsableHref).forEach((link) => links.appendChild(createLink(link)));

    body.append(title);
    if (badges.childElementCount) body.appendChild(badges);
    body.append(authors, venue);
    if (links.childElementCount) body.appendChild(links);
    article.append(year, body);
    list.appendChild(article);
  });
}

function renderLab(lab) {
  setText("[data-lab-kicker]", lab.kicker);
  setText("[data-lab-title]", lab.title);
  setText("[data-lab-description]", lab.description);
  renderList("[data-lab-bullets]", lab.bullets || []);
}

function renderTeaching(teaching) {
  setText("[data-teaching-kicker]", teaching.kicker);
  setText("[data-teaching-title]", teaching.title);

  const list = document.querySelector("[data-courses]");
  if (!list) return;

  list.innerHTML = "";
  (teaching.courses || []).forEach((course) => {
    const article = document.createElement("article");
    const term = document.createElement("span");
    const title = document.createElement("h3");
    const description = document.createElement("p");
    term.textContent = course.term;
    title.textContent = course.title;
    description.textContent = course.description;
    article.append(term, title, description);
    list.appendChild(article);
  });
}

function renderSite(siteContent) {
  document.documentElement.lang = siteContent.site?.language || "en";
  document.title = siteContent.site?.title || siteContent.profile?.name || "Academic Homepage";

  const description = document.querySelector("meta[name='description']");
  if (description && siteContent.site?.description) {
    description.setAttribute("content", siteContent.site.description);
  }

  renderProfile(siteContent.profile || {});
  renderHero(siteContent.hero || {});
  renderNews(siteContent.news || {});
  renderResearch(siteContent.research || {});
  renderPublications(siteContent.publications || {});
  renderLab(siteContent.lab || {});
  renderTeaching(siteContent.teaching || {});
  renderList("[data-service-items]", siteContent.service?.items || []);
  setText("[data-service-kicker]", siteContent.service?.kicker);
  setText("[data-service-title]", siteContent.service?.title);
}

function initInteractions() {
  const newsToggle = document.querySelector("[data-toggle-news]");
  const hiddenNewsItems = () => document.querySelectorAll("[data-news-list] .is-hidden");
  const backTop = document.querySelector("[data-back-top]");

  if (newsToggle) {
    newsToggle.addEventListener("click", () => {
      const expanded = newsToggle.getAttribute("aria-expanded") === "true";
      newsToggle.setAttribute("aria-expanded", String(!expanded));
      newsToggle.textContent = expanded ? "Show all" : "Show less";
      document.querySelectorAll("[data-news-list] li").forEach((item, index) => {
        const visibleCount = content?.news?.visibleCount || 3;
        if (index >= visibleCount) item.classList.toggle("is-hidden", expanded);
      });
    });

    if (hiddenNewsItems().length === 0) newsToggle.classList.add("is-hidden");
  }

  document.querySelectorAll("[data-filter]").forEach((button) => {
    button.addEventListener("click", () => {
      const year = button.dataset.filter;

      document.querySelectorAll("[data-filter]").forEach((item) => item.classList.remove("is-active"));
      button.classList.add("is-active");

      document.querySelectorAll(".publication-item").forEach((item) => {
        const shouldShow = year === "all" || item.dataset.year === year;
        item.classList.toggle("is-hidden", !shouldShow);
      });
    });
  });

  if (backTop) {
    window.addEventListener("scroll", () => {
      backTop.classList.toggle("is-visible", window.scrollY > 520);
    }, { passive: true });

    backTop.addEventListener("click", () => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  }
}

function restoreHashScroll() {
  if (!window.location.hash) return;

  const targetId = decodeURIComponent(window.location.hash.slice(1));
  const target = document.getElementById(targetId);
  if (!target) return;

  requestAnimationFrame(() => {
    requestAnimationFrame(() => target.scrollIntoView());
  });
}

if (content) renderSite(content);
initInteractions();
restoreHashScroll();
