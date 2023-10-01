import MainScreen from "../../components/MainScreen";
import { Link } from "react-router-dom";
import { Button, Card } from "react-bootstrap";
import notes from "../../data/notes";

const MyNotes = () => {
  const deleteHandler = (id) => {
    if (window.confirm("Are you Sure?")) {
    }
  };
  return (
    <MainScreen title="Welcome back Bujar Hyseni...">
      <Link to="/createnote">
        <Button style={{ marginLeft: 10, marginBottom: 6 }}>
          Create New Note
        </Button>
      </Link>
      {notes.map((note) => (
        <Card>
          <Card.Header style={{ display: "flex" }}>
            <span
              style={{
                color: "black",
                flex: 1,
                cursor: "pointer",
                alignSelf: "center",
                fontSize: 18,
              }}
            >
              {note.title}
            </span>
            <div>
              <Button hef={`/note/${note._id}`}>Edit</Button>
              <Button
                variant="danger"
                className="mx-2"
                onClick={() => deleteHandler(note._id)}
              >
                Delete
              </Button>
            </div>
          </Card.Header>
          <Card.Body>
            <blockquote className="blockquote mb-0">
              <p>{note.content}</p>
              <footer className="blockquote-footer">Created On - date</footer>
            </blockquote>
          </Card.Body>
        </Card>
      ))}
    </MainScreen>
  );
};

export default MyNotes;
