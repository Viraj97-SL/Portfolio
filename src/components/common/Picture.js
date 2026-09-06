import React from "react";

// Renders <picture> with AVIF + WebP sources and an explicit width/height
// so the browser can reserve layout space before either format loads.
function Picture({
  avif,
  webp,
  alt,
  width,
  height,
  className,
  style,
  loading = "lazy",
  fetchPriority,
  onClick,
}) {
  return (
    <picture style={{ display: "contents" }}>
      <source srcSet={avif} type="image/avif" />
      <source srcSet={webp} type="image/webp" />
      <img
        src={webp}
        alt={alt}
        width={width}
        height={height}
        className={className}
        style={style}
        loading={loading}
        fetchpriority={fetchPriority}
        decoding="async"
        onClick={onClick}
      />
    </picture>
  );
}

export default Picture;
