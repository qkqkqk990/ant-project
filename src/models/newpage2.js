export default {
  namespace: 'newpage2',

  state: {
    list2: [],
  },

  effects: {
    *fetch({ payload }, { call, put }) {
      console.log('123');
      const response = [
        {
          name: {
            last: '11'
          }
        },
        {
          name: {
            last: 'b22bb'
          }
        },
        {
          name: {
            last: 'cdd33dcc'
          }
        }
      ];
      yield put({
        type: 'queryList',
        payload: response,
      });
    },
  },

  reducers: {
    queryList(state, action) {
      console.log(action);
      return {
        ...state,
        list2: action.payload,
      };
    },
  },
};
