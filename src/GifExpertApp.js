import { useState } from "react";
import { AddCategory } from "./components/AddCategory";
import { GifGrid } from "./components/GifGrid";


const GifExpertApp = () =>{
   
    const [categories, setcategories] = useState(['Naruto']);

    return(
        <>
            <h2>GifExpertApp</h2>
            <AddCategory setcategories = { setcategories }/>
            <hr/>

            <ol>
                { 
                    categories.map(category => 
                        <GifGrid 
                        category={ category }
                        key={ category }
                        />
                    )
                 }
            </ol>

        </>
    )
}

export default GifExpertApp;
