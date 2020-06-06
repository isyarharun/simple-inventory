<template>
  <div style="display:flex;">
    <div class="counter">
      <div class="total">
        Total Product
      </div>
      <div class="count">{{ productCount }}</div>
    </div>
    <div class="counter">
      <div class="total">
        Total Category
      </div>
      <div class="count">{{ categoryCount }}</div>
    </div>
  </div>
</template>
<script>
import { firebaseDb } from "@/config/firebase";
export default {
  data() {
    return {
      productCount: 0,
      categoryCount: 0
    };
  },
  mounted() {
    // maybe a bad practice since we load all of the data and count it
    var self = this;
    const categoriesRef = firebaseDb.ref("categories");
    categoriesRef.on("value", function(snapshot) {
      let data = snapshot.val();
      let count = 0;
      if (data != null) {
        count = Object.keys(data).length;
      }
      self.categoryCount = count;
    });

    const prodRef = firebaseDb.ref("products");
    prodRef.on("value", function(snapshot) {
      let data = snapshot.val();
      let count = 0;
      if (data != null) {
        count = Object.keys(data).length;
      }
      self.productCount = count;
    });
  }
};
</script>
<style scoped>
.counter {
  width: 50%;
  padding: 5px 5px;
  margin: 10px;
}
.counter .count {
  padding-top: 10px;
  border: solid 1px silver;
  background-color: grey;
  padding-bottom: 10px;
  font-size: 30px;
  font-weight: bolder;
}
.counter .total {
  font-size: 20px;
  font-weight: bold;
}
</style>
