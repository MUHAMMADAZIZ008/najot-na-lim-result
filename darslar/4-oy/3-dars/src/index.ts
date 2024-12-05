// let a = 12
// let b = 13

//type
// const a: number = 12

function add (a: number, b: number): number{
    return a + b
}


console.log(add(1, 2))

//string
const b: string = 'salom'
let d = '12' as string

d.toString()
const isMerried: boolean = true

let r: null
let j: undefined

let l: bigint= 1n

let symbol: symbol = Symbol('a')

const f = 'salom'


// array

const arr1: Array<number> = [1, 2, 3, 4]
const arr2: number[] = [1, 2, 3, 4]
const arr3 = [1, 2, 3, 4] as Array<number>
const arr4 = [1, 2, 3, 4] as number[]
const arr5: Array<number | string> = [1, 'sas', 'sa', 11]
const arr6: Array<Array<number>> = [[1]]
const arr7: Array<any> = [1, 3, 'sas', true]
const arr8: (string | number | null)[] = [1, 3, 'sasa', null]



///alias

type numberOrString = number | null | string
type stringOrNull = string | null | number | boolean

// const str: number = 12
// const str: numberOrString = 'as'

type person = {
    name: string
    age: number,
    isMerried?: boolean//optional
}

const obj: person = {
    name: 'john',
    age: 12,
    isMerried: false
}

const obj2: person = {
    name: 'john',
    age: 12,
}

type student = person &{
    univer: string
    course: 1 | 2 | 3 | 4
}

const ozozdbek: student = {
    name: 'ozozbek',
    age: 19,
    isMerried: false,
    univer: 'TATU',
    course: 2
}
