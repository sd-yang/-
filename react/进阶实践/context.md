# React context

## 作用

1. context 主要解决的是多层组件之间传值的问题，可以不需要通过 props 层层传递

2. 解决了子组件渲染的问题

## 如何使用

- 基本使用

```jsx
// createContext 进行创建
const DataContainer = React.createContext({});   // 参数的作用：

// 使用方式
<DataContainer.Provider value={{ theme: 'red' }}>
    <Children />
</DataContainer.Provider>

// 子组件使用方式有三种

// 1. 函数组件可以使用 useContext
const { theme } = useContext(DataContainer);

// 2. 类组件使用静态方法 contextType 属性，该方式只适用于 类组件
class Children extends React.Component {
    render() {
        const { theme } = this.context;
        return <div></div>
    }
}
Children.contextType = DataContainer;

// 3. customer 的方式，相当于将 context 变成了 props
const DataCustomer = DataContainer.Customer

const Children = () => {
    return(
        <DataCustomer>
            {contextValue => <Demo {...contextValue}/>}
        </DataCustomer>
    )
}

// Tips： 这三种方式，当 theme 数据改变的时候，父组件是否进行刷新，子组件的刷新

```

- 高阶用法

1. 多个 Provider 可以嵌套使用
2. 可以逐层传递 Provider，下一级的会覆盖上一级的数据

## QUESTION源码 TODO

1. 涉及到的使用场景
2. 在源码中是如何运作的
3. 在什么时间点执行的
4. value 如何进行更新
