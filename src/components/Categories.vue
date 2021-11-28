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
import { SelectOption } from "@/types/internal";
import { defineComponent } from "vue";

const api = new ApiService(
  "http://192.168.1.190:8010/proxy/expenses/categories"
);
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
    const resp = await api.getCategories();
    let opt: SelectOption[] = [];
    if (resp.success && resp.data != null) {
      for (let category of resp.data) {
        console.log(category);
        let new_cat: SelectOption = {
          text: category.Name as string,
          value: category.ID as string,
        };
        opt.push(new_cat);
      }
    }
    console.log(opt);
    this.options = opt;
  },
});
</script>
