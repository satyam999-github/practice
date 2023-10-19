//Problem 1: Find the average of elements present at the odd index of the following array.


let arr = [10, 24, 56, 72, -10, -88, 100, 564];

function oddIndex(array){
  let odd= [];
  for(let i=0; i<array.length; i++){
    if(i%2==1){
      odd.push(array[i]);
    }
  }
  return odd;
}

let  res= (oddIndex(arr).reduce((acc,curr) => acc + curr,0))/oddIndex(arr).length;

console.log(res);
