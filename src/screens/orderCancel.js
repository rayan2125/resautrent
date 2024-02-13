import { StyleSheet, Text, View,KeyboardAvoidingView, TouchableOpacity } from 'react-native'
import React from 'react'
import { AlertDialog, Button, Center,VStack } from 'native-base'
import { useDispatch } from 'react-redux'
import { logout } from '../redux/Reducers/authReducers'
import {  useNavigation } from '@react-navigation/native'

const OrderCancel = () => {
let dispatch= useDispatch()
const navigation = useNavigation()
    const handleData =  () => {
        dispatch(logout())
        navigation.navigate("Login")
      };
      
return(
<View style={{flex:1,justifyContent:"center",alignItems:"center"}}>
    {/* <DeletBtn/>
    <Example/> */}
    <View>
        <Text>checking</Text>
        <TouchableOpacity 
        onPress={handleData}
        >
            <Text>Check</Text>
        </TouchableOpacity>
    </View>
</View>
)
    
  
}

export default OrderCancel

const styles = StyleSheet.create({})

export const DeletBtn = () => {
    const [isOpen, setIsOpen] = React.useState(false);

    const onClose = () => setIsOpen(false);
    const cancelRef = React.useRef(null);
    return <Center>
        <Button colorScheme="danger" onPress={() => setIsOpen(!isOpen)}>
            Delete Customer
        </Button>
        <AlertDialog leastDestructiveRef={cancelRef} isOpen={isOpen} onClose={onClose}>
            <AlertDialog.Content>
                <AlertDialog.CloseButton />
                <AlertDialog.Header>Delete Customer</AlertDialog.Header>
                <AlertDialog.Body>
                    This will remove all data relating to Alex. This action cannot be
                    reversed. Deleted data can not be recovered.
                </AlertDialog.Body>
                <AlertDialog.Footer>
                    <Button.Group space={2}>
                        <Button variant="unstyled" colorScheme="coolGray" onPress={onClose} ref={cancelRef}>
                            Cancel
                        </Button>
                        <Button colorScheme="danger" onPress={onClose}>
                            Delete
                        </Button>
                    </Button.Group>
                </AlertDialog.Footer>
            </AlertDialog.Content>
        </AlertDialog>
    </Center>;
}
 export const Example = () => {
    return <KeyboardAvoidingView h={{
      base: "400px",
      lg: "auto"
    }} behavior={Platform.OS === "ios" ? "padding" : "height"}>
        <Center>
          <VStack flex="1" justifyContent="flex-end" w="100%" maxW="300">
            <Heading mb="3">Forgot Password</Heading>
            <Text color="muted.400">
              Not to worry! Enter email address associated with your account and
              we’ll send a link to reset your password.
            </Text>
            <Input placeholder="Email Address" mt="10" mb="4" />
            <Button mb="4">Proceed</Button>
          </VStack>
        </Center>
      </KeyboardAvoidingView>;
  };