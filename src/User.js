import { useState } from "react";

function User(props) {
const [count, setCount] = useState(0);

return (
    <div>
    <h2>Name: {props.name}</h2> 
    <p>Age: {props.age}</p>

    <p>Count: {count}</p>
    <button onClick={() => setCount(count + 1)}>
    Increase
    </button>
    </div>
    );
}

export default User;