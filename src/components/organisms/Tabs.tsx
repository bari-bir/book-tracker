import Box from "@mui/material/Box";
import styled from "@emotion/styled";
import { BookIcons, CalendarIcons, NotesIcons } from "../atoms/Icons";

const ButtonTab = () => {
  return (
    <Box sx={{ width: "100%" }}>
      <ButtonTabStyled>
        <div>
          <img src={require("../../assets/images/stats.png")} alt="" />
        </div>

        <div>
          <NotesIcons />
        </div>

        <div>
          <CalendarIcons />
        </div>

        <div>
          <BookIcons />
        </div>
      </ButtonTabStyled>
    </Box>
  );
};

const ButtonTabStyled = styled.div`
  position: fixed;
  width: 100%;
  height: 73px;
  background-color: #005479;
  bottom: 0;
  left: 0;

  border-top-left-radius: 36.5px;
  border-top-right-radius: 36.5px;

  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-inline: 4.1rem;

  div {
    cursor: pointer;
  }
`;

export { ButtonTab };
