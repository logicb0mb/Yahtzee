import React, { Component } from 'react';
import './Die.css';

class Die extends Component {
    render() {
        return (
            <button
                className={'Die'}
                style={{
                    backgroundColor: this.props.locked ? 'grey' : 'black'
                }}
                onClick={() => this.props.handleClick(this.props.idx)} //here in the onClick we are using arrow fucntion to pass an argument this will affect performance slightly but not in a noticable way, instead we can do the traditional one of making our own method binding it in constructor and then calling the prop from this method
            >
                {this.props.val}
            </button>
        );
    }
}

export default Die;
