/* 
* Database creation
*/

const fruits = [
  {
    id: 1,
    icon: '🍏',
    name: 'apple',
    price: 2.5
  },
  {
    id: 2,
    icon: '🍌',
    name: 'banana',
    price: 1.5
  },
  {
    id: 3,
    icon: '🍊',
    name: 'orange',
    price: 2
  },
  {
    id: 4,
    icon: '🍇',
    name: 'grape',
    price: 3
  },
  {
    id: 5,
    icon: '🍉',
    name: 'watermelon',
    price: 4
  },
  {
    id: 6,
    icon: '🍓',
    name: 'strawberry',
    price: 2.5
  },
]

/* everything will be converted to a string */

/* we're importing product's information from HTML */
const container = document.querySelector('#containerProducts')

/* empty string creation */
let html = ''

/* loop to iterate all fruits information and to be added to html = '' */
for (const fruit of fruits) {

  html += `
  <article class="product">
    <div class="product__image">
        <span class="icon">${fruit.icon}</span>
        <button class="btn btn-buy" type="button" data-id="${fruit.id}">Buy</button>
    </div>
    <div class="product__body">
        <h2 class="product__title">${fruit.name}</h2>
        <span class="product__price">$${fruit.price}</span>
    </div>
  </article>
  `
}

/* innerHTML => DOM method which allows to insert js content and transform it to html */
/* const.innerHTML = string */
/* container.me gustastaria saber cual es tu contenido internamente innerHTML = y quiero que adentro tenga el valor de html, por eso se crea el empty string para que la informacion se guarde */
container.innerHTML = html

/* agregar a la canasta */

const basket = []
const containerBasket = document.querySelector('#containerArticles')

let ul = ''

for (const fruit of fruits) {
  ul = `
  
  <ul>${fruit.name} - ${fruit.price}</ul>
  
  `
}

ul += '</ul>'

containerBasket.innerHTML = ul

/* funcion para saber que elemento agregar */
function addProduct(id) {
  for (const fruit of fruits) {
    if (fruit.id === id) {
      basket.push({
        id: fruit.id,
        name: fruit.name,
        price: fruit.price
      })
    }
  }
}

/* eventos */
/* utilizamos el contenedor, ya que es el que contiene todos los productos */

/* container.agrega un evento que cuando escuche('click', cree una function con el parametro (e) ) */
/* el evento esta siendo agregago unicamente al contenedor (el contenedor de los articulos) que fue seleccionado previamente*/
container.addEventListener('click', function (e) {
  /* si (evento.objetivo.dentro de su lista de clases.contiene('btn-buy')) */
  if (e.target.classList.contains('btn-buy')) {
    /* aqui va la funcion del elemento a agregar */
    /* muestra una ventana emergente mostrando('im a product') */

    /*
    ?console.log(e.target.parentElement.parentElement.dataset.id) 
    * dentro del e objetivo.vas a irte a su elemento padre. y a su elemento mas arriba.dentro de el conjunto de datos.en su propiedad id
    */

    /* 
    //obtener el id de los productos de una manera mas corta y sencilla es agregando el data-id="${fruit.id}" dentro del boton
    ?           console.log(e.target.dataset.id)
    * le tenemos que agregar el + para que haga una conversion unaria de string a number
    * dentro del +e.objetivo.en su coknjunto de datos.con la propiedad id

    */
    const id = +e.target.dataset.id
    addProduct(id)
  }
})

console.log('Basket:', basket.length)
