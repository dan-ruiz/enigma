const encriptarBtn = document.getElementById("boton-encriptar");
const desencriptarBtn = document.getElementById("boton-desencriptar");
const textoObtenido = document.querySelector(".texto-obtenido");
const alertaInicial = document.querySelector(".warning");
const copiarBtn = document.querySelector(".btn-copiar");

const encriptar = () => {
  //Capturar el texto a encriptar
  const textoElement = document.getElementById("text-input");
  const texto = textoElement.value;
  const caracteresInvalidos = /[A-ZÁÉÍÓÚÜÑ0-9!@#$%^&*()_+{}|:"<>?~]/;

  // Definir los reemplazos
  const reemplazos = {
    a: "ai",
    e: "enter",
    i: "imes",
    o: "ober",
    u: "ufat",
  };

  // Verificar si el texto contiene caracteres invalidos
  if (caracteresInvalidos.test(texto)) {
    textoElement.value =
      "Recuerda que NO son validas las letras mayúsculas, números, letras con acento y/o caracteres especiales.";
  } else {
    // Función para realizar los reemplazos
    const realizarReemplazo = (palabra) => {
      return palabra.replace(/[aeiou]/g, (match) => reemplazos[match]);
    };

    // Dividir el texto en palabras, mapear y reemplazar
    const textoEncriptado = texto.split(" ").map(realizarReemplazo).join(" ");

    textoObtenido.textContent = textoEncriptado;
    alertaInicial.innerHTML = "";
  }
};

const desencriptar = () => {
  //Capturar el texto a desencriptar\
  const textoElement = document.getElementById("text-input");
  const texto = textoElement.value;
  const caracteresInvalidos = /[A-ZÁÉÍÓÚÜÑ0-9!@#$%^&*()_+{}|:"<>?~]/;

  // Definir los reemplazos
  const reemplazos = {
    ai: "a",
    enter: "e",
    imes: "i",
    ober: "o",
    ufat: "u",
  };

  // Verificar si el texto contiene caracteres invalidos
  if (caracteresInvalidos.test(texto)) {
    textoElement.value =
      "Recuerda que NO son validas las letras mayúsculas, números, letras con acento y/o caracteres especiales.";
  } else {
    // Función para realizar los reemplazos
    const realizarReemplazo = (palabra) => {
      return palabra.replace(
        /(ai|enter|imes|ober|ufat)/g,
        (match) => reemplazos[match]
      );
    };

    // Dividir el texto en palabras, mapear y reemplazar
    const textoDesencriptado = texto
      .split(" ")
      .map(realizarReemplazo)
      .join(" ");

    textoObtenido.textContent = textoDesencriptado;
    alertaInicial.innerHTML = "";
  }
};

const copiar = () => {
  // Almacenar en Portapapeles
  navigator.clipboard.writeText(textoObtenido.textContent);
};

encriptarBtn.addEventListener("click", encriptar);
desencriptarBtn.addEventListener("click", desencriptar);
copiarBtn.addEventListener("click", copiar);
