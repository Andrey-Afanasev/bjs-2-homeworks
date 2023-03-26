function compareArrays(arr1, arr2) {
    return arr1.length === arr2.length && arr1.every((element, i) => element === arr2[i])

}

function getUsersNamesInAgeRange(users, gender) {

    let filtret = users.filter(men => men.gender === gender);
    let maper = filtret.map(age1 => age1.age);
    let redused = maper.reduce((acc, items, index, maper) => {
        acc += items;
        if (index === maper.length - 1){
            return acc / maper.length;
            }
        return acc;
       } ,0) 

       return redused
  
}