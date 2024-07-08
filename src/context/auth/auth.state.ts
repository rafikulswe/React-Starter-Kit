const initialState = {
  loading: true,
  isLoaded: false,
  isAuthenticated: null,
  isAdmin: null,
  isUser: null,
  isAuthReady: null,
  accessToken: localStorage.getItem('accessToken'),
  refreshToken: localStorage.getItem('refreshToken'),

  user: null,
  userId: null,
  userName: null,
  userEmail: null,
  userType: null,

  profileId: null,
  profileNameEn: null,
  profileNameBn: null,
  profileType: null,
  profileImage: null,

  departmentId: null,
  designationId: null,

  groupIds: [] as any,
  groupNameList: [] as any,
  groupCodeList: [] as any,

  roleIds: [] as any,
  roleNameList: [] as any,
  roleCodeList: [] as any,

  scopes: [] as any,
  error: null,

  dispatchAuth: (action: any) => console.log('action', action),
  loadAuthState: (token?: any) => null,
  clearAuthState: () => null,
  setLoading: (isShow: any) => null,
};

export default initialState;
