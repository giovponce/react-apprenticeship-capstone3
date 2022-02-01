import { SearchInput, SearchFormStyled } from "../../Utils/Styled Components/StyledSearch";
import { useState } from "react";
import { MdOutlineSearch, MdOutlineClose } from "react-icons/md";

const SearchForm = ({ getSearchResult }) => {

  const [term, setTerm] = useState('');


  const handleClick = (e) => {
    e.preventDefault();
    getSearchResult(term);
  };

  const iconStyle = {
    position: "relative",
    left: "1.5em",
    color: "black"
  };


  return (
    
      <SearchFormStyled
        onSubmit={handleClick}
      >
        <MdOutlineSearch style={iconStyle}/>
        <SearchInput
          type="search"
          placeholder="Search"
          aria-label="Search"
          value={term}
          data-testid="search-input"
          onChange={(e) => setTerm(e.target.value)}
        />
        {term ? () => <MdOutlineClose style={iconStyle} onClick={() => setTerm('')}/> : null}
      </SearchFormStyled>
  );
};

export default SearchForm;