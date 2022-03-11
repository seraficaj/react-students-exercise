function Score(props) {
    return (
        <div>
            <li>
                {props.score} on {props.date}
            </li>
        </div>
    );
}

export default Score;
