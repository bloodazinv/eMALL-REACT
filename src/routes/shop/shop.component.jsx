import {Routes, Route} from 'react-router-dom'
import CategoriesPreview from "../categories-preview/categories-preview.component";
import Category from "../category/category.component";
import {useEffect} from "react";

import {useDispatch} from "react-redux";
import {getCategoriesAndDocuments} from "../../utils/firebase/firebase.utils";
import {setCategoriesMap} from "../../store/categories/category.action";


const Shop = () => {
    const dispatch = useDispatch();

    //initialize categories map
    useEffect(() => {
        const getCategoriesMap = async() => {
            const categoriesArray = await getCategoriesAndDocuments();
            dispatch(setCategoriesMap(categoriesArray));
        }
        getCategoriesMap();
    },[])

    return(
        <Routes>
            <Route index element={<CategoriesPreview />} />
            <Route path=":category" element={<Category />} />
        </Routes>
    );
}

export default Shop;