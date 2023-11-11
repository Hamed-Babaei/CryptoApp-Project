import React from "react";
import chartUp from "../../assets/chart-up.svg";
import chartDown from "../../assets/chart-down.svg";

export default function TableRow({ coin }) {
  return (
    <tr key={coin.id}>
      <td>
        <div className="symbols">
          <img src={coin.image} alt="Coin img" />
          <span>{coin.symbol.toUpperCase()}</span>
        </div>
      </td>
      <td>{coin.name}</td>
      <td>{coin.current_price.toLocaleString()}</td>
      <td className={coin.price_change_24h > 0 ? "success" : "error"}>
        {coin.price_change_24h.toFixed(2)}
      </td>
      <td>{coin.total_volume.toLocaleString()}</td>
      <td>
        <img src={coin.price_change_24h > 0 ? chartUp : chartDown} alt="" />
      </td>
    </tr>
  );
}
