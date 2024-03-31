import { useState } from "react";
import { Input } from "../components/atoms/UI/Input";
import PageLayouts from "../layouts/PageLayouts";
import UploadFile from "../components/molecules/UploadFile";
import { Button } from "../components/atoms/UI/Buttons";

const CreateBook = () => {
  const [value, setValue] = useState<string>("");

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
          <UploadFile />
        </div>

        <div style={{ marginTop: "3.2rem" }}>
          <Input
            value={value}
            onChange={setValue}
            placeholder="Write page..."
            label="Page"
          />
        </div>

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
    </PageLayouts>
  );
};

export default CreateBook;
