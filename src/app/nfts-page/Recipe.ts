export interface New {
  title: string;
  language: string;
  link: string;
  source_id: string;
  country: string[];
}

export interface Results {
  totalResults: number;
  results: New[];
  nextPage: number;
}
