export type CommunityCards = {
  flop1: string;
  flop2: string;
  flop3: string;
  turn: string;
  river: string;
};

export type CommunityStep =
  | ''
  | 'flop1'
  | 'flop2'
  | 'flop3'
  | 'turn'
  | 'river'
  | 'player';

export type HoleCard = string[];
