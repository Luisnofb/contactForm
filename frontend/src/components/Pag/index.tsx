import { ReactComponent as Arrow } from "assets/img/arrow.svg";
import { MessagePage } from "types/message";
import "./styles.css";

type Props = {
  page: MessagePage;
  onChange: Function;
};

function Pag({ page, onChange }: Props) {
  return (
    <div className="pagination-container">
      <div className="pagination-box">
        <button
          className="pagination-button"
          disabled={page.first}
          onClick={() => onChange(page.number - 1)}
        >
          <Arrow />
        </button>
        <p>{`${page.number + 1} - ${page.totalPages}`}</p>
        <button
          className="pagination-button "
          disabled={page.last}
          onClick={() => onChange(page.number + 1)}
        >
          <Arrow className="flip-horizontal" />
        </button>
      </div>
    </div>
  );
}

export default Pag;
