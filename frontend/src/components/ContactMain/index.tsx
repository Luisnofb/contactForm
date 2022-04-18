import { ReactComponent as Iico } from "assets/img/icon-instagram.svg";
import { ReactComponent as Yico } from "assets/img/icon-youtube.svg";
import { ReactComponent as Twico } from "assets/img/icon-twitter.svg";
import { ReactComponent as Fico } from "assets/img/icon-facebook.svg";
import { ReactComponent as Sico } from "assets/img/icon-snapchat.svg";
import { ReactComponent as Tkico } from "assets/img/icon-tiktok.svg";

import Logo from "assets/img/contato-foto.jpg";

import { ReactComponent as Mico } from "assets/img/icon-email.svg";
import { ReactComponent as Tico } from "assets/img/icon-telefone.svg";
import { ReactComponent as CtcFt } from "assets/img/contato-outline.svg";
import { ReactComponent as Eico } from "assets/img/icon-enviar.svg";
import { validateEmail } from "utils/validate";
import axios, { AxiosRequestConfig } from "axios";
import { BASE_URL } from "utils/requests";
import "./styles.css";

interface IconProps{
  flag: 'up' | 'down',
}

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
    axios(configMsg).then((resp) => {});
    axios(configUser).then((resp) => {});
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
            <img src={Logo} alt="thay" />
            <CtcFt />
          </div>

          <div className="contactSources">
            <h4>Contato Profissional</h4>
            <div className="sources">
              <p>
                <Tico /> 98 991234-5678
              </p>
              <p>
                <Mico /> Contato@thaynaraog.com.br
              </p>
            </div>
          </div>
        </div>

        {/*-3-*/}
        <div className="form-container">
          <div>
            <form onSubmit={handleSubimt}>
              <div>
                <label htmlFor="relat">Seu contato é relacionado a:</label>

                <select className="form-select" name="relat" id="relat">
                  <option value="cpy">Imprensa</option>
                  <option value="Event">Evento</option>
                  <option value="msg">Mensagem</option>
                </select>
              </div><br />
              <div className="form-group">
                <label htmlFor="name">Nome </label>
                <input type="text" id="name" />
              </div>
              <div className="form-group">
                <label htmlFor="company">Empresa </label>
                <input type="text" id="company" />
              </div>
              <div className="form-group">
                <label htmlFor="email">E-mail </label>
                <input type="email" id="email" />
              </div>
              <div className="form-group">
                <label htmlFor="telephone">Telefone </label>
                <input type="tel" id="telephone" />
              </div><br />
              <div>
                <label htmlFor="msg">Mensagem</label>
                <br />
                <textarea className="form-control" name="message" id="msg" rows={3}></textarea>
              </div>
              <div className="btn-box-asjust">
                <div className="form-check form-check-container" >
                    <input  type="checkbox" value="" id="flexCheckDefault" />
                    <label className="form-check-label" htmlFor="flexCheckDefault"> Não sou um robô  </label>
                </div>
                <div className="form-btn-container btn-size">
                  <button type="submit" className="btn btn-primary ctbtn">
                    Enviar <Eico />
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>

        {/*-4-*/}
        <div className=" container c-links">
          <div className="social-icos">
            <a href="#"><Iico /></a>
            <a href="#"><Yico /></a>
            <a href="#"><Twico /></a>
            <a href="#"><Fico /></a>
            <a href="#"><Sico /></a>
            <a href="#"><Tkico /></a>
          </div>
          <div className="util-links">
            <a href="#"><p>Sobre</p></a>
            <a href="#"><p>Novidades</p></a>
            <a href="#"><p>agenda</p></a>
            <a href="#"><p>Thay e Unicef</p></a>
            <a href="#"><p>Galeria</p></a>
            <a href="#"><p>São João da thay</p></a>
            <a href="#"><p>Contato</p></a>
            <div className="l-line"></div>
            <a href="#"><p>Impresa</p></a>
            <a href="#"><p>Fã- Clubes</p></a>

          </div>

        </div>
      </div>

      <footer id="foot">
        <div className="footer-title">follow me</div>
        <div className="social-icos">
            <a href="#"><Iico /></a>
            <a href="#"><Yico /></a>
            <a href="#"><Twico /></a>
            <a href="#"><Fico /></a>
            <a href="#"><Sico /></a>
            <a href="#"><Tkico /></a>
          </div>
      </footer>
    </>
  );
}

export default ContactMain;
