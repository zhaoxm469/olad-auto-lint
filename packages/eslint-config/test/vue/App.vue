<!--
 * @Author: your name
 * @Date: 2022-02-21 11:31:31
 * @LastEditTime: 2022-02-21 22:48:48
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: /aaa/src/App.vue
-->
<template>
  <div id="app">
    <img
      v-for="(item, index) in d"
      :key="item"
      alt="Vue logo"
      d="1"
      src="./assets/logo.png"
    />
    <HelloWorld msg="Welcome to Your Vue.js App" />
  </div>
</template>

<script>
  import HelloWorld from "./components/HelloWorld.vue";
  const a = 123;
  a = 4;

  export default {
    name: "App",
    components: {
      HelloWorld,
    },
  };
</script>

<style>
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }
</style>
