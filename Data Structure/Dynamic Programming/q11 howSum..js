const howSum = (targetSum,numbers) => {
    const table = Array(targetSum + 1).fill(null);
    table[0] = [];

    for(let i = 0; i <= targetSum;i++) {
        if (table[i] !== null) {
            for(let num of numbers) {
                table[i + m] = [...table[i],num];
            }
        }
    }

    return table[targetSum];
    
}