// script.js
function calcularEdad() {
    var input = document.getElementById('birthdate');
    var birthdate = new Date(input.value);
    var now = new Date();
    var age = now.getFullYear() - birthdate.getFullYear();
  
    if (now.getMonth() < birthdate.getMonth() || (now.getMonth() === birthdate.getMonth() && now.getDate() < birthdate.getDate())) {
      age--;
    }
  
    document.getElementById('result').innerText = 'Tu edad es: ' + age + ' años.';
  
    var millisecondsPerDay = 24 * 60 * 60 * 1000;
    var totalDays = Math.round(Math.abs((now - birthdate) / millisecondsPerDay));
  
    document.getElementById('days').innerText = 'Has vivido un total de: ' + totalDays + ' días.';
  }
  