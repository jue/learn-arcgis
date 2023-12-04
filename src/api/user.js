const userApi = {
  login: (data) => {
    return http.post('/user/login/password', data)
  },
  getUserInfo: () => {
    return http.post('/user/info')
  },
}

export default userApi
