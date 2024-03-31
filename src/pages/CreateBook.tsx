import { useState } from "react";
import { Input } from "../components/atoms/UI/Input";
import PageLayouts from "../layouts/PageLayouts";
import UploadFile from "../components/molecules/UploadFile";
import { Button } from "../components/atoms/UI/Buttons";
import { instance } from "../api/instance";
import { headers } from "../config/config";
import { useNavigate } from "react-router-dom";

const CreateBook = () => {
  const [value, setValue] = useState<string>("");
  const [page, setPage] = useState<string>("");
  const [info, setInfo] = useState<any>();
  const navigate = useNavigate()

  const onSave = async () => {
    if (info && value && page) {
      await instance
        .post(
          "/booktracker/create",
          {
            title: value,
            page: page,
            image: info?.split("name=")?.at(-1),
          },
          headers
        )
        .then((res) => {
          if (res) {
            navigate('/')
          }
        })
        .catch((err) => {
          if (err) {
            alert("1");
          }
        });
    }
  };

  return (
    <PageLayouts title="Create new post">
      <div className="create" style={{ marginTop: "2rem" }}>
        <div>
          <Input
            value={value}
            onChange={setValue}
            placeholder="Write title..."
            label="Title"
          />
        </div>

        <div>
          <UploadFile setInfo={setInfo} />
        </div>

        <div style={{ marginTop: "3.2rem" }}>
          <Input
            value={page}
            onChange={setPage}
            placeholder="Write page..."
            label="Page"
            type="number"
          />
        </div>

        <div onClick={onSave}>
          <Button
            background="#005479"
            radius="19px"
            padding="1.7rem 0"
            weight="700"
            shadow="0px 4px 4px 0px #00000040"
            width="100%"
            color="white"
            size="1.6rem"
            margin="5rem 0 0 0"
          >
            Create a post
          </Button>
        </div>
      </div>
    </PageLayouts>
  );
};

export default CreateBook;
