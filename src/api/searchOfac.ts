import { formatDay, formatMonth } from "../components/Form/helper";
import { FormDataType } from "../types/Form";
import { ApiResponse } from "../types/Result";

export const searchOFAC = async (formData: FormDataType) => {
    try {
        const apiKey = "45ae30e3-e546-4568-b584-7b0b1de02d59";
        const apiUrl = "https://search.ofac-api.com/v3";

        if (!formData.birthMonth) throw new Error('Birth month is required');

        const formattedDateOfBirth = `${formData.birthYear}-${formatMonth(formData.birthMonth)}-${formatDay(formData.birthDay)}`;

        const requestBody = {
            apiKey,
            minScore: 95,
            source: ["SDN"],
            type: ["Individual"],
            cases: [
            {
                name: formData.name,
                dob: formattedDateOfBirth,
                address: {
                    country: formData.country
                },
            },
            ],
        };

        const response = await fetch(apiUrl, {
            method: 'POST',
            headers: {
            'Content-Type': 'application/json',
            },
            body: JSON.stringify(requestBody),
        });

        if (!response.ok) {
            throw new Error('Failed to fetch OFAC data. Please try again.');
        }

        const resultData: ApiResponse = await response.json();
        return resultData;
    } catch (error: any) {
        throw new Error(error.message || 'An error occurred during the search. Please try again.');
    }
};