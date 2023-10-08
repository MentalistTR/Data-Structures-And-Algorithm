const allConstruct = (target,wordBank) => {
    const table = Array(target.length + 1).fill().map(() => []) 
    table[0] = [[]]

    for(let i = 0; i <=target.length;i++) {
        for(let word of wordBank) {
            const newCombinations = table[i].map(subArray => [...subArray,word]);
            table[i + word.length].push(...newCombinations)
        }
    }

    return table[target.length];

    

}