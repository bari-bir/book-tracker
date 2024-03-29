import styled from "@emotion/styled";
import { MessageIcons, PlayIcons, PlusIcons } from "../atoms/Icons";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { instance } from "../../api/instance";
import { headers } from "../../config/config";

const ReadBlock = () => {
  const [book, setBook] = useState<any>();


  useEffect(() => {
    fetchBooks()
  }, [])

  const fetchBooks = async () => {
    await instance.post("/booktracker/list", {}, headers).then((res) => {
      if (res) {
        setBook(res);
      }
    }); 
  };

  alert(book)

  return (
    <ReadBlockStyled>
      <div className="read_block">
        <div className="read_block-title">
          Reading
          <div className="read_circle">
            <PlusIcons />
          </div>
        </div>

        <div className="read_book">
          <div className="read_book-block">
            <Link to={"/book"}>
              <img src={require("../../assets/images/read1.png")} alt="" />
            </Link>

            <div className="read_path">
              <Link to={"/timer"}>
                <PlayIcons />
              </Link>
              <MessageIcons />
            </div>
          </div>
        </div>
      </div>

      <div className="read_block">
        <div className="read_block-title">
          Read Later
          <div className="read_circle">
            <PlusIcons />
          </div>
        </div>

        <div className="read_book">
          <img src={require("../../assets/images/read2.png")} alt="" />
        </div>
      </div>

      <div className="read_block">
        <div className="read_block-title">
          Read
          <div className="read_circle">
            <PlusIcons />
          </div>
        </div>

        <div className="read_book">
          <img src={require("../../assets/images/read3.png")} alt="" />
        </div>
      </div>
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
`;

export default ReadBlock;
