import { Box, Flex, Heading, useMediaQuery,Input,Button,Text } from '@chakra-ui/react'
import React from 'react'

function Download() {
    const [isNotSmallerScreen]=useMediaQuery("(min-width: 600px)");
    return (
        <div>
            <Heading  as="h3" size="xl" >Verify Your Certificate here</Heading>
            <Box display="flex" alignItems="center" justifyContent='center' flexDirection="column" p={isNotSmallerScreen?"1%":"5%"}>
                <Text fontSize='2xl'>Enter Your token number</Text>
                <Flex flexDirection={isNotSmallerScreen?"row":"column"}
                spacing="20px" p={isNotSmallerScreen?"10":"0"}
                alignSelf="flex-start" alignItems={"center"}>
                    <Input placeholder='Token No.' variant='flushed' size='md' m={"5"}/>
                    <Button colorScheme='teal' size='md' variant="outline" >
                        Submit
                    </Button>

                </Flex>
            </Box>
            
        </div>
    )
}

export default Download