import {Producto, calculaISV} from './06-desestructuracion funcion';
/*
    ===== Código de TypeScript =====
*/

const carritoCompras: Producto[] = [
  {
     desc: 'Telefono 1',
     precio: 100
  },
  {
     desc: 'Telefono 2',
     precio:150
  }
];

const [total, isv] = calculaISV ( carritoCompras );

console.log ('total', total);
console.log('total',isv);