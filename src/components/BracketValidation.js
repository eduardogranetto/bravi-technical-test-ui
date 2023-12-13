import React, { useState } from "react";
import AppConfig from "../AppConfig";
const BracketValidation = () => {
  const [expression, setExpression] = useState("");
  const [data, setData] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = await loadData(expression);

    setData(data);
  };

  const loadData = async (expression) => {
    const requestOptions = {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ expression: expression }),
    };

    try {
      const config = AppConfig.openWheather;
      const apiUrl = `${AppConfig.bracket.baseUrl}/v1/brackets/validate`;
      const response = await fetch(apiUrl, requestOptions);
      return response.json();        
    } catch (error) {
      throw new Error(`Api not available`)
    }
  };

  return (
    <div className="container mt-5">
      <h1>Balanced Bracket</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="expressionInput" className="form-label">
            Enter Expression:
          </label>
          <input
            type="text"
            className="form-control"
            id="expressionInput"
            value={expression}
            onChange={(e) => setExpression(e.target.value)}
            placeholder="(){}[]"
            required
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Validate
        </button>
      </form>
      {data && (
        <div className="mt-4">
          {data.balanced && <h2>Bracket is balanced</h2>}
          {!data.balanced && <h2>Bracket is not balanced</h2>}
        </div>
      )}
    </div>
  );
};

export default BracketValidation;
