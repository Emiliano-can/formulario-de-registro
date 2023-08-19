document.getElementById("registrationForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Evita el envío del formulario
  
    // Obtén los valores ingresados por el usuario
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
  
    // Aquí puedes realizar las validaciones necesarias antes de enviar los datos al servidor
  
    // Ejemplo: Si todos los campos están completos, muestra una alerta con los datos ingresados
    if (name && email && password) {
      alert("Nombre: " + name + "\nEmail: " + email + "\nContraseña: " + password);
    } else {
      alert("Por favor, completa todos los campos.");
    }
  });
  