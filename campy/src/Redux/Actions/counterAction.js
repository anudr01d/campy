import ActionType from '../Constants';

export const increaseCount = () => ({
  type: ActionType.INCREASE_COUNT,
});

export const decreaseCount = () => ({
  type: ActionType.DECREASE_COUNT,
});

export const resetCount = () => ({
  type: ActionType.RESET_COUNT,
});
