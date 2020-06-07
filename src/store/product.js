import { firebaseDb } from "@/config/firebase";
import uniqid from "uniqid";

const tableName = "products";
const defaultProduct = () => {
  return {
    product: {
      id: null,
      name: null,
      description: null,
      category: null
    }
  };
};
const state = {
  product: {
    id: null,
    name: null,
    description: null,
    category: null
  },
  selected: null,
  products: [],
  categories: []
};
const types = {
  SET_PRODUCT: "product/SET_PRODUCT",
  SET_PRODUCTS: "product/SET_PRODUCTS"
};
const mutations = {
  [types.SET_PRODUCT](state, product) {
    state.product = product;
  },
  [types.SET_PRODUCTS](state, products) {
    state.products = products;
  }
};
const getters = {
  getProduct: state => state.product,
  getProducts: state => state.products
};

const actions = {
  setProduct({ commit }, product) {
    commit(types.SET_PRODUCT, product);
  },
  setProducts({ commit }, products) {
    commit(types.SET_PRODUCTS, products);
  },
  resetProduct({ commit }) {
    let product = defaultProduct();
    commit(types.SET_PRODUCT, product);
  },
  saveProduct({ dispatch }, { name, description, category, id }) {
    if (id == null) {
      id = uniqid();
    }
    firebaseDb.ref(tableName + "/" + id).set({
      id: id,
      name: name,
      description: description,
      category: category
    });
    dispatch("resetProduct");
  },
  deleteProduct({ dispatch }, id) {
    firebaseDb.ref(tableName + "/" + id).remove();
    dispatch("resetProduct");
  },
  editProduct({ dispatch }, id) {
    const ref = firebaseDb.ref(tableName + "/" + id);
    ref.on("value", function(snapshot) {
      let product = snapshot.val();
      dispatch("setProduct", product);
    });
  },
  fetchProducts({ dispatch }) {
    const dbRef = firebaseDb.ref(tableName);
    dbRef.on("value", function(snapshot) {
      dispatch("setProducts", snapshot.val());
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
