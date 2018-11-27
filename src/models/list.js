import { queryFakeList, removeFakeList, addFakeList, updateFakeList } from '@/services/api';

export default {
  namespace: 'list',

  state: {
    list: [],
  },

  reducers: {
    queryList(state, action) {
      return {
        ...state,
        list: action.payload,
      };
    },
    appendList(state, action) {
      return {
        ...state,
        list: state.list.concat(action.payload),
      };
    },
    btnDelete(state,action){
      // console.log(state);
      // console.log(action);
      const a=state.list;
      const aa=action.payload.id;
      // a.splice(aa,1);  三种删除item的方法：1，splice,2,for if循环，3，filter
       const b = [];
      a.forEach( item => {
        if (item.id !== aa){
          b.push(item);
        }
      });
      const c = a.filter( item => item.id !== aa);//过滤就是把满足条件的返回，不满足的过滤
      // console.log(a);
      // a[index]
      return{
        ...state,
        list:c,
      };
    },
    addItem(state,action){
      // console.log(state);
      // console.log(action);
      const id=state.list.length;
      const props = {
        title:"李焕英",
        id,
      };
      const lista=state.list;

      lista.unshift(props);
      return{
        ...state,
        list:lista,
      }
    },
     handleSubmit(state,action){
       console.log(action);
       // console.log(state);
       const id1 = action.payload.id;
       const title1 =action.payload.title;
       console.log(title1,id1);
       const listNew = state.list.map(i => {
         if (i.id === id1) {
           return {
             ...i,
             title: title1,
           }
         }
         return i;
       });

       return{
         ...state,
         list:listNew,
       }
     },

  },


  effects: {


    *fetch({ payload }, { call, put }) {
      const response = yield call(queryFakeList, payload);
      yield put({
        type: 'queryList',
        payload: Array.isArray(response) ? response : [],
      });
    },

    *appendFetch({ payload }, { call, put }) {
      const response = yield call(queryFakeList, payload);
      yield put({
        type: 'appendList',
        payload: Array.isArray(response) ? response : [],
      });
    },
    *submit({ payload }, { call, put }) {
      console.log(payload);

      let callback;
      if (payload.id) {
        callback = Object.keys(payload).length === 1 ? removeFakeList : updateFakeList;
      } else {
        callback = addFakeList;
      }
      const response = yield call(callback, payload); // post
      yield put({
        type: 'queryList',
        payload: response,
      });
    },
    // *submitDelete({payload},{call,put}){
    //   console.log(payload);
    // },
  },

};
