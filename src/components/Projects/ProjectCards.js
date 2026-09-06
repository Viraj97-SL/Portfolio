import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { CgWebsite } from "react-icons/cg";
import { BsGithub, BsStars } from "react-icons/bs";
import Picture from "../common/Picture";

function ProjectCards(props) {
  const { tags = [], category, featured, image } = props;

  return (
    <Card className="project-card-view">
      {featured && (
        <div className="project-card-featured">
          <BsStars /> Featured
        </div>
      )}

      {image ? (
        <Picture
          avif={image.avif}
          webp={image.webp}
          width={image.width}
          height={image.height}
          alt="card-img"
          className="card-img-top"
        />
      ) : (
        <div
          className="project-card-noimg"
          style={{ "--noimg-accent": props.accentColor || "#00d2ff" }}
        >
          <span className="project-card-noimg-glyph">{props.glyph || "◆"}</span>
        </div>
      )}

      <Card.Body>
        {category && <div className="project-card-badge">{category}</div>}
        <Card.Title>{props.title}</Card.Title>
        <Card.Text style={{ textAlign: "justify" }}>
          {props.description}
        </Card.Text>

        {tags.length > 0 && (
          <div className="project-card-tags">
            {tags.map((tag, i) => (
              <span key={i} className="project-card-tag">
                {tag}
              </span>
            ))}
          </div>
        )}

        <Button variant="primary" href={props.ghLink} target="_blank">
          <BsGithub /> &nbsp;
          {props.isBlog ? "Blog" : "GitHub"}
        </Button>
        {"\n"}
        {"\n"}

        {/* If the component contains Demo link and if it's not a Blog then, it will render the below component  */}
        {!props.isBlog && props.demoLink && (
          <Button
            variant="primary"
            href={props.demoLink}
            target="_blank"
            style={{ marginLeft: "10px" }}
          >
            <CgWebsite /> &nbsp;
            {"Demo"}
          </Button>
        )}
      </Card.Body>
    </Card>
  );
}
export default ProjectCards;
