const Person = ({ name, age, hobbies }) => {
    const shortenedName = name.length < 8 ? name.slice(0, 5) : name;
    const canVote = age >= 18 ? 'please go vote' : 'you must be 18';
    return (
        <div className="person">
            <p>Learn some information about this person</p>
            <p>Name: {shortenedName}</p>
            <h3>{canVote}</h3>
            <ul>
                {hobbies.map(hobby => <li key={hobby}>{hobby}</li>)}
            </ul>
        </div>
    )
}