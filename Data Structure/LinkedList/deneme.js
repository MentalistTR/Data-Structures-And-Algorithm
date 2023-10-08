const count = (arr) => {
   
    const hashmap = {}
  

    for(let i = 0; i < arr.length;i++) {
        if(!hashmap[arr[i]]) {
            hashmap[arr[i]] = 1
        }else {
            hashmap[arr[i]] +=1
        }
    }
  let max = 0

  for(let char of Object.values(hashmap)) {
   max =  Math.max(max,char)
   
  }
console.log(max)

}

count([1,1,1,2,3,4,4,2,5,])
