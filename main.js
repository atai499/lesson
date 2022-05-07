const a = "a"
const b = 20
const bool = true;
const bool2 = false;
const adj = {
    key: "value",
    username: "alex",
    data: {
        first_name: "Jack",
        last_name: "Barbaro",
    }
}
console.log(obj.data.first_name)
console.log(obj.data)

const arr = []

console.log(arr[1])

const arr2 = [
    {
        key: "value"
    },
    {
        key: "value"
    },
    {
        key: "value3"
    }


]
console.log(arr2[2].key)
const name = alert("Вам запрещено")
console.log("hello"+name)
const first_number = prompt("Введите число");
const last_number = prompt ("Введите второе число");
if(first_number > last_number){
    console.log(first_number + ">" + last_number)

} else if(first_number < last_number){
    console.log( first_number + "<" + last_number)
} else {
    console.log(first_number + "=" + last_number)
}