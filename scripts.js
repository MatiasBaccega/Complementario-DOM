class Productos {
    constructor(id, articulo, marca, precio, stock){
        this.id = id
        this.articulo = articulo
        this.marca = marca
        this.precio = precio
        this.stock = stock   
}
}

const producto1 = new Productos (1, "Lapiz", "Casttle", 100, 50)
const producto2 = new Productos (2, "Lapiz", "Coder", 110, 50)
const producto3 = new Productos (3, "Lapiz", "Faber", 95, 50)
const producto4 = new Productos (4, "Lapiz", "Pencil", 90, 50)
const producto5 = new Productos (5, "Lapiz", "House", 98, 50)
const producto6 = new Productos (6, "Boligrafo", "Casttle", 100, 50)
const producto7 = new Productos (7, "Boligrafo", "Coder", 110, 50)
const producto8 = new Productos (8, "Boligrafo", "Faber", 95, 50)
const producto9 = new Productos (9, "Boligrafo", "Pencil", 98, 50)
const producto10 = new Productos (10, "Boligrafo", "House", 90, 50)
const producto11 = new Productos (11, "Plastilina", "Casttle", 105, 50)
const producto12 = new Productos (12, "Plastilina", "Coder", 120, 50)
const producto13 = new Productos (13, "Plastilina", "Faber", 99, 50)
const producto14 = new Productos (14, "Plastilina", "Pencil", 110, 50)
const producto15 = new Productos (15, "Plastilina", "House", 115, 50)

let productos = [producto1, producto2, producto3, producto4, producto5, producto6, producto7, producto8, producto9, producto10, producto11, producto12, producto13, producto14, producto15]

const contenedor = document.querySelector(".contenedor")

const saludo = () => {
    let nombre;
    do{
        nombre = prompt("Bienvenido a MATICES. \nIngrese su nombre");

    } while(nombre === "" || !isNaN(nombre));

    contenedor.innerHTML = `<h1> Bienvenido ${nombre.toUpperCase()} </h1>
    <h3>Productos destacados </h3>`   
}

saludo();

const mostrarProductos = (porductos) => {
    const allProductos = document.createElement("div")
    allProductos.className = "caja"
    contenedor.appendChild(allProductos)

    productos.forEach((productosArray) => {
        allProductos.innerHTML += `
    <div class="card" style="width: 18rem;">
        <div class="card-body">
            <h5 class="card-title">Marca: ${productosArray.marca}</h5>
            <p class="card-text">Articulo: ${productosArray.articulo}</p>
            <p class="card-text">Precio: $${productosArray.precio}</p>
            <p class="card-text">Stock: ${productosArray.stock}</p>
        </div>
    </div>`
    
})};
mostrarProductos();