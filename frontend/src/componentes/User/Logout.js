function Logout() {
    localStorage.removeItem('userLoginStatus');
    window.location.href = '/login/';
    return;
  }
  
  export default Logout;