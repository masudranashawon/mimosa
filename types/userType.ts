import { bookingType } from './bookingType';

export type userType = {
  _id: string;
  name: string;
  email: string;
  password: string;
  photoUrl: string;
  address?: string;
  phoneNumber?: string;
  role: 'user' | 'admin';
  bookings: bookingType[];
  createdAt: string;
  updatedAt: string;
  __v: number;
};
