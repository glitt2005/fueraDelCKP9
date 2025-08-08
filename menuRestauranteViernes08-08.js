const lunch = {
  entrantes: [
    { nombre: "Paella", precio: 6.50 },
    { nombre: "Pulpo con patatas", precio: 12.00 },
    { nombre: "Lentejas", precio: 5.50 }
  ],
  principales: [
    { nombre: "Hamburguesa", precio: 8.00 },
    { nombre: "Lubina", precio: 10.00 },
    { nombre: "Lasaña", precio: 7.50 }
  ],
  postres: [
    { nombre: "Tarta de queso", precio: 7.00 },
    { nombre: "Yogur", precio: 4.50 },
    { nombre: "Fruta de temporada", precio: 5.00 }
  ]
};


const cena = {
  entrantes: [
    { nombre: "Ensalada Bottega", precio: 6.50 },
    { nombre: "Sopa", precio: 12.00 },
    { nombre: "Endibias", precio: 5.50 }
  ],
  principales: [
    { nombre: "Pollo", precio: 8.00 },
    { nombre: "Pavo", precio: 10.00 },
    { nombre: "Anchoas", precio: 7.50 }
  ],
  postres: [
    { nombre: "Helado", precio: 7.00 },
    { nombre: "Queso", precio: 4.50 },
    { nombre: "Mango", precio: 5.00 }
  ]
};

const desayuno = [
  {nombre: "español",  precio: 5.0},
  {nombre: "frances",  precio: 7.50},
  {nombre: "ingles",  precio: 10.00},

];


let comentarios = ["¡Buena Elección!!", "¡Estupenda decisión!", "¡¡Eso está de muerte!!", "Eso está rico...rico...", "¡Tú si que sabes elegir!"]



const formatoHora = /^\d{2}:\d{2}$/;
let inputHora = '';

// const rangosExcluidos = [
//   { inicio: "23:01", fin: "06:59"},  // noche
//   { inicio: "15:31", fin: "18:59" }  // sobremesa
// ];





