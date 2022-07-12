import { Fragment } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const InputData = () => {
  return (
    <Fragment>
      <DatePicker
        selected={new Date()}
        onChange={(date: Date) => {}}
        className="dsmeta-form-control"
        dateFormat="dd/MM/yyyy"
      />
    </Fragment>
  );
};
export default InputData;
