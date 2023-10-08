const canConstruct = (target,wordBank,memo = {}) => {
    if(target in memo) return memo[target];
    if(!target) return true 

    for(let num of wordBank) {
        if(target.indexOf(num) === 0) {
            const suffix = target.slice(num.length)
            if(canConstruct(suffix,wordBank) === true ) {
                memo[target] = true;
                return true 
            }
        }
    }

memo[target] = false;
return false 

}
// Time Complexity >> O(n üzeri m * m) >> memozied > O(n * m üzeri 2)