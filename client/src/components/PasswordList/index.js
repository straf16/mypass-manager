import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux';

import { fetchPasswordList, removePassword } from '../../store/actions';

import FormAdd from '../FormAdd';

import './passwordlist.css'
import 'antd/dist/antd.css';

import { Card, Popconfirm, Modal } from 'antd';
import { SettingFilled, TeamOutlined, DeleteFilled } from '@ant-design/icons';

function PasswordList(props) {
  const [visible, setVisible] = useState(false)
  const [payload, setPayload] = useState({})
  const ListPassword = useSelector(state => state.password.listPassword)
  const Toast = useSelector(state => state.feedback.Toast)
  const dispatch = useDispatch()

  const { Meta } = Card;

  const remove = (id) => {
    removePassword({ id })
      .then(result => {
        dispatch(fetchPasswordList())
        Toast.fire({
          icon: 'success',
          title: 'Site was deleted'
        })
      })
      .catch(({ message }) => {
        message.forEach(error => {
          Toast.fire({
            icon: 'error',
            title: error
          })
        })
      })
  }

  const showModal = (site) => {
    setPayload(site)
    setVisible(true)
  }

  const handleCancel = () => {
    setPayload({})
    setVisible(false)
  }

  useEffect(() => {
    dispatch(fetchPasswordList())
  }, [ dispatch ])

  return (
    <div data-testid="password-list-section">
      <div className="container-password">
        {
          ListPassword.map(site => (
            <Card
              key={site._id}
              style={{ width: 300, margin: 10 }}
              cover={
                <img
                  alt="example"
                  src={site.img ? site.img : 'https://www.oxygensalonanddayspa.com/wp-content/uploads/2016/04/dummy-post-vertical-1-thegem-blog-default-large.jpg'}
                  style={{ height: 120 }}
                />
              }
              actions={[
                <SettingFilled key="edit" onClick={() => showModal(site)} />,
                <TeamOutlined key="share" />,
                <Popconfirm
                  title="Delete this site?"
                  onConfirm={() => remove(site._id)}
                  okText="Yes"
                  cancelText="No"
                >
                  <DeleteFilled key="delete" />
                </Popconfirm>,
              ]}
            >
              <Meta
                title={site.name}
                description={site.username}
              />
            </Card>
          ))
        }
      </div>
      <div>
        <Modal
          visible={visible}
          title="Title"
          onCancel={handleCancel}
          footer={null}
        >
          <FormAdd
            payload={payload}
            submit={() => {
              dispatch(fetchPasswordList())
              setVisible(false)
            }}/>
        </Modal>
      </div>
    </div>
  )
}

export default PasswordList