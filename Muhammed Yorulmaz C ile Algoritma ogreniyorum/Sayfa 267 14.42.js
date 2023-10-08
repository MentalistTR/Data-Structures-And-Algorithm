let x ="Kamuran";
let y = "mur";


for(let i=0;i<=6;i++) {
    for(let j =0;j<=6;j++) {
        if(x.slice(i,j) == 'mur') {
            document.write(x.slice(0,i)+ x.slice(j,7))
            break;

        }
    }
}