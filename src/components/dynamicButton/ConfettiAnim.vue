<template>
  <div>
    <!-- <button @click="explode">Show confettibutton</button> -->
    <ConfettiExplosion v-if="visible" />
  </div>
</template>

<script setup>
  import { nextTick, onMounted, ref } from "vue";
  import ConfettiExplosion from "vue-confetti-explosion";

  const visible = ref(false);

  // const explode = async () => {
  //   visible.value = false;
  //   await nextTick();
  //   visible.value = true;
  // };

  onMounted(async() => {
    visible.value = false;
    await nextTick();
    visible.value = true;
  })

</script>
