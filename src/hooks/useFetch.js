import {useState, useEffect} from 'react';
/**
 * Este es un hook custom que decidi llamar useFetch
 * este espera que se le mande una url para realizar una consulta
 * y realiza el cambio del state del componente al final retornara 3 valores
 */
const useFetch  = url => {
    /**
     * Aqui especificamos las variables del state de bajo
     * ademas de declarar la funcion que usara y en useState
     * definimos el valor por defecto de cada uno.
     */
     const [data, setData] = useState([]);
     const [loading, setLoadin] = useState(false)
     const [error, setError] = useState(null)
 
     /**
     * Este evento se ejecuta en cuanto el componente se renderea
     * por lo que es bueno que lo usemos en el momento de hacer el
     * consumo de un API
     * Internamoente usamos setData, setLoadin y setError estos 3 son los que
     * colocamos arriba y lo unico que se hace es pasar el valor que ahora debe tener
     */
     useEffect(() => {
         const fetchResource = async () => {
             try {
                 let res = await fetch(url)
                 let data = await res.json();
                 console.log(data)
                 // actualizamos el estado del componente
                 setData(data)
                 setLoadin(false)
             } catch (error) {
                 // si hay un error cambiamos los datos
                 setLoadin(false)
                 setError(error)
             }        
         }
         fetchResource()
     }, [url])// Especificamos que va recibir una varible
     // Retornamos los datos
     return {data, loading, error}
}

export default useFetch;