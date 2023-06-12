import "bootstrap/dist/css/bootstrap.min.css";
import { Button, Tabs, Tab, Card } from "react-bootstrap";
// import Button from 'react-bootstrap/Button';

function Bootstrap() {
  return (
    <div>
      <h3 className="text-3xl font-bold underline">Bootstrap Component</h3>
      <Button>Button Sample</Button>
      <Button variant="success">Button Success</Button>
      <Tabs
        defaultActiveKey="home"
        id="uncontrolled-tab-example"
        className="mb-3">
        <Tab eventKey="home" title="Home">
          <div>Home</div>
        </Tab>
        <Tab eventKey="profile" title="Profile">
          <div>Profile</div>
        </Tab>
        <Tab eventKey="contact" title="Contact" disabled>
          <div>Contact</div>
        </Tab>
      </Tabs>
      <br />
      <Card style={{ width: "18rem" }}>
        <Card.Img
          variant="top"
          src="https://m.media-amazon.com/images/I/71VTClTSrlL.jpg"
        />
        <Card.Body>
          <Card.Title>Card Title</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
      </Card>
    </div>
  );
}

export default Bootstrap;
