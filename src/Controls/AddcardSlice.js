import { createSlice } from "@reduxjs/toolkit";
const initialState = {
    card: [],
}
const AddcardSlice = createSlice({
    name: "Addtocard",
    initialState: initialState,     
    reducers: {
        AddData: (state, action) => {
            var myitem = state.card.filter((key) => key.id === action.payload.id);
            if (myitem.length >= 1) {
                alert("This product Already Added!");
            }
            else {
                state.card.push(action.payload);
            }
        },
        increment: (state, action) => {
            for (var i = 0; i < state.card.length; ++i) {
                if (state.card[i].id === action.payload) {
                    state.card[i].Quantity++;
                }
            }
        },
        decrement: (state, action) => {
            for (var i = 0; i < state.card.length; ++i) {
                if (state.card[i].id === action.payload) {
                    if (state.card[i].Quantity > 1) {
                        state.card[i].Quantity--;
                    }
                    else {
                        alert("your product Quantity atleast 1")
                    }

                }

            }
        },
        delet: (state, action) => {
            state.card = state.card.filter(item => item.id !== action.payload)
        }
    }

});
export const { AddData, increment, decrement, delet } = AddcardSlice.actions;
export default AddcardSlice.reducer;