const totalMasukanpin= 0;

export const TotalMasukanpin = (state =totalMasukanpin, action)=>{
            if (action.type === "SET_MASUKANPIN") {
                return action.payload;
            }
            return state;
};