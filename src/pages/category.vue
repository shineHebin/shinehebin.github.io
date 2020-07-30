<template>
  <div class="lists">
    <div v-for="(value,key,index) in contents" :key="index">
      <h2 class="category-title">{{ key }}</h2>
      <ul class="lists-content">
        <li v-for="(item,index) in value" :key="index">
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
  name: "category",
  data() {
    return {
      lists: [],
      contents: {}
    };
  },
  mounted() {
    this.$axios
      .get(
        "https://api.github.com/repos/shineHebin/shineHebin.github.io/issues"
      )
      .then(res => {
        this.lists = res.data;
        let categorys = {};
        this.contents = categorys;
        for (let i = 0, listLen = this.lists.length; i < listLen; i++) {
          let labels = this.lists[i]["labels"];
          for (let j = 0, labelsLen = labels.length; j < labelsLen; j++) {
            let name = labels[j]["name"];
            if (!categorys.hasOwnProperty(name)) {
              categorys[name] = [];
            }
            categorys[name].push(this.lists[i]);
          }
        }
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
};
</script>