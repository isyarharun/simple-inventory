<template>
  <div>
    <table id="customers">
      <thead>
        <tr>
          <th v-for="header in headers" :key="header.key">
            {{ header }}
          </th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(row, name) in rows" :key="name">
          <td>
            {{ row.content }}
          </td>
          <td>
            <button @click="editCategory(name)">Edit</button>
            <button @click="deleteCategory(name)">Delete</button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
<script>
export default {
  props: {
    headers: {
      type: Array,
      default: () => []
    },
    rows: {
      type: Array,
      default: () => []
    }
  }
};
</script>
