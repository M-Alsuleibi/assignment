//Task 2 : writing a function using the reduce method
function sumAndAvarege(nums){

    function helper(total, currenVal){
        return total + currenVal
    }

    const total = nums.reduce(helper)
    const average = total / nums.length
    return {total, average}
}

//Task 3 : remove duplicates in Linear time not constant time:
// because removing duplicates needs to build a hash set
// which needs to traverse the array at least once.
// Also memory comlixity is linear because set hash set requires additional memory

// Time O(n), Space O(n) 
function removeDuplicates(words){
const set = new Set()
const res = []
for (const w of words){
    if (!set.has(w) ){
        set.add(w)
        res.push(w)
    }
}
return res
}
