// Scroll Function

function scrollToSection(){

    document
    .getElementById("contact")
    .scrollIntoView({
        behavior:"smooth"
    });
}

// Contact Form Validation

const form =
document.getElementById("contactForm");

form.addEventListener("submit",
function(event){

    event.preventDefault();

    let isValid = true;

    clearErrors();

    const name =
    document.getElementById("name");

    const email =
    document.getElementById("email");

    const message =
    document.getElementById("message");

    // Name

    if(name.value.trim() === ""){

        showError(
            name,
            "Name is required"
        );

        isValid = false;
    }

    // Email

    if(email.value.trim() === ""){

        showError(
            email,
            "Email is required"
        );

        isValid = false;
    }

    else if(!validateEmail(email.value)){

        showError(
            email,
            "Invalid email"
        );

        isValid = false;
    }

    // Message

    if(message.value.trim() === ""){

        showError(
            message,
            "Message required"
        );

        isValid = false;
    }

    // Success

    if(isValid){

        alert(
            "Form Submitted Successfully!"
        );

        form.reset();
    }
});

// Show Error

function showError(input, message){

    const error =
    input.parentElement
    .querySelector(".error");

    error.innerText = message;
}

// Clear Error

function clearErrors(){

    document
    .querySelectorAll(".error")
    .forEach(function(error){

        error.innerText = "";
    });
}

// Email Validation

function validateEmail(email){

    const pattern =
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    return pattern.test(email);
}

// Add Task

function addTask(){

    const taskInput =
    document.getElementById("taskInput");

    const taskText =
    taskInput.value.trim();

    if(taskText === ""){

        alert("Please enter task");

        return;
    }

    const li =
    document.createElement("li");

    li.innerHTML = `
        ${taskText}
        <button onclick="removeTask(this)">
            Delete
        </button>
    `;

    document
    .getElementById("taskList")
    .appendChild(li);

    taskInput.value = "";
}

// Remove Task

function removeTask(button){

    button.parentElement.remove();
}

// Add Image

function addImage(){

    const imageUrl =
    document.getElementById("imageUrl").value;

    if(imageUrl === ""){

        alert("Enter image URL");

        return;
    }

    const gallery =
    document.getElementById("galleryGrid");

    const card =
    document.createElement("div");

    card.classList.add("image-card");

    card.innerHTML = `
        <img src="${imageUrl}">
        <button onclick="removeImage(this)">
            Remove
        </button>
    `;

    gallery.appendChild(card);

    document.getElementById("imageUrl").value = "";
}

// Remove Image

function removeImage(button){

    button.parentElement.remove();
}