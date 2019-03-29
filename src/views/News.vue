<template>
  <div class="home">
    <div class="international">
      <div class="kind">国际新闻</div>
      <Slider :newsList="international"/>
      <div class="newsList">
        <NewsList :lists="international"/>
      </div>
    </div>
    <div class="otherNews">
      <div class="topLine"></div>
      <div class="newsGroup">
        <div class="kind">体育新闻</div>
        <div class="groupContent">
          <Slider :newsList="sport"/>
          <div class="groupList">
            <NewsList :lists="sport.slice(0,9)"/>
          </div>
        </div>
      </div>
      <div class="line"></div>
      <div class="newsGroup">
        <div class="kind">娱乐新闻</div>
        <div class="groupContent">
          <Slider :newsList="entertainment"/>
          <div class="groupList">
            <NewsList :lists="entertainment.slice(0,9)"/>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Slider from "@/components/slider/Slider";
import NewsList from "@/components/newsList/NewsList";
export default {
  name: "news",
  data: function() {
    return {
      international: [],
      sport: [],
      entertainment: []
    };
  },
  components: {
    Slider,
    NewsList
  },
  methods: {
    getData(url, params) {
      return this.$http.get(url, {
        params: params,
        headers: { Authorization: "APPCODE 8655d3a2abeb4239827049dceb363bc8" }
      });
    }
  },
  created: function() {
    let that = this;
    this.getData("toutiao-ali.juheapi.com/toutiao/index", {
      type: "guoji"
    }).then(res => {
      console.log(res.data);
      that.international = res.data.guoji;
    });
    this.getData("toutiao-ali.juheapi.com/toutiao/index", {
      type: "yule"
    }).then(res => {
      console.log(res.data);
      that.entertainment = res.data.yule;
    });
    this.getData("toutiao-ali.juheapi.com/toutiao/index", {
      type: "tiyu"
    }).then(res => {
      console.log(res.data);
      that.sport = res.data.tiyu;
    });
  }
};
</script>

<style lang="less" scoped>
.home {
  margin: 3rem auto;
  width: 100%;
}
.kind {
  margin-bottom: 1rem;
}
.line {
  width: 100%;
  border: solid 1px #ccc;
  margin: 2.5rem 0;
}

.international {
  width: 25%;
  .newsList {
    margin-top: 2rem;
  }
}

@media screen and (min-width: 421px) {
  .home {
    display: flex;
    justify-content: space-between;
    .international {
      border-right: solid 2px #ccc;
      padding-right: 2rem
    }
    .otherNews {
      padding: 0 0 0 8%;
      width: 70%;
      .groupContent {
        display: flex;
        align-items: flex-start;
        .groupList {
          margin-left: 5%;
          display: inline-block;
          width: 50%;
        }
      }
    }
  }
}
@media screen and (max-width: 420px) {
  .home {
    padding: 0;
    margin: 0;
    .international {
      width: 100%;
    }
    .otherNews {
      width: 100%;
      .topLine {
        border: solid 1px #ccc;
        margin: 2.5rem 0;
      }
      .groupContent {
        .groupList {
          margin: 0;
          width: 100%;
          padding: 0;
        }
      }
    }
  }
}
</style>
