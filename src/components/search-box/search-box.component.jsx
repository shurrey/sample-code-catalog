import './search-box.styles.css';

const SearchBox = ({ className, placeholder, onChange }) => {
    <div>
        <input 
            className={`search-box ${className}`} 
            type='search' 
            placeholder={placeholder} 
            onChange={onChange} 
        />
    </div>
}

export default SearchBox;