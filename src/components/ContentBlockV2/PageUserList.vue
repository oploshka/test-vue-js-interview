<template>
  <PageLayout>
    <PageListTemplate>
      <template v-slot:filter>
        <ComponentUserFilter @submit="setFilter"/>
      </template>
      <template v-slot:default>
        <BlockLoading :loadingStatus="loadingStatus">
          <ComponentUserList :list="list"/>
        </BlockLoading>
      </template>
    </PageListTemplate>
  </PageLayout>
</template>

<script>

  import PageLayout from '@/components/ContentBlockV2/PageLayout.vue';
  import PageListTemplate from '@/components/ContentBlockV2/PageListTemplate.vue';
  //
  import BlockLoading from '@/components/ContentBlockV2/BlockLoading.vue';
  //
  import ComponentUserFilter from '@/components/ContentBlockV2/ComponentUserFilter.vue';
  import ComponentUserList from '@/components/ContentBlockV2/ComponentUserList.vue';
  //
  import Api from '@/components/ContentBlockV2/Api';
  import {LoadingStatus} from '@/components/ContentBlockV2/Enum';
  
  export default {
    name: 'PageUserList',
    components: {
      PageLayout, // Это выноситься на уровень выше, но здесь для примера, что оно должно быть.
      PageListTemplate,
      //
      BlockLoading,
      //
      ComponentUserFilter,
      ComponentUserList,
    },

    data() {
      return {
        loadingStatus: LoadingStatus.LOADING,
        
        list: [],
        filter: {},
      }
    },
    
    computed: {
      filteredList() {
        let list = this.list;
        
        list = list.filter((item) => {
          // тут пишем условный фильтр используя this.filter
          return item.id < 30;
        })
        
        return list
      }
    },
    
    methods: {
      
      setFilter(filter) {
        this.filter = {...filter}
        this.load();
        // или использовать filteredList с фейковым вызуальным эффектом лоадинга, чтоб убрать дергание
        // или закидывание в store
      },
      
      // Данная функция является повторяющимся кодом и выноситься в отдельный блок/миксин/класс
      // Такой вариант сделан просто для примера.
      // Дальше все пишется без использования this.loadingStatus = ...;
      load() {
        const request = Api.User.getList(this.filter);
        this.loadingStatus = LoadingStatus.LOADING;
        
        request.then(
          (response) => {
            this.list = response;
            this.loadingStatus = LoadingStatus.SUCCESS;
          },
          (error) => {
            console.error(error);
            this.loadingStatus = LoadingStatus.ERROR;
          }
        )
        
        return request;
      }
    },
    
    created() {
      this.load();
    }
  }
</script>
