export interface BaseResponse<T> {
    results: T[];
    count: number;
    next: string;
    previous: string;
}
