import React, { Component } from 'react';
import Score from "./Score";

class Student extends Component {
    render() { 
        const scoresMap  = this.props.scores.map(score => {
            return (<Score score={score.score} date={score.date} />)
        })
        return (
            <div>
                <h2>{this.props.name}</h2>
                <p>{this.props.bio}</p>
                <ul>
                    {scoresMap}
                </ul>
            </div>
        );
    }
}
 
export default Student;