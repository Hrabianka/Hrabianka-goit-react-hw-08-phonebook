import { Box, Text } from '@chakra-ui/react';
import { Helmet } from 'react-helmet';

export default function Home() {
  return ( 
    

    <Box
      height="80vh" 
      display="flex" 
      alignItems="center" 
      justifyContent="center" 
      backgroundColor="rgba(81, 224, 240, 0.79))"
      
    >
      <Helmet>
        <title>Phonebook</title>
      </Helmet>
      <Text
        fontWeight="bold"
        color="rgba(83, 161, 230, 0.98)"
        fontSize="30px"
        textAlign="center"
      >
        Your Phonebook!
      </Text>
    </Box>  

);
}