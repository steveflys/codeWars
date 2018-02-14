function fixTheMeerkat(arr) {
    let arr2 = [];
   arr.forEach(function(element){
     arr2.unshift(element);
   });
    return (arr2);
    }