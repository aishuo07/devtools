import React, { useState } from 'react';
import prettier from 'prettier/standalone';
import parserBabel from 'prettier/parser-babel';

function JsonFormatter() {
  const [jsonInput, setJsonInput] = useState('');
  const [formattedJson, setFormattedJson] = useState('');
  const [error, setError] = useState('');

  const handleFormatJson = () => {
    try {
      const parsedJson = JSON.parse(jsonInput); // Validate JSON
      const prettyJson = prettier.format(JSON.stringify(parsedJson), {
        parser: 'json',
        plugins: [parserBabel],
      });
      setFormattedJson(prettyJson);
      setError('');
    } catch (e) {
      setError('Invalid JSON');
      setFormattedJson('');
    }
  };

  return (
    <div>
      <h1>JSON Formatter</h1>
      <textarea
        placeholder="Enter JSON here"
        value={jsonInput}
        onChange={(e) => setJsonInput(e.target.value)}
      />
      <button onClick={handleFormatJson}>Format JSON</button>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      {formattedJson && (
        <>
          <h3>Formatted JSON:</h3>
          <pre>{formattedJson}</pre>
        </>
      )}
    </div>
  );
}

export default JsonFormatter;
