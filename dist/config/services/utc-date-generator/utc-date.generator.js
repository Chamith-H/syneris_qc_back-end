"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UtcDateGenerator = void 0;
const moment = require("moment");
class UtcDateGenerator {
    async convert_singleDate(dateText) {
        const dateUtc = await moment.utc(dateText).toDate();
        return dateUtc;
    }
    async getTodayDate() {
        const dateToday = new Date();
        const dateString = dateToday.toISOString();
        const dateUtc = await this.convert_singleDate(dateString);
        return dateUtc;
    }
    async getMonthDateYear(date) {
        const formattedDate = await moment(date);
        return {
            year: formattedDate.year(),
            month: formattedDate.month() + 1,
            day: formattedDate.date(),
        };
    }
}
exports.UtcDateGenerator = UtcDateGenerator;
//# sourceMappingURL=utc-date.generator.js.map