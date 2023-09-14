import GameSavingLoader from './GameSavingLoader';

(async () => {
  try {
    const promise = GameSavingLoader.load();
    const result = await promise;
    return result;
  } catch (e) {
    return e;
  }
})();
