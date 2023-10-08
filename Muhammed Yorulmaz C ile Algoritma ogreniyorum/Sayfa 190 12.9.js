 
function karistir() {
    let dizi = [1,2,3,4,5,6,7,8,9,10]
    for (let i = dizi.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1)); 
   
      [dizi[i], dizi[j]] = [dizi[j], dizi[i]];
    }

    console.log(dizi);
    document.write(dizi);
  }

  karistir();

 