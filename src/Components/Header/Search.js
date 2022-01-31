import { SearchInput, SearchFormStyled } from "../../Utils/Styled Components/StyledSearch";
import { Button } from "../../Utils/Styled Components/StyledContainer";
import { useState } from "react";

const SearchForm = ({ getSearchResult }) => {

  const [term, setTerm] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const handleClick = () => {
    getSearchResult(term);
  };



  return (
    
      <SearchFormStyled
        onSubmit={handleSubmit}
      >
        <SearchInput
          type="search"
          placeholder="Search"
          aria-label="Search"
          value={term}
          data-testid="search-input"
          onChange={(e) => setTerm(e.target.value)}
        />
        <Button onClick={handleClick}>
          Search
        </Button>
      </SearchFormStyled>
  );
};

export default SearchForm;