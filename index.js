let datos; 

fetch('data.json')
.then( res => res.json())
.then((data) => {
    datos = data;
    /* datos.map((numbers) => {
        numbers.
    }) */ /* esto esta mal */
    let test = document.getElementById('test')
    test.textContent = 'lol me la he cagao'
    console.log(datos);
})