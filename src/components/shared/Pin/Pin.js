import React from 'react';

import pinShape from '../../../helpers/propz/pinShape';

import './Pin.scss';

class Pin extends React.Component {
  static propTypes = {
    pin: pinShape.pinShape,
  }

  render() {
    const { pin } = this.props;
    return (
      <div className="pin">
        <h1 className="pin-title">{pin.title}</h1>
        <img className="pin-img" src={`${pin.imageUrl}`} alt="necessary alt"></img>
      </div>
    );
  }
}

export default Pin;
