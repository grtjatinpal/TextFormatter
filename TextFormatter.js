function CapitalizeCase(str) {

    str = RemoveSpace(str);
    let newString = "";

    for (let word of str.split(" ")) {
        newString += word[0].toUpperCase() + word.slice(1) + " ";
    }

    return newString;
}

function UpperCase(str) {
    return str.toUpperCase();
}

function LowerCase(str) {
    return str.toLowerCase()
}

function RemoveSpace(str) {
    let newString = ""
    str = str.split(" ")
    for (const word of str) {
        if (word !== "" && word !== " ") {
            newString += word + " "
        }
    }
    return newString.slice(0, -1)
}

function RemoveSymbol(str) {
    str = str.split("")
    let newString = "";
    for (const char of str) {
        if ((char >= 'a' && char <= 'z') || (char >= 'A' && char <= 'Z') || (char >= '0' && char <= '9') || (char === " ")) {
            newString += char;
        }
    }
    return newString;
}

function convertText() {
    let textArea = document.querySelector("div.textContainer>textarea");
    let capitalizeCase = document.getElementById("capitalizeCase").checked;
    let upperCase = document.getElementById("upperCase").checked;
    let lowerCase = document.getElementById("lowerCase").checked;
    let removeSpace = document.getElementById("removeSpace").checked;
    let removeSymbol = document.getElementById("removeSymbol").checked;

    let text = textArea.value;
    text = text.trim();


    if (text.length > 0) {
        if (capitalizeCase) {
            text = CapitalizeCase(text);
            document.getElementById("upperCase").checked = false;
            document.getElementById("lowerCase").checked = false;
        } else if (upperCase) {
            text = UpperCase(text);
            document.getElementById("lowerCase").checked = false;
        } else if (lowerCase) {
            text = LowerCase(text);
        }

        if (removeSpace) {
            text = RemoveSpace(text)
        }

        if (removeSymbol) {
            text = RemoveSymbol(text)
        }
    }
    textArea.value = text;
}