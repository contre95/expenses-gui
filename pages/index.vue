<template lang="">
  <div class="relative px-6 lg:px-8">
    <div class="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
      <div class="text-center">
        <h1 class="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
          Expense tracker 
        </h1>
        <p class="mt-6 text-lg leading-8 text-gray-600">
          Track expenses into an SQL database and keep track of the in Grafana
        </p>
        <div class="mt-10 flex items-center justify-center gap-x-6">
          <NuxtLink
            type="button"
            to="/track"
            class="transition ease-in-out delay-150 bg-blue-500 hover:scale-105 hover:bg-indigo-500 duration-30 rounded-md bg-indigo-600 px-3.5 py-1.5 text-base font-semibold leading-7 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600  duration-300"
          >
          Start tracking
            </NuxtLink>
          <a
            to="/expenses"
            class="text-base font-semibold leading-7 text-gray-900"
            >Learn more <span aria-hidden="true">→</span></a
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
/*export default {*/

/*}*/
</script>
>

<style lang="css" scoped></style>
