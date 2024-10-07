const App = () => {
    return (
        <div>
            <Tweet
                name="Hello Kitty"
                username="hello_kitty"
                date={new Date().toDateString()}
                message="Hi, I'm hello kitty." />
            <Tweet
                name="Jane Doe"
                username="jane_doe"
                date={new Date().toDateString()}
                message="Hi, I'm Jane." />
            <Tweet
                name="John Smith"
                username="john_smith"
                date={new Date().toDateString()}
                message="Hi, I'm John." />
        </div>
    )
}