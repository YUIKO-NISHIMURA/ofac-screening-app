export type FormDataType = {
    name: string;
    birthMonth: MonthType | '';
    birthDay: string;
    birthYear: string;
    country: string;
}

export type FormErrorType = {
    name: boolean;
    birthDate: boolean;
    country: boolean;
}

export type MonthType = 'January' | 'February' | 'March' | 'April' | 'May' | 'June' |
'July' | 'August' | 'September' | 'October' | 'November' | 'December';