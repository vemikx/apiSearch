import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { CardItem } from '../../Interface/DataTypes';

interface CardsState {
  selectedCards: CardItem[];
  hasCards: boolean;
}

const initialState: CardsState = {
  selectedCards: [],
  hasCards: false,
};

const cardSlice = createSlice({
  name: 'card',
  initialState,
  reducers: {
    toggleCard: (state, action: PayloadAction<CardItem>) => {
      const index = state.selectedCards.findIndex(
        (card) => card.uuid === action.payload.uuid
      );
      if (index === -1) {
        state.selectedCards.push(action.payload);
      } else {
        state.selectedCards.splice(index, 1);
      }
      state.hasCards = state.selectedCards.length > 0;
    },
    clearStore: (state) => {
      state.selectedCards = [];
      state.hasCards = false;
    },
  },
});

export const { toggleCard, clearStore } = cardSlice.actions;
export default cardSlice.reducer;
