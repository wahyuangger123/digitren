import { combineReducers } from "redux";

import { TotalPayment } from "./PaymentReducers";
import { TotalRingkasan } from "./RingkasanReducers";
import { TotalIdtujuan } from "./IdtujuanReducers";
import { TotalPinakses } from "./PinaksesReducers";
import { TotalTransfer } from "./TransferReducers";
import { TotalPintujuan } from "./PintujuanReducers";
import { TotalMasukanpin } from "./MasukanpinReducers";
import { TotalNominal } from "./NominalReducers";


const rootReducers = combineReducers({
    totalPayment: TotalPayment,
    totalRingkasan: TotalRingkasan,
    totalIdtujuan: TotalIdtujuan,
    totalPinakses: TotalPinakses,
    totalTransfer: TotalTransfer,
    totalPintujuan: TotalPintujuan,
    totalMasukanpin: TotalMasukanpin,
    totalNominal:TotalNominal,
});




export default rootReducers;