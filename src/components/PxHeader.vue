<template>
  <header class="shadow w-screen">
    <nav>
      <nav class="flex items-center justify-between flex-wrap bg-green-400 p-6">
        <div class="flex items-center flex-shrink text-white mr-6">
            <px-icon class="mr-2 w-10 h-10"/>
          <router-link :to="{name: 'home'}" class="font-semibold text-xl tracking-tight">
            Bit-Exchange
          </router-link>
        </div>
        <div
          class="hidden sm:block w-full block flex-grow lg:flex lg:items-center lg:w-auto"
        >
          <div class="text-sm lg:flex-grow"></div>
        </div>
      </nav>
    </nav>
  </header>
</template>

<script>
import PxIcon from "./PxIcon.vue";
export default {
  name: "PxHeader",
  components: {
    PxIcon
  },
};
</script>

<style lang="scss" scoped></style>