do {
    
  do {
    
      inputHora = prompt("Introduce la hora en formato HH:MM (ej. 14:30):");

      if (inputHora === null) {
          alert("Operación cancelada.");
          break; 
      }
    
      if (!formatoHora.test(inputHora)) {
          alert("Formato de hora no válido. Por favor, introduce la hora en formato HH:MM. Ejemplo: 13:45");
      }

  } while (!formatoHora.test(inputHora)); 


  if (inputHora !== null) {
    alert(`La hora introducida es: ${inputHora}`);

    if (inputHora >= "08:00" && inputHora <= "11:00") {
    alert("Menú DESAYUNO:");

    } else if (inputHora  > "11:00" && inputHora  <= "15:30") {
      alert("Menú LUNCH:");
   
    } else if (inputHora  >= "19:00" && inputHora  <= "23:00") {
      alert("Menú CENA:");

    } else if ( (inputHora > "23:00" && inputHora < "07:00") || (inputHora > "15:30" && inputHora < "19:00") ) {
      
      alert("HORARIO INCORRECTO, por favor introduce otra hora");
    }
  } 
  
  if (inputHora >= "08:00" && inputHora <= "11:00") {
     alert("Menú Desayuno");
  
    let respDesayuno = prompt(`Elige tu opción de DESAYUNOS\n 1. ${desayuno[0].nombre} - 2. ${desayuno[1].nombre} - 3. ${desayuno[2].nombre}` ); 
    let selectedDesayuno = null;
    let selectedPrecio = null;      

    if (respDesayuno !== null) {
      if (respDesayuno === "1") {
        selectedDesayuno = desayuno[0].nombre; 
        selectedPrecio = desayuno[0].precio;    
        alert(`Has elegido la opción 1 de DESAYUNO:  ${desayuno[0].nombre}  - ${desayuno[0].precio} €`);

      } else if (respDesayuno === "2") {
        selectedDesayuno = desayuno[1].nombre;   
        selectedPrecio = desayuno[1].precio;        
        alert(`Has elegido la opción 2 de DESAYUNO:  ${desayuno[1].nombre} - ${desayuno[1].precio} €`);

      } else if (respDesayuno === "3") {
        selectedDesayuno = desayuno[2].nombre;
        selectedPrecio = desayuno[2].precio;           
        alert(`Has elegido la opción 3 de DESAYUNO:  ${desayuno[2].nombre} - ${desayuno[2].precio} €`);
        
      } else {
        alert("Opción no válida, vuelve a seleccionar");
      }
    } else {
      alert("No has elegido ninguna opción.");

    }
 

    // generar FACTURA
      
      alert (` FACTURA:\n      Desayuno: ${selectedDesayuno} €  = ${selectedPrecio} €\n
      
      --------------------------------------
      Total factura: ${selectedPrecio} €`);

      


    } else if (inputHora  > "11:00" && inputHora  <= "15:30") {
  
      alert(`Menú elegido:\nLUNCH   \n\n ENTRANTES:\n ${lunch.entrantes[0].nombre}   -   ${lunch.entrantes[1].nombre}   -   ${lunch.entrantes[2].nombre} \n PRINCIPALES:\n ${lunch.principales[0].nombre}   -   ${lunch.principales[1].nombre}   -   ${lunch.principales[2].nombre}\n POSTRES:\n ${lunch.postres[0].nombre}   -   ${lunch.postres[1].nombre}   -   ${lunch.postres[2].nombre}`);
    
      // si han elegido HORARIO LUNCH, opción 2

      let respEntrante = prompt(`Elige tu opción de ENTRANTES\n 1. ${lunch.entrantes[0].nombre} - 2. ${lunch.entrantes[1].nombre} - 3. ${lunch.entrantes[2].nombre}` ); 
      let selectedEntrante = null;
      if (respEntrante !== null) {
        if (respEntrante === "1") {
          selectedEntrante = lunch.entrantes[0];
          alert(comentarios[Math.floor(Math.random() * comentarios.length)]);
          alert(`Has elegido la opción 1 de ENTRANTES:  ${lunch.entrantes[0].nombre} - ${lunch.entrantes[0].precio} €`);
        } else if (respEntrante === "2") {
          selectedEntrante = lunch.entrantes[1];
          alert(comentarios[Math.floor(Math.random() * comentarios.length)]);
          alert(`Has elegido la opción 2 de ENTRANTES:  ${lunch.entrantes[1].nombre} - ${lunch.entrantes[1].precio} €`);
        } else if (respEntrante === "3") {
          selectedEntrante = lunch.entrantes[2];
          alert(comentarios[Math.floor(Math.random() * comentarios.length)]);
          alert(`Has elegido la opción 3 de ENTRANTES:  ${lunch.entrantes[2].nombre} - ${lunch.entrantes[2].precio} €`);
        } else {
          alert("Opción no válida, vuelve a seleccionar");
        }
      } else {
        alert("No has elegido ninguna opción.");

      }


      let respPrincipal = prompt(`Elige tu opción de Plato PRINCIPAL\n 1. ${lunch.principales[0].nombre} - 2. ${lunch.principales[1].nombre} - 3. ${lunch.principales[2].nombre}` ); // Muestra un mensaje y un valor predeterminado
      let selectedPrincipal = null;

      if (respPrincipal !== null) {     
        if (respPrincipal === "1") {
          selectedPrincipal = lunch.principales[0];
          alert(comentarios[Math.floor(Math.random() * comentarios.length)]);
          alert(`Has elegido la opción 1 de PLATOS PRINCIPALES:   ${lunch.principales[0].nombre} - ${lunch.principales[0].precio} €`);
        } else if (respPrincipal === "2") {
          selectedPrincipal = lunch.principales[1];
          alert(comentarios[Math.floor(Math.random() * comentarios.length)]);
          alert(`Has elegido la opción 2 de PLATOS PRINCIPALES;   ${lunch.principales[1].nombre} - ${lunch.principales[1].precio} €`);
        } else if (respPrincipal === "3") {
          selectedPrincipal = lunch.principales[2];
          alert(comentarios[Math.floor(Math.random() * comentarios.length)]);
          alert(`Has elegido la opción 3 de PLATOS PRINCIPALES:   ${lunch.principales[2].nombre} - ${lunch.principales[2].precio} €`);
        } else {
          alert("Opción no válida, vuelve a seleccionar");
        }
      } else {          
        alert("No has elegido ninguna opción.");
      }



      let respPostre = prompt(`Elige tu opción de POSTRES\n 1. ${lunch.postres[0].nombre} - 2. ${lunch.postres[1].nombre} - 3. ${lunch.postres[2].nombre}` ); 
      let selectedPostre = null;
      if (respPostre !== null) {     
        if (respPostre === "1") {
          selectedPostre = lunch.postres[0];
          alert(comentarios[Math.floor(Math.random() * comentarios.length)]);
          alert(`Has elegido la opción 1 de POSTRES:    ${lunch.postres[0].nombre} - ${lunch.postres[0].precio} €`);
        } else if (respPostre === "2") {
          selectedPostre = lunch.postres[1];
          alert(comentarios[Math.floor(Math.random() * comentarios.length)]);
          alert(`"Has elegido la opción 2 de POSTRES:   ${lunch.postres[1].nombre} - ${lunch.postres[1].precio} €`);
        } else if (respPostre === "3") {
          selectedPostre = lunch.postres[2];
          alert(comentarios[Math.floor(Math.random() * comentarios.length)]);
          alert(`Has elegido la opción 3 de POSTRES:    ${lunch.postres[2].nombre} - ${lunch.postres[2].precio} €`);
        } else {
          alert("Opción no válida, vuelve a seleccionar");
        }
      } else {          
        alert("No has elegido ninguna opción.");
      }

      // generar FACTURA
      const totalFra = selectedEntrante.precio + selectedPrincipal.precio + selectedPostre.precio;


      alert (` FACTURA:\n      Entrante: ${selectedEntrante.nombre} €  = ${selectedEntrante.precio} €\n
      Plato Principal: ${selectedPrincipal.nombre} € = ${selectedPrincipal.precio} €\n
      Postre: ${selectedPostre.nombre} € = ${selectedPostre.precio} €\n
      --------------------------------------
      Total factura: ${totalFra} €`);
      


      


      } else if (inputHora  >= "19:00" && inputHora  <= "23:00") {
      alert(`Menú elegido:\nCENA \n\n ENTRANTES:\n ${cena.entrantes[0].nombre}   -   ${cena.entrantes[1].nombre}   -   ${cena.entrantes[2].nombre} \n PRINCIPALES:\n ${cena.principales[0].nombre}   -   ${cena.principales[1].nombre}   -   ${cena.principales[2].nombre}\n POSTRES:\n ${cena.postres[0].nombre}   -   ${cena.postres[1].nombre}   -   ${cena.postres[2].nombre}`); 
        


      // si han elegido HORARIO CENA, opción 3

      let respEntrante = prompt(`Elige tu opción de ENTRANTES\n 1. ${cena.entrantes[0].nombre} - 2. ${cena.entrantes[1].nombre} - 3. ${cena.entrantes[2].nombre}` ); 
      let selectedEntrante = null;

      if (respEntrante !== null) {
      
        if (respEntrante === "1") {
          selectedEntrante = cena.entrantes[0];
          alert(comentarios[Math.floor(Math.random() * comentarios.length)]);
          alert(`Has elegido la opción 1 de ENTRANTES:  ${cena.entrantes[0].nombre} - ${cena.entrantes[0].precio} €`);

        } else if (respEntrante === "2") {
          selectedEntrante = cena.entrantes[1];
          alert(comentarios[Math.floor(Math.random() * comentarios.length)]);
          alert(`Has elegido la opción 2 de ENTRANTES:  ${cena.entrantes[1].nombre} - ${cena.entrantes[1].precio} €`);

        } else if (respEntrante === "3") {
          selectedEntrante = cena.entrantes[2];
          alert(comentarios[Math.floor(Math.random() * comentarios.length)]);
          alert(`Has elegido la opción 3 de ENTRANTES:  ${cena.entrantes[2].nombre} - ${cena.entrantes[2].precio} €`);

        } else {
          alert("Opción no válida, vuelve a seleccionar");
        }
      } else {
        alert("No has elegido ninguna opción.");
      }


      let respPrincipal = prompt(`Elige tu opción de Plato PRINCIPAL\n 1. ${cena.principales[0].nombre} - 2. ${cena.principales[1].nombre} - 3. ${cena.principales[2].nombre}` ); // Muestra un mensaje y un valor predeterminado
      let selectedPrincipal = null;

      if (respEntrante !== null) {     
        if (respPrincipal === "1") {
          selectedPrincipal = cena.principales[0];
          alert(comentarios[Math.floor(Math.random() * comentarios.length)]);
          alert(`Has elegido la opción 1 de PLATOS PRINCIPALES:   ${cena.principales[0].nombre} - ${cena.principales[0].precio} €`);

        } else if (respPrincipal === "2") {
          selectedPrincipal = cena.principales[1];
          alert(comentarios[Math.floor(Math.random() * comentarios.length)]);
          alert(`Has elegido la opción 2 de PLATOS PRINCIPALES;   ${cena.principales[1].nombre} - ${cena.principales[1].precio} €`);

        } else if (respPrincipal === "3") {
          selectedPrincipal = cena.principales[2];
          alert(comentarios[Math.floor(Math.random() * comentarios.length)]);
          alert(`Has elegido la opción 3 de PLATOS PRINCIPALES:   ${cena.principales[2].nombre} - ${cena.principales[2].precio} €`);

        } else {
          alert("Opción no válida, vuelve a seleccionar");
        }
      } else {           
        alert("No has elegido ninguna opción.");
      }



      let respPostre = prompt(`Elige tu opción de POSTRES\n 1. ${cena.postres[0].nombre} - 2. ${cena.postres[1].nombre} - 3. ${cena.postres[2].nombre}` ); 
      let selectedPostre = null;
    
      if (respEntrante !== null) {     
        if (respPostre === "1") {
          selectedPostre = cena.postres[0];
          alert(comentarios[Math.floor(Math.random() * comentarios.length)]);
          alert(`Has elegido la opción 1 de POSTRES:    ${cena.postres[0].nombre} - ${cena.postres[0].precio} €`);

        } else if (respPostre === "2") {
          selectedPostre = cena.postres[1];
          alert(comentarios[Math.floor(Math.random() * comentarios.length)]);
          alert(`"Has elegido la opción 2 de POSTRES:   ${cena.postres[1].nombre} - ${cena.postres[1].precio} €`);

        } else if (respPostre === "3") {
          selectedPostre = cena.postres[2];
          alert(comentarios[Math.floor(Math.random() * comentarios.length)]);
          alert(`Has elegido la opción 3 de POSTRES:    ${cena.postres[2].nombre} - ${cena.postres[2].precio} €`);

        } else {
          alert("Opción no válida, vuelve a seleccionar");
        }
      } else {           
        alert("No has elegido ninguna opción.");
      }

          // generar FACTURA

      const totalFra = selectedEntrante.precio + selectedPrincipal.precio + selectedPostre.precio;


      alert (`FACTURA:\n      Entrante: ${selectedEntrante.nombre} €  = ${selectedEntrante.precio} €\n
      Plato Principal: ${selectedPrincipal.nombre} € = ${selectedPrincipal.precio} €\n
      Postre: ${selectedPostre.nombre} € = ${selectedPostre.precio} €\n
      --------------------------------------
      Total factura: ${totalFra} €`);

      alert ("")

} 
  
} while  (inputHora !== null);






