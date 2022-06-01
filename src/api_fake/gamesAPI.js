import games from "./data";

export const getGames = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(games);
    }, 3000);
  });
};

export const getGame = (id) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const game = games.find((myGame) => myGame.id === id);
      resolve(game);
    }, 3000);
  });
};
