import React from 'react';
import {
  Flex,
  Button
} from "@chakra-ui/core"

const ListItem = ({
  listItem,
  deleteClick,
  editClick
}) => {
  return (
    <Flex
      bg="gray.100"
      margin="10px 0"
      padding="15px"
      alignItems="center"
      justifyContent="space-between"
    >
      {listItem}


      <Flex>
        <Button
          onClick={() => editClick(listItem)}
        >
          Edit
        </Button>
        <Button
          onClick={() => deleteClick(listItem)}
        >
          Remove
      </Button>
      </Flex>
    </Flex>
  );
};


export default ListItem;