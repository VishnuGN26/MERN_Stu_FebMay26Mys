function tagPassword(password) {

    if (typeof password !== "string") {
        return "INVALID";
    }

    let hasLetter = false;
    let hasNumber = false;


    for (let i = 0; i < password.length; i++) {
        let char = password[i];


        if (
            (char >= 'A' && char <= 'Z') ||
            (char >= 'a' && char <= 'z')
        ) {
            hasLetter = true;
        }


        if (char >= '0' && char <= '9') {
            hasNumber = true;
        }
    }

    if (password.length < 8) {
        return "WEAK";
    }

    if (password.length >= 12 && hasLetter && hasNumber) {
        return "STRONG";
    }

    if (password.length >= 8 && hasLetter && hasNumber) {
        return "MEDIUM";
    }

    return "WEAK";
}
console.log(tagPassword("12345"));
console.log(tagPassword("abcd1234"));
console.log(tagPassword("abcd1234efgh"));
console.log(tagPassword(12345));     