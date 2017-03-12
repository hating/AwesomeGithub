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
          label="项目首页 Site">
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
  let tableData = [{// 预置信息，调取API时消失 Predefine information ,will disappear when API is loaded.
    ranking: 1,
    login: "hating",
    description: "AwsomeGithub的创造者，读取完排名我就消失了。Author of \nAwsomeGithub.I will disappear when asynchronous transfer \nis done.",
    name: "Awsome-Github",
    stargazers_count: "(●'◡'●)",
    forks_count: "(●'◡'●)",
    html_url: "https://github.com/hating",
  }];

  function query(q) {// 输入查询链接，修改tableData内容 Input query link,and this function modifies contents in tableData
    Message("正在调用Github API Invoking Github API");
    axios.get(q).then(
      function (response) {
        while (tableData.length> 0){//清除原有数据 Swiping the old data.
          tableData.pop();
        }
        response.data.items.forEach(function (elem, index) {
          let temp = {
            ranking: index + 1,// 排名 ranking
            login: elem.owner.login,// 项目所有者 owner
            description: elem.description === null ? null : elem.description.replace(/(.{60})/g, "$1\n"),// 项目简介 description
            name: elem.full_name,//项目全名 the fullname of the project
            stargazers_count: elem.stargazers_count,//收藏数 stargazers
            forks_count: elem.forks_count,// 派生数 forks
            html_url: elem.html_url,//项目首页
          };
          tableData.push(temp);
        });
        Message.success("成功获取排名信息 Successfully getting ranking information");
      }
    ).catch(
      function () {
        Message.error("API调用次数过多，请过几秒再试 The Github API is responding 403");
      }
    );
  }
  export default {
    name: 'app',
    props: ["query"],
    data() {
      query(this.query);
      return {
        tableData: tableData
      }
    },
  }
</script>

<style>

</style>
