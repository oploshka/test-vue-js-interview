<template>
  <v-container>
    <v-row
        align="center"
        justify="center"
        class="ma-4"
    >
      <v-col cols="12">
        <v-img
            :src="require('../../assets/logo.svg')"
            class="my-3"
            contain
            height="200"
        />
      </v-col>
      
      <v-col cols="12">
        <slot/>
      </v-col>
      
    </v-row>
  </v-container>
</template>

<script>

  // Вообще Layout делается через связку с роутов в App.vue, но мы условно это сделаем здесь
  export default {
    name: 'PageLayout',
  }
</script>
