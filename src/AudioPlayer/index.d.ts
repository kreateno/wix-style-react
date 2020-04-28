import * as React from 'react';

export interface AudioPlayerProps {
  dataHook?: string;
  className?: string;
}

export default class AudioPlayer extends React.PureComponent<
  AudioPlayerProps
> {}
