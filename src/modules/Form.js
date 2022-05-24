import { LOWERCASE, NUMBERS, SYMBOLS, UPPERCASE } from "./constants";

export default class Form {
    static validateCheckboxes(checkCheckboxList) {
        let checkBoxCheckedList = [];

        checkCheckboxList.forEach(element => {
            if (element.getAttribute("checked") === "true") {
                let checkboxType = element.classList[1];
                checkBoxCheckedList.push(checkboxType);
            };
        });

        if (checkBoxCheckedList.length >= 1) return checkBoxCheckedList
        return undefined;
    };

    static checkCheckbox(checkbox) {
        let checkmark = checkbox.children[0];
        checkmark.style.visibility = "visible";
        checkbox.style.borderColor = getComputedStyle(document.documentElement).getPropertyValue("--highlight-border-color");
    };

    static unCheckCheckbox(checkbox) {
        let checkmark = checkbox.children[0];
        checkmark.style.visibility = "hidden";
        checkbox.style.borderColor = getComputedStyle(document.documentElement).getPropertyValue("--default-border-color")
    };

    static generatePassword(passwordLength, checkBoxCheckedList) {
        let password = [];
        let passwordTypes = []; //? [numbers, uppercase, lowercase, symbols]

        let passwordHasNumbers = checkBoxCheckedList.includes("numbers");
        let passwordHasUppercase = checkBoxCheckedList.includes("uppercase");
        let passwordHasLowercase = checkBoxCheckedList.includes("lowercase");
        let passwordHasSymbols = checkBoxCheckedList.includes("symbols");

        if (passwordHasNumbers) {
            passwordTypes.push([...NUMBERS]);
        };

        if (passwordHasUppercase) {
            passwordTypes.push([...UPPERCASE]);
        };

        if (passwordHasLowercase) {
            passwordTypes.push([...LOWERCASE]);
        };

        if (passwordHasSymbols) {
            passwordTypes.push([...SYMBOLS]);
        };

        for (let i = 0; i < passwordLength; i++) {
            let randomPasswordTypeIndex = Math.floor(Math.random() * passwordTypes.length);
            let randomPasswordType = passwordTypes[randomPasswordTypeIndex];
            let randomCharacterIndex = Math.floor(Math.random() * randomPasswordType.length);
            let randomCharacter = randomPasswordType[randomCharacterIndex];

            password.push(randomCharacter);
        };

        password = password.join("");

        return password;
    };
};