let mySentence = "Bill02 dErsini seViyoRum"; 
mySentence = mySentence.toLowerCase();

const words = mySentence.split(" "); 


for (let i = 0; i < words.length; i++) { 
    words[i] = words[i][0].toUpperCase() + words[i].slice(1); 
    words.join(" "); 
}


document.write(words);
console.log(words);