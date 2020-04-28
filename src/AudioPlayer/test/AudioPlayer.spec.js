import React from 'react';
import { createRendererWithUniDriver, cleanup } from '../../../test/utils/unit';

import AudioPlayer from '../AudioPlayer';
import { audioPlayerPrivateDriverFactory } from './AudioPlayer.private.uni.driver';

describe(AudioPlayer.displayName, () => {
  const render = createRendererWithUniDriver(audioPlayerPrivateDriverFactory);

  afterEach(() => {
    cleanup();
  });

  it('should render', async () => {
    const { driver } = render(<AudioPlayer />);

    expect(await driver.exists()).toBe(true);
  });
});
