import { Button, Input, Text } from '@chakra-ui/react'
import React, { useState } from 'react'

function HwAnswer() {
    const [names, setNames] = useState({fName:"",lName:""})
    const LogIn = () =>{
        if (names.fName.length=="" && names.lName.length=="" ){
            alert("Required")
        } 
        else{
            alert(`Welcome ${names.fName}`)
        }
    }
  return (
    <div>
        <Input w={40} m={3} value={names.fName} onChange={e => {setNames({...names, fName: e.target.value})}}></Input>
        <Input w={40} m={3} value={names.lName} onChange={e => {setNames({...names, lName: e.target.value})}}></Input>
        <Button m={3} onClick={LogIn} >submit</Button>
        <Text>{names.fName}</Text>
        <Text>{names.lName}</Text>
    </div>
  )
}

export default HwAnswer