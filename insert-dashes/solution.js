function insertDash(num) {
  let final = [];
  let working = num.toString().split("");
  working.forEach(function(element, index){
    final.push(element); 
    if(element % 2 === 1){
      if(working[index + 1] % 2 === 1){
        final.push("-");
      };
    };
  });
  return final.join('');
}