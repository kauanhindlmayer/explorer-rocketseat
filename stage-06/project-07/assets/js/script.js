const routes = {
  "/": "/pages/home.html",
  "contact": "/pages/contact.html",
  "about": "/pages/about.html",
  404: "/pages/404.html",
}

function route(event) {
  event = event || window.event;
  event.preventDefault();

  window.history.pushState({}, "", event.target.href);

  handle();
}

function handle() {
  const { pathname } = window.location;

  console.log(pathname);
}