  /* =========================================================
    PULSE NEWS
    JavaScript principal
    ========================================================= */

  const STORAGE_NEWS = "pulse_news";
  const STORAGE_USERS = "pulse_users";
  const STORAGE_SESSION = "pulse_session";
  const STORAGE_FEEDBACK = "pulse_feedback";

  /* =========================================================
    NOTÍCIAS INICIAIS
    ========================================================= */

  const initialNews = [
    {
      id: "n1",
      title: "Mercado brasileiro encerra semana com novas expectativas",
      excerpt: "Investidores acompanham os principais indicadores econômicos e os movimentos do mercado.",
      content: "O mercado brasileiro encerrou a semana em meio a novas expectativas sobre os próximos indicadores econômicos.\n\nAnalistas acompanham os dados de inflação, atividade econômica e as movimentações dos mercados internacionais.\n\nO cenário continua sendo acompanhado por empresas e investidores.",
      category: "Economia",
      image: "imagens/economia_brasil.jpg",
      date: "2026-10-02T10:00:00"
    },
    {
      id: "n2",
      title: "Clubes se preparam para uma rodada decisiva",
      excerpt: "Grandes equipes entram em campo neste fim de semana em busca de resultados importantes.",
      content: "A rodada deste fim de semana promete movimentar torcedores de diferentes regiões.\n\nAs equipes chegam aos confrontos com objetivos distintos.\n\nCada resultado passa a ter peso maior nas disputas nacionais.",
      category: "Esportes",
      image: "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?auto=format&fit=crop&w=1200&q=80",
      date: "2026-10-01T18:30:00"
    },
    {
    id: "n3",
    title: "Nova geração de inteligência artificial amplia possibilidades",
    excerpt: "Ferramentas de IA ganham novos recursos e chegam a mais setores da economia.",
    content: "A evolução das ferramentas de inteligência artificial continua acelerada.\n\nNovas soluções estão sendo desenvolvidas para educação, atendimento, programação e produção de conteúdo.\n\nA adoção responsável da tecnologia será fundamental.",
    category: "Tecnologia",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSiwsV3a6uM_vYZWm5lbdYUgcVs5TTKGOySybAOlJWqmUl8o98Fa-OsgUw&s=10",
    date: "2026-09-30T12:15:00"
  },
    {
      id: "n4",
      title: "Cinema brasileiro ganha destaque em novos festivais",
      excerpt: "Produções nacionais conquistam espaço em importantes eventos culturais.",
      content: "O cinema brasileiro volta a ganhar destaque em uma nova temporada de festivais.\n\nDiretores e produtores apresentam trabalhos que exploram diferentes perspectivas da sociedade brasileira.\n\nO movimento também amplia oportunidades para novos profissionais.",
      category: "Cultura",
      image: "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?auto=format&fit=crop&w=1200&q=80",
      date: "2026-09-29T15:40:00"
    },
    {
      id: "n5",
      title: "Empresas anunciam novos investimentos em inovação",
      excerpt: "Companhias ampliam projetos voltados para transformação digital.",
      content: "Empresas de diferentes setores anunciaram novos investimentos em inovação.\n\nOs projetos incluem infraestrutura digital, automação e desenvolvimento de novas plataformas.",
      category: "Economia",
      image: "https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=1200&q=80",
      date: "2026-09-28T09:00:00"
    }
  ];

  /* =========================================================
    USUÁRIO ADMINISTRADOR
    ========================================================= */

  const initialUsers = [
    {
      id: "u1",
      name: "Administrador",
      email: "admin@pulsenews.com",
      password: "admin123",
      role: "admin"
    }
  ];

  /* =========================================================
    STORAGE
    ========================================================= */

  function initStorage() {
    if (!localStorage.getItem(STORAGE_NEWS)) {
      localStorage.setItem(
        STORAGE_NEWS,
        JSON.stringify(initialNews)
      );
    }

    if (!localStorage.getItem(STORAGE_USERS)) {
      localStorage.setItem(
        STORAGE_USERS,
        JSON.stringify(initialUsers)
      );
    }
  }

  function getNews() {
    try {
      return JSON.parse(
        localStorage.getItem(STORAGE_NEWS) || "[]"
      );
    } catch (error) {
      console.error("Erro ao carregar notícias:", error);
      return [];
    }
  }

  function saveNews(news) {
    localStorage.setItem(
      STORAGE_NEWS,
      JSON.stringify(news)
    );
  }

  function getUsers() {
    try {
      return JSON.parse(
        localStorage.getItem(STORAGE_USERS) || "[]"
      );
    } catch (error) {
      console.error("Erro ao carregar usuários:", error);
      return [];
    }
  }

  function saveUsers(users) {
    localStorage.setItem(
      STORAGE_USERS,
      JSON.stringify(users)
    );
  }

  function getSession() {
    try {
      return JSON.parse(
        localStorage.getItem(STORAGE_SESSION) || "null"
      );
    } catch {
      return null;
    }
  }

  function setSession(user) {
    localStorage.setItem(
      STORAGE_SESSION,
      JSON.stringify({
        id: user.id,
        name: user.name,
        email: user.email,
        role: user.role
      })
    );
  }

  function logout() {
    localStorage.removeItem(STORAGE_SESSION);

    window.location.href = getHomePath();
  }

  /* =========================================================
    CAMINHOS
    ========================================================= */

  function isInsideFolder(folder) {
    return window.location.pathname.includes(
      `/${folder}/`
    );
  }

  function getHomePath() {
    if (
      isInsideFolder("noticias") ||
      isInsideFolder("cadastro_login")
    ) {
      return "../index.html";
    }

    return "index.html";
  }

  function getCMSPath() {
    if (
      isInsideFolder("noticias") ||
      isInsideFolder("cadastro_login")
    ) {
      return "../cms.html";
    }

    return "cms.html";
  }

  function getLoginPath() {
    if (
      isInsideFolder("noticias") ||
      isInsideFolder("cadastro_login")
    ) {
      return "login.html";
    }

    return "cadastro_login/login.html";
  }

  /* =========================================================
    HELPERS
    ========================================================= */

  function formatDate(date) {
    return new Date(date).toLocaleDateString(
      "pt-BR",
      {
        day: "2-digit",
        month: "2-digit",
        year: "numeric"
      }
    );
  }

  function escapeHTML(text) {
    const div = document.createElement("div");

    div.textContent = text ?? "";

    return div.innerHTML;
  }

  function showMessage(element, message, type = "success") {
    if (!element) return;

    element.innerHTML = `
      <div class="message ${type}">
        ${escapeHTML(message)}
      </div>
    `;
  }

  function getImagePath(image) {
    if (!image) return "";

    if (
      image.startsWith("http://") ||
      image.startsWith("https://") ||
      image.startsWith("data:")
    ) {
      return image;
    }

    if (isInsideFolder("noticias")) {
      return "../" + image;
    }

    return image;
  }

  /* =========================================================
    NAVEGAÇÃO
    ========================================================= */

  function initNavigation() {
    const toggle =
      document.querySelector(".menu-toggle");

    const nav =
      document.querySelector(".nav-links");

    if (toggle && nav) {
      toggle.addEventListener("click", () => {
        nav.classList.toggle("open");
      });
    }

    const session = getSession();

    const loginLinks =
      document.querySelectorAll("#loginLink");

    const cmsLinks =
      document.querySelectorAll("#cmsLink");

    const logoutButtons =
      document.querySelectorAll("#logoutBtn");

    if (session) {

      loginLinks.forEach(link => {
        link.classList.add("hidden");
      });

      if (session.role === "admin") {
        cmsLinks.forEach(link => {
          link.classList.remove("hidden");
        });
      }

      const userInfo =
        document.getElementById("userInfo");

      if (userInfo) {
        userInfo.textContent =
          `Olá, ${session.name}`;
      }

      logoutButtons.forEach(button => {
        button.classList.remove("hidden");

        button.addEventListener(
          "click",
          logout
        );
      });
    }
  }

  /* =========================================================
    CARDS
    ========================================================= */

  function newsCard(news) {

    const articlePath =
      isInsideFolder("noticias")
        ? `noticia.html?id=${encodeURIComponent(news.id)}`
        : `noticias/noticia.html?id=${encodeURIComponent(news.id)}`;

    return `
      <a href="${articlePath}" class="news-card">

        <div
          class="news-card-image"
          style="background-image:url('${getImagePath(news.image)}')"
        ></div>

        <div class="news-card-body">

          <span class="category">
            ${escapeHTML(news.category)}
          </span>

          <h3>
            ${escapeHTML(news.title)}
          </h3>

          <p>
            ${escapeHTML(news.excerpt)}
          </p>

          <span class="news-date">
            ${formatDate(news.date)}
          </span>

        </div>

      </a>
    `;
  }

  /* =========================================================
    CARROSSEL
    ========================================================= */

  let carouselIndex = 0;
  let carouselTimer = null;
  let carouselSlides = [];

  function initHomepage() {

    const latestContainer =
      document.getElementById("latestNews");

    if (!latestContainer) {
      return;
    }

    let news = getNews();

    news.sort(
      (a, b) =>
        new Date(b.date) -
        new Date(a.date)
    );

    console.log(
      "PULSE NEWS - notícias:",
      news
    );

    /* Últimas notícias */

    latestContainer.innerHTML =
      news
        .slice(0, 6)
        .map(newsCard)
        .join("");

    /* Mais lidas */

    const trending =
      document.getElementById(
        "trendingNews"
      );

    if (trending) {
      trending.innerHTML =
        news
          .slice(2, 8)
          .map(newsCard)
          .join("");
    }

    /* Carrossel */

    carouselSlides =
      news.slice(0, 5);

    initCarousel();
  }

  const heroImage =
    document.getElementById("heroImage");

  const heroImageNext =
    document.getElementById("heroImageNext");

  function initCarousel() {

    const hero =
      document.getElementById("hero");

    const title =
      document.getElementById("heroTitle");

    const excerpt =
      document.getElementById("heroExcerpt");

    const link =
      document.getElementById("heroLink");

    const dots =
      document.getElementById("slideDots");

    const nextButton =
      document.getElementById("nextSlide");

    const prevButton =
      document.getElementById("prevSlide");

    if (
      !hero ||
      !title ||
      !excerpt ||
      !link ||
      !dots
    ) {
      return;
    }

    if (!carouselSlides.length) {
      return;
    }

  function renderSlide() {

    const item =
      carouselSlides[carouselIndex];

    title.textContent =
      item.title;

    excerpt.textContent =
      item.excerpt;

    link.href =
      `noticias/noticia.html?id=${encodeURIComponent(item.id)}`;

    const currentBackground = `
  linear-gradient(90deg, #050505 0%, rgba(5,5,5,.85) 38%, rgba(5,5,5,.15) 100%),
  linear-gradient(0deg, #050505 0%, transparent 30%),
  url("${getImagePath(item.image)}")
`;

heroImage.style.backgroundImage = currentBackground;
heroImageNext.style.backgroundImage = currentBackground;

    dots.innerHTML =
      carouselSlides
        .map(
          (_, index) => `
            <span
              class="dot ${
                index === carouselIndex
                  ? "active"
                  : ""
              }"
            ></span>
          `
        )
        .join("");


  }

function nextSlide() {
  const nextIndex =
    carouselIndex + 1 >= carouselSlides.length
      ? 0
      : carouselIndex + 1;

  const nextItem = carouselSlides[nextIndex];

  const nextBackground = `
    linear-gradient(90deg, #050505 0%, rgba(5,5,5,.85) 38%, rgba(5,5,5,.15) 100%),
    linear-gradient(0deg, #050505 0%, transparent 30%),
    url("${getImagePath(nextItem.image)}")
  `;

  hero.style.setProperty("--next-bg", nextBackground);

  hero.classList.add("crossfade");
  hero.classList.add("text-fade");

  setTimeout(() => {
    carouselIndex = nextIndex;
    renderSlide();

    hero.classList.remove("crossfade");

    setTimeout(() => {
      hero.classList.remove("text-fade");
    }, 50);

    hero.style.removeProperty("--next-bg");
  }, 800);
}

    function previousSlide() {

      carouselIndex--;

      if (carouselIndex < 0) {
        carouselIndex =
          carouselSlides.length - 1;
      }

      renderSlide();
    }

    function restartTimer() {

      clearInterval(carouselTimer);

      carouselTimer =
        setInterval(
          nextSlide,
          5000
        );
    }

    nextButton?.addEventListener(
      "click",
      () => {
        nextSlide();
        restartTimer();
      }
    );

    prevButton?.addEventListener(
      "click",
      () => {
        previousSlide();
        restartTimer();
      }
    );

    renderSlide();

    restartTimer();
  }

  /* =========================================================
    CATEGORIAS
    ========================================================= */

  function initCategoryPage() {

    const container =
      document.getElementById(
        "categoryNews"
      );

    if (
      !container ||
      !window.currentCategory
    ) {
      return;
    }

    const news =
      getNews()
        .filter(
          item =>
            item.category ===
            window.currentCategory
        )
        .sort(
          (a, b) =>
            new Date(b.date) -
            new Date(a.date)
        );

    if (!news.length) {

      container.innerHTML = `
        <p class="muted">
          Ainda não existem notícias nesta editoria.
        </p>
      `;

      return;
    }

    container.innerHTML =
      news
        .map(newsCard)
        .join("");
  }

  /* =========================================================
    NOTÍCIA INDIVIDUAL
    ========================================================= */

  function initArticlePage() {

    const container =
      document.getElementById(
        "articleContainer"
      );

    if (!container) {
      return;
    }

    const params =
      new URLSearchParams(
        window.location.search
      );

    const id =
      params.get("id");

    const news =
      getNews().find(
        item => item.id === id
      );

    if (!news) {

      container.innerHTML = `
        <h1>Notícia não encontrada</h1>

        <a
          class="back-link"
          href="../index.html"
        >
          ← Voltar para início
        </a>
      `;

      return;
    }

    const paragraphs =
      news.content
        .split("\n")
        .filter(Boolean)
        .map(
          paragraph =>
            `<p>${escapeHTML(paragraph)}</p>`
        )
        .join("");

    container.innerHTML = `

      <a
        href="javascript:history.back()"
        class="back-link"
      >
        ← Voltar
      </a>

      <div class="article-meta">
        ${escapeHTML(news.category)}
        ·
        ${formatDate(news.date)}
      </div>

      <h1>
        ${escapeHTML(news.title)}
      </h1>

      <p class="article-excerpt">
        ${escapeHTML(news.excerpt)}
      </p>

    <img
    class="article-image"
    src="${getImagePath(news.image)}"
    alt="${escapeHTML(news.title)}"
  >

      <div class="article-content">
        ${paragraphs}
      </div>

    `;

    document.title =
      `${news.title} — Pulse News`;
  }

  /* =========================================================
    LOGIN
    ========================================================= */

  function initLogin() {

    const form =
      document.getElementById(
        "loginForm"
      );

    if (!form) {
      return;
    }

    form.addEventListener(
      "submit",
      event => {

        event.preventDefault();

        const email =
          document
            .getElementById(
              "loginEmail"
            )
            .value
            .trim()
            .toLowerCase();

        const password =
          document.getElementById(
            "loginPassword"
          ).value;

        const message =
          document.getElementById(
            "loginMessage"
          );

        const user =
          getUsers().find(
            item =>
              item.email
                .toLowerCase() === email &&
              item.password === password
          );

        if (!user) {

          showMessage(
            message,
            "E-mail ou senha incorretos.",
            "error"
          );

          return;
        }

        setSession(user);

        if (
          user.role === "admin"
        ) {

          window.location.href =
            "../cms.html";

        } else {

          window.location.href =
            "../index.html";
        }
      }
    );
  }

  /* =========================================================
    CADASTRO
    ========================================================= */

  function initRegister() {

    const form =
      document.getElementById(
        "registerForm"
      );

    if (!form) {
      return;
    }

    form.addEventListener(
      "submit",
      event => {

        event.preventDefault();

        const name =
          document
            .getElementById(
              "registerName"
            )
            .value
            .trim();

        const email =
          document
            .getElementById(
              "registerEmail"
            )
            .value
            .trim()
            .toLowerCase();

        const password =
          document.getElementById(
            "registerPassword"
          ).value;

        const confirm =
          document.getElementById(
            "registerConfirm"
          ).value;

        const message =
          document.getElementById(
            "registerMessage"
          );

        if (
          password !== confirm
        ) {

          showMessage(
            message,
            "As senhas não coincidem.",
            "error"
          );

          return;
        }

        const users =
          getUsers();

        if (
          users.some(
            user =>
              user.email
                .toLowerCase() ===
              email
          )
        ) {

          showMessage(
            message,
            "Este e-mail já está cadastrado.",
            "error"
          );

          return;
        }

        const user = {

          id:
            `u_${Date.now()}`,

          name,

          email,

          password,

          role:
            "user"
        };

        users.push(user);

        saveUsers(users);

        setSession(user);

        showMessage(
          message,
          "Cadastro realizado com sucesso!"
        );

        setTimeout(
          () => {
            window.location.href =
              "../index.html";
          },
          700
        );
      }
    );
  }

  /* =========================================================
    PROTEÇÃO DO CMS
    ========================================================= */

  function protectCMS() {

    const form =
      document.getElementById(
        "newsForm"
      );

    if (!form) {
      return true;
    }

    const session =
      getSession();

    if (
      !session ||
      session.role !== "admin"
    ) {

      window.location.href =
        "cadastro_login/login.html";

      return false;
    }

    const adminName =
      document.getElementById(
        "adminName"
      );

    if (adminName) {
      adminName.textContent =
        session.name;
    }

    return true;
  }

  /* =========================================================
    CMS
    ========================================================= */

  function renderAdminNews() {

    const container =
      document.getElementById(
        "adminNewsList"
      );

    if (!container) {
      return;
    }

    const news =
      getNews().sort(
        (a, b) =>
          new Date(b.date) -
          new Date(a.date)
      );

    const count =
      document.getElementById(
        "newsCount"
      );

    if (count) {
      count.textContent =
        `${news.length} notícias`;
    }

    container.innerHTML =
      news
        .map(
          item => `

            <div class="admin-item">

              <img
                src="${item.image}"
                alt=""
              >

              <div>

                <h3>
                  ${escapeHTML(item.title)}
                </h3>

                <small>
                  ${escapeHTML(item.category)}
                  ·
                  ${formatDate(item.date)}
                </small>

              </div>

              <div class="admin-actions">

                <button
                  onclick="editNews('${item.id}')"
                >
                  Editar
                </button>

                <button
                  class="delete"
                  onclick="deleteNews('${item.id}')"
                >
                  Excluir
                </button>

              </div>

            </div>

          `
        )
        .join("");
  }

  function initCMS() {

    const form =
      document.getElementById(
        "newsForm"
      );

    if (!form) {
      return;
    }

    if (!protectCMS()) {
      return;
    }

    renderAdminNews();

    const cancel =
      document.getElementById(
        "cancelEdit"
      );

    form.addEventListener(
      "submit",
      event => {

        event.preventDefault();

        const id =
          document.getElementById(
            "newsId"
          ).value;

        const data = {

          title:
            document
              .getElementById(
                "newsTitle"
              )
              .value
              .trim(),

          excerpt:
            document
              .getElementById(
                "newsExcerpt"
              )
              .value
              .trim(),

          content:
            document
              .getElementById(
                "newsContent"
              )
              .value
              .trim(),

          category:
            document
              .getElementById(
                "newsCategory"
              ).value,

          image:
            document
              .getElementById(
                "newsImage"
              )
              .value
              .trim()
        };

        let news =
          getNews();

        if (id) {

          news =
            news.map(
              item =>
                item.id === id
                  ? {
                      ...item,
                      ...data
                    }
                  : item
            );

          showCMSMessage(
            "Notícia atualizada com sucesso."
          );

        } else {

          news.unshift({

            id:
              `n_${Date.now()}`,

            ...data,

            date:
              new Date().toISOString()
          });

          showCMSMessage(
            "Notícia cadastrada com sucesso."
          );
        }

        saveNews(news);

        resetNewsForm();

        renderAdminNews();
      }
    );

    if (cancel) {
      cancel.addEventListener(
        "click",
        resetNewsForm
      );
    }
  }

  function showCMSMessage(message) {

    showMessage(
      document.getElementById(
        "cmsMessage"
      ),
      message,
      "success"
    );
  }

  function resetNewsForm() {

    const form =
      document.getElementById(
        "newsForm"
      );

    if (!form) {
      return;
    }

    form.reset();

    document.getElementById(
      "newsId"
    ).value = "";

    document.getElementById(
      "formTitle"
    ).textContent =
      "Nova notícia";

    document.getElementById(
      "cancelEdit"
    )?.classList.add("hidden");
  }

  window.editNews =
    function(id) {

      const item =
        getNews().find(
          news =>
            news.id === id
        );

      if (!item) {
        return;
      }

      document.getElementById(
        "newsId"
      ).value = item.id;

      document.getElementById(
        "newsTitle"
      ).value = item.title;

      document.getElementById(
        "newsExcerpt"
      ).value = item.excerpt;

      document.getElementById(
        "newsContent"
      ).value = item.content;

      document.getElementById(
        "newsCategory"
      ).value = item.category;

      document.getElementById(
        "newsImage"
      ).value = item.image;

      document.getElementById(
        "formTitle"
      ).textContent =
        "Editar notícia";

      document.getElementById(
        "cancelEdit"
      )?.classList.remove("hidden");

      window.scrollTo({
        top: 0,
        behavior: "smooth"
      });
    };

  window.deleteNews =
    function(id) {

      const item =
        getNews().find(
          news =>
            news.id === id
        );

      if (!item) {
        return;
      }

      const confirmed =
        confirm(
          `Excluir a notícia "${item.title}"?`
        );

      if (!confirmed) {
        return;
      }

      const news =
        getNews().filter(
          item =>
            item.id !== id
        );

      saveNews(news);

      renderAdminNews();

      showCMSMessage(
        "Notícia excluída."
      );
    };

  /* =========================================================
    INICIALIZAÇÃO
    ========================================================= */

  document.addEventListener(
    "DOMContentLoaded",
    () => {

      initStorage();

      initNavigation();

      initHomepage();

      initCategoryPage();

      initArticlePage();

      initLogin();

      initRegister();

      initCMS();

    }
  );
