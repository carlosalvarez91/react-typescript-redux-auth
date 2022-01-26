import React, { useEffect } from 'react';
import { Form, Input, Button, Spin, notification } from 'antd';

import { connect } from "react-redux";
import { loginUser } from "../redux/actions/userActions"
import { useNavigate, Navigate } from 'react-router-dom';

const LoginScreen: React.FC = (props:any) => {

 const {loginUser, user, UI} = props;

 const navigate = useNavigate()

  
 const onFinish = async (values: any) => {
    await loginUser(values, navigate)
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
  };

  useEffect(() => {
    if (UI && UI.errors){
      notification.open({
        message: UI.errors
      })
    }
  }, [UI]);

  if (user.authenticated){
    return <Navigate to="/dashboard" />
  }

  return (
    <Spin spinning={UI.loading}>
    <Form
      name="basic"
      labelCol={{ span: 8 }}
      wrapperCol={{ span: 8 }}
      initialValues={{ remember: true }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
    >
      <Form.Item
        label="Email"
        name="email"
        rules={[{ required: true, message: 'Please input your email!' }]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Password"
        name="password"
        rules={[{ required: true, message: 'Please input your password!' }]}
      >
        <Input.Password />
      </Form.Item>

      <Form.Item wrapperCol={{ offset: 8, span: 8 }}>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
  </Spin>
  );  

}

const mapStateToProps = (state: any) => ({
  user: state.user,
  UI: state.UI
 });

 const mapActionsToProps = {
  loginUser
 };
 export default connect(mapStateToProps, mapActionsToProps)(LoginScreen)