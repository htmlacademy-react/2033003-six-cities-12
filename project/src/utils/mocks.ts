import { AccommodationType } from '../const';
import { Offer } from '../types/offer';

export const mockOffer: Offer = {
  city: {
    name: "Hamburg",
    location: {
      latitude: 53.550341,
      longitude: 10.000654,
      zoom: 13
    }
  },
  previewImage: "https://12.react.pages.academy/static/hotel/16.jpg",
  images: [
    "https://12.react.pages.academy/static/hotel/9.jpg",
    "https://12.react.pages.academy/static/hotel/10.jpg",
    "https://12.react.pages.academy/static/hotel/1.jpg",
    "https://12.react.pages.academy/static/hotel/7.jpg",
    "https://12.react.pages.academy/static/hotel/11.jpg",
    "https://12.react.pages.academy/static/hotel/6.jpg",
    "https://12.react.pages.academy/static/hotel/16.jpg"
  ],
  title: "Penthouse, 4-5 rooms + 5 balconies",
  isFavorite: false,
  isPremium: true,
  rating: 3.8,
  type: AccommodationType.Hotel,
  bedrooms: 2,
  maxAdults: 6,
  price: 334,
  goods: [
    "Washer",
    "Air conditioning",
    "Laptop friendly workspace",
    "Baby seat",
    "Towels",
    "Breakfast",
    "Fridge"
  ],
  host: {
    id: 25,
    name: "Angelina",
    isPro: true,
    avatarUrl: "img/avatar-angelina.jpg"
  },
  description: "This is a place for dreamers to reset, reflect, and create. Designed with a 'slow' pace in mind, our hope is that you enjoy every part of your stay; from making local coffee by drip in the morning, choosing the perfect record to put on as the sun sets.",
  location: {
    latitude: 53.528341000000005,
    longitude: 10.018654000000002,
    zoom: 16
  },
  id: 16
};