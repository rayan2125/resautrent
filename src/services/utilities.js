import { Alert, Box, Center, CloseIcon, HStack, IconButton, Text, VStack ,Stack, Spinner, Heading} from "native-base";

export const Success = ({ title, message }) => {
  return (
    <Center  justifyContent="center">
      <VStack space={5} maxW="400">
        <Alert w="100%" status="success" variant="left-accent">
          <VStack space={1} flexShrink={1} w="100%"  flexDirection ="row"alignItems="center">
            <Alert.Icon size="md" />
            

            <Box
              _text={{
                textAlign: "center"
              }}
              marginLeft='5'
              mr="5"
              _dark={{
                _text: {
                  color: "coolGray.600"
                }
              }}
            >
              {message}
            </Box>
          </VStack>
        </Alert>
      </VStack>
    </Center>
  );
};
export const Failed = ({  message }) => {
    return (
      <Center  justifyContent="center">
        <VStack space={5} >
          <Alert  status="error" variant="left-accent">
            <VStack space={1} flexShrink={1} w="100%" flexDirection="row" alignItems="center">
              <Alert.Icon size="md"  />
              
  
              <Box
                _text={{
                  textAlign: "center"
                }}
                ml="5"
                marginRight='5'
                _dark={{
                  _text: {
                    color: "coolGray.600"
                  }
                }}
              >
                {message}
              </Box>
            </VStack>
          </Alert>
        </VStack>
      </Center>
    );
  };
  export const Pending = ({  message }) => {
    return (
      <Center  justifyContent="center">
        <VStack space={5} >
          <Alert  status="warning" variant="left-accent">
            <VStack space={1} flexShrink={1} w="100%" flexDirection="row" alignItems="center">
              <Alert.Icon size="md"  />
              
  
              <Box
                _text={{
                  textAlign: "center"
                }}
                ml="5"
                marginRight='5'
                _dark={{
                  _text: {
                    color: "coolGray.600"
                  }
                }}
              >
                {message}
              </Box>
            </VStack>
          </Alert>
        </VStack>
      </Center>
    );
  };

//   export function Example() {
    
//     return <Stack space={3} w="100%" maxW="400">
        
//        <Alert w="100%" status="success">
//               <VStack space={2} flexShrink={1} w="100%">
//                 <HStack flexShrink={1} space={2} justifyContent="space-between">
//                   <HStack space={2} flexShrink={1}>
//                     <Alert.Icon mt="1" />
//                     <Text fontSize="md" color="coolGray.800">
//                     jjj
//                     </Text>
//                   </HStack>
//                   <IconButton variant="unstyled" _focus={{
//                 borderWidth: 0
//               }} icon={<CloseIcon size="3" />} _icon={{
//                 color: "coolGray.600"
//               }} />
//                 </HStack>
//               </VStack>
//             </Alert>;
    
//       </Stack>;
//   }
// export const CustomLoader = () => {
//   return <HStack space={2} justifyContent="center">
//       <Spinner accessibilityLabel="Loading posts" />
//       <Heading color="primary.500" fontSize="md">
//         Loading
//       </Heading>
//     </HStack>;
// };