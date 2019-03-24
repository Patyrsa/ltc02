function isPalindrome(text) {
    var textLen = text.lenght;
    var textLC = text.split(" \n.,;:!?-_+-@#$%^&*,'<>`~()[]{}").join("").toLowerCase();
if(textLC==text) {
    return true
} else {
    return false
}
}
console.log(isPalindrome("A man, a plan, a canal. Panama."));
