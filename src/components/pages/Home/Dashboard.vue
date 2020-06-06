<template>
  <div>
    <span>Total Product: {{ productCount }}</span>
    <span>Total Category: {{ categoryCount }}</span>
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
