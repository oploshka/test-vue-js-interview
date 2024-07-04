<template>
  <v-row>
    <v-select
        v-model="filter.variant1"
        :items="variant1OptionList"
        clearable
        label="Filter by country"
    ></v-select>
    
    <v-select
        v-model="filter.variant2"
        :items="variant2OptionList"
        clearable
        label="Filter by score"
    ></v-select>
    
    <v-btn @click="submit">Применить</v-btn>
  </v-row>
</template>

<script>
  export default {
    name: 'ComponentUserFilter',

    props: {
      initFilter: {type: Object, require: false},
    },
    
    data() {
      return {
        filter: {
          variant1: this.initFilter?.variant1 ?? null,
          variant2: this.initFilter?.variant2 ?? null,
        },
        
        variant1OptionList: [
          'russia',
          'usa',
        ],
        variant2OptionList: [
          '> 20',
          '< 10',
        ],
      }
    },
    
    
    methods: {
      submit() {
        // это не сильно правильно, но закроет текущий простой кейс и менять мы их не будем.
        this.$emit('submit', {...this.filter});
      }
    }
  }
</script>
