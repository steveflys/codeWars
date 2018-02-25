function find_average(array) {
  const total = array.reduce((accumulator, currentValue) => accumulator + currentValue);
  return (total / array.length);
}