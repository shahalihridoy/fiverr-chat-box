import React, { Component, Fragment } from "react";
import { Icon, IconButton } from "@material-ui/core";
import DocumentCard from "../components/DocumentCard";
import PerfectScrollbar from "react-perfect-scrollbar";

class DocumentList extends Component {
  state = {
    showSearchOpton: false,
    searchQuery: "",
    documentList: []
  };
  documentList = [];
  constructor(props) {
    super(props);

    // get file from api
    new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve([
          {
            fileName: "door.pdf",
            fileSize: "12431241",
            date: "3/7/2019"
          },
          {
            fileName: "resume.xlsx",
            fileSize: "124311241",
            date: "3/7/2019"
          },
          {
            fileName: "resume.doc",
            fileSize: "12431241",
            date: "3/7/2019"
          },
          {
            fileName: "door.pdf",
            fileSize: "12431241",
            date: "3/7/2019"
          },
          {
            fileName: "resume.xlsx",
            fileSize: "124311241",
            date: "3/7/2019"
          },
          {
            fileName: "resume.doc",
            fileSize: "12431241",
            date: "3/7/2019"
          },
          {
            fileName: "door.pdf",
            fileSize: "12431241",
            date: "3/7/2019"
          },
          {
            fileName: "resume.xlsx",
            fileSize: "124311241",
            date: "3/7/2019"
          },
          {
            fileName: "resume.doc",
            fileSize: "12431241",
            date: "3/7/2019"
          }
        ]);
      }, 1000);
    }).then(documents => {
      this.documentList = [...documents];
      this.setState({ documentList: [...documents] });
    });
  }

  handleSearchButtonClick = () => {
    this.setState({ showSearchOpton: !this.state.showSearchOpton });
  };

  handleSearchQueryChange = event => {
    let query = event.target.value;
    let temp = this.documentList.filter(doc => doc.fileName.match(query));
    this.setState({ searchQuery: query, documentList: [...temp] });
  };

  render() {
    let { showSearchOpton, searchQuery } = this.state;
    return (
      <div className="document-list-container relative x-center">
        <div className="document-header bg-primary flex flex-middle flex-space-between pl-16 pr-4">
          {showSearchOpton ? (
            <Fragment>
              <input
                value={searchQuery}
                onChange={this.handleSearchQueryChange}
                placeholder="Search here..."
                className="w-100 text-white fw-600 px-16"
                type="text"
              />
              <IconButton onClick={this.handleSearchButtonClick}>
                <Icon className="text-white">clear</Icon>
              </IconButton>
            </Fragment>
          ) : (
            <Fragment>
              <div className="flex flex-middle">
                <IconButton onClick={() => this.props.history.push("chat")}>
                  <Icon className="text-white">arrow_back</Icon>
                </IconButton>
                <h3 className="fw-600 text-white m-0 ml-32 pb-4">Document</h3>
              </div>
              <div className="search-box">
                <IconButton onClick={this.handleSearchButtonClick}>
                  <Icon className="text-white">search</Icon>
                </IconButton>
              </div>
            </Fragment>
          )}
        </div>
        <div className="document-list">
          <PerfectScrollbar className="h-100 relative">
            <div className="px-24 pt-12 pb-8 flex flex-middle">
              <Icon>list</Icon>
              <div className="ml-16 fw-600 pb-2">Browse your documents</div>
            </div>
            <div>
              {this.state.documentList.map((doc, index) => (
                <DocumentCard key={index} {...doc} />
              ))}
            </div>
          </PerfectScrollbar>
        </div>
      </div>
    );
  }
}

export default DocumentList;
