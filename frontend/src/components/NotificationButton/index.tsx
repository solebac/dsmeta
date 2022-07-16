import icon from "../../assets/img/notification-icon.svg";
import http from "../../utils/http";

type Props = {
  saleId: number;
};

const NotificationButton = ({ saleId }: Props) => {
  const handleClick = (id: number) => {
    http(`/sales/${id}/notification`).then((response) => {
      console.log("Success");
    });
  };
  return (
    <>
      <div className="dsmeta-red-btn" onClick={() => handleClick(saleId)}>
        <img src={icon} alt="Notificar" />
      </div>
    </>
  );
};
export default NotificationButton;
