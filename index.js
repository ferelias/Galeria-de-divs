// Función que devuelve una promesa que muestra un div después de un tiempo aleatorio
function mostrarDiv(div, tiempo) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        div.style.display = "block";
        resolve();
      }, tiempo);
    });
  }
  
  // Función que devuelve una promesa que oculta un div después de un tiempo aleatorio
  function ocultarDiv(div, tiempo) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        div.style.display = "none";
        resolve();
      }, tiempo);
    });
  }
  
  // Función asincrónica que utiliza await para mostrar y ocultar tres divs aleatorios
  async function animacion() {
    try {
      const div1 = document.getElementById("div1");
      const div2 = document.getElementById("div2");
      const div3 = document.getElementById("div3");
  
      await mostrarDiv(div1, 1000);
      await ocultarDiv(div1, 2000);
  
      await mostrarDiv(div2, 1000);
      await ocultarDiv(div2, 3000);
  
      await mostrarDiv(div3, 1000);
      await ocultarDiv(div3, 4000);
    } catch (error) {
      console.log(error);
    }
  }

  // Hacer que la animacion se repita
  async function animacionInfinita() {
    while (true) {
      await animacion();
    }
  }
  
  animacionInfinita();
  
  // Llamada a la función asincrónica
  animacion();
  