// const reverseArray = (arr, start, end) => {
//     while (start < end){
//         [arr[start], arr[end]] = [arr[end], arr[start]]
//         start++;
//         end--;
//     }
// }

// const rotateArray = (arr, k) => {
//     let n = arr.length;
//     k = k % n
//     reverseArray(arr, 0, n - 1);
//     reverseArray(arr, 0, k-1);
//     reverseArray(arr, k, n-1);
//     return arr;
// }

// function solve(){
//     const arr = [1, 2, 3, 4, 5];
//     const target = 7;
//     const ans = rotateArray(arr, target);
//     console.log(`The answer is [${ans}]`)
// }

// solve();

// const d = {
//   1: 'hello',
//   2: 'world',
//   3: 'my'
// };
// for (let [i, v] of Object.entries(d)) {
//     console.log(i, v)
// }

// keys = Object.keys(d)
// values = Object.values(d)

// const zip = keys.map((v, i) => [v, values[i]])
// console.log(zip)
// zip.forEach(pair => console.log(pair))



// 'Scaler'.split('').forEach((i,v)=> console.log(v, i))

// const a = [1, 2,2,3, 3, 4, 4, 4]
// const d = {}


// for (let i of a){
//     d[i] = (d[i] || 0) + 1
// }
// // Object.freeze(d)
// console.log(d)



// freeze
// d = {
//     name: 'Deepanshu',
//     age: 20,
//     address: {
//         city: 'Nurpur',
//         state: "HP",
//     }
// }


// deepFreeze(d)
// function deepFreeze(d){
//     Object.freeze(d)
//     for (let [i, v] of Object.entries(d)){
//         if (typeof v === 'object'){
//             deepFreeze(v)
//         }
//     }
// }
// d.name = 'Dodhamb'
// console.log(d)


// const oldArray = [1, 2, 3, 4, 5];

// const newArr = oldArray.map((element, index) => {
//     if (!(index&1)){
//         return element * 2
//     }
// })
// console.log(newArr)      // [ 2, undefined, 6, undefined, 10 ]


// const filterArr = newArr.filter((element) => {
//     if (element != undefined) {return element}
// })
// console.log(filterArr)           // [2, 6, 10]



// -------------------------SHALLOW COPY-------------------------------
let newD = Object.assign({}, d) 
// all the element will be different but for nested objects it uses the same reference. so it will change in both
newD.name = 'new_deepanshu'
newD.address.city = "deepanshurana"
console.log(d, newD)
//--------------------------DEEP COPY---------------------------------

let newnewD = JSON.parse(JSON.stringify(d))
newnewD.name = "new_new_deepanshu";
newnewD.address.city= 'newnewNurpur';
console.log(`Deep copy: ${JSON.stringify(newnewD)}`)
