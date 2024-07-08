import { createContext, useReducer, useEffect } from 'react'

import initialState from './auth.state';
import authReducer from './auth.reducer';
import {
    CLEAR_ALL_AUTH_STATE,
    LOADED_AUTH_STATE,
    LOADED_SCOPE,
    CLEAR_AUTH_STATE
} from './auth.types';
import { HttpService } from "../../services/http.services";
import { StorageService } from "../../services";
import { OauthApi } from "../../api";

export const AuthContext = createContext(initialState);

export const AuthProvider = ({ children }: any) => {
    const [state, dispatchAuth] = useReducer(authReducer, initialState);

    useEffect(() => {
        const accessToken = StorageService.getAccessToken();
        if (accessToken) {
            loadAuthState(accessToken);
        }
        else {
            dispatchAuth({ type: CLEAR_ALL_AUTH_STATE });
            dispatchAuth({ type: CLEAR_AUTH_STATE });
        }
    }, []);

    useEffect(() => {
        if (state.userId) {
            loadScopesInfo(state.userId)
        }
    }, [state.userId, state.groupIds]);

    const loadAuthState = async (token: string) => {
        try {
            HttpService.setAccessToken(token);

            OauthApi.loadAuthState()
                .then(res => {
                    let isAdmin = false;
                    let isUser = false;
                    if (res.data.user_type === 'SERVICE_PROVIDER') { // ROLE_USER
                        isAdmin = true;
                    }
                    else {
                        isUser = true;
                    }


                    // User
                    dispatchAuth({
                        type: LOADED_AUTH_STATE,
                        payload: {
                            isAuthenticated: true,
                            isAdmin: isAdmin,
                            isUser: isUser,

                            user: res.data,
                            userId: res.data.user_id ? Number(res.data.user_id) : null,
                            userName: res.data.user_name,
                            userEmail: res.data.email,
                            userType: res.data.user_type,

                            departmentId: res.data.department_id ? Number(res.data.department_id) : null,
                            designationId: res.data.designation_id ? Number(res.data.designation_id) : null,

                            profileId: res.data.profile_id ? Number(res.data.profile_id) : null,
                            profileNameEn: res.data.name,
                            profileNameBn: res.data.name,
                            profileType: res.data.profile_type,
                            profileImage: res.data.profile_image,

                            groupIds: res.data.group_ids?.map((item: any) => Number(item)) || [],
                            groupNameList: res.data.group_name_list,
                            groupCodeList: res.data.group_code_list,

                            roleIds: res.data.role_ids?.map((item: any) => Number(item)) || [],
                            roleNameList: res.data.role_name_list,
                            roleCodeList: res.data.role_code_list,

                            accessWorkflowList: res.data.accessWorkflowList
                        }
                    });
                })
                .catch(err => {
                    dispatchAuth({ type: CLEAR_ALL_AUTH_STATE });
                    dispatchAuth({ type: CLEAR_AUTH_STATE });
                });
        }
        catch (err) {
            dispatchAuth({ type: CLEAR_ALL_AUTH_STATE });
            dispatchAuth({ type: CLEAR_AUTH_STATE });
        }
    }

    const loadScopesInfo = (userId: any) => {
        const payload = {
            'user_id': userId,
        }
        OauthApi.loadUserScopes(payload)
            .then(res => {
                dispatchAuth({
                    type: LOADED_SCOPE,
                    payload: {
                        scopes: res.data,
                    }
                });
            });
    }

    const clearAuthState = () => {
        dispatchAuth({ type: CLEAR_ALL_AUTH_STATE });
        dispatchAuth({ type: CLEAR_AUTH_STATE });
    }

    const setLoading = (isShow: boolean): void => {
        if (isShow) {
            dispatchAuth({
                type: 'SET_LOADING',
                payload: {
                    loading: true
                }
            });
        }
        else {
            dispatchAuth({
                type: 'SET_LOADING',
                payload: {
                    loading: false
                }
            });
        }
    }

    return (
        <AuthContext.Provider value={{ ...state, dispatchAuth, loadAuthState, clearAuthState, setLoading }}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;
