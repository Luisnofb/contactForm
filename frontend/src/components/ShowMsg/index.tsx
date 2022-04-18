import { Message } from "types/message";
import "./styles.css";

type Props = {
  message: Message;
}

function ShowMsg({ message } : Props) {
  return (
    <>
      <div>
        <div className="container boxcenter">
          {/*<h5>{message.user_email}</h5>*/}
          <h3>{message.msg}</h3>
        </div>
      </div>
    </>
  );
}

export default ShowMsg;
