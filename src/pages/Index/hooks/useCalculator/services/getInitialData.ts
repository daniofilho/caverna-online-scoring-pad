interface IGetInitialDataReturn {
  players: IPlayer[];
}

export default (storePlayersData: any): IGetInitialDataReturn => {
  const data: IGetInitialDataReturn = {
    players: [],
  };

  try {
    const fromStorePlayers = storePlayersData
      ? JSON.parse(storePlayersData)
      : [];
    if (
      fromStorePlayers &&
      fromStorePlayers.length &&
      fromStorePlayers.length > 0
    ) {
      data.players = fromStorePlayers as IPlayer[];
    }

    return data;
  } catch (error) {
    console.log(error);
    return data;
  }
};
