## Description

小商店

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

CoreModule 核心模块（注册中间件，过滤器，管道，守卫，拦截器，装饰器等）  
SharedModule 共享模块（注册服务，mongodb，redis等）  
ConfigModule 配置模块（系统配置）