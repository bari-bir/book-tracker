import styled from "@emotion/styled";
import { FC, useState } from "react";
import PageModal from "../modals/PageModal";

interface IProps {
  setActive: any;
  active: boolean;
}

const ReadPage: FC<IProps> = ({ setActive, active }) => {
  const [page, setPage] = useState<number>(20);

  const valueText = (value: number) => {
    setPage(value);
  };

  const onSave = async () => {
    console.log(page);
    setActive(false);
  };

  return (
    <>
      <div className="book" style={{ marginTop: "5rem" }}>
        <BookStyled>
          <div className="book_img">
            <img src={require("../../assets/images/read1.png")} alt="" />
          </div>
          <div className="book_content">
            <div className="book_title">Read Later</div>
            <div className="book_subtitle">Page {page}/100</div>
          </div>
        </BookStyled>
      </div>

      {active && (
        <PageModal
          page={page}
          valueText={valueText}
          onSave={onSave}
          setActive={setActive}
        />
      )}
    </>
  );
};

const BookStyled = styled.div`
  width: 100%;
  border-radius: 20px;

  background-color: #005479;
  color: white;

  padding-inline: 2.1rem;
  padding-block: 1.1rem;

  .book_img {
    width: 100px;
    height: 113px;

    img {
      width: 100%;
      height: 100%;
      object-fit: contain;
    }
  }

  display: flex;
  align-items: flex-start;

  gap: 1rem;

  .book_content {
    width: 100%;

    .book_title {
      font-size: 2rem;
      margin-bottom: 0.5rem;
      font-weight: 600;
    }

    .book_subtitle {
      font-size: 1.6rem;
      margin-bottom: 2.5rem;
    }

    .book_stats {
      display: flex !important;
      align-items: center;
      gap: 0.8rem;
      font-weight: 600;
    }
  }

  margin-bottom: 1rem;

  &:last-child {
    margin-bottom: 0;
  }
`;

export default ReadPage;
