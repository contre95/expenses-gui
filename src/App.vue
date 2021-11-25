<template>
  <div class="content">
    <router-view />
  </div>
  <div id="nav">
    <va-button-group color="#2c3e50" class="mb-4">
      <router-link to="/">
        <va-button size="large">
          <va-icon name="home" size="2rem" class="mr-2" />
        </va-button>
      </router-link>
      <router-link to="/track">
        <va-button size="large">
          <va-icon name="euro" size="2rem" class="mr-2" />
        </va-button>
      </router-link>
      <router-link to="/import">
        <va-button size="large">
          <va-icon name="download" size="2rem" class="mr-2" />
        </va-button>
      </router-link>
      <router-link to="/about">
        <va-button size="large">
          <va-icon name="person_outline" size="2rem" class="mr-2" />
        </va-button>
      </router-link>
    </va-button-group>
  </div>
</template>

<style></style>
