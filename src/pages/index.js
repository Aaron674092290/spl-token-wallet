import {
  BlockOutlined,
  BuildOutlined,
  GlobalOutlined,
  HeatMapOutlined,
  InfoCircleOutlined,
  PlusCircleOutlined
} from '@ant-design/icons'
import { Avatar, Button, Input, Layout, Menu, Modal, Row, Select } from 'antd'
import React, { useCallback, useState } from 'react'
import Account from '../components/solana/Account'
import Send from '../components/solana/Send'
import styled from 'styled-components'

const { Option } = Select
const { Content, Sider } = Layout
const LayoutWrapper = styled(Layout)`
  width: 100%;
  height: 678px;
  padding-left: 28px;
  .ant-layout-sider,
  .ant-menu {
    background-color: transparent;
  }
  .ant-menu-inline .ant-menu-item::after {
    border-right: none;
  }
  .ant-menu:not(.ant-menu-horizontal) .ant-menu-item-selected {
    background-color: #2b2c33;
    color: #fff;
    border-radius: 25px 0 0 25px;
  }
  .ant-select-single:not(.ant-select-customize-input) .ant-select-selector {
    border: none;
  }
  .ant-select-item-option {
    background-color: #34363e;
    height: 50px;
  }
  .ant-menu-inline {
    border: none;
  }
`
const PageContent = styled(Content)`
  background: #2b2c34;
  border-radius: 20px;
`
const AccountMenu = styled(Menu)`
  .ant-menu-item {
    height: 50px;
    line-height: 50px;
    padding-left: 10px !important;
  }
`
const SettingMenu = styled(Menu)`
  .ant-menu-submenu-title,
  &.ant-menu:not(.ant-menu-horizontal) .ant-menu-item-selected {
    border-radius: 0;
    background-color: transparent;
  }
  .ant-select-selector {
    padding-left: 0 !important;
  }
  .ant-select-item-option {
    background-color: transparent;
  }
  .ant-select-arrow {
    top: 48%;
  }
`
const Title = styled.div`
  color: #fff;
  font-size: 12px;
  padding-bottom: 16px;
`
const UserAvatar = styled(Avatar)`
  margin-right: 12px;
`
const SelectOption = styled(Option)`
  height: 58px;
  line-height: 58px;
`
const MainPage = () => {
  const [showAccount, setShowAccount] = useState(true)
  const [visible, setVisible] = useState(false)
  const [isNetwork, setIsNetwork] = useState(false)
  const handleOk = useCallback(() => {
    setVisible(false)
  }, [])
  const handleClickSendButton = useCallback(() => {
    setShowAccount(false)
  }, [])
  const toggleModal = useCallback(() => {
    setVisible(!visible)
  }, [visible])
  const handleChange = useCallback(value => {
    setIsNetwork(value === 'NETWORK')
  }, [])
  return (
    <LayoutWrapper>
      <Modal
        title='Account Name'
        visible={visible}
        onOk={handleOk}
        onCancel={toggleModal}
        footer={null}
      >
        <Input size='large' style={{ margin: '10px 0 30px' }} />
        <Row justify='center'>
          <Button
            type='primary'
            ghost
            size='large'
            style={{ width: 200, marginRight: 24 }}
            onClick={toggleModal}
          >
            Cancel
          </Button>
          <Button
            type='primary'
            size='large'
            style={{ width: 200 }}
            onClick={handleOk}
          >
            Create
          </Button>
        </Row>
      </Modal>
      <Sider width={200}>
        <Title>ACCOUNT</Title>
        <AccountMenu
          mode='inline'
          defaultSelectedKeys={['MAIN ACCOUNT']}
          defaultOpenKeys={['MAIN ACCOUNT']}
          style={{ height: 'calc(100% - 160px)', overflowY: 'scroll' }}
        >
          <Menu.Item key='MAIN ACCOUNT'>
            <UserAvatar style={{background:'#50e3c2'}}></UserAvatar>MAIN ACCOUNT
          </Menu.Item>
          <Menu.Item key='ACCOUNT 2'>
            <UserAvatar  style={{background:'#50e3c2'}}></UserAvatar>ACCOUNT 2
          </Menu.Item>
          <Menu.Item key='New Account' onClick={toggleModal}>
            <PlusCircleOutlined
              style={{ fontSize: 30, verticalAlign: 'middle' }}
            />
            New Account
          </Menu.Item>
        </AccountMenu>
        <SettingMenu
          mode='inline'
          defaultSelectedKeys={['Main Beta']}
          defaultOpenKeys={['Main Beta']}
          style={{ height: 145 }}
        >
          <Menu.Item key='Main Beta'>
            <Select
              defaultValue='Main Beta'
              dropdownStyle={{ boxShadow: 'none', border: '1px solid #98a1af' }}
              bordered={false}
              style={{ width: '136px' }}
              onChange={handleChange}
            >
              <SelectOption value='Main Beta'>
                <BlockOutlined
                  style={{
                    fontSize: 18,
                    marginRight: 6,
                    verticalAlign: 'middle'
                  }}
                />
                Main Beta
              </SelectOption>
              <SelectOption value='DEVNET'>
                {' '}
                <HeatMapOutlined
                  style={{
                    fontSize: 18,
                    marginRight: 6,
                    verticalAlign: 'middle'
                  }}
                />
                DEVNET
              </SelectOption>
              <SelectOption value='TESTNET'>
                {' '}
                <BuildOutlined
                  style={{
                    fontSize: 18,
                    marginRight: 6,
                    verticalAlign: 'middle'
                  }}
                />
                TESTNET
              </SelectOption>
              <SelectOption value='NETWORK'>
                <GlobalOutlined
                  style={{
                    fontSize: 18,
                    marginRight: 6,
                    verticalAlign: 'middle'
                  }}
                />
                NETWORK
              </SelectOption>
            </Select>
          </Menu.Item>
          <Menu.Item key='Source'>
            <InfoCircleOutlined
              style={{ fontSize: 20, verticalAlign: 'middle' }}
            />
            Source
          </Menu.Item>
        </SettingMenu>
      </Sider>
      <PageContent style={{ padding: '0 24px', minHeight: 280 }}>
        {showAccount ? (
          <Account
            handleClickSendButton={handleClickSendButton}
            isNetwork={isNetwork}
          />
        ) : (
          <Send />
        )}
      </PageContent>
    </LayoutWrapper>
  )
}
export default MainPage
