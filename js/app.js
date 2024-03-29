const github = new GitHub();
const ui = new UI();

const searchUser = document.getElementById('search-user');

searchUser.addEventListener('keyup', (event) => {
  const searchText = event.target.value;
  console.log(searchText);

  if (searchText) {
    github.getUser(searchText).then((data) => {
      console.log(data);
      if (data.profile.message === 'Not Found') {
        // Show alert that user doesn't exist
        ui.showAlert('User not found', 'alert alert-danger');
      } else {
        // Show user
        ui.showProfile(data.profile);
        ui.showRepos(data.repos);
      }
    });
  } else {
    // Clear profile
    ui.clearProfile();
  }
});
