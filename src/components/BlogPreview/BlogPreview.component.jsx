import React from "react";
import { useNavigate } from "react-router-dom";

import "./BlogPreview.styles.scss";

const BlogPreview = ({ review }) => {
  const navigate = useNavigate();

  return (
    <div onClick={() => navigate(`/blogs/${review.key}`)} className="blog-preview" style={{ backgroundImage: `url(${review.images.main})` }}>
      <div className="inner">
        <div className="name">{review.name}</div>
        <div className="rating">{review.name}</div>
      </div>
    </div>
  );
};

export default BlogPreview;
