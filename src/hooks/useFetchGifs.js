import {useState, useEffect} from 'react'
import {getGift} from '../helpers/getGifs';

export const useFetchGifs = (category) => {
    const [state, setstate] = useState({
        data:[],
        loading:true
    });

    //Si le pasamos el arreglo vacio solo se dispara una vez
    //si la categoría cambia vuelve a ejecutar el efecto
    useEffect(() => {
        getGift(category).then
        (imgs=>{setstate({
            data: imgs,
            loading:false

        })
    });
    }, [category])

    return state;

}
