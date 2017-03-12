<template>
    <div class="hello">
        <div class="content">
            <el-table
                    :data="tableData"
                    border
                    style="width: 100%">
                <el-table-column
                        label="排名 Ranking"
                >
                    <template scope="scope">
                        <span style="margin-left: 10px">{{ scope.row.ranking }}</span>
                    </template>
                </el-table-column>
                <el-table-column
                        label="用户 User"
                >
                    <template scope="scope">
                        <el-popover placement="top" width="450" trigger="hover">
                            <p>用户名 User: {{ scope.row.login }}</p>
                            <p v-if="scope.row.company">公司 Company: {{ scope.row.company }}</p>
                            <p v-if="scope.row.location">所在地 Location: {{ scope.row.location }}</p>
                            <p v-if="scope.row.email">邮箱 Email: {{ scope.row.email }}</p>
                            <p>仓库数量 Repositories: {{ scope.row.public_repos }}</p>
                            <p v-if="scope.row.bio">简介 Brief:<br/>
                            <pre style="margin-left: 20px">{{ scope.row.bio }}</pre>
                            </p>
                            <div slot="reference" class="name-wrapper">
                                <el-tag>{{ scope.row.name }}</el-tag>
                            </div>
                        </el-popover>
                    </template>
                </el-table-column>
                <el-table-column label="关注者数量 Followers">
                    <template scope="scope">
                        <span style="margin-left: 10px">{{ scope.row.followers}}</span>
                    </template>
                </el-table-column>
                <el-table-column label="主页 Site">
                    <template scope="scope">
                        <a style="margin-left: 10px" v-bind:href="scope.row.html_url" target="_blank">{{
                            scope.row.html_url
                            }}</a>
                    </template>
                </el-table-column>
            </el-table>
        </div>
    </div>
</template>

<script>
    import axios from 'axios';
    import { Message } from 'element-ui';
    let tableData = [{
        ranking: '1',
        name: 'Hating',
        bio: "AwsomeGithub的创造者，读取完排名我就消失了。Author of \nAwsomeGithub.I will disappear when asynchronous transfer \nis done.",
        html_url: 'https://github.com/hating',
        followers: '(●\'◡\'●)'
    },];
    function query(q) {
        Message("正在调用Github API Invoking Github API");
        console.log(q);
        axios.get(q)// 根据条件获得用户排名，以后可以封装起来 Ranking users according to query,may capsule in the future.
            .then(function (response) {
                while (tableData.length > 0) {// 清空tableData原有数据 Clear tableData origin Data
                    tableData.pop();
                }
                response.data.items.forEach(function (elem, index) {
                    axios.get(elem.url)
                        .then(
                            function (response) {
                                let temp = {
                                    ranking: index + 1,// 用户排名 User ranking
                                    login: elem.login,//用户登陆名 User login name
                                    html_url: elem.html_url,//用户主页 User main page
                                    name: response.data.name,//用户名 Username
                                    company: response.data.company,//公司 company
                                    location: response.data.location,//地域 location
                                    email: response.data.email,//邮箱地址 email
                                    bio: response.data.bio === null ? null:response.data.bio.replace(/(.{60})/g,"$1\n"),//个人描述，正则用于分行 biography, the RegExp is used to split lines.
                                    public_repos: response.data.public_repos,//公开仓库数量 The amount of public repositories
                                    followers: response.data.followers //关注者数量 The amount of followers
                                };
                                tableData.push(temp);
                                tableData.sort((x, y) => x.ranking - y.ranking);// 根据排名排序是最正确的，无奈之举，splice效果不好 Sorting items in order of ranking.
                            })
//                        ).catch(function () {
//                        Message.error("API调用次数过多，请过几秒再试 The Github API is responding 403");
//                    });

                });
            }).then(function () {
            Message.success("成功获取排名信息 Successfully getting ranking information");
        })
            .catch(function (error) {
                console.log(error);
                Message.error("API调用次数过多，请过几秒再试 The Github API is responding 403");
            });
    }
    export default {
        name: 'hello',
        props:["query"],
        data () {
            query(this.query);
            return {
                tableData: tableData,
            }
        },
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
