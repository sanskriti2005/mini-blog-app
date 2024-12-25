import { endpoint } from "./endpoint.js";

// First off, form
const blogForm = document.getElementById("blog-form")

blogForm.addEventListener("submit", async (e) => {
    e.preventDefault()
    // get all the data from the form
    const title = blogForm.title.value
    const content = blogForm.content.value
    const author = blogForm.author.value
    const publishedOn = blogForm.date.value

    let dataToBePosted = {title, content, author, publishedOn}
    console.log(dataToBePosted)

    // THEN POST THAT FROM BACK TO ENDPOINT
    try {
        const response = fetch(endpoint, {
            method:"POST",
            headers: {
                "content-type":"application/json"
            },
            body: JSON.stringify(dataToBePosted)
        })
        if(response.ok){
            alert("Ya won, son")
        }
    } catch (error) {
      alert("Did not work");  
    }


})
