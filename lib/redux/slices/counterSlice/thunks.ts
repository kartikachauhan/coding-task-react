/* Instruments */
import type { ReduxThunkAction } from "@/lib/redux";
import { incrementByAmount } from "./counterSlice";

export const incrementIfOddAsync =
  (amount: number): ReduxThunkAction =>
  (dispatch, getState) => {
    // update only if currentValue is odd
    const currentValue = getState().counter.value;

    if (currentValue % 2 !== 0) {
      dispatch(incrementByAmount(amount));
    }
  };
