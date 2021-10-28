import React, { PropTypes, Component } from 'react';
// import { Link } from 'react-router';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import _ from 'lodash';

import * as ModuleActions from 'redux/actions/ModuleActions';

const Header = require('./Header');
const List = require('./List');

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(ModuleActions, dispatch)
  };
}

@connect(({ i18n, project, module }) => ({ i18n, project, module }), mapDispatchToProps)
export default class Container extends Component {
  constructor(props) {
    super(props);
    this.pid = '';
  }

  static propTypes = {
    project: PropTypes.object.isRequired,
    actions: PropTypes.object.isRequired,
    params: PropTypes.object.isRequired,
    i18n: PropTypes.object.isRequired,
    module: PropTypes.object.isRequired
  }

  static contextTypes = {
    router: PropTypes.object.isRequired
  }

  async index() {
    await this.props.actions.index(this.pid);
    return this.props.module.ecode;
  }

  async create(values) {
    await this.props.actions.create(this.pid, values);
    return this.props.module.ecode;
  }

  async update(values) {
    await this.props.actions.update(this.pid, values);
    return this.props.module.ecode;
  }

  gotoIssueList(module) {
    this.context.router.push({ pathname: '/project/' + this.pid + '/issue', query: { module } });
  }

  gotoGantt(module) {
    this.context.router.push({ pathname: '/project/' + this.pid + '/gantt', query: { module } });
  }

  async del(values) {
    const { actions } = this.props;
    await actions.del(this.pid, values);
    return this.props.module.ecode;
  }

  async setSort(values) {
    await this.props.actions.setSort(this.pid, values);
    return this.props.module.ecode;
  }

  componentWillMount() {
    const { params: { key } } = this.props;
    this.pid = key;
  }

  render() {
    if (this.props.project.options) {
      _.assign(this.props.module.options, this.props.project.options);
    }

    return (
      <div>
        <Header 
          create={ this.create.bind(this) } 
          setSort={ this.setSort.bind(this) } 
          i18n={ this.props.i18n }
          { ...this.props.module }/>
        <List 
          index={ this.index.bind(this) } 
          gotoIssueList={ this.gotoIssueList.bind(this) } 
          gotoGantt={ this.gotoGantt.bind(this) } 
          select={ this.props.actions.select } 
          update={ this.update.bind(this) } 
          del={ this.del.bind(this) } 
          delNotify={ this.props.actions.delNotify } 
          i18n={ this.props.i18n }
          { ...this.props.module }/>
      </div>
    );
  }
}
