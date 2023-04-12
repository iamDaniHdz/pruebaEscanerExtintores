var listaProducto = []

function showProducts(){
    console.log(listaProducto);
    // document.getElementById("valueInput").innerHTML = listaProducto; 
}

document.getElementById("formulario").addEventListener('submit', function(e) {
    let inputProducto = document.form1.id_extintor.value
    listaProducto.push(inputProducto)
    console.log(listaProducto);
    e.preventDefault();
    var newDiv = document.createElement("p");
    var newContent = document.createTextNode(inputProducto);
    newDiv.appendChild(newContent);
    document.getElementById("products").appendChild(newDiv)
    document.form1.id_extintor.value = ''
});

