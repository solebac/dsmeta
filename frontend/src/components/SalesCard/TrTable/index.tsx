import React from "react";
import { Sale } from "../../models/sale";
import NotificationButton from "../../NotificationButton";

type Props = {
  sale: Sale;
};

const TrTable = ({ sale }: Props) => {
  return (
    <>
      <tr key={sale.id}>
        <td className="show992">#{sale.id}</td>
        <td className="show576">{new Date(sale.date).toLocaleDateString()}</td>
        <td>{sale.sellerName}</td>
        <td className="show992">{sale.visited}</td>
        <td className="show992">{sale.deals}</td>
        <td>R$ {sale.amount.toFixed(2)}</td>
        <td>
          <div className="dsmeta-red-btn-container">
            <div className="dsmeta-red-btn">
              <NotificationButton />
            </div>
          </div>
        </td>
      </tr>
    </>
  );
};

export default TrTable;
