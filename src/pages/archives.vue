<template>
  <div>
    <div class="lists">
      <h2 class="category-title">全部</h2>
      <ul class="lists-content">
        <li
          v-for="(item,index) in flags"
          :key="index"
        >
          <router-link :to="{name:'summary',params:{id:item.number}}">{{item.title}}</router-link>
          <span class="category-time">{{item.created_at|formatDate}}</span>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { formatDate } from "../api/data.js";
export default {
  name: "archive",
  data() {
    return {
      flags: []
    };
  },
  mounted (){
    this.$axios(
      "https://api.github.com/repos/shineHebin/shinehebin.github.io/issues"
    )
      .then(res => {
        this.flags = res.data;
       // console.log(res.data);
      })
      .catch(error => {
        console.log(error);
      });
  },
  filters: {
    formatDate(time) {
      var date = new Date(time);
      return formatDate(date, "yyyy-MM-dd");
    }
  }
}
</script>
