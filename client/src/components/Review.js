import React from "react";
import "../styles/Review.css";
import { SectionData } from "../data/Sections.js";
import { InputText } from "primereact/inputtext";
import { FloatLabel } from "primereact/floatlabel";
import { InputText } from "primereact/inputtext";
import { Button } from "primereact/button";
import { InputTextarea } from "primereact/inputtextarea";

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
    setCrn("");
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

  const handleReviewDelete = (index) => {
    const newReviews = reviews.filter((_, i) => i !== index);
    setReviews(newReviews);
    localStorage.setItem(crn, JSON.stringify(newReviews));
  };

  const handleReviewEdit = (index) => {
    const newReview = prompt("Edit your review:", reviews[index]);
    if (newReview !== null) {
      const newReviews = reviews.map((rev, i) =>
        i === index ? newReview : rev
      );
      setReviews(newReviews);
      localStorage.setItem(crn, JSON.stringify(newReviews));
    }
  };

  // Scale the review container to the window size
  React.useEffect(() => {
    const handleResize = () => {
      const container = document.querySelector(".review-page");
      container.style.height = `calc(100vh - 80px)`;
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="review-page">
      <div className="review-container">
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
              <label htmlFor="crn">Section CRN</label>
            </FloatLabel>
            <Button label="Search" />
          </form>
        </div>
        {section && (
          <>
            <div className="section-details-wrapper">
              <div className="section-details">
                <h3>Section Details</h3>
                <p>Year: {section.year}</p>
                <p>Term: {section.term}</p>
                <p>CRN: {section.crn}</p>
                <p>
                  Course: {section.subject} {section.number}
                </p>
                <p>Title: {section.title}</p>
                <p>Instructor: {section.instructor}</p>
                <p>GPA: {section.gpa}</p>
                <p>Enrollments: {section.enrollments}</p>
                <p>Credits: {section.credits}</p>
              </div>
            </div>
            <div className="review-input">
              <form onSubmit={handleReviewSubmit}>
                <h3>Submit a Review</h3>
                <InputTextarea
                  value={review}
                  onChange={(e) => setReview(e.target.value)}
                  rows={5}
                  cols={30}
                  placeholder="Write your review here."
                  className="review-textarea"
                />
                <div className="review-submit-button">
                  <Button label="Submit" />
                </div>
              </form>
            </div>
            <div className="reviews-list">
              <h3>Reviews</h3>
              <table>
                <thead>
                  <tr>
                    <th>Review</th>
                    <th>Edit</th>
                    <th>Delete</th>
                  </tr>
                </thead>
                <tbody>
                  {reviews.map((rev, index) => (
                    <tr key={index}>
                      <td>{rev}</td>
                      <td>
                        <Button
                          label="Edit"
                          onClick={() => handleReviewEdit(index)}
                          className="p-button-secondary p-button-sm"
                        />
                      </td>
                      <td>
                        <Button
                          label="Delete"
                          onClick={() => handleReviewDelete(index)}
                          className="p-button-danger p-button-sm"
                        />
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default Review;
