import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux';

import { fetchPasswordList, removePassword } from '../../store/actions';

import './passwordlist.css'
import 'antd/dist/antd.css';

import { Card, Icon, Popconfirm } from 'antd';

function PasswordList(props) {
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
                <Icon type="setting" key="setting" />,
                <Icon type="team" key="share" />,
                <Popconfirm
                  title="Delete this site?"
                  onConfirm={() => remove(site._id)}
                  okText="Yes"
                  cancelText="No"
                >
                  <Icon
                    type="delete"
                    key="delete"
                  />
                </Popconfirm>,
              ]}
            >
              <Meta
                title={site.URL}
                description={site.username}
              />
            </Card>
          ))
        }
      </div>
    </div>
  )
}

export default PasswordList