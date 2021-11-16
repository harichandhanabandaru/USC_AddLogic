import React,{useState} from 'react'
import { useQuery } from "react-query";
import Exploreicon from '../atoms/Icons/Exploreicon'
import Grid from "@material-ui/core/Grid";

function ExploreGridItems() {

    const[categories,setCategories]=useQuery() ; 

    // get all types of category from given data 


    return (
        <div>
            <Grid>
                {categories.map(category =>
                 <Exploreicon icon={category.icon} category={category.categoryname}/>
                )}
            </Grid>
        </div>
    )
}

export default ExploreGridItems
