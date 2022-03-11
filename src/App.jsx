import Student from "./Student.jsx";
import studentsData from "./studentsData.js";

function App() {
    const studentsMap = studentsData.map((student, i) => {
        return (
            <Student
                key={i}
                name={student.name}
                bio={student.bio}
                scores={student.scores}
            />
        );
    });
    return (
        <>
            <h1>Students</h1>
            {studentsMap}
        </>
    );
}

export default App;
