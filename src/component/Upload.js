import { Heading, Input, VStack ,Box, FormLabel, Button} from '@chakra-ui/react'
import React from 'react'

function Upload() {
  return (
    <div>
        <VStack>
            <Heading as="h3" size="xl" pl={"5"}>Enter Your Credentails here</Heading>
            <Box display={"flex"} flexWrap="wrap" pl="20%" pr="20%">
                <FormLabel width="100%">Enter Name</FormLabel>
                <Input placeholder="Name"  size="md"></Input>
                <FormLabel>Enter Event Name</FormLabel>
                <Input placeholder='eventName' size="md"></Input>
                <FormLabel>Enter </FormLabel>
                <Input placeholder='position' size="md"></Input>
                <FormLabel>Enter Awards/Prize Money </FormLabel>
                <Input placeholder='Awards' size="md"></Input>
                <FormLabel>Enter Organiser Name</FormLabel>
                <Input placeholder='Organiser' size="md"></Input>
            </Box>
            <Button>Submit</Button>
        </VStack>
    </div>
  )
}

export default Upload