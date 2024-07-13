let urlBase = 'https://api.openweathermap.org/data/2.5/weather?'
let api_key = '78a2bb3a2b0122336c06bf3a7ca6701c'
let gradosKelvin = 273.15
let idiomaEsp = 'lang=sp'

document.getElementById('botonBusqueda').addEventListener('click', () =>{ 
    const ciudad = document.getElementById('ciudadEntrada').value
    if(ciudad){
        obtnerDatosClima(ciudad) //IF IMPORTANTE PARA NO ESTAR CONSULTANDO A LA API CON DATOS VACIOS
     }
})

function obtnerDatosClima(ciudad){
    fetch(`${urlBase}q=${ciudad}&appid=${api_key}&${idiomaEsp}`)  
     .then(respuesta => respuesta.json())
     .then(respuesta => mostrarDatos(respuesta))
}
 
function mostrarDatos(respuesta){
    console.log(respuesta)
   const divdatosClima = document.getElementById('datosClima')
   divdatosClima.innerHTML = ''

   const nombreCiudad = respuesta.name
   const pais = respuesta.sys.country
   const temperatura = respuesta.main.temp
   const humedad = respuesta.main.humidity
   const descripcion = respuesta.weather[0].description
   

   const ciudadTitulo = document.createElement('h2')
   ciudadTitulo.textContent = `${nombreCiudad}, ${pais}`
   
   const tempParrafo = document.createElement('p')
   tempParrafo.textContent = `La temperatura de hoy es de ${Math.ceil(temperatura-gradosKelvin)}°C`

   const humedadParrafo = document.createElement('p')
   humedadParrafo.textContent = `La humedad es del ${humedad}%`
   
   const desc = document.createElement('p')
   desc.textContent = `Hoy es un dia de ${descripcion}`

   divdatosClima.appendChild(ciudadTitulo)
   divdatosClima.appendChild(tempParrafo)
   divdatosClima.appendChild(humedadParrafo)
   divdatosClima.appendChild(desc)
}