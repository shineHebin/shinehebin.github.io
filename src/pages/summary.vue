<template>
  <div>
    <div class="lists">
      <h1 class="summary-title">{{results.title}}</h1>
      <p class="summary-time">{{results.created_at | formatDate}}</p>
      <div
        class="summary-content"
        v-html="compiledMarkdown"
        v-highlight
      ></div>
    </div>
    <div class="lists">
      <button
        class="summary-comment"
        @click="handleClick"
      > 点击评论 </button>
    </div>
  </div>
</template>
<script>
import { formatDate } from "../api/data.js";
import marked from "marked";
export default {
  name: "sumMary",
  data() {
    return {
      results: []
    };
  },
  computed: {
    compiledMarkdown: function() {
      return marked(this.results.body || "", { sanitize: true });
    }
  },
  created() {
    this.$axios(
      "https://api.github.com/repos/shineHebin/shinehebin.github.io/issues/" +
        this.$route.params.id
    )
      .then(res => {
        this.results = res.data;
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
  },
  methods: {
    handleClick: function() {
      let url = `https://github.com/shineHebin/shineHebin.github.io/issues/${
        this.results.number
      }`;
      window.location.href = url;
    }
  }
};
</script>


