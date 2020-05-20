// 必须声明一个React
import React, { Component } from "react";
import { withRouter } from "react-router-dom";

import {
  connect,
  MapStateToProps,
  MapDispatchToPropsFunction,
} from "react-redux";
import { IUserState, RootState } from "./../store/reducers";
import * as actions from "./../store/actions";
import { bindActionCreators } from "redux";

type IProps = {
  actions?: any;
  data: IUserState;
};
type IState = {
  welcome: string;
};
// Component<IProps,IState>
class HelloWorld extends Component<IProps, IState> {
  readonly state = {
    welcome: "Hello",
  };
  render(): JSX.Element {
    const { actions, data } = this.props;
    console.log("【props】", this.props);
    return (
      <div
        onClick={() => {
          actions.getUserList(1);
        }}
      >
        {this.state.welcome} {data.name}
        {this.props.children}
      </div>
    );
  }
}
type IOwnProps = {
  children: any;
  history: any;
  location: any;
  match: any;
  name: string;
  staticContext: any;
};

// MapStateToProps<mapStateToProps返回值类型，OwnProps类型，mapStateToProps入参state类型>
const mapStateToProps: MapStateToProps<
  IProps,
  IOwnProps,
  { user: IUserState }
> = (state: RootState, ownProps: IOwnProps): IProps => {
  console.log("【mapStateToProps】【state】【ownProps】", state, ownProps);
  return {
    data: state.user,
  };
};
const mapDispatchToProps: MapDispatchToPropsFunction<any, any> = (
  dispatch: any
) => {
  return {
    // 使用bindActionCreators简化actions注册，否则UI中需要用到的action都需要在此逐个注册
    actions: bindActionCreators(actions, dispatch),
  };
};
/**
 * 1、使用withRouter，当前组件props中会绑定history、location、match三个属性
 * 2、组件不仅需要继承Component，而且需要给Props的约束Component<any>3
 * 3、配合Redux的connect()或mobx的inject()使用,withRouter(connect(Component)),withRouter(inject(Component))
 */
// connect方法的作用是连接react组件和redux store，也就是说通过connect方法子组件可以获取store中的state和dispatch。
export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(HelloWorld)
);
