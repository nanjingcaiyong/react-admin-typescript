import React from 'react';
import { Menu } from 'antd';
const { SubMenu } = Menu;
const Nav = () => {
  return (
    <Menu mode="horizontal">
      <Menu.Item key="home">
        网站首页
      </Menu.Item>
      <Menu.Item key="mail">
        个人博客模板
      </Menu.Item>
      <SubMenu title="博客网站制作">
        <Menu.Item key="setting:3">心得笔记</Menu.Item>
        <Menu.Item key="setting:4">CSS3|Html5</Menu.Item>
      </SubMenu>
      <SubMenu title="博客人生">
        <Menu.Item key="setting:3">博客日记</Menu.Item>
        <Menu.Item key="setting:4">程序人生</Menu.Item>
      </SubMenu>
      <Menu.Item key="mail">
        优秀个人博客
      </Menu.Item>
    </Menu>
  )
}
export default Nav;