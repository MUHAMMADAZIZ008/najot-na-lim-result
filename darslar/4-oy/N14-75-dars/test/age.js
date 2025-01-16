export function returnAge(age) {
  const nowYear = +String(new Date()).split(' ')[3];
  return nowYear - age;
}
console.log(returnAge('2020'));
