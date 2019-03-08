<template>
  <div
    id="app"
    v-cloak
  >
    <header-menu />
    <router-view />
  </div>
</template>

<script>
import HeaderMenu from "./components/header";
export default {
  name: "App",
  components: {
    HeaderMenu
  }
};
</script>

<style>
@import "../static/css/reset.css";
@import "../static/css/hljs.css";
@import "../static/css/summary.css";
a,
a:hover {
  color: #1593ff;
}
a {
  text-decoration: none;
}
li {
  list-style: none;
}
body,
html {
  font-size: 14px;
  font-family: Microsoft Yahei, Arial, sans-serif;
}
#app,
body,
html {
  height: 100%;
  width: 100%;
}
[v-cloak] {
  display: none !important;
}
.lists {
  width: 50%;
  min-width: 200px;
  max-width: 980px;
  overflow: hidden;
  margin: 40px auto 0;
  padding: 0 10px;
}
.category-title {
  color: #666;
  text-align: center;
  height: 60px;
  line-height: 60px;
  border-bottom: 1px solid #e5e5e5;
  font-size: 16px;
}
.lists-content li {
  padding: 0 5px;
  height: 47px;
  line-height: 47px;
  font-size: 14px;
  overflow: hidden;
  border-bottom: 1px solid #e5e5e5;
}
.lists-content li:hover {
  background-color: #f5f5ff;
}
.lists-content li a {
  color: #1593ff;
  font-size: 15px;
}
.category-time {
  color: #ccc;
  float: right;
}
</style>
