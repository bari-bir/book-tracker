import styled from "@emotion/styled";
import PageLayouts from "../layouts/PageLayouts";
import { Flex } from "../components/atoms/UI/Flex";
import { Button } from "../components/atoms/UI/Buttons";
import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { instance } from "../api/instance";
import { headers } from "../config/config";
import { expcliText } from "../utils/assets.util";

const NotesList = () => {
  const { id } = useParams();

  const [notes, setNotes] = useState<any[]>();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const response = await instance.post("/note/list", {}, headers);
        setNotes(response.data);
        setLoading(false);
      } catch (error) {
        alert(JSON.stringify(error));
        setLoading(false);
      }
    };

    fetchBooks();
  }, []);

  return (
    <PageLayouts title="Notes">
      <div className="notes">
        {loading ? (
          <div>Loading...</div>
        ) : (
          notes?.map((item: any) => (
            <Link
              to={`/notes/${item.id}_${item.userId}_${item.bookId}`}
              key={item.id}
            >
              <NotesBlockStyled>
                <Flex items="center" content="space-between">
                  <div className="notes_title">
                    {expcliText(item.content as string)}
                  </div>
                  <div className="notes_text-length">{item.content.length}</div>
                </Flex>
              </NotesBlockStyled>
            </Link>
          ))
        )}

        <Flex content="center" top="8rem">
          <Link to={`/notes/${id}`}>
            <Button
              background="#FFED4A"
              radius="4px"
              padding="5px 21px"
              weight="700"
              shadow="0px 4px 4px 0px #00000040"
              color="black"
              size="1.9rem"
            >
              New +
            </Button>
          </Link>
        </Flex>
      </div>
    </PageLayouts>
  );
};

const NotesBlockStyled = styled.div`
  border-bottom: 1px solid black;
  padding-block: 1.1rem;

  font-size: 1.6rem;
  color: #00000080;
  font-weight: 600;

  margin-block: 1rem;

  &:last-child {
    margin-block: 0;
  }
`;

export default NotesList;
