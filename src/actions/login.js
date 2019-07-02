export const LoginStore = {
  setData(token, data) {
    return localStorage.setItem(token, data);
  },
  removeData(token) {
    localStorage.removeItem(token);
  },
  getData(token) {
    return localStorage.getItem(token);
  }
}