const totalNominal= 0;

export const TotalNominal = (state =totalNominal, action)=>{
            if (action.type === "SET_NOMINAL") {
                return action.payload;
            }
            return state;
};