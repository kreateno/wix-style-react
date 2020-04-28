import { audioPlayerDriverFactory as publicDriverFactory } from '../AudioPlayer.uni.driver';

export const audioPlayerPrivateDriverFactory = (base, body) => {
  return {
    ...publicDriverFactory(base, body),
  };
};
