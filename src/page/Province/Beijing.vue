<template>
  <user v-bind:query="query" :type="type"></user>
</template>

<script>
  import User from "@/components/User"
  export default {
    name: 'app',
    data(){
      return {
        query: 'https://api.github.com/search/users?q=location:Beijing&followers:>8000&sort=followers&order:desc',//查询北京用户排名 query of Beijing ranking.
        type: "Beijing"
      }
    },
    components: {
      "user": User
    }
  }
</script>

<style>

</style>
