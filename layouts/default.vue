<!-- This example requires Tailwind CSS v3.0+ -->
<template>
  <div class="border">
    <header>
    <div class="px-6 pt-6 lg:px-8">
    <nav x-data="{ isOpen: false }" class="relative ">
        <div class="container px-6 py-4 mx-auto flex justify-between items-center">
            <div class="flex items-center justify-between">
                <a href="#">
                    <img class="h-11 scale-150" src="https://cdn-icons-png.flaticon.com/512/6398/6398794.png" alt="">
                </a>
            </div>
    
            <div class="md:bg-transparent md:dark:bg-transparent md:mt-0 md:p-0 md:top-0 md:relative md:w-auto md:opacity-100 md:translate-x-0 md:flex md:items-center">
                <div class="md:flex-row md:mx-6">
                    <NuxtLink class="text-gray-700 transition-colors duration-300 transform  hover:text-blue-500  md:mx-4 md:my-0" to="/">Home</NuxtLink>
                    <NuxtLink class="text-gray-700 ml-7 mr-7 duration-300 transform  hover:text-blue-500md:mx-4 md:my-0" to="/expenses">Expenses</NuxtLink>
                    <NuxtLink class="transition ease-in-out delay-150 bg-blue-500 hover:scale-105 hover:bg-indigo-500 duration-30 rounded-md bg-indigo-600 md:mx-4 md:my-0 px-3.5 py-1.5 text-base font-semibold leading-7 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600  duration-300" type="button" to="/track">Track</NuxtLink>
                </div>
            </div>
        </div>
    </nav>
    </div>
    </header>
    <main>
    <section class="container px-4 mx-auto">

   <slot />
   </section>
    </main>
  </div>
</template>

<script setup>
</script>
