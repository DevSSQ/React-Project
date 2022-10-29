import {
    Heading,
    Avatar,
    Box,
    Center,
    Image,
    Flex,
    Text,
    Stack,
    Button,
    useColorModeValue,
  } from '@chakra-ui/react';
  
  export default function Page(props) {
    let register ;
    let color ;
    if (props.expiry>15){
      register = "Available";
      color = '#99cc33';
    }
    else {
      register = "Closed!";
      color = '#cc3300';
    }
    return (
      <div className='cards'>
      <Center py={3}>
        <Box
          maxW={'270px'}
          w={'full'}
          bg={useColorModeValue('white', 'gray.800')}
          boxShadow={'2xl'}
          rounded={'md'}
          overflow={'hidden'}>
          <Image
            h={'120px'}
            w={'full'}
            src={
              'https://images.unsplash.com/photo-1555949963-aa79dcee981c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8ODF8fHByb2dyYW1taW5nfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60'
            }
            objectFit={'cover'}
          />
          <Flex justify={'center'} mt={-12}>
          <Avatar
            size={'xl'}
            img src={props.photo}
            alt={'Author'}
            css={{
              border: '2px solid white',
            }}
          />
        </Flex>
          <Box p={6}>
            <Stack spacing={0} align={'center'} mb={2}>
              <Heading fontSize={'3xl'} fontWeight={500} fontFamily={'monospace'}>
                {props.name}
              </Heading>
              <Text fontSize={'1xl'} color={'gray.500'} align='center' fontFamily={'monospace'}>{props.description}</Text>
            </Stack>
            <Button
              w={'full'}
              mt={3}
              bg={useColorModeValue(color,'gray.900')}
              fontFamily={'monospace'}
              color={'white'}
              rounded={'md'}
              _hover={{
                transform: 'translateY(-2px)',
                boxShadow: 'lg',
              }}>
              {register}
            </Button>
          </Box>
        </Box>
      </Center>
      </div>
    );
  }