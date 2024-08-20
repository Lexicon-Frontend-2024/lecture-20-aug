import { useState } from "react";

function Name() {
    const [name, setName] = useState<string>('Ted');
    return (
        <article className="name-container">
            <h2>Hello {name}</h2>
            <input
                onChange={(event) => { setName(event.target.value) }}
                type="text"
                placeholder="your name here"
                className="name-input"
            />
        </article>
    )
};

export default Name;