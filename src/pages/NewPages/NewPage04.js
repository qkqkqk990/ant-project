import React, { PureComponent } from 'react';
import PageHeaderWrapper from '@/components/PageHeaderWrapper';
import { Input, Card, Table,Tag, Button } from 'antd';

class NewPage04 extends PureComponent {
  state = {
    selectedRowKeys: [],
    loading: false,
    sortedInfo: {},
    filteredInfo: {},
    searchText: '',
    selectedKeys: '',
  };

  start = () => {
    this.setState({
      loading: true,
    });
    setTimeout(() => {
      this.setState({
        selectedRowKeys: [],
        loading: false,
      });
    }, 1000);
  };

  setAgeSort = () => {
    console.log(123);
    this.setState({
      sortedInfo: {
        order: 'descend',
        columnKey: 'age',
      },
    });
  };

  clearAll = () => {
    console.log('清除所有');
    this.setState({
      filteredInfo: {},
      sortedInfo: {},
    });
  };

  handleClearFilters = (clearFilters) => () => {
    console.log('清除选中');
    clearFilters();
    this.setState({
      selectedRowKeys: [],
      searchText: '',
    });
  };

  handleSearchJob = (selectedKeys, confirm) => () => {
    console.log('筛选来了');
    console.log(selectedKeys);
    confirm();
    this.setState({ searchText: selectedKeys[0] });
  };


