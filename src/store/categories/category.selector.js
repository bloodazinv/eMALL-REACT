import {createSelector} from "reselect";

const selectCategoryReducer = (state) => state.categories;

//used for cache same input
export const selectCategoriesMemory = createSelector(
    [selectCategoryReducer],
    (categoriesSlice) => categoriesSlice.categories
);

export const selectCategories = createSelector(
    [selectCategoriesMemory],
    (categories) =>
        categories.reduce((acc, category) => {
            const {title, items} = category;
            acc[title.toLowerCase()] = items;
            return acc;
        },{})
);






