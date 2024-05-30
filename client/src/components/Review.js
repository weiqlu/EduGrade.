import React from "react";
import "../styles/Review.css";
import { SectionData } from "../data/Sections.js";
import { InputText } from "primereact/inputtext";
import { FloatLabel } from "primereact/floatlabel";
import { InputText } from "primereact/inputtext";
import { Button } from "primereact/button";

function Review() {
  const [crn, setCrn] = React.useState("");
  const [section, setSection] = React.useState(null);
  const [review, setReview] = React.useState("");
  const [reviews, setReviews] = React.useState([]);

  React.useEffect(() => {
    if (crn) {
      const storedReviews = localStorage.getItem(crn);
      if (storedReviews) {
        setReviews(JSON.parse(storedReviews));
      } else {
        setReviews([]);
      }
    }
  }, [crn]);

  const handleSubmit = (event) => {
    event.preventDefault();
    const foundSection = SectionData.getData().find((sec) => sec.crn === crn);
    setSection(foundSection || null);
  };

  const handleReviewSubmit = (event) => {
    event.preventDefault();
    if (section) {
      const newReviews = [...reviews, review];
      setReviews(newReviews);
      localStorage.setItem(crn, JSON.stringify(newReviews));
      setReview("");
    }
  };

  return (
    <div className="review-page">
      <h2>Review Page</h2>
      <div className="review-search">
        <form onSubmit={handleSubmit}>
          <FloatLabel>
            <InputText
              id="crn"
              value={crn}
              onChange={(event) => {
                setCrn(event.target.value);
              }}
            />
            <label htmlFor="crn"> Section CRN </label>
          </FloatLabel>
          <Button label="Primary" raised onClick={handleSubmit} />
        </form>
      </div>
    </div>
  );
}

export default Review;
