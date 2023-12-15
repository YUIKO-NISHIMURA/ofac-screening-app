export type ApiResponse = {
    error: boolean;
    sourcesUsed: {
        source: string;
        publishDate: string;
    }[];
    matches: Record<string, Array<Match>>;
};


export type Match = {
    score: number;
    source: string;
    firstName: string;
    lastName: string;
    fullName: string;
    dob: string;
    addresses: Array<Address>;
};

export type Address = {
    uid: number;
    city?: string;
    stateOrProvince?: string;
    country: string;
    address1?: string;
};