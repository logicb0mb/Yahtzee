import React, { Component } from 'react';
import './Die.css';

class Die extends Component {
    static defaultProps = {
        numberWords: ['one', 'two', 'three', 'four', 'five', 'six']
    };
    render() {
        const { numberWords, locked, val, idx, disabled } = this.props;

        let classes = `Die fas fa-dice-${numberWords[val - 1]} fa-5x`;
        if (locked) classes += ' Die-locked';
        return (
            <i
                className={classes}
                onClick={() => this.props.handleClick(idx)} //here in the onClick we are using arrow fucntion to pass an argument this will affect performance slightly but not in a noticable way, instead we can do the traditional one of making our own method binding it in constructor and then calling the prop from this method
                disabled={disabled}
            />
        );
    }
}

export default Die;
