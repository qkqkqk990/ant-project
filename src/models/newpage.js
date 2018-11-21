

export default {
  namespace: 'newpage',

  state: {
    list: [],
    list2: [],
    list3:[],
  },

  effects: {
    *add({payload},{call,put}){
      const data= [
        {
          "id": "001",
          "name": "昂昂溪",
          "desc": "dhjdhf",
          "sqlname": "nihao",
          "saferoads": "hdah",
          "language": "en",
          "hand": "auto"
        },
        {
          "id": "002",
          "name": "安北",
          "desc": "dhjdhf",
          "sqlname": "nihao",
          "saferoads": "hdah",
          "language": "en",
          "hand": "auto"
        },
        {
          "id": "003",
          "name": "敖包",
          "desc": "dhjdhf",
          "sqlname": "nihao",
          "saferoads": "hdah",
          "language": "en",
          "hand": "auto"
        },
        ];
      yield put({
        type: 'queryList3Add',//put通过tyPe的方法，将payload里的数据传给
        payload: data,
      });
    },


    *fetch3({ payload },{call,put}){
      const data= [
        {
          "id": "001",
          "name": "昂昂溪",
          "desc": "dhjdhf",
          "sqlname": "nihao",
          "saferoads": "hdah",
          "language": "en",
          "hand": "auto"
        },
        {
          "id": "002",
          "name": "安北",
          "desc": "dhjdhf",
          "sqlname": "nihao",
          "saferoads": "hdah",
          "language": "en",
          "hand": "auto"
        },
        {
          "id": "003",
          "name": "敖包",
          "desc": "dhjdhf",
          "sqlname": "nihao",
          "saferoads": "hdah",
          "language": "en",
          "hand": "auto"
        },
        {
          "id": "004",
          "name": "敖包沟",
          "desc": "dhjdhf",
          "sqlname": "nihao",
          "saferoads": "hdah",
          "language": "en",
          "hand": "auto"
        },
        {
          "id": "005",
          "name": "艾不盖",
          "desc": "dhjdhf",
          "sqlname": "nihao",
          "saferoads": "hdah",
          "language": "en",
          "hand": "auto"
        },
        {
          "id": "006",
          "name": "阿巴嘎旗",
          "desc": "dhjdhf",
          "sqlname": "nihao",
          "saferoads": "hdah",
          "language": "en",
          "hand": "auto"
        },
        {
          "id": "007",
          "name": "艾比湖",
          "desc": "dhjdhf",
          "sqlname": "nihao",
          "saferoads": "hdah",
          "language": "en",
          "hand": "auto"
        },
        {
          "id": "008",
          "name": "安边镇",
          "desc": "dhjdhf",
          "sqlname": "nihao",
          "saferoads": "hdah",
          "language": "en",
          "hand": "auto"
        },
        {
          "id": "009",
          "name": "阿城",
          "desc": "dhjdhf",
          "sqlname": "nihao",
          "saferoads": "hdah",
          "language": "en",
          "hand": "auto"
        },
        {
          "id": "010",
          "name": "㘷岱",
          "desc": "dhjdhf",
          "sqlname": "nihao",
          "saferoads": "hdah",
          "language": "en",
          "hand": "auto"
        },
        {
          "id": "011",
          "name": "安达",
          "desc": "dhjdhf",
          "sqlname": "nihao",
          "saferoads": "hdah",
          "language": "en",
          "hand": "auto"
        },
        {
          "id": "012",
          "name": "安定",
          "desc": "dhjdhf",
          "sqlname": "nihao",
          "saferoads": "hdah",
          "language": "en",
          "hand": "auto"
        },
        {
          "id": "013",
          "name": "安多",
          "desc": "dhjdhf",
          "sqlname": "nihao",
          "saferoads": "hdah",
          "language": "en",
          "hand": "auto"
        },
        {
          "id": "014",
          "name": "安德",
          "desc": "dhjdhf",
          "sqlname": "nihao",
          "saferoads": "hdah",
          "language": "en",
          "hand": "auto"
        },
        {
          "id": "015",
          "name": "阿都呼都格",
          "desc": "dhjdhf",
          "sqlname": "nihao",
          "saferoads": "hdah",
          "language": "en",
          "hand": "auto"
        },
        {
          "id": "016",
          "name": "阿达日嘎",
          "desc": "dhjdhf",
          "sqlname": "nihao",
          "saferoads": "hdah",
          "language": "en",
          "hand": "auto"
        },
        {
          "id": "017",
          "name": "阿尔山",
          "desc": "dhjdhf",
          "sqlname": "nihao",
          "saferoads": "hdah",
          "language": "en",
          "hand": "auto"
        },
        {
          "id": "018",
          "name": "阿尔山北",
          "desc": "dhjdhf",
          "sqlname": "nihao",
          "saferoads": "hdah",
          "language": "en",
          "hand": "auto"
        },
        {
          "id": "019",
          "name": "阿尔乡",
          "desc": "dhjdhf",
          "sqlname": "nihao",
          "saferoads": "hdah",
          "language": "en",
          "hand": "auto"
        },
        {
          "id": "020",
          "name": "安福",
          "desc": "dhjdhf",
          "sqlname": "nihao",
          "saferoads": "hdah",
          "language": "en",
          "hand": "auto"
        }
      ];
      yield put({
        type: 'queryList3',
        payload: data,
      });
    }
  },



  reducers: {
    queryList(state, action) {
      return {
        ...state,
        list: action.payload,
      };
    },

    queryList3(state,action3){
      return{
        ...state,
        list3:action3.payload,
      };
    },
    queryList3Add(state,action4){
      return{
        ...state,
        list3:state.list3.concat(action4.payload),
      };
    },
  }
};
