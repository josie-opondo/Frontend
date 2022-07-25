function checkPalindrome(str) {
    const data = str.split('').reverse().join('');
    return data === str
 
 }
 
 
 console.log(checkPalindrome('Hello'))