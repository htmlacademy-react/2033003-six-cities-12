import { AVATAR_URL } from './../const';
import { Offer} from './../types/offer';
import { AccommodationType } from '../const';

export const offers : Offer[] = [
  {
    id: 1,
    city: {
      name: 'Amsterdam',
      location:{
        latitude: 52.37022,
        longitude: 4.89517,
        zoom: 12
      }
    },
    previewImage: 'https://media.istockphoto.com/id/1293762741/ru/%D1%84%D0%BE%D1%82%D0%BE/%D1%81%D0%BE%D0%B2%D1%80%D0%B5%D0%BC%D0%B5%D0%BD%D0%BD%D1%8B%D0%B9-%D0%B8%D0%BD%D1%82%D0%B5%D1%80%D1%8C%D0%B5%D1%80-%D0%B3%D0%BE%D1%81%D1%82%D0%B8%D0%BD%D0%BE%D0%B9-3d-%D1%80%D0%B5%D0%BD%D0%B4%D0%B5%D1%80.jpg?s=1024x1024&w=is&k=20&c=jmpxYdxHq_zlauJ9mY5Hze7lcIK9cKenBDcnZdew3vg=',
    isPremium: false,
    price: 3030,
    title: 'Уютная студия в историческом здании, доступная в аренду на длительный срок',
    type: AccommodationType.Apartment,
    isFavorite: true,
    rating: 4.5,
    location: {
      latitude: 52.3909553943508,
      longitude: 4.85309666406198,
      zoom: 8
    },
    images: [
      'https://media.istockphoto.com/id/1293762741/ru/%D1%84%D0%BE%D1%82%D0%BE/%D1%81%D0%BE%D0%B2%D1%80%D0%B5%D0%BC%D0%B5%D0%BD%D0%BD%D1%8B%D0%B9-%D0%B8%D0%BD%D1%82%D0%B5%D1%80%D1%8C%D0%B5%D1%80-%D0%B3%D0%BE%D1%81%D1%82%D0%B8%D0%BD%D0%BE%D0%B9-3d-%D1%80%D0%B5%D0%BD%D0%B4%D0%B5%D1%80.jpg?s=1024x1024&w=is&k=20&c=jmpxYdxHq_zlauJ9mY5Hze7lcIK9cKenBDcnZdew3vg=',
      'https://images.unsplash.com/photo-1639113730940-64416c3b2a01?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDV8TThqVmJMYlRSd3N8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60',
      'https://plus.unsplash.com/premium_photo-1663013668671-d453f319544f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDZ8TThqVmJMYlRSd3N8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60',
      'https://images.unsplash.com/photo-1673261544592-ab37b264af40?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDEyfE04alZiTGJUUndzfHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
      'https://images.unsplash.com/photo-1678627034270-d8e32d6327eb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDE4fE04alZiTGJUUndzfHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
      'https://images.unsplash.com/photo-1678617837482-99c25bf89c64?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDIyfE04alZiTGJUUndzfHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60'
    ],
    description: 'Здание хоть и историческое но вы будете в восторге',
    bedrooms:3,
    maxAdults: 2,
    host:{
      id: 1,
      avatarUrl:`${AVATAR_URL}?rnd=${Math.random()}`,
      name: 'Petr',
      isPro: true,
    },
    goods:['Washing machine', 'Towels', 'Heating', 'Coffee machine', 'Kitchen', 'Dishwasher', 'Cabel TV', 'Fridge']
  },{
    id: 2,
    city: {
      name: 'Amsterdam',
      location:{
        latitude: 52.37022,
        longitude: 4.89517,
        zoom: 3
      }
    },
    previewImage: 'https://media.istockphoto.com/id/1188452511/ru/%D1%84%D0%BE%D1%82%D0%BE/%D1%81%D1%82%D0%B8%D0%BB%D1%8C%D0%BD%D0%B0%D1%8F-%D1%81%D0%BA%D0%B0%D0%BD%D0%B4%D0%B8%D0%BD%D0%B0%D0%B2%D1%81%D0%BA%D0%B0%D1%8F-%D0%B3%D0%BE%D1%81%D1%82%D0%B8%D0%BD%D0%B0%D1%8F-%D1%81-%D0%B4%D0%B8%D0%B7%D0%B0%D0%B9%D0%BD%D0%B5%D1%80%D1%81%D0%BA%D0%B8%D0%BC-%D0%B4%D0%B8%D0%B2%D0%B0%D0%BD%D0%BE%D0%BC-%D0%B8%D0%B7-%D0%BC%D1%8F%D1%82%D1%8B-%D0%BC%D0%B5%D0%B1%D0%B5%D0%BB%D1%8C%D1%8E-%D0%BC%D0%B0%D0%BA%D0%B5%D1%82%D0%BE%D0%BC-%D0%BF%D0%BB%D0%B0%D0%BA%D0%B0%D1%82%D0%BD%D0%BE%D0%B9-%D0%BA%D0%B0%D1%80%D1%82%D1%8B.jpg?s=1024x1024&w=is&k=20&c=PPOC34vKSrHZ7v-yIvn8CfeI5OlgrczyTqKX44RIs-U=',
    isPremium: false,
    price: 4090,
    title: 'Светлая и просторная квартира с отдельной кухней в тихом районе',
    type: AccommodationType.Room,
    isFavorite: true,
    rating: 4.8,
    location: {
      latitude: 52.3609553943508,
      longitude: 4.85309666406198,
      zoom: 8
    },
    images: [
      'https://media.istockphoto.com/id/1188452511/ru/%D1%84%D0%BE%D1%82%D0%BE/%D1%81%D1%82%D0%B8%D0%BB%D1%8C%D0%BD%D0%B0%D1%8F-%D1%81%D0%BA%D0%B0%D0%BD%D0%B4%D0%B8%D0%BD%D0%B0%D0%B2%D1%81%D0%BA%D0%B0%D1%8F-%D0%B3%D0%BE%D1%81%D1%82%D0%B8%D0%BD%D0%B0%D1%8F-%D1%81-%D0%B4%D0%B8%D0%B7%D0%B0%D0%B9%D0%BD%D0%B5%D1%80%D1%81%D0%BA%D0%B8%D0%BC-%D0%B4%D0%B8%D0%B2%D0%B0%D0%BD%D0%BE%D0%BC-%D0%B8%D0%B7-%D0%BC%D1%8F%D1%82%D1%8B-%D0%BC%D0%B5%D0%B1%D0%B5%D0%BB%D1%8C%D1%8E-%D0%BC%D0%B0%D0%BA%D0%B5%D1%82%D0%BE%D0%BC-%D0%BF%D0%BB%D0%B0%D0%BA%D0%B0%D1%82%D0%BD%D0%BE%D0%B9-%D0%BA%D0%B0%D1%80%D1%82%D1%8B.jpg?s=1024x1024&w=is&k=20&c=PPOC34vKSrHZ7v-yIvn8CfeI5OlgrczyTqKX44RIs-U=',
      'https://media.istockphoto.com/id/1357529193/photo/3d-rendering-of-a-cozy-living-room.jpg?b=1&s=170667a&w=0&k=20&c=gwhtLAqiPAzxxAAOcHm9trkq8VaTfioCirD4q1ezAaA=',
      'https://media.istockphoto.com/id/1407202319/photo/3d-render-of-apartment-interior-living-and-dining-room.jpg?b=1&s=170667a&w=0&k=20&c=euvmjTIMglK_KmB1pSR8HKnasNQXnTSKUP8R_-GQHLQ=',
      'https://media.istockphoto.com/id/1357529194/photo/3d-rendering-of-a-modern-styled-living-room-with-fireplace.jpg?s=612x612&w=0&k=20&c=bBBhHQnZLal9xoH9fGhAEg33CDVF0msBfB7l9cLTU_s=',
      'https://media.istockphoto.com/id/1357529933/photo/digitally-generated-image-of-a-fully-furnished-living-room.jpg?s=612x612&w=0&k=20&c=wv2lkL2oV9HcZKzXtvxDvRO2FKU9o209ULVWxI3RaOY=',
      'https://media.istockphoto.com/id/1344601965/photo/contemporary-classic-white-beige-interior-with-furniture-and-decor-3d-render-illustration.jpg?s=612x612&w=0&k=20&c=fGqSwvtSf-2JwBZyr1oYXi1kd-WLpbTgp4BQ9mODhsg='
    ],
    description: 'Квартира хоть и светлая но спальня красная',
    bedrooms:2,
    maxAdults: 2,
    host:{
      id: 1,
      avatarUrl:`${AVATAR_URL}?rnd=${Math.random()}`,
      name: 'Vasya',
      isPro: true,
    },
    goods:['Wi-Fi', 'Towels', 'Heating', 'Coffee machine', 'Baby seat', 'Kitchen', 'Dishwasher', 'Cabel TV', 'Fridge']
  },{
    id: 3,
    city: {
      name: 'Amsterdam',
      location:{
        latitude: 52.37022,
        longitude: 4.89517,
        zoom: 3
      }
    },
    previewImage: 'https://media.istockphoto.com/id/1271897890/ru/%D1%84%D0%BE%D1%82%D0%BE/%D0%B8%D0%BD%D1%82%D0%B5%D1%80%D1%8C%D0%B5%D1%80-%D0%B3%D0%BE%D1%81%D1%82%D0%B8%D0%BD%D0%BE%D0%B9-%D0%BD%D0%B0-%D1%87%D0%B5%D1%80%D0%B4%D0%B0%D0%BA%D0%B5-%D0%BF%D1%80%D0%BE%D0%BC%D1%8B%D1%88%D0%BB%D0%B5%D0%BD%D0%BD%D1%8B%D0%B9-%D1%81%D1%82%D0%B8%D0%BB%D1%8C.jpg?s=1024x1024&w=is&k=20&c=vY5wCS3F3XC7OlWdGNjoNSl6f0KMkt_jpUmT2NxMt7E=',
    isPremium: true,
    price: 3790,
    title: 'Старинная квартира с высокими потолками и камином в историческом районе',
    type: AccommodationType.Hotel,
    isFavorite: false,
    rating: 3.5,
    location: {
      latitude: 52.377956,
      longitude: 4.897071,
      zoom: 8
    },
    images: [
      'https://media.istockphoto.com/id/1271897890/ru/%D1%84%D0%BE%D1%82%D0%BE/%D0%B8%D0%BD%D1%82%D0%B5%D1%80%D1%8C%D0%B5%D1%80-%D0%B3%D0%BE%D1%81%D1%82%D0%B8%D0%BD%D0%BE%D0%B9-%D0%BD%D0%B0-%D1%87%D0%B5%D1%80%D0%B4%D0%B0%D0%BA%D0%B5-%D0%BF%D1%80%D0%BE%D0%BC%D1%8B%D1%88%D0%BB%D0%B5%D0%BD%D0%BD%D1%8B%D0%B9-%D1%81%D1%82%D0%B8%D0%BB%D1%8C.jpg?s=1024x1024&w=is&k=20&c=vY5wCS3F3XC7OlWdGNjoNSl6f0KMkt_jpUmT2NxMt7E=',
      'https://media.istockphoto.com/id/1390233984/photo/modern-luxury-bedroom.jpg?s=612x612&w=0&k=20&c=po91poqYoQTbHUpO1LD1HcxCFZVpRG-loAMWZT7YRe4=',
      'https://media.istockphoto.com/id/1386951983/photo/3d-rendering-of-simple-kitchen-design-with-green-wall.jpg?s=612x612&w=0&k=20&c=4m8SgVH1UZ0OYYFaA5EIlz6CYk7GZZ_sHKlDDH2Ku8A=',
      'https://media.istockphoto.com/id/1357529812/photo/digitally-generated-image-of-a-bedroom-interiors-with-minimal-furniture.jpg?s=612x612&w=0&k=20&c=QEQqZHCDDDxovPvKPhuefgPTqqsPLrLm8OgLIKD0m6k=',
      'https://media.istockphoto.com/id/1351070485/photo/creative-composition-of-stylish-living-room-interior-with-mock-up-poster-frame-orange-sofa.jpg?s=612x612&w=0&k=20&c=UwVqWUo95l8UNtMk1caDyed9OcwGATwlxj4pSZAsfS4=',
      'https://media.istockphoto.com/id/1386951920/photo/3d-rendering-of-cozy-sofa-in-living-room.jpg?s=612x612&w=0&k=20&c=fdHyWVIy8PycF-vzvEuiJId8pC0kqpSnKhTGpqoB1iE='
    ],
    description: 'Камин просто как декорация',
    bedrooms:4,
    maxAdults: 2,
    host:{
      id: 1,
      avatarUrl:`${AVATAR_URL}?rnd=${Math.random()}`,
      name: 'Gena',
      isPro: false,
    },
    goods:['Wi-Fi', 'Heating', 'Coffee machine', 'Kitchen', 'Dishwasher', 'Cabel TV', 'Fridge']
  },{
    id: 4,
    city: {
      name: 'Amsterdam',
      location:{
        latitude: 52.37022,
        longitude: 4.89517,
        zoom: 3
      }
    },
    previewImage: 'https://media.istockphoto.com/id/1274163113/ru/%D1%84%D0%BE%D1%82%D0%BE/%D0%B4%D0%BE%D0%BC%D0%B0%D1%88%D0%BD%D0%B8%D0%B9-%D0%B8%D0%BD%D1%82%D0%B5%D1%80%D1%8C%D0%B5%D1%80-%D0%BC%D0%B0%D0%BA%D0%B5%D1%82-%D1%81-%D1%82%D0%B5%D0%BC%D0%BD%D0%BE-%D0%B7%D0%B5%D0%BB%D0%B5%D0%BD%D1%8B%D0%BC-%D0%BA%D1%80%D0%B5%D1%81%D0%BB%D0%BE%D0%BC-%D1%81%D1%82%D0%BE%D0%BB-%D0%B8-%D0%B4%D0%B5%D0%BA%D0%BE%D1%80-%D0%B2-%D0%B3%D0%BE%D1%81%D1%82%D0%B8%D0%BD%D0%BE%D0%B9.jpg?s=1024x1024&w=is&k=20&c=GPZP0jL_mkwQ2RpiyXGLFn6cIEhpqqZCAnmb1-FTOQY=',
    isPremium: true,
    price: 3638,
    title: 'Стильная квартира с открытой планировкой и большими окнами в современном жилом комплексе',
    type: AccommodationType.House,
    isFavorite: false,
    rating: 4.9,
    location: {
      latitude: 52.3809553943508,
      longitude: 4.939309666406198,
      zoom: 8
    },
    images: [
      'https://media.istockphoto.com/id/1274163113/ru/%D1%84%D0%BE%D1%82%D0%BE/%D0%B4%D0%BE%D0%BC%D0%B0%D1%88%D0%BD%D0%B8%D0%B9-%D0%B8%D0%BD%D1%82%D0%B5%D1%80%D1%8C%D0%B5%D1%80-%D0%BC%D0%B0%D0%BA%D0%B5%D1%82-%D1%81-%D1%82%D0%B5%D0%BC%D0%BD%D0%BE-%D0%B7%D0%B5%D0%BB%D0%B5%D0%BD%D1%8B%D0%BC-%D0%BA%D1%80%D0%B5%D1%81%D0%BB%D0%BE%D0%BC-%D1%81%D1%82%D0%BE%D0%BB-%D0%B8-%D0%B4%D0%B5%D0%BA%D0%BE%D1%80-%D0%B2-%D0%B3%D0%BE%D1%81%D1%82%D0%B8%D0%BD%D0%BE%D0%B9.jpg?s=1024x1024&w=is&k=20&c=GPZP0jL_mkwQ2RpiyXGLFn6cIEhpqqZCAnmb1-FTOQY=',
      'https://media.istockphoto.com/id/1363817537/photo/luxury-modern-house-interior-with-corner-sofa-bookshelf-and-staircase.jpg?s=612x612&w=0&k=20&c=BY9EvrgL_VsQkTketnce0yv9lTEpvZkVw0Y9NkMoxN8=',
      'https://media.istockphoto.com/id/1407202319/photo/3d-render-of-apartment-interior-living-and-dining-room.jpg?b=1&s=170667a&w=0&k=20&c=euvmjTIMglK_KmB1pSR8HKnasNQXnTSKUP8R_-GQHLQ=',
      'https://media.istockphoto.com/id/1357529194/photo/3d-rendering-of-a-modern-styled-living-room-with-fireplace.jpg?s=612x612&w=0&k=20&c=bBBhHQnZLal9xoH9fGhAEg33CDVF0msBfB7l9cLTU_s=',
      'https://media.istockphoto.com/id/1357529933/photo/digitally-generated-image-of-a-fully-furnished-living-room.jpg?s=612x612&w=0&k=20&c=wv2lkL2oV9HcZKzXtvxDvRO2FKU9o209ULVWxI3RaOY=',
      'https://media.istockphoto.com/id/1344601965/photo/contemporary-classic-white-beige-interior-with-furniture-and-decor-3d-render-illustration.jpg?s=612x612&w=0&k=20&c=fGqSwvtSf-2JwBZyr1oYXi1kd-WLpbTgp4BQ9mODhsg='
    ],
    description: 'Окна большие но все заклеены(продувает)',
    bedrooms:1,
    maxAdults: 3,
    host:{
      id: 1,
      avatarUrl:`${AVATAR_URL}?rnd=${Math.random()}`,
      name: 'Ira',
      isPro: false,
    },
    goods:['Wi-Fi', 'Towels', 'Heating', 'Coffee machine', 'Baby seat', 'Kitchen', 'Cabel TV', 'Fridge']
  },
];
