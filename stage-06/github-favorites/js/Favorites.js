import { GitHubUser } from "./GitHubUser.js";

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

  save() {
    localStorage.setItem('@github-favorites:', JSON.stringify(this.entries));
  }

  async add(username) {
    try {
      const userExists = this.entries.find(entry => entry.login === username);

      if (userExists) {
        throw new Error('User already registered!');
      }

      const user = await GitHubUser.search(username);

      if (user.login === undefined) {
        throw new Error('User not found!');
      }

      this.entries = [user,...this.entries];
      this.update();
      this.save();
    } catch (error) {
      alert(error.message);
    }
  }

  delete(user) {
    // Higher-order functions (map, filter, find, reduce)
    const filteredEntries = this.entries
      .filter((entry) => entry.login !== user.login);

    this.entries = filteredEntries;
    this.update();
    this.save();
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
      // const { value } = this.root.querySelector('.search input');
      const input = this.root.querySelector('.search input');

      this.add(input.value);

      input.value = '';
      input.focus();
    });
  }

  update() {
    this.removeAllTr();
    
    this.entries.forEach((user) => {
      const row = this.createRow();

      row.querySelector('.user img').src = `http://github.com/${user.login}.png`
      row.querySelector('.user p').textContent = user.name;
      row.querySelector('.user a').href = `http://github.com/${user.login}`;
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
