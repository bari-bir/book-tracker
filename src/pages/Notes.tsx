import { useEffect, useState } from "react";
import PageLayouts from "../layouts/PageLayouts";
import { Flex } from "../components/atoms/UI/Flex";
import { Button } from "../components/atoms/UI/Buttons";
import { instance } from "../api/instance";
import { headers } from "../config/config";
import { useParams, useNavigate } from "react-router-dom";

const Notes = () => {
  const [content, setContent] = useState("");
  const { id } = useParams();
  const navigate = useNavigate();

  const saveNote = async () => {
    if (!content.trim()) return;

    const [bookId, userId, noteId] = id?.split("_") || [];
    const endpoint = noteId ? "/note/update" : "/note/create";
    const data = noteId
      ? { id: bookId, userId, bookId, content }
      : { content, bookId };

    try {
      const response = await instance.post(endpoint, data, headers);
      if (response) {
        navigate(`/list/${id}`);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    const fetchNoteContent = async () => {
      if (id && id?.split("_").length >= 3) {
        try {
          const response = await instance.post(
            "/note/get",
            { id: id?.split("_")[0] },
            headers
          );
          if (response.data && response.data.content) {
            setContent(response.data.content);
          }
        } catch (error) {
          alert(JSON.stringify(error));
        }
      }
    };
    fetchNoteContent();
  }, [id]);

  return (
    <PageLayouts>
      <div className="notes" style={{ marginTop: "3.2rem" }}>
        <Flex content="flex-end" onClick={saveNote}>
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
        <textarea
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />
      </div>
    </PageLayouts>
  );
};

export default Notes;
