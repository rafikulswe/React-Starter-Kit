import axios, { AxiosPromise, AxiosRequestConfig, AxiosResponse } from "axios";
import { CONFIG_CONSTANT } from "../constants";
import _StorageService from "./storage.service";

const StorageService = new _StorageService();

type RequestMethod = 'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE' | 'HEAD' | 'OPTIONS';

interface Request {
    method: RequestMethod;
    url: string;
    queryString?: string;
    params?: any;
    headers?: any;
    body?: any;
    responseType?: any;
}

class _HttpService {

    private httpClient: any;
    private baseURL = CONFIG_CONSTANT.API_SERVER_URL;
    private timeout = 180000; // 20000

    private headers = {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'Authorization': '',
    };

    private static instance: _HttpService;

    static getInstance() {
        if (!_HttpService.instance) {
            _HttpService.instance = new _HttpService();
        }
        return _HttpService.instance;
    }

    constructor(baseURL: string = '') {
        this.baseURL = baseURL ? baseURL : this.baseURL;
        this.httpClient = axios.create();
        this.httpClient.interceptors.response.use((response: any) => this.handleResponse(response), (error: any) => this.handleError(error));

        const accessToken = StorageService.getAccessToken();
        this.setAccessToken(accessToken);
    }

    private request(req: Request): AxiosPromise<any> {
        const axiosConfig: AxiosRequestConfig = {
            url: this.baseURL + req.url,
            method: req.method,
            responseType: req.responseType ? req.responseType : "json",
            params: req.params,
            data: req.body,
            headers: { ...this.headers, ...req.headers },
            timeout: this.timeout
        };
        return this.httpClient.request(axiosConfig);
    }

    public setAccessToken = (token: any) => {
        this.headers.Authorization = token ? `Bearer ${token}` : '';
    }

    public clearAccessToken = () => {
        this.headers.Authorization = '';
    }

    private handleResponse(response: AxiosResponse) {
        if ((response?.data?.data)) {
            response.data = response.data.data;
        }
        return response
    }

    private handleError(error: any) {
        throw (error.response)
    }

    public get(url: string, params = {}, headers = {}): AxiosPromise<any> {
        return this.request({ method: 'GET', url: url, params: params, headers: headers });
    }

    public post(url: string, payload = {}, params = {}, headers = {}): AxiosPromise<any> {
        return this.request({ method: 'POST', url: url, params: params, body: payload, headers: headers });
    }

    public put(url: string, payload = {}, params = {}, headers = {}): AxiosPromise<any> {
        return this.request({ method: 'PUT', url: url, params: params, body: payload, headers: headers });
    }

    public patch(url: string, payload = {}, params = {}, headers = {}): AxiosPromise<any> {
        return this.request({ method: 'PATCH', url: url, params: params, body: payload, headers: headers });
    }

    public delete(url: string, params = {}, headers = {}): AxiosPromise<any> {
        return this.request({ method: 'DELETE', url: url, params: params, headers: headers });
    }
}

export const HttpService = _HttpService.getInstance();
