import React from "react";
import BlogPreview from "../../components/BlogPreview/BlogPreview.component";
import { Reviews } from "../../data/Reviews";

import "./BlogsPage.styles.scss";

const BlogsPage = () => {
  return (
    <div className="blogs-page">
      <div className="blogs-page-title">Blogs</div>
      <div className="blogs-section">
        {Reviews.map(review =>
          <BlogPreview key={review.key} review={review} />
        )}
      </div>
    </div>
  );
}

export default BlogsPage;
