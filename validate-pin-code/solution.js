function validatePIN (pin) {
  res = /^([0-9]{4}$|[0-9]{6}$)/g.test(pin);
  return res
}