
export default class StorageService {
    public getAccessToken = () => {
        return localStorage.getItem("accessToken")
    }

    public getRefreshToken = () => {
        return localStorage.getItem("refreshToken")
    }

    public setAccessToken = (token: any) => {
        localStorage.setItem('accessToken', token);
    }

    public setRefreshToken = (token: any) => {
        localStorage.setItem('refreshToken', token);
    }

    public getAccessTokenExpiredTime = () => {
        return localStorage.getItem('accessTokenExpiredTime');
    }

    public removeAccessToken = () => {
        localStorage.removeItem("accessToken")
    }

    public removeRefreshToken = () => {
        localStorage.removeItem("refreshToken")
    }

    public clearStorage = () => {
        localStorage.clear();
    }
}
