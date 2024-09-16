import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function PasswordGenerator() {
    const [length, setLength] = useState(12);
    const [includeUppercase, setIncludeUppercase] = useState(true);
    const [includeNumbers, setIncludeNumbers] = useState(true);
    const [includeSymbols, setIncludeSymbols] = useState(true);
    const [password, setPassword] = useState('');

    const generatePassword = () => {
        const lowerCaseChars = 'abcdefghijklmnopqrstuvwxyz';
        const upperCaseChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
        const numberChars = '0123456789';
        const symbolChars = '!@#$%^&*()_+[]{}|;:,.<>?';

        let allChars = lowerCaseChars;
        if (includeUppercase) allChars += upperCaseChars;
        if (includeNumbers) allChars += numberChars;
        if (includeSymbols) allChars += symbolChars;

        let generatedPassword = '';
        for (let i = 0; i < length; i++) {
            const randomIndex = Math.floor(Math.random() * allChars.length);
            generatedPassword += allChars[randomIndex];
        }

        setPassword(generatedPassword);
    };

    return (
        <div className="container mt-5">
            <h1 className="text-center">Complex Password Generator</h1>
            <div className="form-group">
                <label htmlFor="length">Password Length:</label>
                <input
                    type="number"
                    className="form-control"
                    id="length"
                    value={length}
                    onChange={(e) => setLength(e.target.value)}
                    min="6"
                    max="20"
                />
            </div>
            <div className="form-group form-check">
                <input
                    type="checkbox"
                    className="form-check-input"
                    id="includeUppercase"
                    checked={includeUppercase}
                    onChange={(e) => setIncludeUppercase(e.target.checked)}
                />
                <label className="form-check-label" htmlFor="includeUppercase">
                    Include Uppercase Letters
                </label>
            </div>
            <div className="form-group form-check">
                <input
                    type="checkbox"
                    className="form-check-input"
                    id="includeNumbers"
                    checked={includeNumbers}
                    onChange={(e) => setIncludeNumbers(e.target.checked)}
                />
                <label className="form-check-label" htmlFor="includeNumbers">
                    Include Numbers
                </label>
            </div>
            <div className="form-group form-check">
                <input
                    type="checkbox"
                    className="form-check-input"
                    id="includeSymbols"
                    checked={includeSymbols}
                    onChange={(e) => setIncludeSymbols(e.target.checked)}
                />
                <label className="form-check-label" htmlFor="includeSymbols">
                    Include Symbols
                </label>
            </div>
            <button className="btn btn-primary" onClick={generatePassword}>
                Generate Password
            </button>
            {password && (
                <div className="mt-4">
                    <h3>Generated Password:</h3>
                    <p className="bg-light p-3">{password}</p>
                </div>
            )}
        </div>
    );
}

export default PasswordGenerator;
