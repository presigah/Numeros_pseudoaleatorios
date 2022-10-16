function middle_square(){
    var cant_numbers = parseInt(document.getElementById('cant_numbers_ms').value);
    var seed = (document.getElementById('seed').value);
    
    var K = parseInt(seed.length)
    var X0 = parseInt(seed)
    var M =  String(Math.pow(10, K))
    var list = []
    var output = []
    var iteration = 0
		var life_cycle = 0

    if (middel_square_validations(cant_numbers,X0)) return

    for(i=0; i<cant_numbers; i++)
    {
      random = ms_generate_random(String(X0), K)
      if (isNaN(random)){
        alert('No se pueden generar más números aleatorios respecto a las semillas ingresadas')
        break
      }
      else{
        if (list.includes(random) && life_cycle == 0) life_cycle = iteration
        list.push(random)
        output.push((random/M))
        var table = document.getElementById("myTable");
        var row = table.insertRow(-1);
        var cell1 = row.insertCell(0);
        var cell2 = row.insertCell(1);
        var cell3 = row.insertCell(2);
        var cell4 = row.insertCell(3);
        cell1.innerHTML = "R"+i;
        cell2.innerHTML = Math.pow(X0,2);
        cell3.innerHTML = random;
        cell4.innerHTML = (random/M);
        X0 = random
        iteration++
      }
    }
		document.getElementById("response").innerHTML = output
    document.getElementById("cant_iterations").innerHTML = iteration
    document.getElementById("life_cycle").innerHTML = life_cycle
}

function middel_square_validations(cant_numbers, X0){
  if ( isNaN(cant_numbers) ){
    alert('Debes de ingresar el número de iteraciones')
    return true
  }
  if (isNaN(X0)){
    alert('Debes de ingresar el valor de la semilla')
    return true
  }
  if (X0 <= 0){
    alert('La semilla debe ser un valor positivo mayor a 0')
    return true
  }
  return false
}

function ms_generate_random(X0, K){
  var Xn = String(Math.pow(X0,2))
  var start = (Xn.length - X0.length)/2
  var end = start + K
  middle = parseInt(Xn.substring(start,end))
  return middle
}

function middle_square_clean(){
  var cant_numbers = document.getElementById('cant_numbers_ms')
  cant_numbers.value = '';
  var seed = document.getElementById('seed')
  seed.value = '';
}


function middle_product(){

  var cant_numbers = parseInt(document.getElementById('cant_numbers_cp').value)
  var seed_1 = document.getElementById('seed_1').value
  var seed_2 = document.getElementById('seed_2').value

  var K = parseInt(seed_1.length)
  var X0 = parseInt(seed_1)
  var X1 = parseInt(seed_2)
  var M =  String(Math.pow(10, K))
  var list = []
  var output = []
  var iteration = 0
  var life_cycle = 0

  if (middle_product_validations(cant_numbers, X0, X1, seed_1, seed_2)) return

  for (i=0; i< cant_numbers; i++)
  {
    random = mp_generate_random(String(X0), X1, K)
    if (isNaN(random)){
      alert('No se pueden generar más números aleatorios respecto a las semillas ingresadas')
      break
    }
    else{
      if (list.includes(random) && life_cycle == 0) life_cycle = iteration
      list.push(random)
      output.push((random/M))
      var table = document.getElementById("myTable");
      var row = table.insertRow(-1);
      var cell1 = row.insertCell(0);
      var cell2 = row.insertCell(1);
      var cell3 = row.insertCell(2);
      var cell4 = row.insertCell(3);
      var cell5 = row.insertCell(4);
      cell1.innerHTML = "R"+i;
      cell2.innerHTML = X0 +" * "+ X1;
      cell3.innerHTML = (X0 * X1);
      cell4.innerHTML = random;
      cell5.innerHTML = (random/M);
      X0 = X1
      X1 = random
      iteration++
    }
  }
  document.getElementById("response").innerHTML = output
  document.getElementById("cant_iterations").innerHTML = iteration
  document.getElementById("life_cycle").innerHTML = life_cycle
}

function middle_product_validations(cant_numbers, X0, X1, seed_1, seed_2){
  if ( isNaN(cant_numbers) ){
    alert('Debes de ingresar el número de iteraciones')
    return true
  }
  if (isNaN(X0)){
    alert('Debes de ingresar el valor de la semilla uno')
    return true
  }
  if (isNaN(X1)){
    alert('Debes de ingresar el valor de la semilla dos')
    return true
  }
  if (X0 <= 0 || X1 <= 0){
    alert('Las semillas debe ser un valor positivo mayor a 0')
    return true
  }
  if (seed_1.length > seed_2.length || seed_1.length < seed_2.length){
    alert('Las dos semillas deben de tener la misma longitud')
    return true
  }
  return false
}

function mp_generate_random(X0, X1, K){
  var Xn = String(X0 * X1)
  var start = (Xn.length - X0.length)/2
  var end = start + K
  middle = parseInt(Xn.substring(start,end))
  return middle
}


function middle_product_clean(){
  var cant_numbers = document.getElementById('cant_numbers_cp')
  cant_numbers.value = '';
  var seed_1 = document.getElementById('seed_1')
  seed_1.value = '';
  var seed_2 = document.getElementById('seed_2')
  seed_2.value = '';
}