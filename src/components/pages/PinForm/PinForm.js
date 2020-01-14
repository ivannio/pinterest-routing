import React from 'react';
import authData from '../../../helpers/data/authData';

import './PinForm.scss';
import pinData from '../../../helpers/data/pinData';

class PinForm extends React.Component {
state = {
  pinTitle: '',
  pinImageUrl: '',
}

pinTitleChange = (e) => {
  e.preventDefault();
  this.setState({ pinTitle: e.target.value });
}

pinImageUrlChange = (e) => {
  e.preventDefault();
  this.setState({ pinImageUrl: e.target.value });
}

savePinEvent = (e) => {
  e.preventDefault();
  const { boardId } = this.props.match.params;
  const newPin = {
    title: this.state.pinTitle,
    imageUrl: this.state.pinImageUrl,
    uid: authData.getUid(),
    boardId,
  };
  pinData.savePin(newPin)
    .then(() => this.props.history.push(`/board/${boardId}`))
    .catch((error) => console.error('error posting new pin', error));
}

render() {
  const { pinTitle, pinImageUrl } = this.state;
  return (
      <form className="PinForm">
        <div className="form-group">
          <label htmlFor="pin-title">Pin Title</label>
          <input
            type="text"
            className="form-control"
            id="pin-title"
            placeholder="Enter Pin Title"
            value={pinTitle}
            onChange={this.pinTitleChange}
          />
          <label htmlFor="pin-imageUrl">Pin Image URL</label>
          <input
            type="text"
            className="form-control"
            id="pin-imageUrl"
            placeholder="http://cool-ass-pics.com/pics/cool/ass/cool-ass-pic.jpg"
            value={pinImageUrl}
            onChange={this.pinImageUrlChange}
          />
        </div>
        <button className="btn btn-primary" onClick={this.savePinEvent}>Save Pin</button>
      </form>
  );
}
}

export default PinForm;
