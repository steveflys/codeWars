function capitalize(w){
  let input = w.split('');
  let ans = [];
  let ans1 = [];
  let ans2 = [];
  input.forEach(function swap(e, i) {
    if(i % 2 === 0){
      ans1.push(e.toUpperCase());
      ans2.push(e.toLowerCase());
    }else{
      ans1.push(e.toLowerCase());
      ans2.push(e.toUpperCase());
    }
  });
  ans.push(ans1.join(''));
  ans.push(ans2.join(''));
  return ans;
}