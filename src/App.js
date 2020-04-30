import React, { useState } from 'react';
import './App.css';

import { ThemeProvider, CSSReset, Input, PseudoBox ,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button
} from "@chakra-ui/core";

import ListItem from "./listItem"

function App() {

  const [state, setState] = useState({
    list: [],
    inputText: "",
    modalInputText: "",
    selectedItem: null,
    isOpen: false
  })



  const onClose = () => {
    setState({...state, isOpen: false})
  }


  return (

    <ThemeProvider>
      <CSSReset />


      <PseudoBox
        width="65%"
        margin="0 auto"
        paddingTop="55px"
      >
        <Input 
          placeholder="Add todo" 
          value={state.inputText}
          onChange={(e) => {
            setState({...state, inputText: e.target.value})
          }}
          onKeyUp={(e) => {
            if (e.keyCode === 13) {
              setState({...state, list: state.list.concat(e.target.value),inputText : "" })
            }
          }}
        />  

        {/* mapping the list */}
        {state.list.map((listItem, index) => {
          return (
            <ListItem 
              key={index}
              listItem={listItem}
              deleteClick={(deleteItem) => {
                let newList = state.list.filter(item => {
                  if (item !== deleteItem) {
                    return item
                  }
                })
                setState({...state, list: newList})
              }}
              editClick={(editItem) => {
                setState({...state, selectedItem: editItem, isOpen: true})
              }}
            />
          )
        })}

        {/* all modals */}
        <Modal isOpen={state.isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Modal Title</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              <Input
                placeholder="Update todo"
                value={state.modalInputText}
                onChange={(e) => {
                  setState({ ...state, modalInputText: e.target.value })
                }}

              />
            </ModalBody>

            <ModalFooter>
              <Button variantColor="blue" mr={3} onClick={onClose}>
                Close
              </Button>
              <Button 
                variant="ghost"
                onClick={() => {


                  // replace the item in the list 
                  let newList = state.list.map(item => {
                    if (item === state.selectedItem) {
                      return state.modalInputText
                    } else {
                      return item
                    }
                  })

                  setState({ ...state, list: newList, isOpen: false })
                }}
              >
                Submit
              </Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </PseudoBox>
    </ThemeProvider>
  );
}

export default App;
