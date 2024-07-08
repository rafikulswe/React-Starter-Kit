import { FC } from "react";
import { Button, Checkbox, Form, Input, Typography } from "antd";
import { LockOutlined, MailOutlined } from "@ant-design/icons";
import { Link } from 'react-router-dom';

const LoginView: FC<any> = props => {
    const { Text, Title } = Typography;
    const {
        formRef, rules, initialValues, loading, setLoading, isSubmitting, handleChange, handleSubmit, handleSubmitFailed
    } = props;

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

                    <Title>Sign in</Title>
                    <Text>
                        Welcome back to AntBlocks UI! Please enter your details below to
                        sign in.
                    </Text>
                </div>
                {/* <Form
                    name="normal_login"
                    initialValues={{
                        remember: true,
                    }}
                    onFinish={onFinish}
                    layout="vertical"
                    requiredMark="optional"
                > */}
                <Form
                    form={formRef}
                    name="loginForm"
                    layout="vertical"
                    scrollToFirstError={true}
                    initialValues={initialValues}
                    onValuesChange={handleChange}
                    onFinish={handleSubmit}
                    onFinishFailed={handleSubmitFailed}
                >
                    <Form.Item
                        name="username"
                        rules={rules.email}
                    >
                        <Input
                            prefix={<MailOutlined />}
                            placeholder="Email"
                        />
                    </Form.Item>
                    <Form.Item
                        name="password"
                        rules={rules.password}
                    >
                        <Input.Password
                            prefix={<LockOutlined />}
                            type="password"
                            placeholder="Password"
                        />
                    </Form.Item>
                    <Form.Item>
                        <Form.Item name="remember" valuePropName="checked" noStyle>
                            <Checkbox>Remember me</Checkbox>
                        </Form.Item>
                        <Link to={'/'} style={{ float: "right" }}>
                            Forgot password?
                        </Link>
                    </Form.Item>
                    <Form.Item style={{ marginBottom: "0px" }}>
                        <Button block
                            type="primary"
                            htmlType="submit"
                            disabled={isSubmitting}
                        >
                            {!loading && <span className='indicator-label'>Log in</span>}
                            {loading && <span className='indicator-label'>Please wait...</span>}
                        </Button>
                        <div style={{ textAlign: "center", width: "100%" }}>
                            <Text>Don't have an account?</Text>{" "}
                            <Link to={'/auth/register'}>Sign up now</Link>
                        </div>
                    </Form.Item>
                </Form>
            </div>
        </section>
    );
}

export default LoginView;