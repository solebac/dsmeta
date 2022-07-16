import { useEffect, useState } from "react";
import NotificationButton from "../NotificationButton";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import InputData from "./InputData";
import axios from "axios";
import http from "../../utils/http";
import { ResetSale, Sale } from "../models/sale";
import TrTable from "./TrTable";

type Props = {};

const SalesCard = () => {
  const max = new Date();
  const min = new Date(new Date().setDate(new Date().getDate() - 365));

  const [minDate, setMinDate] = useState(min);
  const [maxDate, setMaxDate] = useState(max);

  const [sales, setSales] = useState<Sale[]>([]);

  useEffect(() => {
    http.get(`/sales`).then((response) => {
      setSales(response.data.content);
    });
  }, []);

  return (
    <div className="dsmeta-card">
      <h2 className="dsmeta-sales-title">Vendas</h2>
      <div>
        <div className="dsmeta-form-control-container">
          <DatePicker
            selected={minDate}
            onChange={(date: Date) => {
              setMinDate(date);
            }}
            className="dsmeta-form-control"
            dateFormat="dd/MM/yyyy"
          />
        </div>
        <div className="dsmeta-form-control-container">
          {/**Modo by components  with params Date|Function*/}
          <InputData data={maxDate} setDados={setMaxDate} />
        </div>
      </div>

      <div>
        <table className="dsmeta-sales-table">
          <thead>
            <tr>
              <th className="show992">ID</th>
              <th className="show576">Data</th>
              <th>Vendedor</th>
              <th className="show992">Visitas</th>
              <th className="show992">Vendas</th>
              <th>Total</th>
              <th>Notificar</th>
            </tr>
          </thead>
          <tbody>
            {sales.map((sale) => {
              return <TrTable key={sale.id} sale={sale} />;
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};
export default SalesCard;
