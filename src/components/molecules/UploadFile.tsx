import styled from "@emotion/styled";
import { UploadFile as UpFile } from "../atoms/UI/Input";
import { UploadIcons } from "../atoms/Icons";

const UploadFile = () => {
  return (
    <UpFileBlock>
      <div className="upload_content">
        <UploadIcons />
        <div>Drag files to upload</div>
      </div>
      <UpFile type="file" />
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

  input[type="file"]::file-selector-button {
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
