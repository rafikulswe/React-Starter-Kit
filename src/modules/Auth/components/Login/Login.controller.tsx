import { FC, useContext, useEffect, useState } from "react";
import LoginView from "./Login.view";
import './Login.scss';
import { Message } from "../../../../utils";
import { useLocation, useNavigate } from "react-router-dom";
import queryString from "query-string";
import { AuthContext } from "../../../../context/auth/auth.context";
import { OauthApi } from "../../../../api";
import { LOADED_TOKEN } from "../../../../context/auth/auth.types";
import { rules } from "../../../../components/Validation/Form.validate";
import { useForm } from "../../../../hooks/useForm";


const LoginController: FC<any> = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const queryParams = queryString.parse(location?.search);
    const { formRef, initialValues, setErrors, isSubmitting, setIsSubmitting, handleChange, handleSubmitFailed } = useForm({});
    const { isAuthenticated, isAdmin, isUser, dispatchAuth, loadAuthState } = useContext(AuthContext);

    const [loading, setLoading] = useState(false);
    const responseType = queryParams?.response_type;

    useEffect(() => {
        if (isAuthenticated === true) {
            setLoading(false);
            Message.success('Well done! You have successfully logged-in');

            const redirectUri = localStorage.getItem('redirectUri');
            const redirectUrl = localStorage.getItem('redirectUrl');
            if (redirectUri) {
                localStorage.removeItem('redirectUri');
                localStorage.removeItem('redirectUrl');
                // @ts-ignore
                window.location = `${redirectUri}`;
            } else if (redirectUrl) {
                localStorage.removeItem('redirectUri');
                localStorage.removeItem('redirectUrl');
                navigate(redirectUrl);
            } else if (isAdmin === true) {
                navigate('/admin/dashboard');
            } else if (isUser === true) {
                navigate('/admin/dashboard');
            }
            else {
                navigate('/admin/dashboard');
            }
        }
    }, [isAuthenticated]);

    const handleSubmit = (values: any): void => {
        setLoading(true);
        setIsSubmitting(true);

        const payload = {
            username: values.username,
            password: values.password,
            device_type: 'web', // mobile
        }
        OauthApi.login(payload)
            .then(res => {
                dispatchAuth({
                    type: LOADED_TOKEN,
                    payload: {
                        accessToken: res.data.access_token,
                        refreshToken: res.data.refresh_token,
                    }
                });

                loadAuthState(res.data.access_token);
                setLoading(false);
                setIsSubmitting(false);
            })
            .catch(err => {
                if (err?.status === 409) {
                    setErrors(err.data);
                }
                else if (err?.status === 412) {
                    setErrors(err.data);
                }
                else if (err?.status === 422) {
                    Message.error(err.data)
                }
                else {
                    Message.error('A network error occurred. Please try again later.');
                }
                setLoading(false);
                setIsSubmitting(false);
            });
    }

    if (isAuthenticated === false) {
        return (
            <LoginView
                formRef={formRef}
                initialValues={initialValues}
                rules={rules}
                loading={loading}
                setLoading={setLoading}
                isSubmitting={isSubmitting}
                handleChange={handleChange}
                handleSubmit={handleSubmit}
                handleSubmitFailed={handleSubmitFailed}
            />
        );
    }

    return (
        <></>
    )
}

export default LoginController;