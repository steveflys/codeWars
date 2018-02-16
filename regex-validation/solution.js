function validateUsr(username) {
  res =  /^[a-z0-9\_]{4,9}$/.test(username) 
  return res
}