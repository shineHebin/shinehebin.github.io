<template>
  <div class="home">
    <div class="home-main">
      <div class="home-pic">
        <a
          href="https://github.com/shineHebin?tab=repositories"
          target="_blank"
        ></a>
      </div>
      <h2 class="home-title">shineHebin</h2>
      <p class="home-tip">坚持不懈，不忘初心，做更好的自己！</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "home"
};
</script>

<style scoped>
.home {
  height: calc(100% - 50px);
}
.home-main {
  position: absolute;
  z-index: 9;
  top: 30%;
  left: 0;
  right: 0;
  width: 300px;
  margin: 0 auto;
}
.home-pic {
  width: 120px;
  height: 120px;
  background: url(../assets/my.jpg);
  border-radius: 50%;
  background-size: 100%;
  margin: 0 auto;
}
.home-pic > a {
  display: block;
  width: 100%;
  height: 100%;
}
.home-title {
  color: #666;
  font-size: 20px;
  text-align: center;
  font-weight: 400;
  margin: 20px 0;
}
.home-tip {
  text-align: center;
  font-size: 16px;
  color: #1593ff;
}
</style>