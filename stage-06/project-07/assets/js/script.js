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
  const route = routes[pathname] || routes[404];

  fetch(route)
    .then(data => data.text())
    .then(html => console.log(html));

  console.log(pathname);
}