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