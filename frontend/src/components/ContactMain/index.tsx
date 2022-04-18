import { ReactComponent as Mico } from "assets/img/icon-email.svg";
import { ReactComponent as Tico } from "assets/img/icon-telefone.svg";
import { ReactComponent as CtcFt } from "assets/img/contato-outline.svg";
import { ReactComponent as Eico } from "assets/img/icon-enviar.svg";
import { validateEmail } from "utils/validate";
import axios, { AxiosRequestConfig } from "axios";
import { BASE_URL } from "utils/requests";
import "./styles.css";

function ContactMain() {
  const handleSubimt = (event: React.FormEvent<HTMLFormElement>) => {
    //event.preventDefault();
    const name = (event.target as any).name.value;
    const company = (event.target as any).company.value;
    const email = (event.target as any).email.value;
    const telephone = (event.target as any).telephone.value;
    const msg = (event.target as any).msg.value;

    if (!validateEmail(email)) {
      return;
    }
    const configMsg: AxiosRequestConfig = {
      baseURL: BASE_URL,
      method: "PUT",
      url: "/puts",
      data: {
        msg: msg,
        user_email: email,  
      },
    };

    const configUser: AxiosRequestConfig = {
      baseURL: BASE_URL,
      method: "PUT",
      url: "/save",
      data: {
        // name company email telephone msg
        name: name,
        company: company,
        email: email,  
        telephone: telephone,

      },
    };
    //submit in DataBase
    axios(configMsg).then(resp => {
     
    });
    axios(configUser).then(resp => {
     
    });
  };

  return (
    //body first, design hasn't navigation bar
    <>
      {/* bootstrap class*/}
      <div className="four">
        {/*-1-*/}
        <div className="thay-name">
          <a href="http://thaynaraog.homolog.mx/" target="_blanck">
            <h3>Thaynara og</h3>
          </a>
        </div>

        {/*-2-*/}
        <div className="contactMain-body">
          <div className="magicImg">
            <CtcFt />
            <img src="src\assets\img\contato.jpg" alt="thay" />
          </div>
          <div className="contactSources">
            <h4>Contato Proficional</h4>
            <div className="sources">
              <p>
                <Tico /> 98 991234-5678
              </p>
              <p>
                {" "}
                <Mico /> Contato@thaynaraog.com.br
              </p>
            </div>
          </div>
        </div>

        {/*-3-*/}
        <div className="form-container">
          <div className="card-bottom-container">
            <form className="ctform" onSubmit={handleSubimt}>
              <div className="form-group ">
                <label htmlFor="relat">Seu contato é relacionado a:</label>
                <br />

                <select name="relat" id="relat">
                  <option value="cpy">Empresa</option>
                  <option value="Event">Evento</option>
                  <option value="msg">Mensagem</option>
                </select>
              </div>
              <div className="form-group">
                <label htmlFor="name">Nome </label>
                <input type="text" id="name" />
              </div>
              <div className="form-group">
                <label htmlFor="company">Empresa </label>
                <input type="text" id="company" />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email </label>
                <input type="email" id="email" />
              </div>
              <div className="form-group">
                <label htmlFor="telephone">Telefone </label>
                <input type="tel" id="telephone" />
              </div>
              <div>
                <label>Mensagem</label>
                <br />
                <textarea name="message" id="msg"></textarea>
              </div>
              <div className="form-btn-container">
                <button type="submit" className="btn btn-primary ctbtn">
                  Enviar <Eico />
                </button>
              </div>
            </form>
          </div>
        </div>

        {/*-4-*/}
        <div className="links">
          <h1>Oi MUNDO</h1>
        </div>
      </div>
    </>
  );
}

export default ContactMain;
