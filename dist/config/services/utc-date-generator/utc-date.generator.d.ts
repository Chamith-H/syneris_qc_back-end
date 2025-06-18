export declare class UtcDateGenerator {
    convert_singleDate(dateText: string): Promise<Date>;
    getTodayDate(): Promise<Date>;
    getMonthDateYear(date: Date): Promise<{
        year: number;
        month: number;
        day: number;
    }>;
}
