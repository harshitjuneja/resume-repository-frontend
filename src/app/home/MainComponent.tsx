import React from "react";
import DragAndDropFileUpload from "../../reusables/dragAndDropFileUpload";

export class MainComponent extends React.Component {

  /* state = {
    listOfFiles;
  }; */

  public render() {
    return (<DragAndDropFileUpload handleFileDrop={this.handleResumeDrop}>
      {/* <div>{this.state.listOfFiles}</div> */}
    </DragAndDropFileUpload>);
  }


// callback prop method to handleDrop event
// tslint:disable-next-line: no-empty
  public handleResumeDrop(e){
    //push file to database
    //check file extension and validate for file size and format
    return e;
  }

  public convertFileToBinary(file: any , fileType: any): BinaryType{

    return ;

  }

  public sendFileToServer(){

    return;
  }

};

export default MainComponent;
