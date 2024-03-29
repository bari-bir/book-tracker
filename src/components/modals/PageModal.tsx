import { Slider } from "@mui/material";
import { Modal, ModalContent, ModalInner, ModalTitle } from "../atoms/UI/Modal";
import { CloseIcons } from "../atoms/Icons";
import { Button } from "../atoms/UI/Buttons";
import { FC } from "react";

interface IProps {
  page: number;
  valueText: (value: number) => void;
  onSave: () => void;
  setActive: any;
}

const PageModal: FC<IProps> = ({ page, valueText, onSave, setActive }) => {
  return (
    <Modal>
      <ModalInner>
        <ModalContent>
          <ModalTitle>How much page</ModalTitle>

          <div className="slider">
            <div className="page">{page}</div>
            <Slider
              defaultValue={200}
              aria-label="Default"
              valueLabelDisplay="auto"
              min={0}
              max={1000}
              onChange={(_, value) => {
                if (typeof value === "number") {
                  valueText(value);
                }
              }}
              sx={{
                color: "white",
              }}
            />
          </div>

          <div
            className="modal_close"
            onClick={() => setActive && setActive(false)}
          >
            <CloseIcons />
          </div>

          <div className="modal_footer">
            <div onClick={onSave}>
              <Button
                background="#FFED4A"
                radius="4px"
                padding="14px 21px"
                weight="700"
                shadow="0px 4px 4px 0px #00000040"
                margin="2rem 0 0 0"
                width="100%"
              >
                Save Change
              </Button>
            </div>

            <div className="close" onClick={() => setActive && setActive(false)}>Cancel</div>
          </div>
        </ModalContent>
      </ModalInner>
    </Modal>
  );
};

export default PageModal;
