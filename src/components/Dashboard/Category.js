import React from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

const Category = ({ onChange, reason }) => {
  return (
    <Box
      sx={{
        minWidth: 100,
      }}
      className="category-box"
      style={{
        width: "80%",
        alignItem: "center",
        margin: "20px auto",
      }}
    >
      <FormControl fullWidth>
        <InputLabel id="select-input">추천 이유</InputLabel>
        <Select
          labelId="select-label"
          id="select"
          label="Favorite"
          onChange={onChange}
          name="reason"
          value={reason || ""}
        >
          <MenuItem value="분위기">분위기</MenuItem>
          <MenuItem value="음악">음악</MenuItem>
          <MenuItem value="맛">맛</MenuItem>
          <MenuItem value="가까운 거리">가까운 거리</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
};

export default Category;
