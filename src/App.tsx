import React from 'react';
import './App.css';
import UserProfile from './pages/UserProfile';
import { Center, ChakraProvider } from '@chakra-ui/react';

function App() {
  return (
    <ChakraProvider>
      <Center minH="100vh">
        <UserProfile />
      </Center>
    </ChakraProvider>
  );
}

export default App;
