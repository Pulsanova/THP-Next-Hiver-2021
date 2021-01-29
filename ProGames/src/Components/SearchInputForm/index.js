import './index.scss';
import icon from './searchIcon.svg'

const SearchInputForm = () => `
    <form id="searchForm" class="SearchInputForm">
        <input
            type="search"
            id="searchInput"
            placeholder="Find a game..."
        />
        <img src="${icon}" class="SearchInputForm__icon" />
    </form>
`;

export default SearchInputForm;
