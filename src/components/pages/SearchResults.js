import React from "react";

const SearchResults = props => {
  let dogList;
  if (props.resultsArray === "Breed not found") {
    dogList = <h3>No dogs found</h3>;
  } else {
    dogList = (
      <ul className="list-group search-results">
        {props.resultsArray.map(result => (
          <li key={result} className="list-group-item">
            <img alt="Dog" src={result} className="img-fluid" />
          </li>
        ))}
      </ul>
    );
  }

  return (
    <div>
      <h2>Search Results</h2>
      {dogList}
    </div>
  );
};

export default SearchResults;
