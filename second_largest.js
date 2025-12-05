const nums = [10, 20, 30, 30, 5];

let unique = [...new Set(nums)];
unique.sort((a, b) => b - a);

console.log(unique[1]);