// Code your solution here

function findMatching(arr, name){
    const newArr = []
    for(const search of arr){
        
        if(search.toUpperCase() === name.toUpperCase()){
            newArr.push(search)
        }
    }
    return newArr
}

function fuzzyMatch(arr, str){
    const newArr = [];
    for(const search of arr){
       if(search.startsWith(str)){
            newArr.push(search)
       }
    }
    return newArr;
}

function matchName(obj, str){
    const newArr = [];
    for(const search of obj){
        if(search.name === str){
            newArr.push(search)
        }
    }
    return newArr;
}