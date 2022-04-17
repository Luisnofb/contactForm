import ShowMsg from "components/ShowMsg";
import Pag from "components/Pag";
import Contactmain from "components/ContactMain";

function App() {
  return (
    <>
      <Contactmain />
      <Pag />
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
    </>
  );
}

export default App;
