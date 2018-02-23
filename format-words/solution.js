function formatWords(words){
  if(!words || words.length === 0){
    return('');
  }
  let answer = [];
  words.forEach((ele) => {
    if(ele.match(/\w/)) {
      answer.push(ele);
      answer.push(', ');
    }
  });
  if(answer.length === 0){
    return ('');
  }else if(answer.length === 2) {
    answer.pop(); 
    return answer.join('');
  }else {
    answer.pop();
    answer.splice(answer.length - 2, 1, ' and ');
    return answer.join('');
  }
}