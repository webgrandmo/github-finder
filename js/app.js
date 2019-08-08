const github = new GitHub();

const searchUser = document.getElementById('search-user');

searchUser.addEventListener('keyup', (event) => {
    const searchText = event.target.value;
    console.log(searchText);

    if (searchText) {
        github.getUser(searchText).then((data) => {
            console.log(data);
            if (data.profile.message === "Not Found") {
                //Show alert that user doesn't exist
            } else {
                //Show user                
            }
        });
    } else {
        //Clear profile
    }
});