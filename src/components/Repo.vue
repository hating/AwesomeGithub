<template>
  <div id="repo">
    <template>
      <el-table
              :data="tableData"
              border
              style="width: 100%">
        <el-table-column
                label="排名 Ranking" width="180">
          <template scope="scope">
            <span style="margin-left: 10px">{{ scope.row.ranking }}</span>
          </template>
        </el-table-column>
        <el-table-column
                label="项目 Repository" width="400">
          <template scope="scope">
            <el-popover trigger="hover" placement="top" width="460">
              <p>所有者 Owner: <a :href="scope.row.owner_html_url">{{ scope.row.login }}</a></p>
              <p>简介 Description:
              <pre style="margin-left: 20px">{{ scope.row.description }}</pre>
              </p>
              <div slot="reference" class="name-wrapper">
                <el-tag>{{ scope.row.name }}</el-tag>
              </div>
            </el-popover>
          </template>
        </el-table-column>
        <el-table-column
                label="收藏数 Stargazers" width="180">
          <template scope="scope">
            <span style="margin-left: 10px">{{ scope.row.stargazers_count }}</span>
          </template>
        </el-table-column>
        <el-table-column
                label="派生数 Forks" width="180">
          <template scope="scope">
            <span style="margin-left: 10px">{{ scope.row.forks_count }}</span>
          </template>
        </el-table-column>
        <el-table-column
                label="主页 Site">
          <template scope="scope" class="justify">
            <span style="margin-left: 10px"><a :href="scope.row.html_url"
                                               target="_blank">{{ scope.row.html_url }}</a></span>
          </template>
        </el-table-column>
      </el-table>
    </template>
  </div>
</template>

<script>
    import axios from 'axios';
    import {Message} from 'element-ui';
    let tableData = [{
        ranking: 1,
        login: "hating",
        description: "AwsomeGithub的创造者，读取完排名我就消失了。Author of \nAwsomeGithub.I will disappear when asynchronous transfer \nis done.",
        name: "Awsome-Github",
        stargazers_count: "(●'◡'●)",
        forks_count: "(●'◡'●)",
        html_url: "https://github.com/hating",
    }];

    function query(q, type) {
        let stored = false;// 是否有本地缓存的标签 Check if there are localStorage
        while (tableData.length > 0) {
            tableData.pop();
        }
        let local = localStorage.getItem(type + "tableData");
        let time = localStorage.getItem(type + "Date");
        let timepass = Date.now() - time;
        let isValidate = ((1000 * 60*5 - timepass) > 0) ? true : false;
        if (local !== null && isValidate) {
            local = JSON.parse(local);
            if (local.length == 30) {
                stored = true;
                Message("从本地缓存调用 Loading ranking from localStorage");
                while (tableData.length > 0) {
                    tableData.pop();
                }
                local.forEach(function (elem) {
                    tableData.push(elem);
                })
            }
        }
        if (!stored) {
            Message("正在调用Github API Invoking Github API");
            axios.get(q).then(
                function (response) {
                    response.data.items.forEach(function (elem, index) {
                        let temp = {
                            ranking: index + 1,
                            login: elem.owner.login,
                            description: elem.description === null ? null : elem.description.replace(/(.{60})/g, "$1\n"),
                            name: elem.full_name,
                            stargazers_count: elem.stargazers_count,
                            forks_count: elem.forks_count,
                            html_url: elem.html_url,
                        };
                        tableData.push(temp);
                        if (tableData.length == 30) {
                            localStorage.setItem(type + "tableData", JSON.stringify(tableData));
                            localStorage.setItem(type + "Date", Date.now());
                            stored = false;
                        }
                    });
                    Message.success("成功获取排名信息 Successfully getting ranking information");
                }
            ).catch(
                function () {
                    Message.error("API调用次数过多，请过几秒再试 The Github API is responding 403");
                }
            );
        }
    }
    export default {
        name: 'app',
        props: ["query", "type"],
        data() {
            query(this.query, this.type);
            return {
                tableData: tableData
            }
        },
    }
</script>

<style>

</style>
