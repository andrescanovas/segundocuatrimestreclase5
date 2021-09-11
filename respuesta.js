let $fetch = document.querySelector("#morosos");

let informacion = document.createDocumentFragment();


    
    fetch('https://jsonplaceholder.typicode.com/users')
    
        .then ((datosdeltextoplano)=>{

            console.log(datosdeltextoplano)
            // La consulta que se le hizo a la api nos devuelve como "datos de texto plano" a este si=? la conexion fue ok la transforma en json sino=: la rechaza 
            return datosdeltextoplano.ok?datosdeltextoplano.json():Promise.reject(datosdeltextoplano);


        })



        .then (datosEnJson => {
                // console.log(datosEnJson)
                datosEnJson.forEach(element => {
                const $li=document.createElement("li");
                $li.innerHTML=`${element.name}----${element.email}----${element.phone}`                
                informacion.appendChild($li);

                // console.log(informacion)

            });

            $fetch.appendChild(informacion);


        })




