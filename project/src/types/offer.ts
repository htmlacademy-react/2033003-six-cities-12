import { Host } from './host';
import { City } from './city';
import { Location } from './location';
import { AccommodationType } from '../const';

export type Offer = {
  bedrooms: number;
  city: City;
  description: string;
  goods: string[];
  host: Host;
  id: number;
  images: string[];
  isFavorite: boolean;
  isPremium: boolean;
  location: Location;
  maxAdults: number;
  previewImage: string;
  price: number;
  rating: number;
  title: string;
  type: AccommodationType;
};

export type Offers = Offer[];
