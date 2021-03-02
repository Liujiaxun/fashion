# fashion

## Project setup

```
yarn install
```

### Compiles and hot-reloads for development

```
yarn serve
```

### Compiles and minifies for production

```
yarn build
```

### Lints and fixes files

```
yarn lint
```

### Customize configuration

See [Configuration Reference](https://cli.vuejs.org/config/).

### 文件命名规范

1. 文件夹全部采用驼峰命名法，即首字母小写后面每个单词首字母大写

2. 文件名全部使用小写字母，单词与单词之间采用**-**连接,如 **user-info.vue,user-info-detail.vue**,

3. 路由的注册 `import` 语句后的单词采用 Pascal 命名法，所有单词的首字母大写，其余字母小写，单词与单词之间不使用任何符号风格。如

```javascript
import Home from "src/views/home/home";
import LoadMore from "src/views/loadMore/load-more";
```

4. 实际路由注册需安照如下写法，`path`为 `/tab/文件名`,`/tab`是否保留视实际情况而定。`component`后接的单词需和`import`的单词保持一致,`name`后接的单词也需和`import`的单词保持一致

```javascript
{path: "/tab/home", component: Home, name: 'Home', meta: {keepAlive: true}},
{path: '/tab/load-more', component: LoadMore, name: 'LoadMore', meta: {keepAlive: true}},
```
