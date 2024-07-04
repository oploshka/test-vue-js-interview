<template>
  <div>
    <template v-if="loadingStatus === LOADING.LOADING">
      <!-- Блок с анимацией - выноситься в отдельный компонент, но речь сейчас не об этом -->
      <div>Loading...</div>
    </template>
    
    <template v-if="loadingStatus === LOADING.SUCCESS">
      <slot/>
    </template>
    
    <template v-if="loadingStatus === LOADING.ERROR">
      <slot name="error">
        <div>Произошла ошибка при загрузке данных</div>
      </slot>
    </template>
    
  </div>
</template>

<script>

  import {LoadingStatus} from '@/components/ContentBlockV2/Enum';
  
  // Вообще Layout делается через связку с роутов в App.vue, но мы условно это сделаем здесь
  export default {
    name: 'BlockLoading',
    props: {
      loadingStatus: { type: String }
    },
    computed: {
      LOADING() {
        return LoadingStatus;
      }
    }
  }
</script>
