<template lang="">

  <div>
    <p>Hola</p>
    <p>Product deatils for {{ id }}</p>
  </div>
</template>

<script setup>
const { id } = useRoute().params;
</script>

<style lang="css" scoped></style>
