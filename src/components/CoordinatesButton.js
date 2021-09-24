import React from 'react';

export default class CoordinatesButton extends React.Component {
    render() {
        return <button onClick={this.handleClick}>Log mouse position</button>
    };

    handleClick = (e) => {
        const array = [e.clientX, e.clientY];
        this.props.onReceiveCoordinates(array);
    };
};
