<template>
  <div>
    <v-list-item-avatar>
      <div>
        <template v-if="address">
          <v-tooltip right>
            <template v-slot:activator="{ on, attrs }">
              <div v-on="on">
                <v-img :src="avatar"  v-bind="attrs"/>
              </div>
            </template>
            <span>Address: {{address}}</span>
          </v-tooltip>
        </template>
        <template v-else>
          <v-img :src="avatar"></v-img>
        </template>
      </div>
    </v-list-item-avatar>
    
    <v-list-item-content>
      <v-list-item-title v-html="title"></v-list-item-title>
      <v-list-item-subtitle v-html="subtitle"></v-list-item-subtitle>
    </v-list-item-content>
  </div>
</template>

<script>
  export default {
    name: 'ComponentUserCard',

    props: {
      // Можно использовать Объект User, но большинству привычнее так, хотя это чуть менее производительно.
      title: {type: String, require: false},
      avatar: {type: String, require: false},
      subtitle: {type: String, require: false},
      address: {type: String, require: false},
    },
    
    methods: {
      
    }
  }
</script>
