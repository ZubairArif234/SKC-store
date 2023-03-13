import { Button, Checkbox, Form, Input } from 'antd';
import { useState } from 'react';

const onFinish = (values) => {
  console.log('Success:', values);
};
const onFinishFailed = (errorInfo) => {
  console.log('Failed:', errorInfo);
};

const LogApp = () => {
  
  return(
  <Form
    name="basic"
    labelCol={{
      span: 18,
    }}
    wrapperCol={{
      span: 26,
    }}
    style={{
      // maxWidth: 900,
      // backgroundColor:'pink',
      // justifyContent:'flex-end',
      // alignItems: 'end',
      margin: 10
    }}
    initialValues={{
      remember: true,
    }}
    onFinish={onFinish}
    onFinishFailed={onFinishFailed}
    autoComplete="off"
  >
    <Form.Item
      // label="Username"
      name="username"
      rules={[
        {
          type:'email',
          required: true,
          message: 'Please input your username!',
        },
        
      ]}
      style={{
        // maxWidth: 900,
        // backgroundColor:'purple',
        // width:350,
        // margin: 10
      }}
    >
      <lable>Email</lable>
      <Input />
    </Form.Item>

    <Form.Item
      // label="Password"
      name="password"
      rules={[
        {
          required: true,
          message: 'Please input your password!',
        },
      ]}
      style={{
        // maxWidth: 900,
        // backgroundColor:'purple',
        // width:350,
        // margin: 10
      }}
    >
      <lable>Password</lable>
      <Input.Password style={{width:'100%'}} />
    </Form.Item>

    <Form.Item
      name="remember"
      valuePropName="checked"
      wrapperCol={{
        offset: 8,
        span: 16,
      }}
    >
      <Checkbox>Remember me</Checkbox>
    </Form.Item>

    <Form.Item
      wrapperCol={{
        offset: 2,
        span: 30,
      }}
    >
      <Button type="primary" htmlType="submit" style={{width:'90%',backgroundColor:'black'}}>
        Login
      </Button>
    </Form.Item>
    
  </Form>
  )
    };
export default LogApp;