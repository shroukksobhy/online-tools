import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function StringSplitter() {
    const [inputString, setInputString] = useState('');
    const [separator, setSeparator] = useState('');
    const [result, setResult] = useState([]);

    const handleSplit = () => {
        const parts = inputString.split(separator);
        setResult(parts);
    };

    return (
        <div className="container mt-5">
            <h1 className="text-center">String Splitter</h1>
            <div className="form-group">
                <label htmlFor="inputString">Enter a string:</label>
                <input
                    type="text"
                    className="form-control"
                    id="inputString"
                    value={inputString}
                    onChange={(e) => setInputString(e.target.value)}
                    placeholder="Type your string here"
                />
            </div>
            <div className="form-group">
                <label htmlFor="separator">Enter a separator:</label>
                <input
                    type="text"
                    className="form-control"
                    id="separator"
                    value={separator}
                    onChange={(e) => setSeparator(e.target.value)}
                    placeholder="Type your separator here"
                />
            </div>
            <button className="btn btn-primary" onClick={handleSplit}>
                Split String
            </button>
            <h3 className="mt-4">Result:</h3>
            <ul className="list-group">
                {result.map((part, index) => (
                    <li key={index} className="list-group-item">
                        {part}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default StringSplitter;
