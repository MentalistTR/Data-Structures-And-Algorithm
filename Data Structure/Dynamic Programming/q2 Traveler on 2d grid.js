// Say that you are a traveler on a 2d grid. you begin in the top-left corner and your goal is to travel
// to the bottom-right CompressionStream.you may only move down or right 
// In how many ways can you travel to the goal on a grid with dimensions m *n ? 

const gridTraveler = (m,n,memo = {}) => {
    const key = m + ',' + n;
    if(key in memo) return memo[key]
    if(m === 1 && n === 1) return 1
    if(m === 0 || n === 0) return 0 

    memo[key] = gridTraveler(m,n-1,memo) + gridTraveler(m-1,n,memo);

    return memo[key];

    
 }