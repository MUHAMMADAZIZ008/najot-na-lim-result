function calc(A, B) {
    return {
        A : (x) =>{
            return x * A
        },
        B : (y) =>{
            return y * B
        }
    }


}

const {A: x, B: y} = calc(3, 4)

console.log(x(2) + y(4));