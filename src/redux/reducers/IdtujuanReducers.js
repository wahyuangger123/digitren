const totalIdtujuan= 0;

export const TotalIdtujuan = (state =totalIdtujuan, action)=>{
            if (action.type === "SET_IDTUJUAN") {
                return action.payload;
            }
            return state;
};