export type Review = {
  comment: string;
  date: string | undefined;
  id: number | undefined;
  rating: number;
  user: {
    avatarUrl: string;
    id: number | null;
    isPro: boolean;
    name: string | undefined;
  };
};
