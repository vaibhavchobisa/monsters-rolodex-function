import './search-box.styles.css';
import { ChangeEvent, ChangeEventHandler } from 'react';

type SearchBoxProps = {
    className: string;
    placeholder?: string;
    // onChangeHandler: ChangeEventHandler<HTMLInputElement>
    // Instead of above, using the change event from react itself as below
    onChangeHandler: (event: ChangeEvent<HTMLInputElement>) => void;
}

const SearchBox = ({ 
    className, 
    placeholder, 
    onChangeHandler
}: SearchBoxProps) =>  (
    <input
        className={`search-box ${className}`}
        type="search"
        placeholder={placeholder}
        onChange={onChangeHandler}
    />
);

export default SearchBox;