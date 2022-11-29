export interface Categories {
    data: Datum[];
}

export interface Datum {
    mal_id: number;
    name:   string;
    url:    string;
    count:  number;
}
