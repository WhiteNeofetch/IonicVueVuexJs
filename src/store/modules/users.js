import axios from "axios";
const state = () => ({
  users: [],
});

const getters = {
  userById(state) {
    return (id) => {
      return state.users.find((u) => u.id == id);
    };
  },
  allUsers(state) {
    return state.users;
  },
};

const actions = {
  async updateUser({ commit }, payload) {
    // since our rest api only support get
    // here we simply update the store state
    commit("updateUser", payload);
  },
  async deleteUser({ commit }, id) {
    // since our rest api only support get
    // here we simply update the store state
    commit("deleteUser", id);
  },
  async fetchUsers({ commit }) {
    var response = await axios.get(
      "https://jsonplaceholder.typicode.com/users"
    );
    commit("saveAllUsers", response.data);
  },
};

const mutations = {
  updateUser(state, payload) {
    let filteredUsers = state.users.filter((u) => u.id !== payload.id);
    filteredUsers.unshift(payload);
    state.users = filteredUsers;
  },
  deleteUser(state, id) {
    state.users = state.users.filter((u) => u.id !== id);
  },
  saveAllUsers(state, payload) {
    state.users = payload;
  },
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};
