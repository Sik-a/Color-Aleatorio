const contenedor = document.getElementById( 'contenido' );
const btn = document.getElementById( 'btn' );
const colores = [ 'lightgray', 'lightgreen', 'lightsalmon', 'black', 'lightsteelblue', 'lightyellow', 'lightpink', 'lightseagreen' ];

btn.addEventListener( 'click', function(){
  const indColor = parseInt( Math.random() * colores.length );

  contenedor.style.backgroundColor = colores[ indColor ];
} )