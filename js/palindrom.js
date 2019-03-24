function isPalindrome(str) {
    var strLen = str.length;
    strReverse = str.split("").reverse().join(""); 
    if (strReverse == str) {
        return true;
      } else {
        return false
      }
    }
    console.log(isPalindrome("anna"));
    console.log(isPalindrome("ghkhgkjh"));

