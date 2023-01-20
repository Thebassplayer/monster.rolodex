import "./search-box.styles.css"

interface ISearchBoxProps {
  className: string,
  placeholder?: string
};

interface ISearchBoxState {
  onChangeHandler: (value: string) => void
}

type SearchBoxProps = {
  className: string;
  placeholder?: string;
  onChangeHandler: (value: string) => void;
};

const SearchBox = ({className, placeholder, onChangeHandler}: SearchBoxProps) => (
  <input
    className={`search-box ${className}`}
    type="search"
    placeholder={placeholder}
    onChange={onChangeHandler}
  />
    )

export default SearchBox