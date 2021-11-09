import decode from 'jwt-decode';

class AuthService {
  getProfile() {
    return decode(this.getToken());
  }

  loggedIn() {
    // Checks if there is a saved token and it's still valid
    const token = this.getToken();
    return !!token && !this.isTokenExpired(token);
  }

  isTokenExpired(token) {
    try {
      const decoded = decode(token);
      if (decoded.exp < Date.now() / 1000) {
        return true;
      } else return false;
    } catch (err) {
      return false;
    }
  }

  getToken() {
    // Retrieves the user token from localStorage
    return localStorage.getItem('id_token');
  }

  login(idToken) {
    // Saves user token to localStorage
    localStorage.setItem('id_token', idToken);

    // window.location.assign('/');
  }

  // as we are just rendering the next page rather than loading a new page, reworked this so that on form submit it uses the standard login method to set the JWT, and then renders the /beginquestionnaire page by using history.push() from the Signup.js formsubmit method

  // loginAndGoToQuestionnaire(idToken) {
  //   // Saves user token to localStorage
  //   localStorage.setItem('id_token', idToken);

  //   window.location.assign('/beginquestionnaire');
  // }

  logout() {
    // Clear user token and profile data from localStorage
    localStorage.removeItem('id_token');
    // this will reload the page and reset the state of the application
    window.location.assign('/');
  }
}

export default new AuthService();
