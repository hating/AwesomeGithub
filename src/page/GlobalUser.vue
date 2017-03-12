<template>
        <user v-bind:query="query"></user>
</template>

<script>
    import User from "@/components/User"
    export default {
        name: 'app',
        data(){
            return {
                query:'https://api.github.com/search/users?q=followers:%3E1000&sort=followers&order:desc' //查询全球用户排名 query of global ranking.
            }
        },
        components: {
            "user":User,
        }
    }
</script>

<style>

</style>
