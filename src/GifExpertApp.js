import React, { useState } from 'react'
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

export const GifExpertApp = () => {

    const [categories, setCategories] = useState(['One Punch'])
    
    // const handleAdd = () => {
    //     // setCategories([...categories, 'HunterXHunter']);
    //     setCategories( cats => [...cats, 'HunterXHunter'] );
    // }

    return (
        <div>
            <h2>Gif Expert App</h2>
            <p>Ingrese el gif a buscar y pulse enter para buscar los gif</p>
            <AddCategory setCategories={ setCategories } />
            <hr />

            <ul>
                { 
                    categories.map( category => (
                        <GifGrid 
                            key={category}
                            category={category}
                        />
                    ))
                }
            </ul>

        </div>
    );
    
}
