import React, { Component, Suspense } from "react";
import {
  HashRouter as ReactRouter,
  Route,
  Switch,
  Redirect,
  RouteComponentProps,
} from "react-router-dom";
import { routes, IRoute } from "./../router";
import ErrorPage from "./errorPage";
import qs from "query-string";
class Router extends Component {
  recombination(item: IRoute, i: number): JSX.Element {
    const hasChildren: Boolean =
      Array.isArray(item.children) && item.children?.length > 0;
    return (
      /**
       * sensitive: bool, 如果为 true，进行匹配时将区分大小写。
       * exact: bool, 如果为 true，则只有在位置完全匹配时才应用激活类/样式。
       * strict: bool, 如果为 true，则在确定位置是否与当前 URL 匹配时，将考虑位置的路径名后面的斜杠
       */
      <Route
        exact={!hasChildren}
        key={i}
        path={item.path}
        strict={true}
        render={(props: RouteComponentProps & {}) => {
          const { search } = props.location;
          const component = <item.component {...props} {...qs.parse(search)} name="张三"/>;
          return (
            <Suspense fallback={<div>正在加载...</div>}>
              {
                // 判断是否具有子元素
                hasChildren ? (
                  (item.children || []).map((t: IRoute, j: number) => (
                    <item.component key={j} {...props} name="张三">
                      {this.recombination(t, j)}
                    </item.component>
                  ))
                ) : !item.auth ? ( // 如果没有子元素判断该路由是否需要授权
                  component
                ) : localStorage.getItem("isExist") === "true" ? (
                  component
                ) : (
                  <Redirect
                    to={{ pathname: "/login", state: { from: props.location } }}
                  />
                )
              }
            </Suspense>
          );
        }}
      ></Route>
    );
  }
  render(): JSX.Element {
    return (
      <ReactRouter>
        {/* 如有多个子元素，则需要Switch将多个子元素全部包裹，否则报错 */}
        <Switch>
          {routes.map((item: IRoute, i: number) => {
            return this.recombination(item, i);
          })}
          {/* 所有错误路由跳转页面 */}
          <Route component={ErrorPage} />
        </Switch>
      </ReactRouter>
    );
  }
}
export default Router;
