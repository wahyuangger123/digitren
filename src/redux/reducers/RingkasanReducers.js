const totalRingkasan= 0;

export const TotalRingkasan = (state =totalRingkasan, action)=>{
            if (action.type === "SET_RINGKASAN") {
                return action.payload;
            }
            return state;
};