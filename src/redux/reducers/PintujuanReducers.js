const totalPintujuan= 0;

export const TotalPintujuan = (state =totalPintujuan, action)=>{
            if (action.type === "SET_PINTUJUAN") {
                return action.payload;
            }
            return state;
};