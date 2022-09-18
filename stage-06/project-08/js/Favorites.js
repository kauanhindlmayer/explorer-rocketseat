export class GitHubUser {
  static search(username) {
    const endpoint = `http://api.github.com/users/${username}`;

    return fetch(endpoint)
      .then(data => data.json())
      .then(({ login, name, public_repos, followers }) => ({
        login,
        name,
        public_repos,
        followers,
      }));
  }
}

export class Favorites {
  constructor(root) {
    this.root = document.querySelector(root);
    this.load();
  }

  load() {
    this.entries = JSON.parse(
      localStorage.getItem('@github-favorites:')
    ) || [];
  }

  async add(username) {
    const user = await GitHubUser.search(username);

    this.entries.push(user);
    this.createRow()
    this.update()
  }

  delete(user) {
    // Higher-order functions (map, filter, find, reduce)
    const filteredEntries = this.entries
      .filter((entry) => entry.login !== user.login);

    this.entries = filteredEntries;
    this.update();
  }
}

export class FavoritesView extends Favorites {
  constructor(root) {
    super(root);

    this.tbody = this.root.querySelector('table tbody');

    this.update();
    this.onAdd();
  }

  onAdd() {
    const addButton = this.root.querySelector('.search button');
    addButton.addEventListener('click', () => {
      const { value } = this.root.querySelector('.search input');

      this.add(value);
    });
  }

  update() {
    this.removeAllTr();
    
    this.entries.forEach((user) => {
      const row = this.createRow();

      row.querySelector('.user img').src = `http://github.com/${user.login}.png`
      row.querySelector('.user p').textContent = user.name;
      row.querySelector('.user img').alt = `Image of ${user.name}`
      row.querySelector('.user span').textContent = user.login;
      row.querySelector('.repositories').textContent = user.public_repos;
      row.querySelector('.followers').textContent = user.followers;

      row.querySelector('.remove').addEventListener('click', () => {
        const accepted = confirm('Are you sure you want to delete this row?');

        if (accepted) {
          this.delete(user);
        }
      });

      this.tbody.append(row);
    });
  }

  createRow() {
    const tr = document.createElement('tr');
    tr.innerHTML = `
      <td class="user">
        <img src="" alt="">
        <a href="" target="_blank">
          <p></p>
          <span></span>
        </a>
      </td>
      <td class="repositories"></td>
      <td class="followers"></td>
      <td>
        <button class="remove">&times;</button>
      </td>
    `;

    return tr;
  }
  

  removeAllTr() {
    this.tbody.querySelectorAll('tr')
      .forEach((tr) => {
        tr.remove();
      });
  }
}
