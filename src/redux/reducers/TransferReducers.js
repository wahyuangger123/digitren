const totalTransfer= 0;

export const TotalTransfer = (state =totalTransfer, action)=>{
            if (action.type === "SET_TRANSFER") {
                return action.payload;
            }
            return state;
};