import { UserData } from './user-data';

export type ReviewData = {
  hotelId: string;
  id?: string;
  date?: string;
  comment: string;
  rating: number;
  user: UserData;
}
