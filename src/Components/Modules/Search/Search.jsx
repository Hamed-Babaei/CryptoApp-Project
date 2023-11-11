import React from "react";

export default function Search({ currency, setCurrency }) {
  return (
    <div>
      <input type="text" />
      <select
        name=""
        id=""
        value={currency}
        onChange={(event) => setCurrency(event.target.value)}
      >
        <option value="usd">USD</option>
        <option value="eur">EUR</option>
        <option value="jpy">JPY</option>
      </select>
    </div>
  );
}
