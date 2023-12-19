import axios from "axios";
import React, { useState ,useEffect} from "react";
import { FiSearch } from "react-icons/fi";
import { ApiServer } from "../../ApiConstant";

// document.getElementById('datatable-search-input').addEventListener('input', (e) => {
//   //instance.input-group(e.target.value);
 
 
//   console.log("value",e.target.value)
//   console.log("service")


// });
const Search = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [originalResults, setOriginalResults] = useState([]);
  const handleSearch =  (e) => {
    const query = e.target.value.toLowerCase();
    //console.log("click", e.target.value.toLowerCase(),"data",searchResults)
    const filteredResults = originalResults.filter(
      (file) => file.file_name.toLowerCase().includes(query)
    );
    setSearchQuery(query);
    setSearchResults(filteredResults);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      // Perform additional actions when Enter key is pressed
      // For example, redirect to a search results page
      console.log("Search for:", searchQuery);
    }
  };
  const access_token =localStorage.getItem("access_token")

  useEffect(() => {
    const fetchfileData = async () => {
      try {
        const response = await axios.get(ApiServer + '/api/admin/get-file/', {
        
        });
  
        const filedata = response.data;
        if (filedata) {
        
          setSearchResults(filedata);
          setOriginalResults(filedata);
         
         
        }
  
  
  
  
        // ... do something with the response data
      } catch (error) {
        // Handle error
        console.error(error);
        console.log("file load  error");
       
        // ... handle the error
      }
    };
  
    fetchfileData();
  }, []);
  const positionAbsolute = {
    position: 'absolute',
    backgroundColor: 'white', // customize the background color
    color: 'grey', // customize the text color
    borderRadius: '4px',
    fontSize:'15px',
    width:'390px',
    padding:'10px 10px',
    border:' 1px solid #f3f6f7',
    
  
  };
 
   
  return (
    <div>
      <div className="relative">
        <span className="absolute flex justify-center mt-2 left-4">
          <FiSearch />
        </span>
        <input
          className="p-2 pl-10 w-42 md:w-72 lg:w-96 rounded-lg text-xs text-textgray"
          type="search"
          placeholder="search document here..."
          id="datatable-search-input"
          // onChange={(e) => setSearchQuery(e.target.value)}
          value={searchQuery}
          onChange={handleSearch}
          onKeyDown={handleKeyDown}
        />
      </div>
      {searchQuery && (
  <div className="mt-2" style={positionAbsolute} >
    <ul>
      {searchResults
        .filter((file) =>
          file.file_name.toLowerCase().startsWith(searchQuery.toLowerCase())
        )
        .map((file) => (
          <li key={file.id}  className="search_list">
            <a
              href={`${ApiServer}/api/admin/view-file/${file.id}`} // Replace with your API endpoint to fetch the PDF file
              target="_blank"
              rel="noopener noreferrer"
            >
              {file.file_name}
            </a>
          </li>
        ))}
    </ul>
  </div>
)}










      {/* {searchQuery && (
  <div className="mt-4" style={positionAbsolute}>
    <ul>
      {searchResults
        .filter((file) =>
          file.file_name.toLowerCase().startsWith(searchQuery.toLowerCase())
        )
        .map((file) => (
          <li key={file.id}>{file.file_name}</li>
        ))}
    </ul>
  </div>
)} */}
    </div>
  );
};

export default Search;
