// Receta tostada con huevo

// (calback hell)
function tostadaConHuevoSync() {
  Promise.all([tostarPan(), freirHuevo()]).then(() => {
    colocarHuevoEnElPan()
      .then(() => {
        agregarSal()
          .then(() => {
            agregarSal()
              .then(() => {
                agregarSal()
                  .then(() => {
                    console.log("Receta sync finalizada");
                  })
                  .catch(console.log);
              })
              .catch(console.log);
          })
          .catch(console.log);
      })
      .catch(console.log);
  });
}

async function tostadaConHuevoAsync() {
  await Promise.all([tostarPan(), freirHuevo()]);
  await colocarHuevoEnElPan();
  try {
    await agregarSal();
    await agregarSal();
    await agregarSal();
    await agregarSal();
    console.log("La receta hecha de forma async esta lista.");
  } catch (error) {
    console.log("ERROR:", error);
  }
}

function tostarPan() {
  console.log("Tostando el pan...");
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("El pan esta tostado.");
    }, 3000);
  });
}

function freirHuevo() {
  console.log("Friendo el huevo...");
  return new Promise(function (resolve, reject) {
    setTimeout(() => {
      resolve("El huevo esta frito.");
    }, 2999);
  });
}

function colocarHuevoEnElPan() {
  console.log("Colocando el huevo en el pan...");
  return new Promise(function (resolve, reject) {
    setTimeout(() => {
      resolve("El pan esta con el huevo colocado");
    }, 1000);
  });
}

let cantidadDeSal = 2;
function agregarSal() {
  console.log("Agregando sal...");
  return new Promise(function (resolve, reject) {
    if (cantidadDeSal > 0) {
      cantidadDeSal--;
      setTimeout(() => {
        resolve("La preparacion tiene sal.");
      }, 500);
    } else {
      reject("No queda mas sal");
    }
  });
}

tostadaConHuevoSync();
// tostadaConHuevoAsync();
