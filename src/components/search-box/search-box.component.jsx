import './search-box.styles.css';

const SearchBox = (props) => {
    const { onChangeHandler, className, placeholder } = props;
    return (
        <div>
            <input
                className={`search-box ${className}`}
                type="search"
                placeholder={placeholder}
                onChange={onChangeHandler}
            />
        </div>
    )
}

export default SearchBox;