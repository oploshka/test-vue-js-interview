/*
Этот файл отвечает за условный сетевой слой.
 */


// Данный объект о том куда стремиться в структуре данных
/*
const correctUserExample = {
  id: 1,
  avatar: {
    id: 14, 
    src: 'https://cdn.vuetifyjs.com/images/lists/1.jpg'
  },
  title: 'Brunch this weekend?',
  titleCount: null,
  subtitleFirst: 'Ali Connors',
  subtitleSecond: 'I\'ll be in your neighborhood doing errands this weekend. Do you want to hang out?',
  address: {
    name: 'User address',
    // location: { lat: 44.2, lon: 37.8},
    // ...
  },
};
 */

// Комменты и разделения оставлены для наглядности
const getUserListMock = () => {
  return [
    // { header: 'List' },
    {
      avatar: 'https://cdn.vuetifyjs.com/images/lists/1.jpg',
      title: 'Brunch this weekend?',
      // subtitle - логичнее разделить на 2 поля без использования html
      subtitle: `<span class="text--primary">Ali Connors</span> &mdash; I'll be in your neighborhood doing errands this weekend. Do you want to hang out?`,
      // добавляем доп. поле адреса (по хорошему объект, но для упрощения используем строку)
      address: 'User address',
      id: 1,
    },
    // { divider: true, inset: true },
    {
      avatar: 'https://cdn.vuetifyjs.com/images/lists/2.jpg',
      title: 'Summer BBQ <span class="grey--text text--lighten-1">4</span>', // Тут использование html избыточно, логичнее вынести 4 - в отдельное поле
      subtitle: `<span class="text--primary">to Alex, Scott, Jennifer</span> &mdash; Wish I could come, but I'm out of town this weekend.`,
      //
      address: 'User address',
      id: 2,
    },
    // { divider: true, inset: true },
    {
      avatar: 'https://cdn.vuetifyjs.com/images/lists/3.jpg',
      title: 'Oui oui',
      subtitle: '<span class="text--primary">Sandra Adams</span> &mdash; Do you have Paris recommendations? Have you ever been?',
      //
      address: 'User address',
      id: 3,
    },
    // { divider: true, inset: true },
    {
      avatar: 'https://cdn.vuetifyjs.com/images/lists/4.jpg',
      title: 'Birthday gift',
      subtitle: '<span class="text--primary">Trevor Hansen</span> &mdash; Have any ideas about what we should get Heidi for her birthday?',
      //
      address: 'User address',
      id: 4,
    },
    // { divider: true, inset: true },
    {
      avatar: 'https://cdn.vuetifyjs.com/images/lists/5.jpg',
      title: 'Recipe to try',
      subtitle: '<span class="text--primary">Britta Holt</span> &mdash; We should eat this: Grate, Squash, Corn, and tomatillo Tacos.',
      //
      address: 'User address',
      id: 5,
    },
  ]
}

// Api выглядит гораздо сложнее, а это лишь его эмуляция
export default {
  User: {
    
    // Это мок и переменная filter тут не используется
    /* eslint-disable no-unused-vars */
    getList(filter) {
      
      return new Promise(resolve => {
        setTimeout(() => {
          resolve(getUserListMock())
        }, 2000)
      })
    }
  }
}