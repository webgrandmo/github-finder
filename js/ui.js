/* eslint-disable require-jsdoc */
class UI {
  constructor() {
    this.profile = document.getElementById('profile');
  }

  showProfile(user) {
    this.profile.innerHTML = `
      <section class="card card-body mb-3">
        <div class="row">
          <div class="col-md-3">
            <div class="text-center">
              <img class="image-fluid mb-2" src="${user.avatar_url}" alt="${user.name}"/>
              <a class="btn btn-primary btn-block" target="_blank" href="${user.html_url}">View profile</a>
            </div>
          </div>
          <div class="col-md-9">
            <span class="badge badge-primary">Public repos: ${user.public_repos}</span>
            <span class="badge badge-secondary">Public gists: ${user.public_gists}</span>
            <span class="badge badge-primary">Followers ${user.followers}</span>
            <span class="badge badge-primary">Following ${user.following}</span>
            <br><br>
            <ul class="list-group add-info-list">
              <li class="list-goup-item">Company: ${user.company}</li>
              <li class="list-goup-item">Website/Blog: ${user.blog}</li>
              <li class="list-goup-item">Location: ${user.location}</li>
              <li class="list-goup-item">Since: ${user.created_at}</li>
            </ul>
          </div>
        </div>
      </section>
      <h3 class="page-heading mb-3">Latest Repos</h3>
      <div id="repos"></div>
    `;
  }
}
