function handleClick(id) {
    console.log("Hello");
    console.log("I learn React with the id :", id);
}

function Container() {
    return (
        <div>
            <p>Hello world from Container</p>
            <button onClick={() => {handleClick(15)}}>Click Me</button>
        </div>
    );
}

export default Container;