import axios from "axios";
import ShowMsg from "components/ShowMsg";
import { useEffect, useState } from "react";
import { MessagePage } from "types/message";
import { BASE_URL } from "utils/requests";
import Pag from "components/Pag";
import "./styles.css";

function ListMsg() {
  const [pageNumber, setPageNumber] = useState(0);

  const [page, setPage] = useState<MessagePage>({
    content: [],
    last: true,
    totalPages: 0,
    totalElements: 0,
    size: 12,
    number: 0,
    first: true,
    numberOfElements: 0,
    empty: true,
  });

  useEffect(() => {
    axios
      .get(`${BASE_URL}/message?size=3&page=${pageNumber}&sort=msg`)
      .then((response) => {
        const data = response.data as MessagePage;
        setPage(data);
      });
  }, [pageNumber]);


  const handlePageChange =(newPageNumber : number) =>{
      setPageNumber(newPageNumber);
  }

  return (
    <>
      <Pag page={page} onChange={handlePageChange}/>
      
      <div className="container">
        <div className="row">
          {page.content.map((message) => (
            <div key={message.msg} className="col-sm-12 mb-3">
              <ShowMsg message={message} />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default ListMsg;
