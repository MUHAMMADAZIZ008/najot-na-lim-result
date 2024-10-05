// const x = fetch("https://jsonplaceholder.typicode.com/posts/1")

// x.then((res) => res.json())
//     .then((date) => console.log(date))
//     .catch((err) => console.log(err))
//     .finally(() => console.log("So'rov yakunlandi"))

// const getDate = async () => {
//     try{
//         const res = await fetch("https://jsonplaceholder.typicode.com/posts/1")
//         const date = await res.json()
//         console.log(date);
//     }catch(e){
//         console.log(e);
//     }finally{
//         console.log("Sorov yakunlandi!");
//     }
// }


// getDate()





// const sendDate = {
//     username: "emilys",
//     password: "emilyspass",
//     expiresInMins: 30
// }
// fetch("https://dummyjson.com/auth/login", {
//     method: "POST",
//     headers: {"Content-Type": "app;ication/json"},
//     body: JSON.stringify(sendDate)
// })
//     .then((res) => res.json)
//     .then((res) => console.log("Success", res))
//     .catch((e) => console.log(e))

// const res = await fetch("https://jsonplaceholder.typicode.com/posts/1")
// const date = await res.json()
// console.log(date);

// const urls = [
//     "https://jsonplaceholder.typicode.com/users/1",
//     "https://jsonplaceholder.typicode.com/users/2",
//     "https://jsonplaceholder.typicode.com/users/3",
//   ];
// const promises = urls.map((url) => fetch(url));

// async function getData(){
//     for(promis of promises){
//         res = await promis
//         console.log(res);
//     }
// }

// getData();
  

function* oneDigitPrimes() {
    yield 2;
    yield 3;
    yield 4;
    yield 5;
    yield 6;
}

let prmes = oneDigitPrimes()
console.log(prmes);

for(item.next() of prmes){
    // console.log(item);
    if(!item.done){
        console.log(item.value);
    }

}

// console.log(prmes.next().value);
// console.log(prmes.next().value);
// console.log(prmes.next().value);
// console.log(prmes.next().value);
// console.log(prmes.next().value);
// console.log(prmes.next().done);

console.log([...oneDigitPrimes()]);