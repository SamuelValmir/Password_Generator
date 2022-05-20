export default class Form {
    static validateCheckboxes(checkCheckboxList) {
        let checkBoxCheckedList = [];

        checkCheckboxList.forEach(element => {
            if (element.getAttribute("checked") === "true") {
                let checkboxType = element.classList[1];
                checkBoxCheckedList.push(checkboxType);
            }
        });

        if(checkBoxCheckedList.length >= 1) return checkBoxCheckedList
        return false;
    };

    static checkCheckbox(checkbox) {
        let checkmark = checkbox.children[0];
        checkmark.style.visibility = "visible";
        checkbox.style.borderColor = getComputedStyle(document.documentElement).getPropertyValue("--border-color");
    };

    static unCheckCheckbox(checkbox) {
        let checkmark = checkbox.children[0];
        checkmark.style.visibility = "hidden";
        checkbox.style.borderColor = getComputedStyle(document.documentElement).getPropertyValue("--gray-border-color")
    };

    static generatePassword(charactersNumber, checkBoxCheckedList) {
        let password = ["1", "2", "3"];
        password.shuffle = shuffle;
        // console.log(checkBoxCheckedList)

        password.shuffle();

        function shuffle(){                
            for (let index = this.length - 1; index >= 0; index--) {
                let randomPos = Math.floor(Math.random() * (index + 1));
                [this[index], this[randomPos]] = [this[randomPos], this[index]];                
            }
        }

        return password;
    }
}