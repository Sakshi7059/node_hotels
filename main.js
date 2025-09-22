const ages = [32,33,44,51]
const result = ages.filter(checkAge)

function checkAge(age){
    return age <=40
}
console.log(result)

