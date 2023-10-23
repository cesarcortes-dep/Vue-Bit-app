<template>
  <div>
    <PxAssestTable :assets="assets" />
  </div>
</template>

<script>
import PxAssestTable from "@/components/PxAssestTable.vue";
import api from "@/api";

export default {
  name: "HomeView",
  components: {
    PxAssestTable,
  },
  data() {
    return {
      assets: [],
    };
  },
  created(){
    api.getAssets().then(assets => (this.assets = assets))
  }
};
</script>

<style lang="scss" scoped></style>
