import React from "react";
import { Box, Heading, Text } from "rebass";

export default class HeaderBar extends React.Component {
  public render() {
    return (
      <>
        <Text fontFamily="system-ui,sans-serif">
          <Box px={3} py={2} color="white" bg="black">
            <Heading as="h3" textAlign="center" fontSize={[4, 5, 6]}>
              Supposed to be Header
            </Heading>
          </Box>
        </Text>
      </>
    );
  }
}
