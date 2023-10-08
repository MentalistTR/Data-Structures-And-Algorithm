const countConstruct = (target,wordBank) => {
    const table = Array(target.length+1).fill(0)

    for(let i = 0; i < target.length;i++) {
        for(let word of wordBank) {
            if(target.slice(i,i + word.length) === word) {
                table[i + word.length] += table[i]
            }
        }
    }

    return table[table.length];

    
}