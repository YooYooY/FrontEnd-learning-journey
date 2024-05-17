const nums = [2, 7, 11, 15];
const target = 9;

// 2 + ? = 9

function solution(nums, target) {
  const map = new Map()
  for (let i = 0; i < nums.length; i++) {
    const implement = target - nums[i];
    if(map.has(implement)) {
      return [i, map.get(implement)]
    } else {
      map.set(nums[i], i)
    }
  }
}

console.log(solution(nums, target));