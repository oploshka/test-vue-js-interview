<template>
  <v-row>
    <v-col cols="12" md="4">
      <slot name="filter"></slot>
    </v-col>
    
    <v-col cols="12" md="4">
      <v-card
          max-width="450"
          class="mx-auto"
      >
        <slot name="default"></slot>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
  export default {
    name: 'PageListTemplate',
  }
</script>
