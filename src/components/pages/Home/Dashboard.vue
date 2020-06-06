<template>
  <div>
    <span>Total Product: {{ productCount }}</span>
    <span>Total Category: {{ categoryCount }}</span>
  </div>
</template>
<script>
export default {
  data() {
    return {
      productCount: 10,
      categoryCount: 10
    };
  }
};
</script>
