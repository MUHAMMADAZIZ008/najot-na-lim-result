function getDate(string) {
    let set = new Set(string)
    return string.length * (set.size -1)
}

console.log(getDate("abc"));