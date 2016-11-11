import { ICounter } from '../data/counter';
import { IStars } from '../data/stars';

export interface IStore {
  counter: ICounter;
  stars: IStars;
};
