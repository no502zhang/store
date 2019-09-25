## Description

便民士多,主要服务社区中的用户,贩卖不容易在超级市场中找到的传统食品或急需的物品,士多店主与社区居民关系融洽,往往还能提供赊欠记账,工具租借,物品保管等服务

包含功能:  
特色物品售卖  
工具租赁  
物品暂存  
赊欠记账  

## Installation

```bash
$ npm install
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## 项目结构

### CoreModule 核心模块（注册中间件，过滤器，管道，守卫，拦截器，装饰器等）  

核心模块，只会注入到AppModule，不会注入到feature和shared模块里面，专门做初始化配置工作，不需要导出任何模块。 它里面包括：守卫，管道，过滤器、拦截器、中间件、全局模块、常量、装饰器  
其中全局中间件和全局模块需要模块里面注入和配置。

### SharedModule 共享模块（注册服务，mongodb，redis等）  



### ConfigModule 配置模块（系统配置）

