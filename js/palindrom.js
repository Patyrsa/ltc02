function isPalindrome(str) {
    strReverse = str.split("").reverse().join(""); 
    if (strReverse == str) {
        return true;
      } else {
        return false
      }
    }
    console.log(isPalindrome("anna"));
    console.log(isPalindrome("ghkhgkjh"));
    console.log(isPalindrome("level"));

