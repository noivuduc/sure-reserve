// import { minLength } from 'class-validator'
export class ReservationDto {
    parkingLotId: string;
    timeSpan: string[]
    readonly carParkId: string;
    readonly start_time: string;
    end_time: string;
}