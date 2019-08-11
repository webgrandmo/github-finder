/* eslint-disable require-jsdoc */
class GitHub {
  constructor() {
  // I real app you shuold NEVER do like this, the keys sould come from server
  // And not visible in browser, but just for demo it is ok.S
    this.client_id = "60a3e4242bc5758008bf";
    this.client_secret = "ce6fd900e0781533ee2b1a8e5ede5c1245d2adc7";
    this.repos_sort = 'created asc';
    this.repos_count = '5';
  }

  async getUser(user) {
    const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);
    const repoResponse = await fetch(`https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}&client_id=${this.client_id}&client_secret=${this.client_secret}`);
    const profile = await profileResponse.json();
    const repos = await repoResponse.json();
    return {
      profile,
      repos,
    };
  }
}
