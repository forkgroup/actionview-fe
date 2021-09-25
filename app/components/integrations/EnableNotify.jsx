import React, { PropTypes, Component } from 'react';
import { Modal, Button } from 'react-bootstrap';
import { notify } from 'react-notify-toast';

export default class EnableNotify extends Component {
  constructor(props) {
    super(props);
    this.confirm = this.confirm.bind(this);
    this.cancel = this.cancel.bind(this);
  }

  static propTypes = {
    close: PropTypes.func.isRequired,
    mode: PropTypes.func.isRequired,
    user: PropTypes.object.isRequired,
    handle: PropTypes.func.isRequired
  }

  async confirm() {
    const { close, handle, user, mode } = this.props;
    close();
    const ecode = await handle({ user: user.key, mode });
    if (ecode === 0) {
      if (mode == 'enable') {
        notify.show('已启用。', 'success', 2000);
      } else if (mode == 'disable') {
        notify.show('已禁用。', 'success', 2000);
      }
    } else {
      if (mode == 'enable') {
        notify.show('启用失败。', 'error', 2000);
      } else if (mode == 'disable') {
        notify.show('禁用失败。', 'error', 2000);
      }
    }
  }

  cancel() {
    const { close } = this.props;
    close();
  }

  render() {
    const { user, mode } = this.props;

    return (
      <Modal show onHide={ this.cancel } backdrop='static' aria-labelledby='contained-modal-title-sm'>
        <Modal.Header closeButton>
          <Modal.Title id='contained-modal-title-la'>{ mode == 'enable' ? '用户启用' : '用户禁用' }</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          确认要{ mode == 'enable' ? '启用' : '禁用' }【{ user.name }】此用户？
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={ this.confirm }>确定</Button>
          <Button bsStyle='link' onClick={ this.cancel }>取消</Button>
        </Modal.Footer>
      </Modal>
    );
  }
}
