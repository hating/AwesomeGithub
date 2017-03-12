<template>
    <user v-bind:query="query"></user>
</template>

<script>
    import User from "@/components/User"
    export default {
        name: 'app',
        data(){
            return {
                query:'https://api.github.com/search/users?q=location:Hangzhou&followers:>8000&sort=followers&order:desc'//查询杭州用户排名 query of HangZhou ranking.
            }
        },
        components: {
            "user":User,
        }
    }
</script>

<style>

</style>
