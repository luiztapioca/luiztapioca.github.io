export interface Experience {
  id: string;
  collection: string;
  data: {
    company: string;
    position: string;
    startDate: Date;
    endDate?: Date;
    description?: string;
  };
  body?: string;
  rendered?: {
    html?: string;
  };
}