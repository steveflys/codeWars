function disemvowel(str) {
  const VOWEL = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];
  let input = str.split("");
  let answer = [];
  input.forEach(function(element){
    if(!VOWEL.includes(element)) {
      answer.push(element);
    }
  });
  return answer.join('');
}