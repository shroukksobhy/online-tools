import React, { useState } from 'react';
import { jsPDF } from 'jspdf';

const TxtToPDF = () => {
    const [fileContent, setFileContent] = useState('');

    const handleFileChange = (event) => {
        const file = event.target.files[0];
        if (file && file.type === 'text/plain') {
            const reader = new FileReader();
            reader.onload = (e) => {
                setFileContent(e.target.result);
            };
            reader.readAsText(file);
        } else {
            alert('Please upload a valid .txt file');
        }
    };

    const generatePDF = () => {
        const doc = new jsPDF();
        doc.text(fileContent, 10, 10);
        doc.save('document.pdf');
    };

    return (
        <div>
            <input type="file" accept=".txt" onChange={handleFileChange} />
            <br />
            <button onClick={generatePDF} disabled={!fileContent}>Generate PDF</button>
        </div>
    );
};

export default TxtToPDF;
