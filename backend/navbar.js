function loadNavbar(){
    const navbarContainer = document.getElementById("navbar");
    navbarContainer.innerHTML = `<div id="nav">
            <div><a href="index.html">Home</a></div>
            <div><a href="create.html">Create</a></div>
            <div><a href="dashboard.html">Dashboard</a></div>
        </div>`
}
loadNavbar()