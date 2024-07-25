let parent = document.querySelector(".parent")

// const childrens = parent.children

const childNodes = parent.childNodes

// childNodes[4].innerText = "reza"

console.log(childNodes)


const secondChild = document.querySelector(".child2")

console.log(secondChild)

// let thirdChild = secondChild.nextElementSibling
// let thirdChild = secondChild.nextSibling.nextSibling
// let thirdChild = secondChild.nextSibling.previousSibling
// let thirdChild = secondChild.nextSibling.previousSibling

// console.log(thirdChild)


// appendchild()


// const element = "<p>this is paragraph</p>"
const elem = document.createElement("div")

elem.innerHTML = "milad"
elem.style.color = "red"
elem.classList.add('flex')
elem.classList.add('justify-center')

console.log(elem)




// const nano = document.getElementById("nano")
// nano.appendChild(elem)
// nano.appendChild(elem)

// nano.innerHTML = "<p>salam</p>"


// insertAdjacentHtml
const nano = document.getElementById("nano")

const paragraph2 = "<p>salam</p>"

// nano.insertAdjacentHTML("beforeend" , paragraph2 )
// nano.insertAdjacentHTML("beforeend" , paragraph2 )
// nano.insertAdjacentHTML("beforeend" , paragraph2 )

for(let  i = 1 ; i < 4 ; i++){
    nano.insertAdjacentHTML("beforebegin" , `<p>salam${i}</p>` )

}


/* 

// beforebegin
<p>
// afterbrgin

foo

// beforeend
</p>
//afterend


*/


let ret = document.getElementById('ret')

// classlist

ret.classList.add("item-1")
ret.classList.add("item-2")
// ret.classList.remove("item-1")
// ret.classList.toggle("item-1")
console.log(ret.classList.contains("item-1"))
// if(ret.classList.contains("item-1")){
//     alert("hi")
// }else{
//     alert("bye")
// }





// ret.className = "item-1 item-2"










