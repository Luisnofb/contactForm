import "./styles.css";

function ShowMsg() {
  const message = {
    msg: "Only the worth will survive!",
    user_email: "luis@gmail.com",
  };

  return (
    <>
      <div>
        <div className="container boxcenter">
          <h5>{message.user_email}</h5>
          <h3>{message.msg}</h3>
        </div>
      </div>
    </>
  );
}

export default ShowMsg;
