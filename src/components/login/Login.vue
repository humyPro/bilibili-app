<template>
  <div class="login">
    <Topbar title="手机号登陆注册" other="密码登陆" />
    <div
      class="banner"
      :style="{ 'backgroundImage': 'url(' + getBanner()+ ')','background-repeat':'no-repeat','background-size':'cover' }"
    ></div>
    <form class="form">
      <div class="line border-b" @click="selectLocationForm">
        <div>{{selectLocationObj.label}}</div>
        <div class="icon-small">
          <img src="@/assets/icon/right-707070.svg" />
        </div>
      </div>
      <div v-if="showSelectLocationForm" class="masking">
        <div class="locationForm">
          <div class="line" :class="{showTopBorder:showTopBorder}">地区选择</div>
          <div class="radios" ref="locationForm_radios">
            <label class="line" v-for="(item, index) in getLocation()" :key="index">
              <input
                v-model="location"
                :value="item.value"
                type="radio"
                name="location"
                @click="selectLocation"
              />
              <span>{{item.label}}</span>
            </label>
          </div>
          <div class="cancle">
            <div class="btn selectdisable" @click="selectLocationForm">取消</div>
          </div>
        </div>
      </div>
      <div class="line phone">
        <div class="left">{{selectLocationObj.arecode}}</div>
        <div class="input">
          <input v-model="phoneNumber" placeholder="请输入手机号码" required maxlength="13" />
          <div class="clearbtn icon-small-x" @click="clearPhone">
            <img src="@/assets/icon/cancle.svg" />
          </div>
        </div>
        <div class="btn right">获取验证码</div>
      </div>
      <div class="spliter-x"></div>
      <div class="line verifi border-b">
        <div class="left">验证码</div>
        <div class="input">
          <input v-model="arecode" placeholder="请输入验证码" required />
          <div class="clearbtn icon-small-x" @click="clearArecode">
            <img src="@/assets/icon/cancle.svg" />
          </div>
        </div>
      </div>
      <div class="btn-large" :class="{disable:canSubmit}">验证登陆</div>
    </form>
  </div>
</template>

<script>
import Topbar from "@/components/common/Topbar";
export default {
  components: {
    Topbar
  },
  data: function() {
    return {
      showSelectLocationForm: false,
      location: "china",
      showTopBorder: false,
      phoneNumber: "",
      arecode: ""
    };
  },
  methods: {
    clearPhone() {
      this.phoneNumber = "";
    },
    clearArecode() {
      this.arecode = "";
    },
    getBanner() {
      return require("@/assets/img/login-background.png");
    },
    getLocation() {
      return [
        {
          id: 1,
          label: "中国大陆",
          arecode: "+86",
          regex: "[0-9]{13}",
          value: "china"
        },
        {
          id: 2,
          label: "美国",
          arecode: "+116",
          regex: "[0-9]{13}",
          value: "us"
        },
        {
          id: 3,
          label: "英国",
          arecode: "+113",
          regex: "[0-9]{13}",
          value: "uk"
        }
      ];
    },
    selectLocationForm() {
      this.showSelectLocationForm = !this.showSelectLocationForm;
    },
    selectLocation(e) {
      this.location = e.target.value;
      this.selectLocationForm();
    }
  },
  computed: {
    selectLocationObj() {
      return this.getLocation().find(e => e.value === this.location);
    },
    canSubmit() {
      return !this.arecode || !this.phoneNumber;
    }
  },
  watch: {
    showSelectLocationForm() {
      this.$nextTick(() => {
        if (
          this.showSelectLocationForm === true &&
          !this.$refs.locationForm_radios.onscroll
        ) {
          this.$refs.locationForm_radios.onscroll = () => {
            this.showTopBorder = this.$refs.locationForm_radios.scrollTop > 0;
          };
        }
      });
    }
  }
};
</script>

<style scope>
.banner {
  height: 100px;
  width: 100%;
}
.form {
  display: flex;
  flex-direction: column;
}
.form .line {
  display: flex;
  padding: 2% 4%;
  align-items: center;
  height: 30px;
  /* border-bottom: 1px solid rgb(216, 210, 210); */
}
.locationForm {
  height: 100vh;
  margin: 10px;
  background-color: white;
  display: flex;
  flex-direction: column;
  border-radius: 3px;
  padding: 20px;
}
.locationForm .radios {
  overflow-y: scroll;
}
.locationForm label.line {
  justify-content: flex-start;
}
.locationForm label input[type="radio"] {
  margin-right: 20px;
  width: 20px;
  height: 20px;
}
.locationForm label.line span {
  overflow: scroll;
  white-space: nowrap;
}
.locationForm label.line span::-webkit-scrollbar {
  display: none; /* Safari and Chrome */
}
.cancle {
  height: 60px;
  border-top: 0.5px solid rgb(221, 221, 221);
  position: absolute;
  bottom: 0px;
  right: 10px;
  left: 10px;
  background-color: white;
  padding-right: 20px;
  color: var(--bilibili-color);
  display: flex;
  align-items: center;
  justify-content: flex-end;
}
.cancle .btn {
  height: 50px;
  width: 50px;
  line-height: 50px;
  text-align: center;
}
.cancle .btn:active {
  background-color: rgb(200, 211, 211);
}
.showTopBorder {
  border-bottom: 0.5px solid rgb(221, 221, 221);
}
.phone {
  display: flex;
  align-items: center;
}
.input input {
  border: none;
  font-size: 16px;
  height: 30px;
  outline: none;
  width: 100%;
}
.clearbtn {
  visibility: hidden;
}
.input input:valid + .clearbtn {
  visibility: unset;
}
.input {
  display: flex;
  align-items: center;
  justify-self: start;
}
.phone .left {
  flex: 2;
}
.phone .right {
  flex: 3;
  text-align: end;
}
.phone .input {
  flex: 5;
}
.verifi .left {
  flex: 2;
}
.verifi .input {
  flex: 8;
}
.spliter-x {
  margin-left: 5%;
}
.btn-large {
  width: 94%;
  height: 50px;
  background-color: var(--bilibili-color);
  margin: 3%;
  border-radius: 3px;
  line-height: 50px;
  text-align: center;
  color: white;
}
</style>