  render() {
    const { loading, sortedInfo, selectedRowKeys, filteredInfo, searchText } = this.state;
    console.log(sortedInfo);
    console.log(filteredInfo);
    const dataSource = [{
      key: 1,
      name: '胡彦斌',
      age: 32,
      address: '西湖区湖底公园1号',
      like: '女',
      job: '歌手',
      education: '皇家音乐学院',
      tags: ['nice', 'developer'],
      phone:'027-50758000',
      tel:'027-50758002',
      description: 'My name is John Brown, I am 32 years old, living in New York No. 1 Lake Park.',
      children:[
        {
          key: 11,
          name: '胡潇缤',
          age: 32,
          address: '西湖区湖底公园1号',
          like: '女',
          job: '歌手',
          education: '皇家音乐学院',
          tags: ['nice', 'developer'],
          phone:'027-50758000',
          tel:'027-50758002',
          description: 'My name is John Brown, I am 32 years old, living in New York No. 1 Lake Park.',
          children:[
            {
              key: 111,
              name: '胡小兵',
              age: 32,
              address: '西湖区湖底公园1号',
              like: '女',
              job: '歌手',
              education: '皇家音乐学院',
              tags: ['nice', 'developer'],
              phone:'027-50758000',
              tel:'027-50758002',
              description: 'My name is John Brown, I am 32 years old, living in New York No. 1 Lake Park.'
            },
            {
              key: 112,
              name: '胡冰冰',
              age: 32,
              address: '西湖区湖底公园1号',
              like: '女',
              job: '歌手',
              education: '皇家音乐学院',
              tags: ['nice', 'developer'],
              phone:'027-50758000',
              tel:'027-50758002',
              description: 'My name is John Brown, I am 32 years old, living in New York No. 1 Lake Park.'
            },
          ]
        }
      ]
    }, {
      key: 2,
      name: '吴彦祖',
      age: 42,
      address: '西湖区湖底公园1号',
      like: '武术',
      job: '演员',
      education: '美国牛津大学',
      tags: ['loser'],
      phone:'027-50758000',
      tel:'027-50758002',
      description: 'My name is John Brown, I am 32 years old, living in New York No. 1 Lake Park.'
    },
      {
        key: 3,
        name: '毛不易',
        age: 22,
        address: '北京湖底公园1号',
        like: '猫咪和吉他',
        job: '歌手',
        education: '杭州师范大学',
        tags: ['cool', 'teacher'],
        phone:'027-50758000',
        tel:'027-50758002',
        description: 'My name is John Brown, I am 32 years old, living in New York No. 1 Lake Park.'
      },
      {
        key: 4,
        name: '吴彦祖black',
        age: 43,
        address: '西湖区湖底公园1号',
        like: '武术',
        job: '演员',
        education: '美国牛津大学',
        tags: ['loser'],
        phone:'027-50758000',
        tel:'027-50758002',
        description: 'My name is John Brown, I am 32 years old, living in New York No. 1 Lake Park.'
      },
      {
        key: 5,
        name: '吴彦祖green',
        age: 43,
        address: '西湖区湖底公园1号',
        like: '武术',
        job: '演员',
        education: '美国牛津大学',
        tags: ['loser'],
        phone:'027-50758000',
        tel:'027-50758002',
        description: 'My name is John Brown, I am 32 years old, living in New York No. 1 Lake Park.',

      },

    ];
    for (let i = 6; i < 50; i++) {
      dataSource.push({
        key: i,
        name: `毛不易 ${i}`,
        age: `${20 + i}`,
        like: `灵魂唱歌${i}`,
        address: `hangzhou road no.${i}`,
        tags: ['cool', 'teacher'],
        phone:'027-50758016',
        tel:'027-50758002',
        description: 'My name is John Brown, I am 32 years old, living in New York No. 1 Lake Park.'
      });
    }
    const rowSelection = {
      selectedRowKeys,
      onChange: (selected) => {
        console.log(`selectedRowKeys: ${selected}`);
        this.setState({
          selectedRowKeys: selected,
        });
      },

      hideDefaultSelections: true,
      selections: [{
        key: 'all-data',
        text: 'Select All Data',
        onSelect: () => {

          this.setState({
            selectedRowKeys: [...Array(dataSource.length + 1).keys()], // 0...45
          });
        },
      }, {
        key: 'odd',
        text: 'Select Odd Row',
        onSelect: (changeOptions) => {
          let newSelectedRowKeys = [];
          newSelectedRowKeys = changeOptions.filter((key, index) => {
            if (index % 2 !== 0) {
              return false;
            }
            return true;
          });
          this.setState({ selectedRowKeys: newSelectedRowKeys });
        },
      }, {
        key: 'even',
        text: 'Select Even Row',
        onSelect: (changableRowKeys) => {
          let newSelectedRowKeys = [];
          newSelectedRowKeys = changableRowKeys.filter((key, index) => {
            if (index % 2 !== 0) {
              return true;
            }
            return false;
          });
          this.setState({ selectedRowKeys: newSelectedRowKeys });
        },
      }],

    };

    const hasSelected = selectedRowKeys.length > 0;

    const columns = [
      {
        title: '编号',
        dataIndex: 'key',
        key: 'key',
        fixed: 'left',
        width:100,
      },
      {
        title: '姓名',
        dataIndex: 'name',
        key: 'name',
        width:100,
        fixed:'left',
        filters: [
          {
            text: '毛不易',
            value: '毛不易',
          },
          {
            text: '吴彦祖',
            value: '吴彦祖',
            children: [
              {
                text: 'Green',
                value: 'Green',
              },
              {
                text: 'Black',
                value: 'Black',
              }
            ],
          },
        ],
        onFilter: (value, record) => {
          console.log(value, record);
          return record.name.indexOf(value) === 0;
        },
        sorter: (a, b) => a.name.length - b.name.length,

      }, {
        title: '年龄',
        dataIndex: 'age',
        key: 'age',
        width:100,
        sorter: (a, b) => a.age - b.age,
        sortOrder: sortedInfo.columnKey === 'age' && sortedInfo.order,
      },
      {
        title: '职业',
        dataIndex: 'job',
        key: 'job',
        width:100,
        filterDropdown: ({ setSelectedKeys, selectedKeys, confirm, clearFilters }) => (
          <div>
            <Input
              placeholde="search me"
              ref={ele => {this.searchInput = ele}}
              value={selectedKeys[0]}
              onChange={e => {
                console.log(setSelectedKeys);
                setSelectedKeys(e.target.value ? [e.target.value] : []);
              }}
              onPressEnter={this.handleSearchJob(selectedKeys, confirm)}
            />
            <Button type="primary" onClick={this.handleSearchJob(selectedKeys, confirm)}>Search</Button>
            <Button onClick={this.handleClearFilters(clearFilters)}>Reset</Button>
          </div>
        ),
        // onFilter: (value, record) => record.job.toLowerCase().includes(value.toLowerCase()),
        onFilterDropdownVisibleChange: (visible) => {
          if (visible) {
            setTimeout(() => {
              this.searchInput.focus();
            });
          }
        },

        //搜索匹配
        onFilter: (value, record) => {
          console.log(value, record);
          return record.job && record.job.toLowerCase().includes(value.toLowerCase())
        },
        render: (text) => searchText && text ? (
          <span>
            {text.split(new RegExp(`(?<=${searchText})|(?=${searchText})`, 'i')).map((fragment, i) => (
              fragment.toLowerCase() === searchText.toLowerCase()
                ? <span key={i} style={{color: '#f50'}}>{fragment}</span> : fragment // eslint-disable-line
            ))}
          </span>
        ) : text,
      },

      {
        title: '爱好',
        dataIndex: 'like',
        key: 'like',
        width:100,
      },
      {
        title: '标签',
        key: 'tags',
        dataIndex: 'tags',
        width:100,
        render: tags => (
          <span>
            {tags.map(tag => <Tag color="blue" key={tag}>{tag}</Tag>)}
          </span>
        ),
      },
      {
        title: '电话',
        key: 'phone',
        dataIndex: 'phone',
        colSpan:2,
      },
      {
        title: '电话',
        key: 'tel',
        dataIndex: 'tel',
        colSpan:0,
      },

      {
        title: '学历',
        dataIndex: 'education',
        key: 'education',
        width:100,
      },
      {
        title: '住址',
        dataIndex: 'address',

        key: 'address',
        width:100,
        children:[
          {
            title:'Street',
            children:[
              {
                title:'No.'
              },
              {
                title:'Building'
              }
            ]

          },

          {
            title:'Block'
          },
        ]
      },
      { title: 'Action',
        dataIndex: '',
        key: 'x',
        width:100,
        render: () => <a href="javascript:;">Delete</a>
      },

      {
        title: '描述',
        dataIndex: 'description',
        key: 'description',
        width:200,
        fixed: 'right',
      }
      ];

    // function onChange(pagination, filters, sorter){
    //   console.log('params', pagination, filters, sorter);
    // }
    return (
      <PageHeaderWrapper title="查询表格应用">

        <Card>
          <div>
            <Button onClick={this.setAgeSort}>Sort age</Button>
            <Button onClick={this.clearAll}>Clear filters and sorters</Button>
          </div>
          <Button
            type="primary"
            onClick={this.start}
            ghost
            loading={loading}
          >
            刷新
          </Button>
          <span>
            {hasSelected ? selectedRowKeys.length : ''} 条记录被选中
          </span>
          <Table
            rowSelection={rowSelection}
            dataSource={dataSource}
            columns={columns}
            bordered
            scroll={{x: '130%',y:400}}
            title={()=>'表格查询/排序/筛选应用'}
            // expandedRowRender={record => <p style={{ color:'green'}}>{record.description} </p>}
            footer={()=>'总结'}
          />
        </Card>
      </PageHeaderWrapper>

    );
  };
};
export default NewPage04;
