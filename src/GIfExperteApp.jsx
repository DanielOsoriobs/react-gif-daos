import { useState } from 'react';
import { AddCatedory, GifGrid } from './components';

export const GIfExperteApp = () => {

    const [categories, setCategories] = useState([ 'One Punch' ])
    
    const onAddCategory = ( newCategory) =>{
        
        if (categories.includes(newCategory))return;
        
        setCategories([newCategory,...categories ]);
    }


  return (
    
    <>

        <h1>GifExperteApp</h1>


        <AddCatedory 
            onNewCategory={ onAddCategory }

        />

        { 
            categories.map(( category )=> (
                    <GifGrid key={ category} category={category}/>
            )   
            )
        }   


        </>     
  )
}
