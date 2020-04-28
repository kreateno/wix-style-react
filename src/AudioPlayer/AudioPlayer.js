import React from 'react';
import PropTypes from 'prop-types';
import styles from './AudioPlayer.st.css';
import Tooltip from '../Tooltip';

/** AudioPlayer */
class AudioPlayer extends React.PureComponent {
  state = {
    position: 0,
    hoverPosition: 0,
    isSliderLocked: true,
  };

  componentDidMount() {
    window.addEventListener('mouseup', this._handleSliderMouseUp);
  }

  _renderButton = () => {
    // TODO - play button
  };

  _setSliderPositions = (x, width, clickX) => {
    const { isSliderLocked } = this.state;
    const positionInPixels = ((clickX - x) / width) * 100;
    const position = Math.min(Math.max(positionInPixels, 0), 100);

    const state = { hoverPosition: position };
    if (!isSliderLocked) {
      state.position = position;
    }

    this.setState(state);
  };

  _handleSliderMouseDown = event => {
    const clickX = event.clientX;
    const { x, width } = event.currentTarget.getBoundingClientRect();
    this.setState({ isSliderLocked: false }, () =>
      this._setSliderPositions(x, width, clickX),
    );
  };

  _handleSliderMouseMove = event => {
    const { x, width } = event.currentTarget.getBoundingClientRect();
    this._setSliderPositions(x, width, event.clientX);
  };

  _handleSliderMouseUp = () => {
    this.setState({ isSliderLocked: true });
  };

  _renderSlider = () => {
    const { position, hoverPosition } = this.state;

    return (
      <div
        className={styles.slider}
        style={{ '--audio-player-position': `${position}%` }}
        onMouseDown={this._handleSliderMouseDown}
        onMouseMove={this._handleSliderMouseMove}
      >
        <div className={styles.track} />
        <div className={styles.handle} style={{ left: `${position}%` }} />
        <div className={styles.tooltip} style={{ left: `${hoverPosition}%` }}>
          <Tooltip content={`${hoverPosition}%`}>
            <div className={styles.tooltipTarget} />
          </Tooltip>
        </div>
      </div>
    );
  };

  _renderTime = () => {
    // TODO - Time in HH:MM:SS
  };

  render() {
    const { dataHook } = this.props;

    return (
      <div {...styles('root', {}, this.props)} data-hook={dataHook}>
        {this._renderButton()}
        {this._renderSlider()}
        {this._renderTime()}
      </div>
    );
  }

  componentWillUnmount() {
    window.removeEventListener('mouseup', this._handleSliderMouseUp);
  }
}

AudioPlayer.displayName = 'AudioPlayer';

AudioPlayer.propTypes = {
  /** Applied as data-hook HTML attribute that can be used in the tests */
  dataHook: PropTypes.string,

  /** A css class to be applied to the component's root element */
  className: PropTypes.string,
};

AudioPlayer.defaultProps = {};

export default AudioPlayer;
