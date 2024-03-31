import styled from "@emotion/styled";
import { UploadIcons } from "../atoms/Icons";
import { FC, useCallback, useEffect } from "react";

declare global {
  interface Window {
    ReactNativeWebView?: {
      postMessage: (message: string) => void;
    };
  }
}

const UploadFile: FC<{ setInfo: any }> = ({ setInfo }) => {
  const handlePostMessageListener = useCallback((message: MessageEvent) => {
    const image = message.data.url;
    setInfo(image);
  }, []);

  useEffect(() => {
    window.addEventListener("message", handlePostMessageListener);
    return () => {
      window.removeEventListener("message", handlePostMessageListener);
    };
  }, [handlePostMessageListener]);

  const onUploadImage = () => {
    if (window.ReactNativeWebView) {
      window.ReactNativeWebView.postMessage(
        JSON.stringify({ key: "uploadImg" })
      );
    }
  };

  return (
    <UpFileBlock onClick={onUploadImage}>
      <div className="upload_content">
        <UploadIcons />
        <div>Drag files to upload</div>
      </div>
      <input type="button" value={"Choose File"} />
    </UpFileBlock>
  );
};

const UpFileBlock = styled.div`
  border: 1.2px dashed black;
  border-radius: 14px;

  input {
    margin-top: 0;
    width: 40%;
    padding: 0;
  }

  input[type="button"] {
    border: none;
    padding: 1.1rem 3.2rem;
    border-radius: 13.34px;
    background-color: #005479;
    color: white;
    transition: 1s;
  }

  margin-top: 1.2rem;

  height: 169px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  .upload_content {
    text-align: center;
    margin-bottom: 1rem;
    font-weight: 500;
  }
`;

export default UploadFile;
