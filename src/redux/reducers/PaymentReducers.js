const totalPayment= 0;

export const TotalPayment = (state =totalPayment, action)=>{
            if (action.type === "SET_PAYMENT") {
                return action.payload;
            }
            return state;
};