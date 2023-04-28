import { reactive } from "vue";
import { auth } from "../firebase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";

const state = reactive({
  toggleLoginModal: false,
  togglePrdctModal: false,
  Login: true,
  user: null,
  modal: "",
  CurrentPrdct: null,
  Profile: true,
});
const methods = {
  toggle(nmb) {
    switch (nmb) {
      case 1:
        state.toggleLoginModal = !state.toggleLoginModal;
        break;
      case 2:
        state.togglePrdctModal = !state.togglePrdctModal;
        state.modal = "add";
        break;
      case 3:
        state.togglePrdctModal = !state.togglePrdctModal;
        state.modal = "edit";
        break;
      case 4:
        state.Profile = true;
        break;
      case 5:
        state.Profile = false;
        break;
      default:
        state.togglePrdctModal = !state.togglePrdctModal;
        state.modal = null;
        break;
    }
  },
  toSignUp() {
    state.Login = false;
  },
  toLogin() {
    state.Login = true;
  },
  setUser(payload) {
    state.user = payload;
    //Log out the user state
    console.log(state.user);
  },
  async signup({ email, password }) {
    const response = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );
    if (response) {
      this.setUser(response.user);
    } else {
      throw new Error("signup failed");
    }
  },

  async login({ email, password }) {
    const response = await signInWithEmailAndPassword(auth, email, password);
    if (response) {
      this.setUser(response.user);
    } else {
      throw new Error("login failed");
    }
  },

  async logout() {
    await signOut(auth);

    this.setUser(null);
    state.toggleM = false;
    state.toggleLoginModal = false;
    state.togglePrdctModal = false;
  },
};

export default {
  state,
  methods,
};
