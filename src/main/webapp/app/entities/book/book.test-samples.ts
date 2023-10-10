import dayjs from 'dayjs/esm';

import { IBook, NewBook } from './book.model';

export const sampleWithRequiredData: IBook = {
  id: 37098,
};

export const sampleWithPartialData: IBook = {
  id: 26912,
  publicationDate: dayjs('2023-10-09'),
  price: 528,
};

export const sampleWithFullData: IBook = {
  id: 75340,
  title: 'Rhode bandwidth Fresh',
  description: 'networks Steel bandwidth',
  publicationDate: dayjs('2023-10-10'),
  price: 65305,
};

export const sampleWithNewData: NewBook = {
  id: null,
};

Object.freeze(sampleWithNewData);
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
