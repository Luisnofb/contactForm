import { ReactComponent as Arrow } from "assets/img/arrow.svg";
import "./styles.css";

function Pag() {
    return (
        <div className="pagination-container">
            <div className="pagination-box">
                <button className="pagination-button" disabled={true}>
                <Arrow />
                </button>
                <p>{`${1} de ${3}`}</p>
                <button className="pagination-button " disabled={false}>
                <Arrow className="flip-horizontal" />
                </button>
            </div>
        </div>
    );
}

export default Pag;
