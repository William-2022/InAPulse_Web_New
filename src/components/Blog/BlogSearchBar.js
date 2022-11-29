import {
  Autocomplete,
  CircularProgress,
  MenuItem,
  TextField,
} from "@mui/material";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { searchBlogPostbyQueryTerms } from "../../apis/blog";
import SearchIcon from '@mui/icons-material/Search';

const BlogSearchBar = () => {
  const [term, setTerm] = useState("");
  const [loading, setIsLoading] = useState(false);
  const [searchResult, setSearchResult] = useState([]);
  const navigate = useNavigate();

  const resultOptions = searchResult.map((result) => {
    return { ...result, value: result.id };
  });

  const onTermChange = (e) => {
    if (e?._reactName === "onChange") {
      const currentTerm = e?.target?.value || "";
      if (currentTerm?.length >= 3) {
        setIsLoading(true);
        searchBlogPostbyQueryTerms(currentTerm)
          .then((resultList) => {
            setSearchResult(resultList);
          })
          .finally(setIsLoading(false));
      } else {
        setSearchResult([]);
      }
      setTerm(currentTerm);
    }
    if (e?.reactName === "onClick") {
      //console.log(e.target);
    }
  };
  const handleResultClick = (postId) => {
    navigate(`/blog/${postId}`);
  };

  return (
    <>
      <Autocomplete
        inputValue={term}
        onInputChange={onTermChange}
        noOptionsText={'No Result'}
        options={resultOptions}
        sx={{bgcolor:"grey.300",borderRadius:"10px"}}
        getOptionLabel={(option) => option.title}
        renderInput={(params) => (
          <TextField
            {...params}
            variant="standard"
            placeholder="Search"
            fullWidth
            InputProps={{
              ...params.InputProps,
              disableUnderline: true, 
              sx:{height:"50px",px:"5%"},
              startAdornment:<SearchIcon sx={{mr:1}}/>,
              endAdornment: loading ? <CircularProgress size={20}  sx={{color:"grey.800"}} /> : <></>,
            }}
          />
        )}
        renderOption={(props, option) => (
          <MenuItem onClick={() => handleResultClick(option.id)}>
            {option.title.length >= 30
              ? option.title.slice(0, 30) + "..."
              : option.title}
          </MenuItem>
        )}
        open={term.length >= 3}
      />
    </>
  );
};

export default BlogSearchBar;
