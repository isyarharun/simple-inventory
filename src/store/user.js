import firebase from "firebase";

const state = {
  isLogin: false,
  user: null
};
const types = {
  SET_USER: "user/SET_USER"
};
const mutations = {
  [types.SET_USER](state, user) {
    state.user = user;
  }
};
const getters = {
  getUser: state => state.user
};

const actions = {
  setUser({ commit }, user) {
    console.log(user);
    commit(types.SET_USER, user);
  },
  async register({ commit }, { email, password }) {
    commit(types.SET_USER, null);
    let result = await firebase
      .auth()
      .createUserWithEmailAndPassword(email, password);
    console.log(result);
  },
  async login({ commit }, { email, password }) {
    commit(types.SET_USER, null);
    let result = await firebase
      .auth()
      .signInWithEmailAndPassword(email, password);
    console.log(result);
  },
  async logout({ commit }) {
    await firebase.auth().signOut();
    commit(types.SET_USER, null);
  }
};

export default {
  state,
  mutations,
  getters,
  actions,
  types
};
