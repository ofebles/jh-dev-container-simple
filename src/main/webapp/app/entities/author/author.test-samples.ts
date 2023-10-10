import dayjs from 'dayjs/esm';

import { IAuthor, NewAuthor } from './author.model';

export const sampleWithRequiredData: IAuthor = {
  id: 82416,
};

export const sampleWithPartialData: IAuthor = {
  id: 61290,
  name: 'Home networks world-class',
  birthDate: dayjs('2023-10-09'),
};

export const sampleWithFullData: IAuthor = {
  id: 97332,
  name: 'software District Forward',
  birthDate: dayjs('2023-10-09'),
};

export const sampleWithNewData: NewAuthor = {
  id: null,
};

Object.freeze(sampleWithNewData);
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
