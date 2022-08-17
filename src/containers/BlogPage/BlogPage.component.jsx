import React from "react";
import { useParams } from "react-router-dom";
import "./BlogPage.styles.scss";
import { Reviews } from '../../data/Reviews';

const BlogPage = () => {
  const { blogName } = useParams();
  const review = Reviews.find(review => review.key === blogName);

  if (review === undefined) {
    return (
      <div>
        <h1>No results</h1>
      </div>
    );
  }

  return (
    <div>
      <h1>{review.name}</h1>
      {review.ratings.map((rating, i) => 
        <div>
          <h2>{rating.name}</h2>
          <h3>{rating.score}</h3>
          <h4>{rating.description}</h4>
        </div>
      )}
    </div>
  );
}

export default BlogPage;
