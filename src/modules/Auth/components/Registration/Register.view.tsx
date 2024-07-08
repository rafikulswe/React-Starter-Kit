import { FC } from "react";
import { Button, Form, Input, Typography } from "antd";
import { LockOutlined, MailOutlined } from "@ant-design/icons";
import { Link } from 'react-router-dom';

const RegisterView: FC<any> = () => {
    const { Text, Title } = Typography;

    const onFinish = (values: any) => {
        console.log("Received values of form: ", values);
    };

    return (
        <section className="flex justify-center items-center h-screen py-10">
            <div className="bg-white rounded-lg shadow-md w-full max-w-96 p-8">
                <div className="text-center">
                    <svg
                        width="25"
                        height="24"
                        viewBox="0 0 25 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="inline-block mb-3"
                    >
                        <rect x="0.464294" width="24" height="24" rx="4.8" fill="#1890FF" />
                        <path
                            d="M14.8643 3.6001H20.8643V9.6001H14.8643V3.6001Z"
                            fill="white"
                        />
                        <path
                            d="M10.0643 9.6001H14.8643V14.4001H10.0643V9.6001Z"
                            fill="white"
                        />
                        <path
                            d="M4.06427 13.2001H11.2643V20.4001H4.06427V13.2001Z"
                            fill="white"
                        />
                    </svg>

                    <Title>Sign up</Title>
                    <Text>
                        Welcome back to AntBlocks UI! Please enter your details below to
                        sign in.
                    </Text>
                </div>
                <Form
                    name="normal_login"
                    initialValues={{
                        remember: true,
                    }}
                    onFinish={onFinish}
                    layout="vertical"
                    requiredMark="optional"
                >
                    <Form.Item
                        name="email"
                        rules={[
                            {
                                type: "email",
                                required: true,
                                message: "Please input your Email!",
                            },
                        ]}
                    >
                        <Input
                            prefix={<MailOutlined />}
                            placeholder="Email"
                        />
                    </Form.Item>
                    <Form.Item
                        name="password"
                        rules={[
                            {
                                required: true,
                                message: "Please input your Password!",
                            },
                        ]}
                    >
                        <Input.Password
                            prefix={<LockOutlined />}
                            type="password"
                            placeholder="Password"
                        />
                    </Form.Item>
                    <Form.Item
                        name="confirm_password"
                        rules={[
                            {
                                required: true,
                                message: "Please input your Confirm Password!",
                            },
                        ]}
                    >
                        <Input.Password
                            prefix={<LockOutlined />}
                            type="password"
                            placeholder="Confirm Password"
                        />
                    </Form.Item>
                    <Form.Item style={{ marginBottom: "0px" }}>
                        <Button block type="primary" htmlType="submit">
                            Sign up
                        </Button>
                        <div style={{ textAlign: "center", width: "100%" }}>
                            <Text>Already have an account?</Text>{" "}
                            <Link to={'/auth/login'}>Sign in now</Link>
                        </div>
                    </Form.Item>
                </Form>
            </div>
        </section>
    );
}

export default RegisterView;