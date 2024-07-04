<template>
  <v-list three-line>
    
    <v-subheader :v-text="'List'" />
    
    <template v-for="(item, index) in list">
      <div :key="item.id">
        <ComponentUserCard 
            :title="item.title"
            :subtitle="item.subtitle"
            :avatar="item.avatar"
            :address="item.address"
        />
        
        <template v-if="(index+1) < list.length">
          <v-divider :inset="true"/>
        </template>
      </div>
    </template>
  </v-list>
</template>

<script>
  import ComponentUserCard from '@/components/ContentBlockV2/ComponentUserCard.vue';
  
  export default {
    name: 'ComponentUserList',
    components: {
      ComponentUserCard
    },

    props: {
      list: {type: Array, require: true},
    },
  }
</script>
