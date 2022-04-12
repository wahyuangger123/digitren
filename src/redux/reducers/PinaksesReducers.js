const totalPinakses= 0;

export const TotalPinakses = (state =totalPinakses, action)=>{
            if (action.type === "SET_PINAKSES") {
                return action.payload;
            }
            return state;
};