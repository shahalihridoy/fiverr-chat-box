import React from "react";
import SimpleMessage from "./SimpleMessage";
import { Fab } from "@material-ui/core";

const UploadResumeMessage = ({ region = [], ...rest }) => {
  const [dropBoxElevationClass, setDropBoxElevationClass] = React.useState("");

  const handleResumeSelection = event => {
    event.persist();
    let file = event.target.files[0];

    // upload your file to your serve here
    console.log(file);
  };

  const handleDragOver = event => {
    event.preventDefault();
  };

  const handleDrop = event => {
    event.preventDefault();
    event.persist();
    let file = event.dataTransfer.files[0];
    console.log(file);
    setDropBoxElevationClass("");
  };

  const handleDragStart = event => {
    event.preventDefault();
    setDropBoxElevationClass("drop-shadow");
  };

  return (
    <SimpleMessage {...rest}>
      <div className="flex-column flex-middle flex-center mt-16">
        <div
          onDragEnter={handleDragStart}
          onDragOver={handleDragOver}
          onDrop={handleDrop}
          className={`${dropBoxElevationClass} drop-box-holder p-12`}
        >
          <div className="drop-box text-center h-100 w-100">
            <h4 className="fw-600 uppercase text-muted y-center relative">
              Drop a File Here
            </h4>
          </div>
        </div>
        <label htmlFor="upload-resume">
          <Fab
            className="px-32 mt-16 mx-8 capitalize"
            color="primary"
            variant="extended"
            size="medium"
            component="span"
          >
            select a file
          </Fab>
        </label>
        <input
          className="display-none"
          accept=".xlsx,.xls,image/*,.doc, .docx,.ppt, .pptx,.txt,.pdf"
          onChange={handleResumeSelection}
          id="upload-resume"
          type="file"
        />
      </div>
    </SimpleMessage>
  );
};

export default UploadResumeMessage;
