<template>
  <div id="tracker_component">
    <va-select
      class="mb-4"
      label="Categories"
      placeholder="Please select your category"
      :options="options"
      v-model="value"
      allowCreate
    />
  </div>
</template>

<script lang="ts">
import { ApiService } from "@/services/apiService";
import { defineComponent } from "vue";

const api = new ApiService("http://localhost:8010/proxy/expenses/categories");
export default defineComponent({
  name: "Categories",
  components: {},
  data: () => {
    return {
      options: [{}], // TS is inferring the type
      value: "",
    };
  },
  async created() {
    const value = await api.getCategories();
    this.options = value;
    console.log("data", this.options);
  },
});
</script>
