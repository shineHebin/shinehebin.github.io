<template>
  <div class="header-menu">
    <a class="header-logo" href="https://github.com/shineHebin?tab=repositories">
      <img :src="logo" alt="">
    </a>
    <ul class="menu">
      <li>
        <router-link to="/" exact>首页</router-link>
      </li>
      <li>
        <router-link to="/archives">全部</router-link>
      </li>
      <li>
        <router-link to="/category">分类</router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "HeaderMenu",
  data() {
    return {
      logo: require("../assets/github.png")
    };
  }
};
</script>

<style scoped>
.header-menu {
  padding: 0 18px;
  height: 50px;
  line-height: 50px;
}
.header-logo {
  display: inline-block;
}
.header-logo img {
  width: 32px;
  height: 32px;
  vertical-align: middle;
}
.header-logo:hover {
  transform: scale(1.05);
  -webkit-transform: scale(1.05);
  -moz-transform: scale(1.05);
}
.menu {
  float: right;
}
.menu li {
  display: inline-block;
}
.menu li a {
  font-size: 16px;
  color: #728da5;
  display: inline-block;
  padding: 0 10px;
}
.menu li a:hover {
  color: #1593ff;
}
.menu .active {
  color: #1593ff;
}
</style>