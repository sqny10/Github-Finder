// Init github
const github = new Github;
// Init UI
const ui = new UI;
// Search Input
const searchUser = document.getElementById("searchUser");

// Search Input Event Listener
searchUser.addEventListener("keyup", (e) => {
    const userText = e.target.value;

    if(userText !== ""){
        // Make HTTP Call
        github.getUser(userText)
            .then(data => {
                if(data.profile.message === "Not Found"){
                    // Show Alert
                    ui.showAlert("User Not Found", "alert alert-danger");
                }else{
                    // Show Profile
                    ui.ShowProfile(data.profile);
                    ui.showRepos(data.repos);
                }
            })
    }else{
        // Clear Profile
        ui.clearProfile();
    }
})
