# Vue-practice

![NODE][node-url]
![NPM][npm-url]
![VUE][vue-url]
![ESLINT][eslint-url]
![TYPE][typescript-url]

> Vue.js 문법을 숙지하고, 실무에서 사용할 수 있을 라이브러리 사용법 및 컨벤션을 익힘
> 
> [Haker News](https://news.ycombinator.com/) web site와 비슷한 기능의 페이지 개발

## 📎 Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

### Keep-alive router-view
> router-view 에서 하나의 route에서 api를 요청하는데, 
> 
> 이를 캐싱하여 요청을 최소화하려는 목적으로 아래와 같은 코드를 작성함

```vue
<template>
  <keep-alive>
    <router-view></router-view>
  </keep-alive>
</template>
``` 

> 하지만 페이지 전환이 발생할 때, 똑같이 요청이 발생하였고,
> 
> 구글링 결과 아래와 같은 코드로 원했던 동작을 구현할 수 있었다.

```vue
<router-view v-slot="{ Component, route }">
  <transition :name="route.meta.transition || 'fade'" mode="out-in">
    <suspense>
      <template #default>
        <keep-alive>
          <component :is="Component" :key="route.path" />
        </keep-alive>
      </template>
    </suspense>
  </transition>
</router-view>
```


[node-url]: https://shields.io/badge/node-v16.13.1-blue?style=for-the-badge
[npm-url]: https://shields.io/badge/npm-8.1.2-BLUE?style=for-the-badge
[vue-url]: https://shields.io/badge/vue.js-v3-blue?style=for-the-badge
[eslint-url]: https://shields.io/badge/eslint-v7.32.0-orange?style=for-the-badge
[typescript-url]: https://shields.io/badge/typescript-4.5.5-orange?style=for-the-badge