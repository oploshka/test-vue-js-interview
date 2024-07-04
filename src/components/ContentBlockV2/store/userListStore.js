
/*
* search:
* {
*   variant1,
*   variant2,
* }
**/

import stateCache from './stateCache';
import Api from '@/components/ContentBlockV2/Api';

export default stateCache({
  name: 'userList',
  getKey: function ({ variant1, variant2 }) {
    return '' + variant1 + '_' + variant2;
  },
  getRequestData: function (filter) {
    return {
      method: Api.User.getList,
      props: {
        variant1: filter.variant1,
        variant2: filter.variant2,
      },
      //cancelToken: state.eventV2[cacheName].cancelToken
    }
  },
  prepare: (item) => { return item; } // по факту это уходит в сетевой слой
});