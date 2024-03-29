import styled from "@emotion/styled";
import { Button } from "../components/atoms/UI/Buttons";
import { Flex } from "../components/atoms/UI/Flex";
import PageLayouts from "../layouts/PageLayouts";
import { CircularProgress } from "@mui/material";
import { useEffect, useState } from "react";
import ReadPage from "../components/molecules/ReadPage";

const Timer = () => {
  const [timer, setTimer] = useState<number>(0);
  const [isRunning, setIsRunning] = useState<boolean>(false);
  const [active, setActive] = useState<boolean>(false);

  useEffect(() => {
    let intervalId: NodeJS.Timeout;
    if (isRunning) {
      intervalId = setInterval(() => setTimer(timer + 1), 10);
    }
    return () => clearInterval(intervalId);
  }, [isRunning, timer]);

  const minutes: number = Math.floor((timer % 360000) / 6000);
  const seconds: number = Math.floor((timer % 6000) / 100);
  const milliseconds: number = timer % 100;

  const startAndStop = (): void => {
    setIsRunning(!isRunning);
  };

  return (
    <PageLayouts>
      {!active && (
        <Flex content="flex-end" onClick={() => setActive(true)}>
          <Button
            background="#FFED4A"
            radius="4px"
            padding="5px 21px"
            weight="700"
            shadow="0px 4px 4px 0px #00000040"
          >
            Save
          </Button>
        </Flex>
      )}

      <CircularTimer style={{ textAlign: "center", marginTop: "10rem" }}>
        <CircularProgress variant="determinate" value={100} size={200} />

        <div className="timer">
          {minutes.toString().padStart(2, "0")}:
          {seconds.toString().padStart(2, "0")}:
          {milliseconds.toString().padStart(2, "0")}
        </div>
      </CircularTimer>

      <Flex content="center">
        <StartPauseStyled onClick={startAndStop} />
      </Flex>

      <div
        style={{ fontSize: "2.4rem", textAlign: "center", marginTop: "1.6rem" }}
      >
        Reading
      </div>

      <ReadPage setActive={setActive} active={active} />
    </PageLayouts>
  );
};

const CircularTimer = styled.div`
  position: relative;

  .timer {
    font-weight: 500;
    font-size: 3.2rem;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translateY(-50%) translateX(-50%);
  }
`;

const StartPauseStyled = styled.div`
  width: 41px;
  height: 41px;
  background-color: #60b4d9;
  border-radius: 50%;
  margin-top: 1.6rem;
  position: relative;

  &::before {
    content: "";
    display: block;
    width: 53px;
    height: 53px;
    border-radius: 50%;
    border: 2px solid #005479;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translateY(-50%) translateX(-50%);
  }
`;

export default Timer;
