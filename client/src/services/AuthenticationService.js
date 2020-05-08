import Api from '@/services/Api'

export default {
  register (credentials) {
    return Api().post('register', credentials)
  }
}

// AuthenticationService.register({
//   email: 'djprajapati1056@gmail.com',
//   password: '12345678'
// })
