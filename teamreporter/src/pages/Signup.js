import { Form, Input, Button, Checkbox } from 'antd';
import 'antd/dist/antd.css';
import '../App.css' 

function Signup() {

    const onFinish = (values) => {
        console.log('Success:', values);
      };


    const onFinishFailed = () => {
        console.log('Failed:');
      };


      
  return (
      <div className="signupForm">
          <h1>Sign Up </h1>
    <Form id="signupForm"
      name="basic"
      labelCol={{
        span: 5,
      }}
      wrapperCol={{
        span: 10,
      }}
      initialValues={{
        remember: true,
      }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
    >
      <Form.Item
        label="Username"
        name="username"
        rules={[
          {
            required: true,
            message: 'Please input your username!',
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Email"
        name="Email"
        rules={[
          {
            required: true,
            message: 'Please input your Email!',
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Password"
        name="password"
        rules={[
          {
            required: true,
            message: 'Please input your password!',
          },
        ]}
      >
        <Input.Password />
      </Form.Item>

  

      <Form.Item
        wrapperCol={{
          offset: 8,
          span: 16,
        }}
      >
        <Button type="primary" htmlType="submit" onClick={onSubmitHandler}>
          Signup
        </Button>
      </Form.Item>
    </Form>
    </div>
  )
}

const onSubmitHandler =()=> {
    window.location.href="./home.js"
}

export default Signup;






