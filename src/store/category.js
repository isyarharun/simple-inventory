import { firebaseDb } from "@/config/firebase";
import uniqid from "uniqid";

const tableName = "categories";
const defaultCategory = () => {
  return {
    category: {
      id: null,
      name: null,
      description: null
    }
  };
};
const state = {
  category: {
    id: null,
    name: null,
    description: null
  },
  categories: []
};
const types = {
  SET_CATEGORY: "category/SET_CATEGORY",
  SET_CATEGORIES: "category/SET_CATEGORIES"
};
const mutations = {
  [types.SET_CATEGORY](state, category) {
    state.category = category;
  },
  [types.SET_CATEGORIES](state, categories) {
    state.categories = categories;
  }
};
const getters = {
  getCategory: state => state.category,
  getCategories: state => state.categories
};

const actions = {
  setCategory({ commit }, category) {
    commit(types.SET_CATEGORY, category);
  },
  setCategories({ commit }, categories) {
    commit(types.SET_CATEGORIES, categories);
  },
  resetCategory({ commit }) {
    let category = defaultCategory();
    commit(types.SET_CATEGORY, category);
  },
  saveCategory({ dispatch }, { name, description, id }) {
    if (id == null) {
      id = uniqid();
    }
    firebaseDb.ref(tableName + "/" + id).set({
      name: name,
      description: description,
      id: id
    });
    dispatch("resetCategory");
  },
  deleteCategory({ dispatch }, id) {
    firebaseDb.ref(tableName + "/" + id).remove();
    dispatch("resetCategory");
  },
  editCategory({ dispatch }, id) {
    const ref = firebaseDb.ref(tableName + "/" + id);
    ref.on("value", function(snapshot) {
      let category = snapshot.val();
      dispatch("setCategory", category);
    });
  },
  fetchCategories({ dispatch }) {
    const categoriesRef = firebaseDb.ref(tableName);
    categoriesRef.on("value", function(snapshot) {
      dispatch("setCategories", snapshot.val());
    });
  }
};

export default {
  state,
  mutations,
  getters,
  actions,
  types
};
