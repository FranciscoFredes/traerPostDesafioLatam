    Funcion para hacer la solicitud a la API 
    const getPosts = async () =>{
        try {
            // Definiendo url para utilizarla dentro de la funcion 
            const url = 'https://jsonplaceholder.typicode.com/posts';
            // Funcion para hacer la solicitud a la api
            const response = await fetch(url);    
            //convirtiendo la informacion recibida en un json 
            const data = await response.json(); 
            //obteniendo el elemneto del html para inyectar la data
            const postData = document.getElementById("post-data")
            
            // utilizando un ciclo for para iterar en data e inyectar el codigo en el html 
            data.forEach(element => {
                postData.innerHTML += `<div>
                    <li>
                    ${element.id} ${element.title}${element.body}<br>
                    </li>
                </div> `
            });    
        return data;
        // catch del error
    } catch(error) {
        console.error('Error al obtener los datos: ', error);
        throw error;
    }
}