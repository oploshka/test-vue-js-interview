
Данная работа со стором показана больше для примера и для многих она будет непонятна.
Это показано больше для примера и по факту не используется.

Общая логика такой работы в том, что мы кешируем значения по фильтрам (далее по пагинациям и прочему),
что позволяет уменьшить нагрузку на сервер и сделать более адаптивный вариант работы.

В реальных же задачах стор дорогостоящая штука и его применение не всегда есть хорошо.

[userListPageStore.js](userListPageStore.js) 
Тут храним последний фильтр

[userListStore.js](userListStore.js)
Тут достаем значения по фильтрам