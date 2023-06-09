export interface SimilarModel {
    id : number
    backdrop_path : string;
    original_title: string;
    overview: string;
    title: string;
}

export interface SimilarResponse{
    page? : number;
    results? : SimilarModel[];
    total_pages? : number;
    total_results? : number;
}