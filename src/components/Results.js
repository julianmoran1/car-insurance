import React from "react";
import PropTypes from "prop-types";

export default function Results({ summary }) {
  const { plan, year, brand, result } = summary;
  return (
    <div>
      <h2>Results</h2>
      <p>You choose the {plan} plan</p>
      <p>
        Your car is {brand} from year {year}
      </p>
      <p>The price of your insurance is $ {result}</p>
    </div>
  );
}

Results.propTypes = {
  summary: PropTypes.object.isRequired,
};
