# vue.js study

![NODE][node-url]
![NPM][npm-url]
![VUE][vue-url]
![ESLINT][eslint-url]
![TYPE][typescript-url]

![img.png](img.png)

> Vue.js 공부용 Repository
> 
> 기초부터 하나하나 실습해가며 유의미한 단위로 Repository 에 push

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Lints and fixes files
```
npm run lint
```

## ✔ 실습 목록

- [ ] Vue CDN 을 통한 프로젝트
- [x] Global Component & Local Component
- [x] Vue Component data & props property
  - [x] Parent Component props 전달
- [x] Child 에서 Parent 로 event 전달
- [x] Eventbus를 통해 상관관계 없이 event 전달 
- [x] Vue-Router ( Nested Router, Named Router )
- [x] Vue 통신 (Vue-resource, Axios)

- [ ] Vue-cli 를 통한 프로젝트 (`typescript` 도 같이 실습)

## 📋 공부 내용

### Vue Method

### `el`

### `methods`

### `data`

### `props`

### `computed`

### `watch`

### `Life-Cycle method`

### 

> \`\`(이중 중괄호)를 사용한 Mustache
> 일반 텍스트이기 때문에 html 로 출력을 위해 v-html directive 사용

### v-directive

> Vue Directive 는 HTML 또는 Component 태그에 v- 접두사를 가지는 모든 속성을 의미함
> 
> v-bind, v-on, v-if, v-show 등이 존재 (사용자 directive를 사용할 수 있음)

| Directive | Note                                                                                                                                          |
|-----------|-----------------------------------------------------------------------------------------------------------------------------------------------|
| v-if      | v-if로 지정된 값의 true / false에 따라 해당 View 를 화면에 표시 / 숨김 여부를 설정                                                                                    |
| v-for     | v-for로 지정된 반복 표현만큼 해당 View를 반복해서 표시                                                                                                           |
| v-show    | v-if 와 유사하게 지정된 값에 따라 View 를 표시하거나 숨기는 역할이지만, false의 경우 View를 DOM에서 삭제하는 v-if 와는 다르게 v-show는 css display property를 none으로 설정하여 화면에 표시하지 않게 만듦 |
| v-bind    | View의 기본 속성에 View data를 바인딩 ( v-bind:property="data" => :property="data )                                                                     |
| v-on      | View의 이벤트를 감지하여 처리할 때 사용 ( v-on:click, v-on:change 등이 존재하며, 사용자 event도 처리 가능 ) ( v-on:click="onClick" => @click="onClick" )                   |
| v-model   | form에서 주로 사용되는 속성으로 사용자가 입력한 값이 View data에 바로 반영되는 양방향 데이터 바인딩을 지원                                                                            |
| v-html    | 보간법 *Interpolation* {{}} (이중 중괄호) 를 사용하여 데이터를 바인딩 할 때, html string을 html element로 출력 시키기 위해 사용                                                |
| v-once | data 바인딩을 최초 1회만 수행하고 data가 변경되더라도 다시 랜더링 하지 않는 View를 만들기 위해 사용                                                                               |

### v-on 을 통한 event handling은 인자를 명시할 수 있음

```vue
<button @click="clickBtn">Click</button>
<script>
...
  methods: {
    clickBtn: () => console.log('click button');
  }
...
</script>
```

```vue
<button @click="clickBtn(10)">Click</button>
<script>
...
  methods: {
    clickBtn: (number) => console.log('click button ' + number);
  }
...
</script>
```
[node-url]: https://shields.io/badge/node-v16.13.1-blue?style=for-the-badge
[npm-url]: https://shields.io/badge/npm-8.1.2-BLUE?style=for-the-badge
[vue-url]: https://shields.io/badge/vue.js-v3-blue?style=for-the-badge
[eslint-url]: https://shields.io/badge/eslint-v7.32.0-orange?style=for-the-badge
[typescript-url]: https://shields.io/badge/typescript-4.5.5-orange?style=for-the-badge