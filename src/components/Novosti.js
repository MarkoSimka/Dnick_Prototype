import React, { useEffect, useState } from "react";
import "./Novosti.css";

export default function Novosti() {
  const [isLoading, setIsLoading] = useState(true);

  const hasCovid = localStorage.getItem("covid");

  useEffect(() => {
    setTimeout((e) => {
      setIsLoading(false);
    }, 3000);
  }, []);

  return (
    <>
      <div className="container">
        <div className="news">
          <h1>Did you know?</h1>
          <div>
            <h2>SECTION HEADING</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis at
              lacus lobortis, rhoncus ligula a, dignissim tortor. Proin
              dignissim molestie consequat. Curabitur id quam vitae nisi
              ullamcorper malesuada. Phasellus lacus ex,
            </p>
          </div>
          <div>
            <h2>SECTION HEADING</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis at
              lacus lobortis, rhoncus ligula a, dignissim tortor. Proin
              dignissim molestie consequat. Curabitur id quam vitae nisi
              ullamcorper malesuada. Phasellus lacus ex,
            </p>
          </div>
          <div>
            <h2>SECTION HEADING</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis at
              lacus lobortis, rhoncus ligula a, dignissim tortor. Proin
              dignissim molestie consequat. Curabitur id quam vitae nisi
              ullamcorper malesuada. Phasellus lacus ex,
            </p>
          </div>
        </div>

        {isLoading === true ? (
          <div className="loader container">
            <i className="fas fa-solid fa-spinner fa-spin"></i>
          </div>
        ) : (
          <div className="loader container">
            {hasCovid === "true" ? (
              <p className="color-red">Позитивен сте</p>
            ) : (
              <p className="color-green">Негативен сте</p>
            )}
          </div>
        )}
      </div>
    </>
  );
}
