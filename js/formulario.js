function guardar() {
  validar();
}

function validar() {
  let nombre = document.getElementById("id_nombre").value.trim();
  let apellido = document.getElementById("id_apellido").value.trim();
  let correo = document.getElementById("id_correo").value.trim();
  let contraseña = document.getElementById("id_contraseña").value.trim();

  let soloLetras = /^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/;
  let correoRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  let contraseñaSegura = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d@$!%*?&]{8,}$/;

  // Validación nombre
  if (nombre === "" || !soloLetras.test(nombre)) {
    console.log("Nombre inválido");
    return;
  }

  // Validación apellido
  if (apellido === "" || !soloLetras.test(apellido)) {
    console.log("Apellido inválido");
    return;
  }

  // Validación correo
  if (!correoRegex.test(correo)) {
    console.log("Correo inválido");
    return;
  }

  // Validación contraseña
  if (!contraseñaSegura.test(contraseña)) {
    console.log("Contraseña insegura (mínimo 8 caracteres, letras y números)");
    return;
  }

  console.log("Todos los datos son válidos ✅");
}
