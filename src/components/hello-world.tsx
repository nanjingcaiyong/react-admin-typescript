// 必须声明一个React
import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
class HelloWorld extends Component<any> {
  render():JSX.Element{
    console.log(this.props);
    return (
      <div>
          Hello world
      </div>
    )
  }
}
/**
 * 1、使用withRouter，当前组件props中会绑定history、location、match三个属性
 * 2、组件不仅需要继承Component，而且需要给Props的约束Component<any>3
 * 3、配合Redux的connect()或mobx的inject()使用,withRouter(connect(Component)),withRouter(inject(Component))
 */
export default withRouter(HelloWorld)