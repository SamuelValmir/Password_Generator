import "./assets/css/style.css";
import { NUMBERS, LETTERS, SYMBOLS } from "./modules/constants";
import Form from "./modules/Form";


// It changes the value from number of character field if its less than 0 or more than 100
document.querySelector(".characters_number").addEventListener("focusout", charactersNumber => {
    if (charactersNumber.target.value > 100) {
        charactersNumber.target.value = 100;
    };

    if (charactersNumber.target.value < 8) {
        charactersNumber.target.value = 8;
    };
});

document.addEventListener("click", element => {
    let target = element.target;

    // It adds click listener in checkbox
    if (target.classList.contains("checkbox") || target.parentElement.classList.contains("checkbox")) {

        if (target.classList.contains("checkmark")) target = target.parentElement;

        if (target.getAttribute("checked") === "false") {
            target.setAttribute("checked", true)
            Form.checkCheckbox(target);
        } else {
            target.setAttribute("checked", false);
            Form.unCheckCheckbox(target);
        };
    }

    // It adds click listener in generate button
    if (target.classList.contains("generate_button")) {

        // let password = document.querySelector(".password").value;
        let charactersNumber = document.querySelector(".characters_number").value;
        let checkboxList = document.querySelectorAll(".checkbox");

        // console.log(password);
        // console.log(charactersNumber);
        // console.log(checkboxList);

        let checkBoxCheckedList = Form.validateCheckboxes(checkboxList);
        console.log(checkBoxCheckedList)

        Form.generatePassword(charactersNumber, checkBoxCheckedList);
    };

});