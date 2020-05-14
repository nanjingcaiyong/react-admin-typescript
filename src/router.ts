// lazy 配合 Suspense组件(router.tsx) 实现React懒加载功能，在官方没有支持 lazy之前，在 react 中我们一般使用 react-loadable 来实现组件懒加载的能力，lazy 并不支持 服务端渲染（SSR），所以在使用ssr的情况下，lazy 暂时不能使用
import { lazy } from 'react'
export interface IRoute {
  path: string,
  auth: boolean,
  component: any,
  children?: any []
}

export const routes: IRoute[] = [
  {
    path: '/hello',
    auth: false,
    component: lazy(() => import('./components/hello-world'))
  }
]

