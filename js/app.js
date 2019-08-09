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
      } else {
        // Show user
        ui.showProfile(data.profile);
      }
    });
  } else {
    // Clear profile
  }
});
