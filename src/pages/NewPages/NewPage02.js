 import React, { PureComponent } from 'react';
 import PageHeaderWrapper from '@/components/PageHeaderWrapper';
 import styles from '../List/CardList.less';
 import {Card,Col,Row,Avatar,Icon,List} from 'antd';
 // import {connect} from 'dva';

 class NewPage02 extends PureComponent{

   renderItem2 = (item, index) => (<List.Item>{item}: {index}</List.Item>);

   render() {
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
     const content=(
       <div>
         <p>段落示意：蚂蚁金服务设计平台 ant.design，用最小的工作量，无缝接入蚂蚁金服生态， 提供跨越设计与开发的体验解决方案。</p>
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
     const gridStyle = {
       width: '25%',
       textAlign: 'center',
     };
     const { Meta } = Card;





     //List测试
     const list=[
       'Racing car sprays burning fuel into crowd.',
       'Japanese princess to wed commoner.',
       'Australian walks 100km after outback crash.',
       'Man charged over missing wedding girl.',
       'Los Angeles battles huge wildfires.',
     ]
     return (
       <div>
         <PageHeaderWrapper title="明星列表" content={content} extraContent={extraContent}>
           <div style={{ background: '#ECECEC', padding: '30px' }}>
             <Row gutter={16}>
               <Col span={8}>
                 <Card title="应采儿" bordered={false}>演员，歌手</Card>
               </Col>
               <Col span={8}>
                 <Card title="陈小春" bordered={false}>演员，舞蹈演员</Card>
               </Col>
               <Col span={8}>
                 <Card title="王力宏" bordered={false}>歌手，学者，很有钱，很出名，缝接入蚂蚁金服生态， 提供跨越设计与开发的体验解决方案。</Card>
               </Col>
             </Row>
           </div>

           <Card
             style={{ width: 300 }}
             cover={<img alt="example" src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png" />}
             actions={[<Icon type="setting" />, <Icon type="edit" />, <Icon type="ellipsis" />]}
           >
             <Meta
               avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
               title="Card title"
               description="This is the description"
             />
           </Card>

           <div className={styles.cardList}>
              <List
                header={<div>我是头部</div>}
                footer={<div>脚步</div>}
                bordered
                size="large"
                dataSource={list}
                renderItem={(item) => (<List.Item>{item}</List.Item>)}
              />
           </div>
           <List
             itemLayout="horizontal"
             dataSource={data}
             renderItem={item => (
               <List.Item>
                 <List.Item.Meta
                   avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
                   title={<a href="https://ant.design">{item.name}</a>}
                   description={item.id}
                 />
               </List.Item>
             )}
           />,

         </PageHeaderWrapper>
         </div>

     );
   }
 };
export default NewPage02;
