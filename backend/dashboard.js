import { endpoint } from "./endpoint.js";

const blogCont = document.getElementById("display-blogs")
// main functionality is to fetch blogs and display them
// fetch blog data
async function getData() {
    try {
        const res = await fetch(endpoint);
        const data = await res.json();
        return await data
    } catch (err) {
        alert("Could not fetch data")
        console.log(err)
    }
}


async function displayData() {
    const dataToBeDisplayed = await getData()
    blogCont.innerHTML = '';
    dataToBeDisplayed.forEach((ele, i) => {
        blogCont.innerHTML += `<div class="blog" id="${ele.id}">
            <h4>${ele.title}</h4>
            <p>${ele.content.substring(0, 10)}<button class="load-more" id="${ele.id}">...</button></p>
            <button onclick="deleteBlog(this)" type="button" >Delete</button>
            <button onclick="editBlog(this)" type="button" >Edit</button>
        </div>

        <dialog id="modal-${ele.id}">
        <div id="modal-header"><button id="${ele.id}" class="close-modal-btn">x</button></div>
        <div class="blog">
            <h4>${ele.title}</h4>
            <p>${ele.content}</p>
        </div>
        </dialog>`
    })



    const loadMoreBtns = document.querySelectorAll(".load-more");
    const closeModalBtns = document.querySelectorAll(".close-modal-btn")

    loadMoreBtns.forEach((button) => {
        button.addEventListener("click", () => {
            let modal = document.getElementById(`modal-${button.id}`);
            modal.showModal()
        })
    })
    closeModalBtns.forEach((button) => {
        button.addEventListener("click", () => {
            let modal = document.getElementById(`modal-${button.id}`);
            modal.close()
        })
    })

    // Delete Button
    window.deleteBlog = async (buttonEl) => {
        console.log("clicked")
        const id = buttonEl.parentElement.id
        try {
            let response = await fetch(`${endpoint}/${id}`, {
                method:"DELETE",
            })
            if(response.ok){
                alert("Blog Deleted")
                displayData()
            }
        } catch (error) {
            
        }

    }

    window.editBlog = async (buttonEl) => {
        console.log("clicked")
        const id = buttonEl.parentElement.id
        try {
            let response = await fetch(`${endpoint}/${id}`, {
                method:"PATCH",
                headers:{
                    
                }
            })
            if(response.ok){
                alert("Blog Updated")
                displayData()
            }
        } catch (error) {
            
        }

    }
    console.log(dataToBeDisplayed)
}

displayData()

