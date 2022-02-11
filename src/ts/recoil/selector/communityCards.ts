import { selector } from 'recoil';
import {
  communityCardsState,
  playersCardsState
} from '@/ts/recoil/atom/communityCards';

export const selectedPoolCardsState = selector({
  key: 'selectedPoolCardsState',
  get: ({ get }) => {
    const communityCards = get(communityCardsState);
    const playersCards = get(playersCardsState);
    const selectedPoolCards: string[] =
      Object.values(communityCards).concat(playersCards);
    return selectedPoolCards;
  }
});
