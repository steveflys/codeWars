function capitalize(s,arr){
  const word = s.split('');
  const num = arr.filter(e => e < word.length);
  num.map((e) => word[e] = word[e].toUpperCase());
  return word.join('');
}