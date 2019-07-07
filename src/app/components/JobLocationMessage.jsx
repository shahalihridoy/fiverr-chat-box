import React from "react";
import SimpleMessage from "./SimpleMessage";
import { Fab } from "@material-ui/core";

const JobLocationMessage = ({ option = [], ...rest }) => {
  const handleRegionSelect = option => {
    // save user response to your database here
    console.log(option);
  };

  return (
    <SimpleMessage {...rest}>
      <div className="flex flex-wrap flex-middle flex-center">
        {option.map(location => (
          <Fab
            key={location}
            onClick={() => handleRegionSelect(location)}
            className="px-32 mt-16 mx-8 capitalize"
            color="primary"
            variant="extended"
            size="medium"
          >
            {location}
          </Fab>
        ))}
      </div>
    </SimpleMessage>
  );
};

export default JobLocationMessage;
