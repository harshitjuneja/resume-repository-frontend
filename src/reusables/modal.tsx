/* Building a pluggable modal for submission confirmation */

import React from "react";
import { Box, Button, Flex, Heading, Text } from "rebass";

export default class UploadResume extends React.Component {
  public render() {
    return (
      <Text fontFamily="system-ui,sans-serif">
        <Box px={3} py={5} color="white" bg="magenta">
          <Heading as="h3" textAlign="center" fontSize={[4, 5, 6]}>
            Drag And Drop Your Resume Here
          </Heading>
        </Box>
        <Flex px={3} py={4} alignItems="center">
          <Box mx="auto" />
          <Button>Upload</Button>
        </Flex>
      </Text>
    );
  }
}
