
import "./style.css";
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';
const Search = ({search,onSearchChange}) => {
    return(
        <div className="search">
            <SearchRoundedIcon/>
            <input placeholder="Search" type="text" value={search} onChange={(event) => onSearchChange(event)}/>
        </div>
    )
}
export default Search;