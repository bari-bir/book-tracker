import styled from "@emotion/styled";

export const Modal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 20000;
`;
export const ModalInner = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-end;
  min-height: 100%;
`;
export const ModalContent = styled.div`
  background-color: #005479;
  width: 100%;
  max-width: 100%;
  padding: 2.5rem;
  position: relative;
  border-radius: 29px 29px 0 0;
  color: white;

  .page {
    display: flex;
    justify-content: flex-end;
    margin-top: 5rem;
  }

  .modal_close {
    position: absolute;
    top: 25px;
    right: 30px;
  }

  .close {
    text-align: center;
    margin-top: 2rem;

    font-weight: 600;
    font-size: 2rem;
  }
`;

export const ModalTitle = styled.div`
  font-weight: 600;
  font-size: 2.4rem;
`;
