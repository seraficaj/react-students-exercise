import React, { Component } from 'react';

class Score extends Component {
    render() { 
        return (
            <div>
                <li>{this.props.score} on {this.props.date}</li>
            </div>
        );
    }
}
 
export default Score;