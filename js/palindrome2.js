function isPalindrome(text) {
    var str = text.toLowerCase().split(/[^a-z]*/).join("");
//     console.log(str);
    if(str.length >= 2){
//         console.log("str >=2");
        if(str[0]==str[str.length - 1]) {    
            return isPalindrome(str.slice(1,str.length - 1));
        } else {
            return false;
        }
    }else{
        return true;
    }
}
console.log(isPalindrome("A man, a plan, a canal. Panama."));
