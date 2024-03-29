import PageLayouts from "../layouts/PageLayouts";
import Stack from "@mui/material/Stack";
import { styled as st } from "@mui/material/styles";
import styled from "@emotion/styled";
import LinearProgress, {
  linearProgressClasses,
} from "@mui/material/LinearProgress";
import { useState } from "react";

const BorderLinearProgress = st(LinearProgress)(({ theme }) => ({
  height: 10,
  borderRadius: 5,
  [`&.${linearProgressClasses.colorPrimary}`]: {
    backgroundColor:
      theme.palette.grey[theme.palette.mode === "light" ? 200 : 800],
  },
  [`& .${linearProgressClasses.bar}`]: {
    borderRadius: 5,
    backgroundColor: theme.palette.mode === "light" ? "#1a90ff" : "#308fe8",
  },
}));

const Book = () => {
  const [percent, setPercent] = useState<string>("75%");

  return (
    <PageLayouts title="Keep Reading">
      <div className="book" style={{ marginTop: "3rem" }}>
        <BookStyled>
          <div className="book_img">
            <img src={require("../assets/images/read1.png")} alt="" />
          </div>
          <div className="book_content">
            <div className="book_title">Read Later</div>
            <div className="book_subtitle">Read Later</div>
            <div className="book_stats">
              <Stack spacing={2} sx={{ flexGrow: 1 }}>
                <BorderLinearProgress
                  variant="determinate"
                  value={Number(percent.split("%").join(""))}
                />
              </Stack>
              {percent}
            </div>
          </div>
        </BookStyled>

        <BookStyled>
          <div className="book_img">
            <img src={require("../assets/images/read2.png")} alt="" />
          </div>
          <div className="book_content">
            <div className="book_title">Read Later</div>
            <div className="book_subtitle">Read Later</div>
            <div className="book_stats">
              <Stack spacing={2} sx={{ flexGrow: 1 }}>
                <BorderLinearProgress
                  variant="determinate"
                  value={Number(percent.split("%").join(""))}
                />
              </Stack>
              {percent}
            </div>
          </div>
        </BookStyled>
      </div>
    </PageLayouts>
  );
};

const BookStyled = styled.div`
  width: 100%;
  border-radius: 20px;

  border: 1px solid #00000080;

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

export default Book;
