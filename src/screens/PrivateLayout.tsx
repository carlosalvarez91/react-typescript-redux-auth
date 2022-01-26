import React, { useEffect } from 'react';
import { Layout, Menu } from 'antd';
import { SettingFilled, DashboardFilled, LogoutOutlined } from '@ant-design/icons';
import {getUser, logoutUser } from "../redux/actions/userActions"
import { connect } from "react-redux";
import { Navigate, Link, useNavigate } from 'react-router-dom';

const { Header, Content, Sider } = Layout;

const PrivateLayout: React.FC = (props:any)=>{

    const { user, getUser, logoutUser } = props;
    const navigate = useNavigate()

    useEffect(() => {
        getUser()
    });


    if (!user.authenticated){
        return  <Navigate to="/login" />
    }

    return (
      <Layout>
        <Sider
          breakpoint="lg"
          collapsedWidth="0"
        >
          <div className="logo" />
          <Menu theme="dark" mode="inline" defaultSelectedKeys={['2']}>

            <Menu.Item key="2" icon={<DashboardFilled />}>
              <Link to="dashboard">
              Dashboard
              </Link>
            </Menu.Item>
            <Menu.Item key="3" icon={<SettingFilled />}>
              <Link to="settings">
              Settings
              </Link>
            </Menu.Item>
            <Menu.Item key="4" icon={<LogoutOutlined />} onClick={()=>logoutUser(navigate)}>
              Logout
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout>
          <Header className="site-layout-sub-header-background" style={{ paddingLeft: 10 }} >
          {user.credentials.email}
          </Header>
          <Content style={{ margin: '24px 16px 0' }}>
            <div className="site-layout-background" style={{ padding: 24, minHeight: 360 }}>
                {props.children}
            </div>
          </Content>
        </Layout>
      </Layout>
    )
}


const mapStateToProps = (state: any) => ({
  user: state.user
});
const mapActionsToProps = {
  getUser,
  logoutUser
};

export default connect(mapStateToProps, mapActionsToProps)(PrivateLayout)