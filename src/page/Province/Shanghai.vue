<template>
    <user v-bind:query="query"></user>
</template>

<script>
    import User from "@/components/User"
    export default {
        name: 'app',
        data(){
            return {
                query:'https://api.github.com/search/users?q=location:Shanghai&followers:>8000&sort=followers&order:desc'//查询上海用户排名 query of Shanghai ranking.
            }
        },
        components: {
            "user":User,
        }
    }
</script>

<style>

</style>
