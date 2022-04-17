import axios from "axios";
import ShowMsg from "components/ShowMsg";
import { useEffect, useState } from "react";
import { MessagePage } from "types/message";
import { BASE_URL } from "utils/requests";
import "./styles.css";

function ListMsg() {
  const [pageNumber, setPageNumber] = useState(0);

  useEffect(() => {
    axios.get(`${BASE_URL}/message?page=0`)
    .then(response => {
      const data = response.data as MessagePage;
      console.log(data);
      setPageNumber(data.number);
    });
  }, []);

  return (
    <div className="container">
      <p>{pageNumber}</p>
      <div className="row">
        <div className="col-sm-12 col-6 mb-3">
          <ShowMsg />
        </div>
        <div className="col-sm-12 col-6 mb-3">
          <ShowMsg />
        </div>
        <div className="col-sm-12 col-6 mb-3">
          <ShowMsg />
        </div>
        <div className="col-sm-12 col-6 mb-3">
          <ShowMsg />
        </div>
        <div className="col-sm-12 col-6 mb-3">
          <ShowMsg />
        </div>
      </div>
    </div>
  );
}

export default ListMsg;
