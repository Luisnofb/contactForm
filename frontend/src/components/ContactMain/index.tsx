import { ReactComponent as Iico } from "assets/img/icon-instagram.svg";
import { ReactComponent as Yico } from "assets/img/icon-youtube.svg";
import { ReactComponent as Twico } from "assets/img/icon-twitter.svg";
import { ReactComponent as Fico } from "assets/img/icon-facebook.svg";
import { ReactComponent as Sico } from "assets/img/icon-snapchat.svg";
import { ReactComponent as Tkico } from "assets/img/icon-tiktok.svg";

import { ReactComponent as Iicopk } from "assets/img/icon-instagrampk.svg";
import { ReactComponent as Yicopk } from "assets/img/icon-youtubepk.svg";
import { ReactComponent as Twicopk } from "assets/img/icon-twitterpk.svg";
import { ReactComponent as Ficopk } from "assets/img/icon-facebookpk.svg";
import { ReactComponent as Sicopk } from "assets/img/icon-snapchatpk.svg";
import { ReactComponent as Tkicopk } from "assets/img/icon-tiktokpk.svg";

import Img from "assets/img/contato-foto.jpg";

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
        name: name,
        company: company,
        email: email,
        telephone: telephone,
      },
    };
    //submit in DataBase
    axios(configMsg).then((resp) => {
      //console.log(resp.data);
    });
    axios(configUser).then((resp) => {
      //console.log(resp.data);
    });
  };

  return (
    //body first, design hasn't navigation bar
    <>
      {/* bootstrap class*/}
      <div className="thay-name">
          <a href="http://thaynaraog.homolog.mx/" target="_blanck">
            <p>Thaynara og</p>
          </a>
        </div>
      <div className="four">
      
        {/*-1-*/}
        <div className="contactMain-body">

          <div className="magicImg">
            <img src={Img} alt="thay" />
            <CtcFt />
          </div>

          <div className="contactSources">
            <h6>Contato Profissional</h6>
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

        {/*-2-*/}
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
                <div className="form-check-container" >
                    <input  type="checkbox" value="" id="flexCheckDefault" />
                    <label className="form-check-label" htmlFor="flexCheckDefault"> Não sou um robô  </label>
                </div>
                <div className="form-btn-container btn-size">
                  <button type="submit" className="btn btn-primary ctbtn">
                    <p>  Enviar </p>
                    <Eico />
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>

        {/*-3-*/}
        <div className="aside-elements">
          <div className="social-icos-p">
              <a href="#"><Iicopk /></a>
              <a href="#"><Yicopk /></a>
              <a href="#"><Twicopk /></a>
              <a href="#"><Ficopk /></a>
              <a href="#"><Sicopk /></a>
              <a href="#"><Tkicopk /></a>
            </div>
          <div className="container c-links">
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
      </div>

      {/*-4-*/}
      <footer id="foot">
        <div className="footer-box">
          <div className="footer-title">
            <p>2022 &copy; THAYNARA OG. Todos os direitos reservados.</p>
          </div>
          <div className="social-icos">
              <a href="#"><Iico /></a>
              <a href="#"><Yico /></a>
              <a href="#"><Twico /></a>
              <a href="#"><Fico /></a>
              <a href="#"><Sico /></a>
              <a href="#"><Tkico /></a>
          </div>
        </div>
        
      </footer>
    </>
  );
}

export default ContactMain;
