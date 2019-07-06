import React from "react";

const DocumentCard = ({
  fileName = "hridoy.pdf",
  fileSize = "1221412",
  date = "3/7/2019"
}) => {
  let temp = fileName.split(".");
  let extension = temp[temp.length - 1];
  return (
    <div className="document-card flex mx-8 m-8 p-8 bg-white">
      <div>
        <img src={`./assets/images/${extension}.png`} alt="pdf" />
      </div>
      <div className="w-100 ml-16 flex-column flex-space-between">
        <p className="fw-600 m-0">{fileName}</p>
        <div className="flex flex-space-between pb-3">
          <small>{(fileSize / 1024 / 1024).toFixed(2)} MB</small>
          <small>{date}</small>
        </div>
      </div>
    </div>
  );
};

export default DocumentCard;
