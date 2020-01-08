import React from 'react';
import PropTypes from 'prop-types';

import pinShape from '../../../helpers/propz/pinShape';

import './Pin.scss';

class Pin extends React.Component {
  static propTypes = {
    pin: pinShape.pinShape,
    deletePin: PropTypes.func,
  }

  deletePinEvent = (e) => {
    e.preventDefault();
    const { deletePin, pin } = this.props;
    deletePin(pin.id);
  }

  render() {
    const { pin } = this.props;
    return (
      <div className="pin">
        <button className="btn btn-danger" onClick={this.deletePinEvent}>X</button>
        <h1 className="pin-title">{pin.title}</h1>
        <img className="pin-img" src={`${pin.imageUrl}`} alt="necessary alt"></img>
      </div>
    );
  }
}

export default Pin;
