<template>
  <v-app>
    <v-main>
      <PageUserList/>
    </v-main>

    <v-footer app v-bind="localAttrs">
      <Footer />
    </v-footer>
  </v-app>
</template>

<script>
// import ContentBlock from './components/ContentBlock';
import PageUserList from './components/ContentBlockV2/PageUserList.vue';
import Footer from './components/Footer';

export default {
  name: 'App',

  components: {
    // ContentBlock,
    PageUserList,
    Footer
  },

  computed: {
    localAttrs () {
      const attrs = {}

      attrs.absolute = true
      attrs.fixed = false

      return attrs
    },
  },

  data: () => ({
    //
  }),
};
</script>
