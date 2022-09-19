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