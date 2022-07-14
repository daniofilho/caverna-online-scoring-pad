import { ICalculatorReducerStateProps } from "../types";

export default (storePlayersData: any): ICalculatorReducerStateProps => {
  let data: ICalculatorReducerStateProps = [];

  try {
    if (
      storePlayersData &&
      storePlayersData.length &&
      storePlayersData.length > 0
    ) {
      data = storePlayersData as IPlayer[];
    }

    return data;
  } catch (error) {
    return data;
  }
};
