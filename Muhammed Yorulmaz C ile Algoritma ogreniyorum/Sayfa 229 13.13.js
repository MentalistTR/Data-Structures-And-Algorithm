function calculate(x,y) {
    let simteri = prompt("x ekseni için 1, y eksein için 2, orjin için 3 basiniz.")

    if(x>0 && y>0 && simteri ==1) {
        document.write("verilen noktanin simtetriği" + x,-y)

    } else if(x<0 && y>0 && simteri ==1) {
        document.write("verilen noktanin simtetriği" + -x,-y)

    } else if(x<0 && y<0 && simteri ==1) {
        document.write("verilen noktanin simtetriği" + -x,y)

    } else if (x>0 && y<0 && simteri ==1) {
        document.write("verilen noktanin simtetriği" + x,y)

    }
     else if(x>0 && y>0 && simteri ==2) {
        document.write("verilen noktanin simtetriği" + -x,y)

    } else if(x<0 && y>0 && simteri ==1) {
        document.write("verilen noktanin simtetriği" + x,y)

    } else if(x<0 && y<0 && simteri ==1) {
        document.write("verilen noktanin simtetriği" + x,-y)

    } else if (x>0 && y<0 && simteri ==1) {
        document.write("verilen noktanin simtetriği" + -x,-y)

    } 
    else if(x>0 && y>0 && simteri ==3) {
        document.write("verilen noktanin simtetriği" + -x,-y)

    } else if(x<0 && y>0 && simteri ==3) {
        document.write("verilen noktanin simtetriği" + x,-y)

    } else if(x<0 && y<0 && simteri ==3) {
        document.write("verilen noktanin simtetriği" + x,y)

    } else if (x>0 && y<0 && simteri ==3) {
        document.write("verilen noktanin simtetriği" + -x,y)

    }


} 
calculate(7,4)