<template>
  <div class="body">
    <div class="vedios">
      <div class="video-container" v-for="item in getVideos()" :key="item.id">
        <div
          class="video"
          v-bind:style="{ 'backgroundImage': 'url(' + item.img + ')','background-repeat':'no-repeat','background-size':'cover' }"
        ></div>
        <div class="title">
          <p>{{item.title}}</p>
        </div>
        <div class="tags">
          <div class="tag">{{item.tags.join(" · ")}}</div>
          <div class="more-action">⋮</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    getVideos: function() {
      let videos = [
        {
          img: require("@/assets/videoImg/1.jpg"),
          title: "[大事件]2020年10月10日上海国家会展中心",
          tags: ["bilibili"],
          type: ""
        },
        {
          img: require("@/assets/videoImg/2.jpg"),
          title: "2233娘的可爱日常",
          tags: ["2233", "可爱"],
          type: ""
        },
        {
          img: require("@/assets/videoImg/3.jpg"),
          title: "bilibili[]~(￣▽￣)~*",
          tags: ["日常"],
          type: ""
        },
        {
          img: require("@/assets/videoImg/4.jpg"),
          title: "在缺水的沙漠里面上完厕所冲还是不冲呢？",
          tags: ["搞笑", "脑洞"],
          type: ""
        },
        {
          img: require("@/assets/videoImg/1.jpg"),
          title: "【大事件】2020年10月10日上海国家会展中心",
          tags: ["bilibili"],
          type: ""
        },
        {
          img: require("@/assets/videoImg/2.jpg"),
          title: "2233娘的可爱日常",
          tags: ["2233", "可爱"],
          type: ""
        },
        {
          img: require("@/assets/videoImg/3.jpg"),
          title: "bilibili[]~(￣▽￣)~*",
          tags: ["日常"],
          type: ""
        },
        {
          img: require("@/assets/videoImg/4.jpg"),
          title: "在缺水的沙漠里面上完厕所冲还是不冲呢？",
          tags: ["搞笑", "脑洞"],
          type: ""
        },
        {
          img: require("@/assets/videoImg/1.jpg"),
          title: "【大事件】2020年10月10日上海国家会展中心",
          tags: ["bilibili"],
          type: ""
        },
        {
          img: require("@/assets/videoImg/2.jpg"),
          title: "2233娘的可爱日常",
          tags: ["2233", "可爱"],
          type: ""
        },
        {
          img: require("@/assets/videoImg/3.jpg"),
          title: "bilibili[]~(￣▽￣)~*",
          tags: ["日常"],
          type: ""
        },
        {
          img: require("@/assets/videoImg/4.jpg"),
          title: "在缺水的沙漠里面上完厕所冲还是不冲呢？",
          tags: ["搞笑", "脑洞"],
          type: ""
        },
        {
          img: require("@/assets/videoImg/1.jpg"),
          title: "【大事件】2020年10月10日上海国家会展中心",
          tags: ["bilibili"],
          type: ""
        },
        {
          img: require("@/assets/videoImg/2.jpg"),
          title: "2233娘的可爱日常",
          tags: ["2233", "可爱"],
          type: ""
        },
        {
          img: require("@/assets/videoImg/3.jpg"),
          title: "bilibili[]~(￣▽￣)~*",
          tags: ["日常"],
          type: ""
        },
        {
          img: require("@/assets/videoImg/4.jpg"),
          title: "在缺水的沙漠里面上完厕所冲还是不冲呢？",
          tags: ["搞笑", "脑洞"],
          type: ""
        },
        {
          img: require("@/assets/videoImg/1.jpg"),
          title: "【大事件】2020年10月10日上海国家会展中心",
          tags: ["bilibili"],
          type: ""
        },
        {
          img: require("@/assets/videoImg/2.jpg"),
          title: "2233娘的可爱日常",
          tags: ["2233", "可爱"],
          type: ""
        },
        {
          img: require("@/assets/videoImg/3.jpg"),
          title: "bilibili[]~(￣▽￣)~*",
          tags: ["日常"],
          type: ""
        },
        {
          img: require("@/assets/videoImg/4.jpg"),
          title: "在缺水的沙漠里面上完厕所冲还是不冲呢？",
          tags: ["搞笑", "脑洞"],
          type: ""
        }
      ];
      for (let i = 0; i < videos.length; i++) {
        videos[i].id = i;
      }
      return videos;
    }
  }
};
</script>

<style scope>
.body {
  height: 88%;
}
.body .vedios {
  height: 100%;
  padding: 0 2%;
  background-color: rgb(240, 231, 231);
  display: flex;
  flex-wrap: wrap;
  align-content: flex-start;
  justify-content: space-between;
  overflow-y: auto;
}
.body .vedios .video-container {
  background-color: white;
  flex-basis: 49%;
  margin-top: 2%;
  border-radius: 5px 5px;
  display: flex;
  flex-direction: column;
}
.video-container .video {
  height: 120px;
  border-radius: 5px 5px 0px 0px;
}
.video-container .title {
  height: 50px;
}
.video-container .title p {
  overflow: hidden;
  font-size: smaller;
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  margin: 5px;
  line-height: 20px;
}
.video-container .tags {
  height: 30px;
  display: flex;
  color: rgb(92, 96, 100);
  font-size: 90%;
  line-height: 30px;
  padding: 0 5px;
}
.tags .tag {
  flex-basis: 86%;
  font-size: 90%;
  font-family: "Trebuchet MS", "Lucida Sans Unicode", "Lucida Grande",
    "Lucida Sans", Arial, sans-serif;
}
.tags .more-action {
  flex-basis: 10%;
}
</style>