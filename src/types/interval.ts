export type TMockType = 'algo' | 'sd' | 'sdFront' | 'sdMobile' | 'front';
export interface IIntervalData {
  mocksCount: number;
  dateFrom: string;
  dateTo: string;
  isPublic: string;
  mockTypes: TMockType[];
}
