function abbrevName(name){
  let words = name.split(' ');
   
  return `${words[0][0]}.${words[1][0]}`.toUpperCase();
}