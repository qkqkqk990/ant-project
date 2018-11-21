import React,{Component,Fragment} from 'react';
import {List,Avatar,Button,Skeleton} from 'antd';
import { connect } from 'dva';
import PageHeaderWrapper from '@/components/PageHeaderWrapper';


@connect(({ newpage, loading }) => ({
  newpage,
  loading: loading.models.newpage,
}))
class NewPage03 extends Component {

  state={
    loading:true,
  };

  // componentDidMount(){
  //   console.log(this.state);
  //   const {dispatch} = this.props;
  //   dispatch({
  //     type: 'newpage/fetch',
  //     payload: {},
  //   });
  // }

  componentDidMount(){
    const {dispatch} = this.props;
    dispatch({//发送请求
      type: 'newpage/fetch3',//type是MODEL里的方法
      payload: {},//方法要接受的参数
    });

  }

  addMore=()=>{
    const {dispatch}=this.props;
    dispatch({
      type: 'newpage/add',
      payload: {},
    });

  }

  render(){

    const {
      loading,
      newpage: {
        list3,
      }
    } = this.props;

    return(
      <div>
        <PageHeaderWrapper title="管理信息系统">
          <List
            dataSource={list3}
            renderItem={item=>(
              <List.Item>
                <Skeleton avatar title={false} loading={loading} active>
                  <List.Item.Meta
                    avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
                    title={<a href="https://ant.design">{item.name}</a>}
                    description={item.id}
                  />
                  <div>content</div>
                </Skeleton>
              </List.Item>
            )}
          />
          <Button onClick={this.addMore}>
            loading more
          </Button>
        </PageHeaderWrapper>
      </div>
    );
  }
}

export default NewPage03;
