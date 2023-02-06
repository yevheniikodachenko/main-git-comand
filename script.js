// задание 1

const getMinOfArray = Array => console.log(Math.min(...Array));

// задание 2

const getMaxOfArray = Array => console.log(Math.max(...Array));

// задание 3

const getMaxIndexOfArray = Array => Array.indexOf(Math.max(...Array));

// задание 4

let getMinIndexOfArray = Array => Array.indexOf(Math.min(...Array));


// задание 5

const getSumOfOdd = Array => Array.reduce((result,item,index) => {
    if (index % 2 !== 0) result += item;
    return result;
    
},0);

// задание 6

let rev = [1, 22, 56, 7, 9, 4];
console.log(rev.reverse());

// задание 7

const countOfOdd = Array =>{
    let counter = 0;
    let sum = 0;
    for(let i = 0;i < Array.length;i++){
        if (Array[i]%2 !== 0){
            sum+= Array[i];
            counter++;
        }
    }
    console.log("количество нечетных", counter);
    console.log("сумма нечетных", sum);
}



