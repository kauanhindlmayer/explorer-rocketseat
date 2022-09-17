class Router {

  add(routeName, page) {
    this.routes[routeName] = page;
  }

  route(event) {
    event = event || window.event;
    event.preventDefault();
  
    window.history.pushState({}, "", event.target.href);
  
    this.handle();
  }

  handle() {
    const { pathname } = window.location;
    const route = routes[pathname] || routes[404];
  
    fetch(route)
      .then(data => data.text())
      .then(html => {
        document.querySelector('#app').innerHTML = html;
      });
  
    console.log(route);
  }
}

const router = new Router();
const router1 = new Router();

router.sayHello();
router1.sayHello();

console.log(router === router1); // false