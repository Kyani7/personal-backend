export interface University {
  name: string;
  rank: string;
}

export interface CountryRankingProps {
  country: string;
  universities: University[];
  note: string;
}

export interface RankingProps {
  sectionTitle?: string;
  countries?: CountryRankingProps[];
  benefitsTitle?: string;
  benefits?: string[];
}