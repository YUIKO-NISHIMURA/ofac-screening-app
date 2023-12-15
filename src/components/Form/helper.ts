import { MonthType } from "../../types/Form";

export const getMonths = () => {
    const months = [
        'January', 'February', 'March', 'April', 'May', 'June',
        'July', 'August', 'September', 'October', 'November', 'December'
    ];

    return months
};

export const getDays = () => {
    const days = Array.from({ length: 31 }, (_, index) => index + 1);

    return days;
};

export const getYears = () => {
    const currentYear = new Date().getFullYear();
    const years = Array.from({ length: 100 }, (_, index) => currentYear - index);
    
    return years;
};

export const formatMonth = (rawMonth: MonthType) => {
    const monthMap = {
        January: '01',
        February: '02',
        March: '03',
        April: '04',
        May: '05',
        June: '06',
        July: '07',
        August: '08',
        September: '09',
        October: '10',
        November: '11',
        December: '12',
    };

    return monthMap[rawMonth];
};

export const formatDay = (rawDay:string) => {
    // Add leading zero if day is less than 10
    const dayNumber = parseInt(rawDay, 10);
    return dayNumber < 10 ? `0${dayNumber}` : dayNumber.toString();
};