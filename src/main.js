"use strict";
import "./assets/css/style.css";
import Form from "./modules/Form";

// It adds input listener in password textarea to make it resize automatically
document.addEventListener("input", () => { resizePasswordContainer() });

// It changes the value from number of character field if its less than 0 or more than 100
document.querySelector(".characters_number").addEventListener("focusout", charactersNumber => {
    if (charactersNumber.target.value > 100) {
        charactersNumber.target.value = 100;
    };

    if (charactersNumber.target.value < 8) {
        charactersNumber.target.value = 8;
    };
});

// document.querySelector(".characters_number").addEventListener("input", element =>{
//     let charactersNumber = element.target;
//     let lastInputtedValue = element.data;
// });

document.addEventListener("click", element => {
    let target = element.target;

    // It adds click listener in checkbox
    if (target.classList.contains("checkbox") || target.parentElement.classList.contains("checkbox")) {

        let tooltipErrorElement = document.querySelector(".tooltipError");
        if (tooltipErrorElement.getAttribute("data-showing") === "true") {
            fadeOut(tooltipErrorElement);
            tooltipErrorElement.setAttribute("data-showing", "true");
        };

        if (target.classList.contains("checkmark")) target = target.parentElement;

        if (target.getAttribute("checked") === "false") {
            target.setAttribute("checked", true)
            Form.checkCheckbox(target);
        } else {
            target.setAttribute("checked", false);
            Form.unCheckCheckbox(target);
        };
    };

    // It adds click listener in generate button
    if (target.classList.contains("generate_button")) {
        let passwordTextarea = document.querySelector(".password");
        let charactersNumber = parseInt(document.querySelector(".characters_number").value);
        let checkboxList = document.querySelectorAll(".checkbox");
        let checkBoxCheckedList = Form.validateCheckboxes(checkboxList);

        if (checkBoxCheckedList === undefined) {
            let tooltipErrorElement = document.querySelector(".tooltipError");
            fadeIn(tooltipErrorElement);
            return;
        }

        let tooltipCopyElement = document.querySelector(".tooltip_copy");
        fadeIn(tooltipCopyElement);
        fadeOut(tooltipCopyElement, 500, 1000);


        let password = Form.generatePassword(charactersNumber, checkBoxCheckedList);
        passwordTextarea.value = password;
        navigator.clipboard.writeText(passwordTextarea.value);

        resizePasswordContainer();
    };

});

function resizePasswordContainer() {
    let passwordElement = document.querySelector(".password");
    passwordElement.style.height = "auto";
    passwordElement.style.height = `${passwordElement.scrollHeight}px`;
    // scrollHeight = clientHeight (distance between top padding and bottom padding)
};

function fadeIn(element) {
    element.style.opacity = 1;
    element.setAttribute("data-showing", "true");
};

function fadeOut(element, duration = 100, delay = 0) {
    const animation = element.animate([
        { "opacity": 0 }
    ], { duration: duration, delay: delay});

    animation.addEventListener("finish", () => { element.style.opacity = 0 })
};
