import { useState, useEffect } from "react";

class Model<T,S> {
  state: T;
  actions: {
    [K in string]?: any
  }
  queue: React.Dispatch<any>[];
  constructor(initialState: T, actions: Record<string, any>) {
    this.state = initialState;
    this.actions = {};
    this.queue = [];
    Object.keys(actions).forEach((key: string) => {
      this.actions[key] = (...args: any[]) => {
        this.state = actions[key].apply(this, args);
        this.onDataChange();
      };
    });
  }
  public useModel() {
    const [, setState] = useState();
    // 使用useEffect实现发布订阅
    useEffect(() => {
      const index = this.queue.length;
      this.queue.push(setState); // 订阅
      return () => {
        // 组件销毁时取消
        this.queue.splice(index, 1);
      };
    }, [setState]);
    return [this.state, this.actions];
  }
  onDataChange() {
    // const queues = [].concat(this.queue);
    this.queue.forEach((setState: React.Dispatch<any>) => {
      console.log(setState);
      setState(this.state); // 通知所有的组件数据变化
    });
  }
}
export default Model;