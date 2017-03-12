<template>
    <div id="app">
        <header>
            <div><img src="./assets/awsomegithub.png" height="150" width="150"/></div>
            <h1 class="title">Awesome Github</h1>
            <div class="sub-title">
                <div>展示实时的Github排名。</div>
                <div>Presenting the real-time Github Ranking.</div>
            </div>
        </header>
        <div class="container">
            <el-menu :default-active="activeIndex2" class="el-menu-demo router-anchor" mode="horizontal">
                <a href="#/GlobalUser">
                    <el-menu-item index="1"><span title="Global User Ranking">全球用户排行榜</span></el-menu-item>
                </a>
                <a href="#/ChinaUser">
                    <el-menu-item index="2"><span title="China User Ranking">中国用户排行榜</span></el-menu-item>
                </a>
                    <el-menu-item index="3">
                        <el-submenu index="3">
                            <template slot="title"><span title="Province Ranking">互联网城市开发者排名</span></template>
                            <a href="#/Beijing" title="Beijing"><el-menu-item index="3-1">北京</el-menu-item></a>
                            <a href="#/Shanghai" title="Shanghai"><el-menu-item index="3-2">上海</el-menu-item></a>
                            <a href="#/Guangzhou" title="Guangzhou"><el-menu-item index="3-3">广州</el-menu-item></a>
                            <a href="#/Shenzhen" title="Shenzhen"><el-menu-item index="3-4">深圳</el-menu-item></a>
                            <a href="#/Hangzhou" title="Hangzhou"><el-menu-item index="3-5">杭州</el-menu-item></a>
                            <a href="#/Chengdu" title="Chengdu"><el-menu-item index="3-6">成都</el-menu-item></a>
                        </el-submenu>
                    </el-menu-item>
              <a href="#/JavaScript">
                <el-menu-item index="4"><span title="JavaScript Repositories Ranking">JavaScript项目排行榜</span></el-menu-item>
              </a>
              <a href="#/Python">
                <el-menu-item index="5"><span title="Python Repositories Ranking">Python项目排行榜</span></el-menu-item>
              </a>
              <a href="#/Java">
                <el-menu-item index="6"><span title="Java Repositories Ranking">Java项目排行榜</span></el-menu-item>
              </a>
              <a href="#/Swift">
                <el-menu-item index="7"><span title="Swift Repositories Ranking">Swift项目排行榜</span></el-menu-item>
              </a>
            </el-menu>
            <router-view></router-view>
        </div>
      <footer>
        <div class="wrap">
          <div>此站由 <a href="https://www.zhihu.com/people/peng-jia-jin/answers" target="_blank">彭家进</a>构建。源码已分享至 <a
                  href="https://github.com/hating/AwsomeGithub" target="_blank">Github</a>，欢迎Star与Fork。</div>
          <div>This site is craft by <a href="https://github.com/hating" target="_blank">Hating</a> Using Vue.js and ElementUI.<br />You can fork this project on <a
                  href="https://github.com/hating/AwsomeGithub" target="_blank">Github</a>.</div>
        </div>
      </footer>
    </div>
</template>

<script>
    import image from "./assets/cat.jpg";
    function lazyBackground() {// 背景图片懒加载，找不到好的办法，只能CDN Lazy loading background image

        let body = document.body;
        body.style.backgroundImage = "url("+image+")";
    }
    setTimeout(lazyBackground,0);
    export default {
        name: 'app',
    }

</script>

<style>
  @import "assets/minireset.css";
    #app {

        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        color: #1F2D3D;
    }

    body {
      background-attachment: fixed;
      background-repeat: round;
      background-color: #bdb9b9;
    }

    header {
        margin: 0 auto;
        text-align: center;
      margin-bottom: 10px;
    }

    .title {
        font-size: 60px;
    }

    .sub-title {
        font-size: 30px;
    }

    .container {
        margin: 0 auto;
        max-width: 1400px;
    }

    .router-anchor a:link {
        text-decoration: none;
    }
  footer {
    line-height: 30px;
    margin:20px auto;
    text-align: center;
    font-size: 20px;
  }
  .wrap {
    background-color: #EFF2F7;
    opacity: 0.7;
    display: inline-block;
    padding: 20px 40px;
  }
</style>
