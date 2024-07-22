var a = [1,2,1,2,5] ; 
var b = [2,3,1,6,7,1] ; 
var c = [10 ,123,544,6778] ; 

var inputArr = [...a , ...b , ...c] ; 
console.log(inputArr);
var mark = new Array(10000) ;
var result = [] ;  
for(let i = 0 ; i<inputArr.length ; i++){
    if(mark[inputArr[i]]===undefined){
        mark[inputArr[i]] = 1 ; 
        result.push(inputArr[i]) ; 
    }
}

console.log(result);

var arr = [1,2,3,4,5] ; 
arr.splice(arr.length-2 , 2) ; //1,2,3
console.log(arr) 
arr.splice(1,2,10,11) ; //1,10,11
console.log(arr)

console.log("-----------------") ; 
const s = "123,123,123" ; 
var newS = s.split(",") ; 
console.log(newS) ; 
var arrS = newS.join("") ; 
console.log(arrS)

var number = 1 ; 
var str = "2"

console.log(number/str) ; 
console.log(typeof(number/str)) ; 

function blockScope(){
    var fc = 1 ; 
    if(fc>0){
        let bl = 2 ; 
    }

    // console.log(bl)
}
blockScope() ; 


const testArr = [2,3,4]
testArr[0] = 1 ; 
testArr[1] = 5 ; 

console.log(testArr)

const data = [
    { name: 'SGN', age: 25 },
    { name: 'HAN', age: 30 },
    { name: 'NYC', age: 20 },
    { name: 'HAT', age: 28 },
    { name: 'SGI', age: 22 },
    { name: 'LON', age: 35 },
    { name: 'DAD', age: 40 },
    { name: 'DAN', age: 33 }
  ];
  
  const priority = {
    'HAN': 1,
    'SGN': 2,
    'DAD': 3
  };
  
  data.sort((a, b) => priority[a.name] - priority[b.name]);
  
  console.log(data);

// 