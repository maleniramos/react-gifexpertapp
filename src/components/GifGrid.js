import React from 'react'
import { useFetchGifs } from '../hooks/useFetchGifs'
import { GifGridItem } from '../components/GifGridItem';

export const GifGrid = ({ category }) => {

    const {data:images,loading}=useFetchGifs(category);
    
    return (
        <>
            <h3 className="card animate__animated animate__faceIn">{category}</h3>
            {loading ?? <p className="card animate__animated animate__flash">Cargando</p>}
            <div className="card-grid">


                {
                    images.map(img => (
                        <GifGridItem
                            key={img.id}
                            {...img}
                        />
                    )
                    )   

                    // images.map((img) =>
                    //     <li key={img.id}>{img.title}</li>
                    // )
                    //Desestructurando img
                    //     images.map(({id,title}) => 
                    //     <li key={id}>{title}</li>
                    // )
                }


            </div>
        </>

    )
}
