
import Hello from './components/hello-world'
export interface IRoute {
  path: string,
  auth: boolean,
  component: any,
}

export const routes: IRoute[] = [
  {
    path: './hello',
    auth: false,
    component: Hello
  }
]

