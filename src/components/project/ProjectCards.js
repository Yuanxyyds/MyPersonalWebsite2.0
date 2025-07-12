import Card from "react-bootstrap/Card";

function ProjectCard(props) {
    return (
        <Card className="project-card-view">
            <Card.Img variant="top" src={props.imgPath} alt="card-img" />
            <Card.Body>
                <Card.Title>{props.title}</Card.Title>
                <Card.Text style={{ textAlign: "justify" }}>
                    <p className="md">{props.description}</p>
                </Card.Text>
            </Card.Body>
            {props.action}
        </Card>
    );
}

export default ProjectCard;
