import React, { Component, Suspense } from 'react'
import { HashRouter as ReactRouter, Route, Switch, Redirect } from 'react-router-dom'
import { routes, IRoute } from "./../router"
import ErrorPage from './errorPage'
class Router extends Component {
  render():JSX.Element{
    return(
        <ReactRouter>
        {/* 如有多个子元素，则需要Switch将多个子元素全部包裹，否则报错 */}
            <Switch>
              {
                routes.map((item:IRoute, index:number) => {
                 return (
                  /**
                   * sensitive: bool, 如果为 true，进行匹配时将区分大小写。
                   * exact: bool, 如果为 true，则只有在位置完全匹配时才应用激活类/样式。
                   * strict: bool, 如果为 true，则在确定位置是否与当前 URL 匹配时，将考虑位置的路径名后面的斜杠
                   */
                  <Route key={ index } path={ item.path } render={
                    props => 
                      <Suspense fallback={<div>正在加载...</div>}>
                        {
                          !item.auth 
                          ? <item.component/>
                          : localStorage.getItem('isExist') === 'true'
                            ? <item.component/>
                            : <Redirect to={{ pathname: '/login',state: { from: props.location }}} />
                        }
                      </Suspense>
             
                    }>
                  </Route>
                )})
              }
              {/* 所有错误路由跳转页面 */}
              <Route  component={ ErrorPage } />
            </Switch>
        </ReactRouter>
    )
  }
}
export default Router;