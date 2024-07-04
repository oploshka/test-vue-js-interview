
/*
 *
 * _s:
 * - name: string
 * - actionName: string
 * - getKey(search)
 * - getRequestData(search)
 * - prepare(data, search)
 *
 **/

export default function (_s) {

  var getNew = function () {
    return {
      loadStatus: "LOAD",
      request   : null, // TODO: use request
      data      : null
    };
  };

  return {
    state: {
      [_s.name]: {},
    },
    getters: {
      [_s.name](state) {
        return function(search){
          var value = state[_s.name][ _s.getKey(search) ];
          return value ? value : null;
        };
      }
    },
    mutations: {
      setMutation (state, {search, data}) {
        var key = _s.getKey(search);

        if(data === null){
          state[_s.name][ key ] = {
            loadStatus: "ERROR",
            data      : data
          };
        }

        state[_s.name][ key ] = {
          loadStatus: "SUCCESS",
          data      : data
        };
      },
      clearAllEventV2 (state) {
        state[_s.name] = {};
      },

    },
    actions: {

      ['request' + _s.name[0].toUpperCase() + _s.name.slice(1)]({ state, getters, commit, dispatch }, search) {

        var key = _s.getKey(search);
        if (state[_s.name][ key ]) {
          return state[_s.name][ key ];
        }

        Vue.set(state[_s.name], key, getNew());

        Vue.prototype.$commonStore.dispatch('sendRequest', _s.getRequestData(search) )
          .then(
            (response) => {
              if (response.data.error && response.data.error !== "ERROR_NOT") {
                console.error("ERROR:", response.data.error, response);
                throw new Error('error');
              }

              var data = response.data;
              data = _s.prepare(data, search);

              // TODO: add merge data

              commit('setMutation', {search: search, data: data});
            },
            (error) => {
              throw new Error(error);
            }
          ).catch(e => {
            commit('setMutation', {search: search, data: null});
            console.log("ERROR", e);
          });

      }

    }
  };
}

