var _ = require('lodash');

var nums = ['1', '1', '2', '3', '5', '6', '7','1', '1', '4']
console.log("nums: " + nums);
_.pullAll(nums,["1"]);
console.log("nums: ", nums)
