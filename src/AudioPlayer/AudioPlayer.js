import React from 'react';
import PropTypes from 'prop-types';
import styles from './AudioPlayer.st.css';

/** AudioPlayer */
class AudioPlayer extends React.PureComponent {
  state = {
    position: 0,
  };

  _renderSlider = () => {
    const { position } = this.state;

    return <div>{position}</div>;
  };

  render() {
    const { dataHook } = this.props;

    return (
      <div {...styles('root', {}, this.props)} data-hook={dataHook}>
        {this._renderSlider()}
      </div>
    );
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
