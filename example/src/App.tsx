import React from 'react'

import {Form, FormGroup, Input, Label} from 'livi-poc-form'
import 'livi-poc-form/dist/index.css'

const App = () => {
  return (
    <div>
      <Form>
        <FormGroup>
          <Label target='username'>Username</Label>
          <Input type='text' id='username' validate={() => true} placeholder='username'></Input>
        </FormGroup>
        <FormGroup>
          <Label target='password'>Password</Label>
          <Input type='password' id='password' validate={() => true} placeholder='password'></Input>
        </FormGroup>
      </Form>
    </div>
  )
}

export default App
