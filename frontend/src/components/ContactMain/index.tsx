import { ReactComponent as Mico } from "assets/img/icon-email.svg";
import { ReactComponent as Tico } from "assets/img/icon-telefone.svg";
import { ReactComponent as CtcFt } from "assets/img/contato-outline.svg";
import "./styles.css";

function Contactmain() {
  return (
    //body first, design hasn't navigation bar
    <body>
      {/* bootstrap class*/}
      <div>
        <div className="CF-ContactMain-body">
          <a href="http://thaynaraog.homolog.mx/" target="_blanck">
            <h3>Thaynara og</h3>
          </a>
          <div className="magicImg">
            <CtcFt />
            <img src="../../assets/img/contato-foto.jpg" alt="thay" />
          </div>
          <div>
            <h4>Contato Proficional</h4>
            <p>
              <Tico /> Contato@thaynaraog.com.br
              <Mico /> Contato@thaynaraog.com.br
            </p>
          </div>
        </div>
      </div>
    </body>
  );
}

export default Contactmain;
