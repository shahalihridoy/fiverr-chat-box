import React from "react";
import SimpleMessage from "./SimpleMessage";
import { Fab } from "@material-ui/core";

const JobLocationMessage = ({ region = [], ...rest }) => {
  const handleRegionSelect = region => {
    console.log(region);
  };

  return (
    <SimpleMessage {...rest}>
      <div className="flex flex-wrap flex-middle flex-center">
        {region.map(location => (
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
