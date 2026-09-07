import React from "react";
import Picture from "./Picture";
import "./page-header.css";

// Same scrim technique as the hero, at a 3:1 panoramic aspect ratio.
function PageHeader({ label, children, description, avif, webp }) {
  return (
    <div className="page-header">
      {avif && webp ? (
        <Picture
          avif={avif}
          webp={webp}
          width={1920}
          height={634}
          alt=""
          className="page-header-bg media-feather-bottom media-grade"
          loading="eager"
          fetchPriority="high"
        />
      ) : (
        <div className="page-header-bg-placeholder" />
      )}
      <div className="page-header-scrim" />
      <div className="page-header-content">
        {label && <p className="label page-header-label">{label}</p>}
        <h1 className="page-header-title">{children}</h1>
        {description && <p className="page-header-description">{description}</p>}
      </div>
    </div>
  );
}

export default PageHeader;
