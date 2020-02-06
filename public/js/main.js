let body = document.querySelector("body")
let input1 = document.getElementsByClassName("form-control")[0]
let form = document.getElementsByClassName("row")[0]
form.setAttribute("onsubmit", "return false")
// Boutton
let Ajouter = document.getElementsByClassName("btn")[0]
Ajouter.style.backgroundColor = 'turquoise'
Ajouter.style.marginRight = '200px'
// 4 boutton
let buttonTodo = document.getElementsByClassName("btn")[1]
let buttonDone = document.getElementsByClassName("btn")[2]
let supprimer = document.getElementsByClassName("btn")[3]
let buttonAll = document.getElementsByClassName("btn")[4]
let boxBody = document.getElementsByClassName("box-body")[0]
let ul = document.getElementById("list all")
let msgErreur = document.getElementsByTagName("span")[0]
boxBody.appendChild(ul)

Ajouter.addEventListener("click", () => {

  if (input1.value !== "") {
    msgErreur.classList.add("display-none")
    let li = document.createElement("li")
    ul.appendChild(li)
    let p = document.createElement('span')
    let span = p
    li.appendChild(p)
    p.innerText = input1.value
    input1.value = ""

// li
    li.style.alignItems = 'center'
    li.style.padding = '25px'
    li.style.fontWeight = 'bold'
    li.style.backgroundColor = "lightgray"

    // btn
    let div = document.createElement('div')
    div.setAttribute("class", "float-right")
    li.appendChild(div)
    let btni = document.createElement('i')
    btni.setAttribute("class", "far fa-2x fa-check-circle")
    btni.style.color = 'blue'
    div.appendChild(btni)
    btni.addEventListener("click", () => {

      if (li.style.backgroundColor == "green") {
        li.style.backgroundColor = "lightgray"
      } else {
        li.style.backgroundColor = "green"
      }
    })

    let btne = document.createElement('i')
    btne.setAttribute("class", "fas fa-2x fa-edit")
    btne.style.marginLeft = '50px'
    btne.style.color = 'yellow'
    div.appendChild(btne)
    btne.addEventListener("click", () => {
      span.setAttribute("class", "display-none")
      div.style.display = "none"
      let input2 = document.createElement("input")
      input2.placeholder = span.innerText
      input2.style.display = ""
      let btns = document.createElement('i')
      btns.setAttribute("class", "fas fa-2x fa-save")
      btns.style.color = "red"
      btns.style.marginRight = "650px"
      li.append(input2, btns)
      li.classList.add("d-flex")
      btns.addEventListener("click", () => {
        span.classList.remove("display-none")
        li.classList.remove("d-flex")
        li.removeChild(btns)
        div.style.display = ""
        span.innerText = input2.value
        span.style.display = ""
        div.append(btni, btne, btnd)
        // div.setAttribute("class", "float-right")
        input2.style.display = "none"
      })
    })

  // btn end

  // btn delete start
    let btnd = document.createElement('i')
    btnd.setAttribute("class", "far fa-2x fa-trash-alt")
    btnd.style.marginLeft = '50px'
    btnd.style.color = 'red'
    div.appendChild(btnd)
    btnd.addEventListener("click", () => {
      li.remove()
    })
    let aFaire = document.getElementsByTagName('button')[1]
    let fait = document.getElementsByTagName('button')[2]
    let tout = document.getElementsByTagName('button')[3]
    aFaire.addEventListener("click", () => {
      if (li.style.backgroundColor !== "green") {
        li.style.display = ""
        div.setAttribute("class", "float-right")
      } else {
        li.style.display = "none"
      }
    })
    fait.addEventListener("click", () => {
      if (li.style.backgroundColor != "green") {
        li.style.display = "none"
      } else {
        li.style.display = ""
      }
    })
    tout.addEventListener("click", () => {
      li.style.display = ""
    })
  } else {
    msgErreur.classList.remove("display-none")
    console.log("Bonjour");
  }
})
