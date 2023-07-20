const expresiones = {
  nombre: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
  numero: /^\d{16}$/, // 16 numeros.
  fecha: /^(\d{2}|\d{4})$/, // de 2 o 4 digitos
  ccv: /^\d{3}$/, // 3 numeros.
};
const formulario = document.getElementsByClassName("formulario-tarjeta");
const inputs = document.querySelectorAll("#formulario input");

let nombrevf = false;
let numerovf = false;
let mesvf = false;
let anovf = false;
let ccvvf = false;

const validarFormulario = (e) => {
  switch (e.target.name) {
    case "nombre1":
      if (expresiones.nombre.test(e.target.value)) {
        document
          .getElementById("grupo__inputs__nombreid")
          .classList.remove("error");
        document.getElementById("grupo__inputs__nombreid").classList.add("ok");
        nombrevf = true;
      } else {
        document
          .getElementById("grupo__inputs__nombreid")
          .classList.add("error");
        nombrevf = false;
      }
      break;
    case "numero1":
      if (expresiones.numero.test(e.target.value)) {
        document
          .getElementById("grupo__inputs__numeroid")
          .classList.remove("error");
        document.getElementById("grupo__inputs__numeroid").classList.add("ok");
        numerovf = true;
      } else {
        document
          .getElementById("grupo__inputs__numeroid")
          .classList.add("error");
        numerovf = false;
      }
      break;
    case "mes1":
      if (expresiones.fecha.test(e.target.value)) {
        document
          .getElementById("grupo__inputs__mesid")
          .classList.remove("error");
        document.getElementById("text__yminput").classList.remove("error");
        document.getElementById("grupo__inputs__mesid").classList.add("ok");
        mesvf = true;
      } else {
        document.getElementById("grupo__inputs__mesid").classList.add("error");
        document.getElementById("text__yminput").classList.add("error");
        mesvf = false;
      }
      break;
    case "ano1":
      if (expresiones.fecha.test(e.target.value)) {
        document
          .getElementById("grupo__inputs__anoid")
          .classList.remove("error");
        document.getElementById("text__yminput").classList.remove("error");
        document.getElementById("grupo__inputs__anoid").classList.add("ok");
        anovf = true;
      } else {
        document.getElementById("grupo__inputs__anoid").classList.add("error");
        document.getElementById("text__yminput").classList.add("error");
        anovf = false;
      }
      break;
    case "ccv1":
      if (expresiones.ccv.test(e.target.value)) {
        document.getElementById("input__ccv").classList.remove("error");
        document.getElementById("div__ccv__id").classList.add("ok");
        ccvvf = true;
      } else {
        document.getElementById("input__ccv").classList.add("error");
        ccvvf = false;
      }
      break;
  }
};

/* -------------- Ejecuta validación por cada tecla ---------------- */
inputs.forEach((input) => {
  input.addEventListener("keyup", validarFormulario);
});

/* -------------- VALIDACIÓN ---------------- */
formulario[0].addEventListener("submit", (e) => {
  e.preventDefault();
  if (nombrevf && numerovf && mesvf && anovf && ccvvf) {
    document.getElementById("form1").classList.add("ocultar");
    document.getElementById("gracias1").classList.remove("ocultar");
  } else {
    inputs.forEach((input) => {
      validarFormulario({ target: input });
    });
  }
});

/*------ DIBUJO DE IMPUTS EN TARJETAS ------ */

document.getElementById("inputNombre").addEventListener("keyup", () => {
  const valor = document.getElementById("inputNombre").value;
  const span__name = document.getElementById("name__card");
  span__name.textContent = valor;
});

document.getElementById("inputNumero").addEventListener("keyup", () => {
  const valor = document.getElementById("inputNumero").value;
  const span__name = document.getElementById("number__card");
  span__name.textContent = valor;
});

document.getElementById("inputMMS").addEventListener("keyup", () => {
  const valor = document.getElementById("inputMMS").value;
  const span__name = document.getElementById("datemm__card");
  span__name.textContent = valor + "/";
});
document.getElementById("inputYY").addEventListener("keyup", () => {
  const valor = document.getElementById("inputYY").value;
  const span__name = document.getElementById("dateyy__card");
  span__name.textContent = valor + "";
});
document.getElementById("inputCCV").addEventListener("keyup", () => {
  const valor = document.getElementById("inputCCV").value;
  const span__name = document.getElementById("ccv__card");
  span__name.textContent = valor + "";
});

/*-------------BOTON PARA VOLVER AL FORM--------------- */
let refresh = document.getElementById("refresh");
refresh.addEventListener("click", (_) => {
  location.reload();
});

// A AGREGAR Y CAMBIAR

// Agregar espacios en los numeros de tarjeta
// Corregir width de 1440
