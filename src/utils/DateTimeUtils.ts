import moment, { Moment } from 'moment';
// import { addDays, subDays } from "date-fns";

export const DATE_FORMAT = 'DD-MM-YYYY';
export const DATE_FORMAT_SECOND_FORMAT = 'DD-MMM-YYYY';
export const TIME_FORMAT = 'HH:mm';
export const DATE_TIME_FORMAT = 'dd-MM-yyyy HH:mm';
export const DATE_TIME_SECOND_FORMAT = 'DD-MM-YYYY hh:mm:ss';
export const DATE_TIME_FORMAT_A = 'YYYY-MM-DD hh:mm A';
export const DATE_YEAR_FORMAT = 'YYYY';
export const TIME_FORMAT_A = 'HH:mm A';
export default class DateTimeUtils {

    public momentCurrentDateTimeObject = () => {
        return moment();
    }

    public startOfDay = () => {
        return moment().startOf('day');
    }

    public zeroPadding = (number: number) => {
        return `${number}`.padStart(2, '0')
    }

    // currentDate
    public currentDate = (dateFormat: string = DATE_FORMAT) => {
        return this.formatDate(new Date(), dateFormat);
    }

    // currentTime
    public currentTime = () => {
        return this.formatTime(new Date());
    }

    // currentDateTime
    public currentDateTime = (dateFormat: string = DATE_TIME_FORMAT) => {
        return this.formatDateTime(new Date(), dateFormat);
    }

    // currentTimestamp
    public currentTimestamp = () => {
        return this.formatTimestamp(new Date());
    }

    // formatDate
    public formatDate = (date: Moment | Date | string, dateFormat: string = DATE_FORMAT) => {
        if (date === null || date === undefined) { return '' }
        if (typeof date === 'object' && 'format' in date) {
            return date.format(dateFormat);
        }
        return moment(date).format(dateFormat);
    }

    // formatTime
    public formatTime = (time: Moment | Date | string, timeFormat: string = TIME_FORMAT) => {
        if (time === null || time === undefined) { return '' }
        if (typeof time === 'object' && 'format' in time) {
            return time.format(timeFormat);
        }
        return moment(time).format(timeFormat);
    }

    public formatTimeA = (time: Moment | Date | string, timeFormat: string = TIME_FORMAT_A) => {
        if (time === null || time === undefined) { return '' }
        if (typeof time === 'object' && 'format' in time) {
            return time.format(timeFormat);
        }
        return moment(time).format(timeFormat);
    }

    // formatDateTime
    public formatDateTime = (time: Moment | Date | string, dateTimeFormat: string = DATE_TIME_FORMAT) => {
        if (time === null || time === undefined) { return '' }
        if (typeof time === 'object' && 'format' in time) {
            return time.format(dateTimeFormat);
        }
        return moment(time).format(dateTimeFormat);
    }

    public formatDateTimeSecond = (time: Moment | Date | string, dateTimeFormat: string = DATE_TIME_SECOND_FORMAT) => {
        if (time === null || time === undefined) { return '' }
        if (typeof time === 'object' && 'format' in time) {
            return time.format(dateTimeFormat);
        }
        return moment(time).format(dateTimeFormat);
    }


    public formatDateTimeA = (time: Moment | Date | string, dateTimeFormat: string = DATE_TIME_FORMAT_A) => {
        if (time === null || time === undefined) { return '' }
        if (typeof time === 'object' && 'format' in time) {
            return time.format(dateTimeFormat);
        }
        return moment(time).format(dateTimeFormat);
    }

    public formatDateTimeB = (time: Moment | Date | string, dateTimeFormat: string = DATE_FORMAT_SECOND_FORMAT) => {
        if (time === null || time === undefined) { return '' }
        if (typeof time === 'object' && 'format' in time) {
            return time.format(dateTimeFormat);
        }
        return moment(time).format(dateTimeFormat);
    }
    // formatTimestamp
    public formatTimestamp = (date: Date | string) => {
        if (date === null || date === undefined) { return '' }
        if (date instanceof Date) {
            return date.valueOf();
        }
        else {
            const tempDate = new Date(date);
            return tempDate.valueOf();
        }
    }

    // Time Range
    public formatTimeRange = (start: Date | string, end: Date | string) => {
        return `${this.formatTime(start)} ~ ${this.formatTime(end)}`
    }

    public convertStringToDate = (date: Moment | Date | string | any) => {
        if (date === '' || date === undefined || date === null) {
            return null;
        }
        let stringToDate: any = moment(date);
        return stringToDate['_d'] == 'Invalid Date' ? null : stringToDate;
    }

    // compareDate
    public compareDate = (curTime: Date, destTime: Date) => {

    }

    public timeDuration = (d: Date | string): any => {
        const seconds = Math.floor(Math.abs(new Date().getTime() - new Date(d).getTime()) / 1000);
        const year = Math.floor(seconds / 31536000);
        const month = Math.floor(seconds / 2592000);
        const days = Math.floor(seconds / 86400);
        const hours = Math.floor(seconds / 3600);
        const minutes = Math.floor(seconds / 60);

        return {
            year: year,
            month: month,
            days: days,
            hours: hours,
            minutes: minutes,
            seconds: seconds,
        };
    }

    // timeAgo
    public timeAgo = (date: Date | string) => {
        if (date == null) { return '' }
        const { days, hours, minutes, seconds } = this.timeDuration(date);

        if (days > 3) {
            return this.formatDate(date);
        }

        if (days > 0 && days <= 3) {
            return `${days} days ago`;
        }

        if (days <= 0 && hours > 0) {
            return `${hours} hours ago`;
        }

        if (hours <= 0 && minutes > 0) {
            return `${minutes} minutes ago`;
        }

        if (seconds < 60 && seconds > 0) {
            return `${seconds} seconds ago`;
        }

        return '';
    }

    public daysAgo = (date: Date | string) => {
        if (date == null) { return '' }
        const { days, hours, minutes, seconds } = this.timeDuration(date);

        if (days > 0) {
            return `${days} days ago`;
        }

        if (days <= 0 && hours > 0) {
            return `${hours} hours ago`;
        }

        if (hours <= 0 && minutes > 0) {
            return `${minutes} mints ago`;
        }

        if (seconds < 60 && seconds > 0) {
            return `${seconds} seconds ago`;
        }

        return '';
    }

    public diffDays = (startDate: Date | string, endDate: Date | string) => {
        var now = moment(startDate);
        var end = moment(endDate);
        var duration = moment.duration(now.diff(end));
        var days = duration.asDays();
        return days
    }


    public getAgeYear = (birthDate: Date | string) => {
        var dob = new Date(birthDate);
        if (dob != undefined) {
            var todayDate = new Date();
            var ageyear = todayDate.getFullYear() - dob.getFullYear();

            return ageyear;
        }
    }
}
