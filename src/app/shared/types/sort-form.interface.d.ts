export type SortFieldType = 'asc' | 'desc' | null;

export interface SortFormInterface {
  views: SortFieldType;
  date: SortFieldType;
}
