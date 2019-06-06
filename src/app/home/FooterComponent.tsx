import React from "react";
import { Box, Heading, Text } from "rebass";

export default class HeaderBar extends React.Component {
  public render() {
    return (
      <>
        <Text fontFamily="system-ui,sans-serif">
          <Box my={0} px={0} color="white" bg="black">
            footer
          </Box>
        </Text>
      </>
    );
  }
}
