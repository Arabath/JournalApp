<template>
  <div class="entry-container mb-3 pointer p-2"
  @click="$router.push({ name:'entry', params:{ id: 10 } })">
    <!-- Titulo -->
    <div class="entry-title d-flex">
        <span class="text-success fs-5 fw-bold">15</span>
        <span class="mx-1 fs-5">Julio</span>
        <span class="mx-2 fw-light">2021, Jueves</span>
    </div>

    <div class="entry-description">
        Velit deserunt culpa aliquip irure eu nisi labore Lorem consequat. Cupidatat in consequat reprehenderit laboris occaecat veniam esse cillum id veniam sint non. Proident duis adipisicing anim quis sit ipsum. Aliquip minim fugiat voluptate enim do duis dolore. Tempor eiusmod anim eu quis eiusmod Lorem velit.
    </div>

  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
  .entry-container {
    border-bottom: 1px solid #2c3e50;
    transition: 0.2s all ease-in;

  &:hover {
      background: lighten($color: grey, $amount: 40);
      transition: 0.2s all ease-in;
  }

  .entry-description {
      font-size: 12px;
  }
}
</style>