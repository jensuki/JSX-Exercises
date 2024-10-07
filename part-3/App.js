const App = () => {
    return (
        <div>
            <Person
                name="Sam"
                age={25}
                hobbies={['reading', 'tennis', 'movies']} />
            <Person
                name="Adam"
                age={17}
                hobbies={['gaming', 'coding', 'eating']} />
            <Person
                name="Anna"
                age={32}
                hobbies={['dancing', 'yoga', 'meditating']} />
        </div>
    )
}