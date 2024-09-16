import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function JsonPrettifier() {
    const [inputJson, setInputJson] = useState('');
    const [prettyJson, setPrettyJson] = useState('');

    const handlePrettify = () => {
        try {
            const json = JSON.parse(inputJson);
            const pretty = JSON.stringify(json, null, 2);
            setPrettyJson(pretty);
        } catch (error) {
            setPrettyJson('Invalid JSON');
        }
    };

    return (
        <div className="container mt-5">
            <h1 className="text-center">JSON Prettifier</h1>
            <div className="form-group">
                <label htmlFor="inputJson">Enter JSON:</label>
                <textarea
                    className="form-control"
                    id="inputJson"
                    rows="10"
                    value={inputJson}
                    onChange={(e) => setInputJson(e.target.value)}
                    placeholder="Paste your JSON here"
                ></textarea>
            </div>
            <button className="btn btn-primary mt-2" onClick={handlePrettify}>
                Prettify JSON
            </button>
            <h3 className="mt-4">Pretty JSON:</h3>
            <pre className="bg-light p-3">{prettyJson}</pre>
        </div>
    );
}

export default JsonPrettifier;
