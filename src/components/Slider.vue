<template>
  <div id="tracker_component">
    <va-input
      class="mb-4"
      v-model="maskNumeralsValue"
      label="Only numerals mask"
      mask="numeral"
    />
  </div>
</template>

<script lang="ts">
interface DataInfo {
  value: number;
}
export default {
  data(): DataInfo {
    return {
      value: 45,
    };
  },
};
</script>
