import Model from "../hookStore/model";
type State = {
  id: Number,
  name: String
}
type Action = {
  [key:string] : any
}
const user = new Model<State,Action>({ id: 1, name: "张三" }, {
    changeName(name: string) {
      return { name };
    },
});

export default user;
