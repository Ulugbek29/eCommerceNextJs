const { createSlice } = require("@reduxjs/toolkit");



const favouriteSlice = createSlice({
    name: "favourite",
    initialState: {
        favourites: [],
    },
    reducers: {
        addToFavourite(state, { payload }) {
            const avoidDuplicating = state.favourites.some((fav)=> fav.id === payload.id)
            console.log(avoidDuplicating);
            console.log(payload);
            if(avoidDuplicating) {
                state.favourites = state.favourites.filter((favourite)=> favourite.id !== payload.id)
            }else {
                state.favourites = [...state.favourites, payload]
            }
        },
        removeAllFromFavourites(state, { payload }) {
            state.favourites = []
        }
    }
})


export default favouriteSlice.reducer;

export const {addToFavourite, removeFromFavourites, removeAllFromFavourites} = favouriteSlice.actions;