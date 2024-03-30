import styled from "@emotion/styled";
import { FC, useEffect, useState } from "react";
import PageModal from "../modals/PageModal";
import { instance } from "../../api/instance";
import { headers } from "../../config/config";

interface IProps {
  setActive: React.Dispatch<React.SetStateAction<boolean>>;
  active: boolean;
  book: {
    id: string;
    progressPage: number;
  };
  timer: number;
  setTimer: React.Dispatch<React.SetStateAction<number>>;
}

const ReadPage: FC<IProps> = ({ setActive, active, book, timer, setTimer }) => {
  const [page, setPage] = useState<number>(book?.progressPage || 0);

  const valueText = (value: number) => {
    setPage(value);
  };

  const onSave = async () => {
    try {
      if (timer !== 0) {
        const res = await instance.post(
          "/booktracker/focus",
          {
            bookTrackerId: book?.id,
            time: timer,
            page: page,
          },
          headers
        );
        setActive(false);
        setPage(res?.data?.progressPage);
        setTimer(0);
      }
    } catch (err) {
      console.error(err);
      alert(JSON.stringify(err));
    }
  };

  useEffect(() => {
    if (book) {
      setPage(book.progressPage);
    }
  }, [book?.progressPage]);

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
  padding: 1.1rem 2.1rem;
  display: flex;
  align-items: flex-start;
  gap: 1rem;

  .book_img {
    width: 100px;
    height: 113px;
    img {
      width: 100%;
      height: 100%;
      object-fit: contain;
    }
  }

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
      display: flex;
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
