import "./OurSolution.scss";

import { ourSolutionMock } from "../../constants/ourSolution.mock";

const OurSolution = () => {
  return (
    <div className="flex flex-col our-solution align-center">
      <h1 className="our-sol-heading">{ourSolutionMock.heading}</h1>
      <h2 className="our-sol-subtitle">{ourSolutionMock.subtitle}</h2>
      <div className="flex justify-btw">
        {ourSolutionMock.icons.map((el) => {
          return (
            <div className="flex flex-col align-center">
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="48"
                  viewBox="0 96 960 960"
                  width="48"
                  fill="#25b7a5"
                >
                  <path d="m419 735 289-289-43-43-246 246-119-119-43 43 162 162ZM180 936q-24 0-42-18t-18-42V276q0-24 18-42t42-18h600q24 0 42 18t18 42v600q0 24-18 42t-42 18H180Zm0-60h600V276H180v600Zm0-600v600-600Z" />
                </svg>
              </span>
              <p className="our-sol-icon-description">{el.iconDescription}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default OurSolution;