import React, { PureComponent } from 'react';
import { connect } from 'dva';
import { Card, Button, Input, Icon, List, Form, Modal, Avatar,Select } from 'antd';

import Ellipsis from '@/components/Ellipsis';
import PageHeaderWrapper from '@/components/PageHeaderWrapper';

import styles from './CardList.less';
import moment from 'moment';

const FormItem=Form.Item;
@Form.create()
@connect(({ list, loading }) => ({
  list,
  loading: loading.models.list,
}))
class CardList extends PureComponent {

  state={
    visible:false,
    current:undefined,
  };
  componentDidMount() {

    const { dispatch } = this.props;

    dispatch({
      type: 'list/fetch',//约定的格式
      payload: {
        count: 8,
      },
    });

  }

  btnDelete = (item)=>{
    Modal.confirm({
      title: '删除任务',
      content: '确定删除该任务吗？',
      okText: '确认',
      cancelText: '取消',
      onOk: () => this.delete(item),
    });
    // console.log(item);
  }

  delete =(item)=>{
    const {dispatch}=this.props;
    dispatch({
      type:'list/btnDelete',
      payload:{
        id: item.id,
      },
    })
  }

  showEditModal=(item)=>{
    this.setState({
      visible: true,
      current:item,
    });
  }

  handleOk=()=>{
    this.setState({
      visible:false,
    });
  }

  handleCancel = (e) => {
    console.log(e);
    this.setState({
      visible: false,
    });
  }



  addItem = () => {
    const {dispatch} = this.props;
    dispatch({
      type:'list/addItem',
      payload:{
        count:9,
      },
    })
  }

  handleSubmit = (e) => {
    console.log(e);
    const { current } = this.state;
    const idx = current ? current.id : '';
    console.log(idx);
    e.preventDefault();
    const {
      form: {
        validateFields
      }
    } = this.props;
    /// this.props.form.validateFields()
    validateFields((err, values) => {

      if (!err) {
        console.log('Received values of form: ', values);
        const { dispatch } = this.props;
        console.log(values.id);
        dispatch({
          type:'list/handleSubmit',
          payload:{
            title:values.title,
            id:idx,

          },

        });
        this.setState({
          visible: false,
        });


      }

    });

  }




  render() {

    const {
      list: { list },
      loading,
    } = this.props;

    const content = (
      <div className={styles.pageHeaderContent}>
        <p>
          段落示意：蚂蚁金服务设计平台 ant.design，用最小的工作量，无缝接入蚂蚁金服生态，
          提供跨越设计与开发的体验解决方案。
        </p>
        <div className={styles.contentLink}>
          <a>
            <img alt="" src="https://gw.alipayobjects.com/zos/rmsportal/MjEImQtenlyueSmVEfUD.svg" />{' '}
            快速开始
          </a>
          <a>
            <img alt="" src="https://gw.alipayobjects.com/zos/rmsportal/NbuDUAuBlIApFuDvWiND.svg" />{' '}
            产品简介
          </a>
          <a>
            <img alt="" src="https://gw.alipayobjects.com/zos/rmsportal/ohOEPSYdDTNnyMbGuyLb.svg" />{' '}
            产品文档
          </a>
        </div>
      </div>
    );

    const extraContent = (
      <div className={styles.extraImg}>
        <img
          alt="这是一个标题"
          src="https://gw.alipayobjects.com/zos/rmsportal/RzwpdLnhmvDJToTdfDPe.png"
        />
      </div>
    );

    const {
      form: {
        getFieldDecorator,
      }
    } = this.props;
    const { current } = this.state;
    const title = current ? current.title : '';
    console.log(current);


    return (
      <PageHeaderWrapper title="卡片列表" content={content} extraContent={extraContent}>
        <div className={styles.cardList}>
          <List
            rowKey="id"
            loading={loading}
            grid={{ gutter: 24, lg: 3, md: 2, sm: 1, xs: 1 }}
            dataSource={['', ...list]}
            renderItem={item =>
              item ? (
                <List.Item key={item.id}>
                  <Card hoverable className={styles.card} actions={[<a onClick={()=>this.showEditModal(item)}>修改</a>,<a onClick={()=>this.btnDelete(item)}>删除</a>]}>
                    <Card.Meta
                      avatar={<img alt="" className={styles.cardAvatar} src={item.avatar} />}
                      title={<a>{item.title}</a>}
                      description={
                        <Ellipsis className={styles.item} lines={3}>
                          {item.description}
                        </Ellipsis>
                      }
                    />
                  </Card>
                </List.Item>
              ) : (
                <List.Item>
                  <Button type="dashed" className={styles.newButton} onClick={this.addItem}>
                    <Icon type="plus" /> 新增产品
                  </Button>
                </List.Item>
              )
            }
          />
        </div>
        <Modal
          title="请修改表单信息"
          visible={this.state.visible}
          onOk={this.handleOk}
          onCancel={this.handleCancel}
        >
          <Form layout="inline" onSubmit={this.handleSubmit}>
            <FormItem label="任务名称" {...this.formLayout}>
              {getFieldDecorator('title', {
                rules:[{ required: true, message: '请输入任务名称' }],
                initialValue:title,
              })(<Input placeholder="请输入" />)}
            </FormItem>
            <Button
              type="primary"
              htmlType="submit"

            >
              提交
            </Button>
          </Form>
        </Modal>
      </PageHeaderWrapper>
    );
  }
}

export default CardList;
