const nums = [2, 7, 11, 15];
const target = 9;

function solution(nums, target) {
  const map = new Map();
  for(let i=0; i<nums.length; i++) {
    const complement = target - nums[i]
    if(map.has(complement)) {
      return [i, map.get(complement)]
    } else {
       map.set(nums[i], i)
    }
  }
  
}

console.log(solution(nums, target));