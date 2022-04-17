import axios from "axios";
import ShowMsg from "components/ShowMsg";
import { BASE_URL } from "utils/requests";
import "./styles.css";

function ListMsg() {
  //wrong way
  axios.get(`${BASE_URL}/message?page=0"`)
    .then(response => {
        console.log(response.data)
    });

  return (
    <div className="container">
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
