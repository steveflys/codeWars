function cubeOdd(arr) {
  if(arr.length === 0){return undefined}
  const string = arr.toString('')
  if(string.match(/[a-zA-Z]/)){return undefined}
  const ans = arr.map(ele => ele * ele * ele).filter(y => y % 2 === 1 || y % 2 === -1)
  if(ans.length === 0){
    return undefined
  }else{
    return ans.reduce((a, c) => a + c)
  }
}