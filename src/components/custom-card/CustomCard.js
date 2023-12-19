import Card from "react-bootstrap/Card";

export const CustomCard = ({ thumbnail, name, author, publishYear }) => {
  return (
    <Card style={{ width: "13rem" }} className="shadow-sm flex-grow-1">
      <Card.Img variant="top" src={thumbnail} />
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text>
          {author} - {publishYear}
        </Card.Text>
      </Card.Body>
    </Card>
  );
};
