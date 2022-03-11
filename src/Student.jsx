import Score from "./Score";

function Student(props) {
    const scoresMap = props.scores.map((score) => {
        return <Score score={score.score} date={score.date} />;
    });
    return (
        <div>
            <h2>{props.name}</h2>
            <p>{props.bio}</p>
            <ul>{scoresMap}</ul>
        </div>
    );
}

export default Student;
