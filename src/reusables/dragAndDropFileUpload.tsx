/* A wrapper component that makes a div accept drag and drop files */

/* What's a draggable area
1. It highlights when files are there
2. Nothing happens when no files there
3. If file dropped, accept the file
4. If file is there, but not dropped -> highlight and not highlight

What are highlight's based on:
presence of file : will need a state to cater to this
isFileinDropbox

// event listeners to listen for:
1. when cursor in box (with or without file)
2. when a file is dropped: dropping events.

*/
import React from "react";
import { Box, Button, Flex, Heading, Text } from "rebass";

export default class DragAndDropFileUpload extends React.Component {

  public dropRef = React.createRef();

  public constructor(props: any) {
    super(props);
  }

  public componentDidMount() {
    let div = this.dropRef.current;
    
    div.addeventListener('dragEnter', handleDragEnter);
    div.addeventListener('dragLeave', handleDragEnter);
    div.addeventListener('dragEnter', handleDragEnter);
    div.addeventListener('dragEnter', handleDragEnter);

  }

  public componentWillMount() {

  }

  public render() {
    return (
      <Text fontFamily="system-ui,sans-serif">
        <Box mt={5} mb={0.5} ml={5} mr={5} p={4} color="white" bg="magenta">
          <Heading as="h5" textAlign="center" fontSize={[4, 5, 6]}>
            Drop File Here
          </Heading>
          <Flex px={3} py={4} alignItems="center">
            <Button mx="auto" mt={5} backgroundColor="black">
              Choose file
            </Button>
          </Flex>
        </Box>
        <Flex px={3} py={4} alignItems="center">
          <Box mx="auto">
            <Button backgroundColor="black">Send</Button>
          </Box>
        </Flex>
      </Text>
    );
  }
}
