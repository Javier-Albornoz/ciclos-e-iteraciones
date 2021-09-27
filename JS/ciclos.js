const cantidadProductos = Number (prompt('Ingresa la cantidad de productos a comprar:'));
 
let listaCompras = '';
for (let j = 1; j <= cantidadProductos; j++) {
    const productos = prompt(`Ingresa el producto nº ${j}`);
    console.log(`producto nº ${j}: ${productos}` );
    if (j == cantidadProductos){
        listaCompras +=`nº${j}: ${productos}`;
        break;
    }
        listaCompras += `nº${j}: ${productos}`+'\n';
}
alert(`Tu lista de compras es:
${listaCompras}` );
let productosAcomprar = cantidadProductos;
let opcion;
 while (productosAcomprar > 0) {
     if (!opcion){
     opcion = Number(prompt(`Elegí una opción:
     1- Ingresar la cantidad de productos comprados
     2- Ingresa el nº de orden de producto comprado`));
     }
     switch (opcion) {
         case 1:
             const cantProductosComprados = Number(prompt('Ingresa la cantidad de productos que compraste:'));
             if (cantProductosComprados > cantidadProductos) {
                 alert('Te estas saliendo de los productos especificados');
                 continue;
             } else if (isNaN(cantProductosComprados)){
                 alert('Debes ingresar un nº capo');
                 continue;
             }

             productosAcomprar = productosAcomprar - cantProductosComprados;
             if (productosAcomprar > 0) {
                 alert(`Te quedan por comprar ${productosAcomprar} productos` ); 
                }
             break;  
             


         case 2:
            const  ordenProducto = Number(prompt('Ingresa el nº de orden del producto que vas comprando:'));
            if (ordenProducto > cantidadProductos){
                alert('ese nº de orden no existe');
                continue;
            } 
            productosAcomprar--;
            if (productosAcomprar > 0){
                 alert(`Te quedan por comprar ${productosAcomprar} productos` );
                 }      
             break;
     
         default:
             alert('El nº ingresado no corresponde a una opción');
             opcion = undefined;
             break;
     }
     
    }
    alert('Buenísimo, ya tenes todo comprado!!!')
