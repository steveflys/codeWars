function solution(str){
  let input = str.split("");
  let ans = [];
  input.forEach((ele) => ans.unshift(ele));
  return ans.join('');  
}