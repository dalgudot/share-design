import firebase from "firebase";
import initFirebase from "../../utils/auth/initFirebase";

initFirebase();

class AuthService {
  login(providerName) {
    const authProvider = new firebase.auth[`${providerName}AuthProvider`]();
    return firebase.auth().signInWithPopup(authProvider);
  }
}

export default AuthService;
