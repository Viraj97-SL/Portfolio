import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { CgWebsite } from "react-icons/cg";
import { BsGithub, BsStars } from "react-icons/bs";
import Picture from "../common/Picture";

const MAX_VISIBLE_TAGS = 3;

function ProjectCards(props) {
  const { tags = [], category, featured, image } = props;
  const visibleTags = tags.slice(0, MAX_VISIBLE_TAGS);

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
          className="card-img-top media-grade"
        />
      ) : (
        <div
          className="project-card-noimg"
          style={{ "--noimg-accent": props.accentColor || "var(--accent)" }}
        >
          <span className="project-card-noimg-glyph">{props.glyph || "◆"}</span>
        </div>
      )}

      <Card.Body>
        {category && <div className="project-card-badge">{category}</div>}
        <Card.Title className="project-card-title">{props.title}</Card.Title>
        <Card.Text className="project-card-description">
          {props.description}
        </Card.Text>

        {visibleTags.length > 0 && (
          <div className="project-card-tags">
            {visibleTags.map((tag, i) => (
              <span key={i} className="project-card-tag">
                {tag}
              </span>
            ))}
          </div>
        )}

        <div className="project-card-actions">
          <Button variant="primary" href={props.ghLink} target="_blank">
            <BsGithub /> &nbsp;
            {props.isBlog ? "Blog" : "GitHub"}
          </Button>

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
        </div>
      </Card.Body>
    </Card>
  );
}
export default ProjectCards;
