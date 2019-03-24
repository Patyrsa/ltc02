function isPalindrome(text) {
    var str = str.toLocaleLowerCase().split(/[^a-z]*/).join("");
    var strReverse = str.toLowerCase().split(/[^a-z]*/).reverse().join("");
if(str==strReverse) {
    return true
} else {
    return false
}
}
console.log(isPalindrome("A man, a plan, a canal. Panama."));
console.log(isPalindrome("Madam, I'm Adam."));
