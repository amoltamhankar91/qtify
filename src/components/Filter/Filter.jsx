import { Tab, Tabs } from "@mui/material";
import React from "react";

const Filter = (props) => {
  const { filters, selectedFilterIndex, setFilterIndex } = props;
  const handleChange = (event, value) => {
    setFilterIndex(value);
  };

  return (
    <div>
      <Tabs
        value={selectedFilterIndex}
        TabIndicatorProps={{
          style: {
            backgroundColor: "green",
          },
        }}
        onChange={handleChange}
      >
        {filters.map((element, index) => {
          <Tab className={"adas"} label={element.label} id={index} />;
        })}
      </Tabs>
    </div>
  );
};

export default Filter;
