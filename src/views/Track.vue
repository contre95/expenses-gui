<template>
  <div class="track">
    <h1>Track your expenses</h1>
    <Categories />
    <Slider />


  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

import Categories from "@/components/Categories.vue";
import Slider from "@/components/Slider.vue";

export default defineComponent({
  name: "Track",
  components: {
    Categories,
    Slider,
  },
});
</script>
