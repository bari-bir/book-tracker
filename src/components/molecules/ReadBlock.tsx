import styled from "@emotion/styled";
import { MessageIcons, PlayIcons, PlusIcons } from "../atoms/Icons";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { instance } from "../../api/instance";
import { headers } from "../../config/config";
import { IBookTrackerList } from "../../types/assets.type";

const ReadBlock = () => {
  const [book, setBook] = useState<IBookTrackerList[]>();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const response = await instance.post("/booktracker/list", {}, headers);
        setBook(response.data);
        setLoading(false);
      } catch (error) {
        alert(JSON.stringify(error));
        setLoading(false);
      }
    };

    fetchBooks();
  }, []);

  return (
    <ReadBlockStyled>
      {loading ? (
        <p>Loading...</p>
      ) : (
        book?.map((book: any) => (
          <div className="read_block" key={book.id}>
            <div className="read_block-title">
              {book.title}
              <Link to={"/create/read"}>
                <div className="read_circle">
                  <PlusIcons />
                </div>
              </Link>
            </div>
            <div className="read_book">
              <div className="read_book-block">
                <Link to={"/book"}>
                  <div className="book-img" />
                </Link>
                <div className="read_path">
                  <Link to={`/timer/${book.id}`}>
                    <PlayIcons />
                  </Link>
                  <Link to={`/list/${book.id}_${book.userId}`}>
                    <MessageIcons />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ))
      )}
    </ReadBlockStyled>
  );
};

const ReadBlockStyled = styled.div`
  .read_block-title {
    font-size: 2.4rem;
    font-weight: 600;

    margin-bottom: 3rem;

    display: flex;
    align-items: center;

    gap: 1.3rem;
  }

  .read_circle {
    width: 20px;
    height: 20px;

    border-radius: 50%;
    background-color: #000;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .read_book-block {
    display: inline-block;
    position: relative;
  }

  .read_path {
    position: absolute;
    bottom: 20px;
    right: 10px;
    width: 100%;
    max-width: 78px;
    height: 41px;
    border-radius: 32.56px 0 32.56px 0;

    background-color: #d9d9d9;

    display: flex;
    align-items: center;
    justify-content: space-evenly;
  }

  .book-img {
    width: 200px;
    height: 290px;
    background-color: #eee;
    border-radius: 40px;
  }
`;

export default ReadBlock;
