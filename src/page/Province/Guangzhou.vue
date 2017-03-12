<template>
    <user v-bind:query="query" :type="type"></user>
</template>

<script>
    import User from "@/components/User"
    export default {
        name: 'app',
        data(){
            return {
                query: 'https://api.github.com/search/users?q=location:Guangzhou&followers:>8000&sort=followers&order:desc',//查询广州用户排名 query of Guangzhou ranking.
                type: "Guangzhou"
            }
        },
        components: {
            "user": User,
        }
    }
</script>

<style>

</style>
