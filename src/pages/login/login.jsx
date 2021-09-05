/*用户登陆的路由组件
*/
import React, { Component } from 'react'
import './login.less'
import { Form, Input, Button } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import logo from './images/logo.png'

export default class Login extends Component {

    // handleSubmit=(event)=>{
    //     const onFinish=(values)=>{
    //         console.log(values)
    //     }
    // }
   
     onFinish = (values) => {
        console.log('Received values of form: ', values);
        console.log(values.username)
      };


    render() {
        return (
            <div className='login'>
                <header className='login-header'>
                    <img src={logo} alt="logo" />
                    <h1>奶茶后台管理系统</h1>
                </header>
                <section className='login-content'>
                    <h2>用户登录</h2>
                    <Form
                        name="normal_login"
                        className="login-form"
                        // onSubmit={this.handleSubmit} 
                        initialValues={{
                            remember: true,
                          }} 
                          onFinish={this.onFinish}
                    >
                        <Form.Item 
                        name="username"
                        rules={[
                            {
                              required: true,
                              message: 'Please input your Username!',
                            },
                          ]}
                        >
                            <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Username" />
                        </Form.Item>
                        <Form.Item 
                        name="password"
                        rules={[
                            {
                              required: true,
                              message: 'Please input your Password!',
                            },
                          ]}
                         >
                            <Input
                                prefix={<LockOutlined className="site-form-item-icon" />}
                                type="password"
                                placeholder="Password"
                            />
                        </Form.Item>

                        <Form.Item>
                            <Button type="primary" htmlType="submit" className="login-form-button">
                                Log in
                            </Button>
                        </Form.Item>
                    </Form>
                </section>
            </div>
        )
    }

}

