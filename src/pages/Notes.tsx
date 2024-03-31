import { useEffect, useState } from "react";
import PageLayouts from "../layouts/PageLayouts";
import { Flex } from "../components/atoms/UI/Flex";
import { Button } from "../components/atoms/UI/Buttons";
import { instance } from "../api/instance";
import { headers } from "../config/config";
import { useParams, useNavigate } from "react-router-dom";

const Notes = () => {
  const [change, onChange] = useState("");
  const { id } = useParams();
  const navigate = useNavigate();

  const onSave = async () => {
    if (change && change.length !== 0) {
      if (id && id?.split("_").length === 2) {
        await instance
          .post(
            "/note/create",
            {
              content: change,
              bookId: id && id.split("_")[0],
            },
            headers
          )
          .then((res) => {
            if (res) {
              navigate(`/list/${id}`);
            }
          })
          .catch((err) => {
            if (err) {
              console.log(err);
            }
          });
      }

      if (id && id?.split("_").length >= 3) {
        await instance
          .post(
            "/note/update",
            {
              id: id && id.split("_")[0],
              userId: id && id.split("_")[1],
              bookId: id && id.split("_")[2],
              content: change,
            },
            headers
          )
          .then((res) => {
            if (res) {
              navigate(`/list/${id}`);
            }
          })
          .catch((err) => {
            if (err) {
              console.log(err);
            }
          });
      }
    }
  };

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const response = await instance.post(
          "/note/get",
          {
            id: id?.split("_")[0],
          },
          headers
        );

        if (response.data) {
          onChange(response.data.content || "");
        }
      } catch (error) {
        alert(JSON.stringify(error));
      }
    };

    if (id && id?.split("_").length >= 3) {
      fetchBooks();
    }
  }, [id]);

  return (
    <PageLayouts>
      <div className="notes" style={{ marginTop: "3.2rem" }}>
        <Flex content="flex-end" onClick={onSave}>
          <Button
            background="#FFED4A"
            radius="4px"
            padding="5px 21px"
            weight="700"
            shadow="0px 4px 4px 0px #00000040"
            margin="0 0 2rem 0"
            color="black"
          >
            Save
          </Button>
        </Flex>
        <textarea value={change} onChange={(e) => onChange(e.target.value)} />
      </div>
    </PageLayouts>
  );
};

export default Notes;
