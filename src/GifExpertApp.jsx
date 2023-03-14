import { useState } from "react"
import { AddCategory, GiFGrid } from "./components";

export const GifExpertApp = () => {

  const [categories, setCategories] = useState(['One Punch']);

  const onAddCategory = ( newCategory ) => {

    if( categories.includes(newCategory) ) return;
    setCategories([ newCategory, ...categories ])
  }

  return (
    <>
        <h1>GifExpertApp</h1>

        <AddCategory 
          onNewCategory={ (value) => onAddCategory(value) }
        />

        { 
          categories.map(category => (
            <GiFGrid 
              key={category}
              category={category} 
            />  
          ))
        }
      
    </>
  )
}
