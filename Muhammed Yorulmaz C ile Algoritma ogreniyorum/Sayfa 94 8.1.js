function checkpalindrome(string) {
    
    const stringvalue = string.split('');

    const Reverse_stringvalue = stringvalue.reverse();

    const ReverseString = Reverse_stringvalue.join('');

    if(string == ReverseString) {
        console.log("1");
    } else {
        console.log("0");
    }
}

const string = prompt("deger gir.");
checkpalindrome(string);