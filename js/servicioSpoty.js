
const URI='https://api.spotify.com/v1/albums/4SAV75H61yWLg3tiIwM2FX/tracks?market=us&limit=10&offset=5" -H "Accept: application/json'
 
const toke= " Bearer BQCQlIsbVLtq9CBiTnrYC-fNWWR6WYMNTjYpVVBbaP2VN3SNAIz0zns0VmYGGOzP-nFH5muzNxwAFLowt-SYQeozCnuThlTQ0s_tGQXltrKomAjILh38GHzYCRrfoF2fy64kqtmw2s-8dQD3cMzwjuFd7umdHLMzW5k"

//configurar la peticion 
const PETICION={
    method:"get",
    hearders:{autorization:toke}

}

//intento de consumir la api
fetch(URI,PETICION)
.then(function(respuesta){
    return(respuesta.json())
})
.then(function(){
    console.log(respuesta)
})
.catch(function(){})