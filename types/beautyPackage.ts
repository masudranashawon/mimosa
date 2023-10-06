import { bookingType } from './bookingType';
import { specialistType } from './specialistType';

export type beautyPackageType = {
  _id: string;
  title: string;
  description: string;
  category: string;
  images: string[];
  price: number;
  specialists: specialistType[];
  bookings: bookingType[];
  createdAt: string;
  updatedAt: string;
  __v: number;
};
