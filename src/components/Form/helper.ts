import { MonthType } from "../../types/Form";

export const MONTHS = Array.from({ length: 12 }, (_, index) => {
    const date = new Date(2000, index, 1);
    return date.toLocaleString('en-US', { month: 'long' });
});

export const DAYS = Array.from({ length: 31 }, (_, index) => index + 1);

export const YEARS = Array.from({ length: 100 }, (_, index) => new Date().getFullYear() - index);

export const formatMonth = (rawMonth: MonthType) => {
    // Formats the raw month string to a two-digit month representation.
    const monthIndex = MONTHS.indexOf(rawMonth);
    const monthDate = new Date(2000, monthIndex, 1);
    return (monthDate.getMonth() + 1).toString().padStart(2, '0');
};

export const formatDay = (rawDay:string) => {
    // Add leading zero if day is less than 10
    const dayNumber = parseInt(rawDay, 10);
    return dayNumber < 10 ? `0${dayNumber}` : dayNumber.toString().padStart(2, '0');
};