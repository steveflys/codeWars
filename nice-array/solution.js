function isNice(arr){
  if(arr.length === 0){
    return false;
  };
  let ans = [];
  arr.forEach(function(element) {
    if(arr.includes(element + 1)){
      ans.push(element);
    }else if(arr.includes(element - 1)){
      ans.push(element);
    }else {
      return false;
    };
    console.log(ans);
  });
  if(ans.length === arr.length){
    return true;
  }else{
    return false;
  };
}