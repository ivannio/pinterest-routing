import React from 'react';
import './SingleBoard.scss';

import boardData from '../../../helpers/data/boardData';
import pinData from '../../../helpers/data/pinData';

import Pin from '../../shared/Pin/Pin';

class SingleBoard extends React.Component {
  state = {
    board: [],
    pins: [],
  }

  getPinData = (boardId) => {
    pinData.getPinsByBoardId(boardId)
      .then((pins) => this.setState({ pins }))
      .catch((error) => console.error('error getting pins', error));
  }

  componentDidMount() {
    const { boardId } = this.props.match.params;
    boardData.getSingleBoard(boardId)
      .then((response) => {
        this.setState({ board: response.data });
        this.getPinData(boardId);
      });
  }

  render() {
    const { pins } = this.state;
    const { board } = this.state;
    return (
      <>
      <h1>{board.name}</h1>
    <p className="board-name">{board.description}</p>
      <div className="SingleBoard">
        {pins.map((pin) => <Pin key={pin.id} pin={pin} />)}
      </div>
      </>
    );
  }
}

export default SingleBoard;
