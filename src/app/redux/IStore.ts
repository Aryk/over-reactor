import { ICounter } from './modules/counter';
import { IStars } from './modules/stars';

export interface IStore {
  counter: ICounter;
  stars: IStars;
};
