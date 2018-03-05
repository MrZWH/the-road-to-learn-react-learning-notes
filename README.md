# 《React 学习之道》The Road to learn React (简体中文版) 的读书笔记以及书中项目的实践 
> 通往 React 实战大师之旅：掌握 React 最简单，且最实用的教程。  

這本書的網址是 [http://leanpub.com/the-road-to-learn-react-chinese](http://leanpub.com/the-road-to-learn-react-chinese)  
简体中文版[github地址](https://github.com/the-road-to-learn-react/the-road-to-learn-react-chinese)  
此版本發布於 2018-02-06  

**書籍目錄**  
前言  
读者赠言  
儿童教育  
问题解答  
更新日志  
怎么读这本书？  
你可以期望学到什么（目前为止…）  
React 简介  
你好，我叫 React。  
基本要求  
node 和 npm  
安装 React  
零配置搭建 React 应用  
JSX 简介  
ES6 const 和 let  
ReactDOM  
模块热替换  
JSX 中的复杂 Javascript  
ES6 箭头函数  
ES6 类  
React 基础  
组件内部状态  
ES6 对象初始化  
单向数据流  
绑定  
事件处理  
和表单交互  
ES6 解构  
受控组件  
拆分组件  
可组合组件  
可复用组件  
给组件声明样式  
使用真实的API  
生命周期方法  
获取数据  
扩展操作符  
条件渲染  
客户端或服务端搜索  
分页抓取  
客户端缓存  
错误处理  
代码组织和测试  
ES6模块：Import 和 Export  
代码组织与 ES6 模块  
快照测试和 Jest  
组件接口和 PropTypes  
高级React组件  
引用DOM元素  
加载 ……  
高阶组件  
高级排序  
React 状态管理与进阶  
状态提取  
再探：setState()  
驾驭 State  
部署上线的最后步骤  
弹出  
部署你的App  
概述  

以下为读书笔记  
---------------------------------------  
* * *

## React 简介  
React 并不是一个 SPA 框架，而是一个视图库。也就是 MVC（Model View Controller，模型-视图-控制器）里的 V。它的功能仅仅是把组件渲染成浏览器中的可见元素。但是，围绕 React 周边的整个生态系统让构建单页应用成为可能。
为什么你应该选 React 而不是其他第一代 SPA 框架呢？  
其他框架尝试一次性解决很多问题，而 React 仅仅帮助你构建视图层。它更多的是一个库而非框架。其背后的思路是：应用的视图应该是一系列层次分明的可组合组件。通过使用 React，你可以在引入更多应用部件之前重点关注视图层。其他的每一个部件都是 SPA 的一部分。着所有 的部分是构成一个成熟应用的基础。这样做有两个优点:  
- 首先你可以按部就班的学习 SPA 的每一个部分。你不用担心要一次性理解全部。这与其他的框架不同，其他的框架会在开始就需要你了解所有的内容。
- 其次，SPA 的各个部分都可以替换的。这样就使得 React 的周边生态圈充满新的创意。各种各样的解决方案相互竞争，你可以挑选最吸引你或者最适合你的使用场景的那一个。第一代 SPA 框架更贴近企业级。它们缺乏足够的灵活性。
