/* let man = {
    name: "segun", 
    age: 26, 
    occupation: "Navy"
}

 console.log(man['age']) */

let kindofman = { work: "navy", rank: "captain"}
const product = [
    {name:"bag", price: 2000, color: "black"},
    {name: "shirt", price:4000},
    {name:"lady", height: 4.5}
]

product.includes(kindofman);
product.unshift(kindofman);
console.log(product.indexOf("name"));

console.log(product[0]);



document.getElementById("btn").onclick = function(){
    document.getElementById("put").style.backgroundColor = "red"
    // document.getElementById('put').remove()
    
    document.getElementById("move").setAttribute("scrollamount", 50)
    document.getElementById("move").setAttribute("direction", "right")

document.getElementById('move').classList.toggle("test")
let newele2 = document.createElement("h1")
newele2.innerText = "coming from js"
let newele = document.createElement("img")  
newele.setAttribute("src",  "./SEGUN.jpg")

document.getElementById("body").appendChild(newele)
document.getElementById('body').appendChild(newele2)


}
        
    
