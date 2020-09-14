<template>
  <div class="login">
    <Topbar title="手机号登陆注册" other="密码登陆" />
    <div
      class="banner"
      :style="{ 'backgroundImage': 'url(' + getBanner()+ ')','background-repeat':'no-repeat','background-size':'cover' }"
    ></div>
    <form class="form">
      <div class="line border-b location" @click="selectLocationForm">
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
          <input
            v-model="phoneNumber"
            placeholder="请输入手机号码"
            required
            maxlength="13"
            oninput="value=value.replace(/[^\d]/g,'')"
          />
          <div class="clearbtn icon-small-xx" @click="clearPhone">
            <img src="@/assets/icon/cancle.svg" />
          </div>
          <div class="spliter-y"></div>
        </div>
        <div class="btn right vaeifi-code-btn" @click="verification">获取验证码</div>
      </div>
      <div class="spliter-x"></div>
      <div class="line verifi border-b">
        <div class="left">验证码</div>
        <div class="input">
          <input
            v-model="arecode"
            placeholder="请输入验证码"
            required
            oninput="value=value.replace(/[^\w]/g,'')"
          />
          <div class="clearbtn icon-small-xx" @click="clearArecode">
            <img src="@/assets/icon/cancle.svg" />
          </div>
        </div>
      </div>
      <div class="btn-large" :class="{disable:canSubmit}">验证登录</div>
    </form><<<<<<< HEAD
    <div class="text-banner">
      <p>未注册或未绑定哔哩哔哩的手机号，将帮你注册新账号</p>
      <p>
        登录即代表你同意
        <span>用户协议</span>和
        <span>隐私政策</span>
      </p>
    </div>
    <div class="text-banner">
      <p>
        遇到问题？
        <span>查看帮助</span>
      </p>
    </div>=======
    <div>{{res}}</div>>>>>>>> a317a37af76b1e1a737127eadf4c0ad5e7884ef6
  </div>
</template>

<script>
import Topbar from "@/components/common/Topbar";
import api from "@/api";
export default {
  components: {
    Topbar,
  },
  data: function () {
    return {
      showSelectLocationForm: false,
      location: "china",
      showTopBorder: false,
      phoneNumber: "",
      arecode: "",
      res: "waitting",
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
          value: "china",
        },
        {
          id: 2,
          label: "美国",
          arecode: "+116",
          regex: "[0-9]{13}",
          value: "us",
        },
        {
          id: 3,
          label: "英国",
          arecode: "+113",
          regex: "[0-9]{13}",
          value: "uk",
        },
        {
          id: 1,
          label: "中国大陆",
          arecode: "+86",
          regex: "[0-9]{13}",
          value: "china",
        },
        {
          id: 2,
          label: "美国",
          arecode: "+116",
          regex: "[0-9]{13}",
          value: "us",
        },
        {
          id: 3,
          label: "英国",
          arecode: "+113",
          regex: "[0-9]{13}",
          value: "uk",
        },
        {
          id: 1,
          label: "中国大陆",
          arecode: "+86",
          regex: "[0-9]{13}",
          value: "china",
        },
        {
          id: 2,
          label: "美国",
          arecode: "+116",
          regex: "[0-9]{13}",
          value: "us",
        },
        {
          id: 3,
          label: "英国",
          arecode: "+113",
          regex: "[0-9]{13}",
          value: "uk",
        },
        {
          id: 1,
          label: "中国大陆",
          arecode: "+86",
          regex: "[0-9]{13}",
          value: "china",
        },
        {
          id: 2,
          label: "美国",
          arecode: "+116",
          regex: "[0-9]{13}",
          value: "us",
        },
        {
          id: 3,
          label: "英国",
          arecode: "+113",
          regex: "[0-9]{13}",
          value: "uk",
        },
        {
          id: 1,
          label: "中国大陆",
          arecode: "+86",
          regex: "[0-9]{13}",
          value: "china",
        },
        {
          id: 2,
          label: "美国",
          arecode: "+116",
          regex: "[0-9]{13}",
          value: "us",
        },
        {
          id: 3,
          label: "英国",
          arecode: "+113",
          regex: "[0-9]{13}",
          value: "uk",
        },
        {
          id: 1,
          label: "中国大陆",
          arecode: "+86",
          regex: "[0-9]{13}",
          value: "china",
        },
        {
          id: 2,
          label: "美国",
          arecode: "+116",
          regex: "[0-9]{13}",
          value: "us",
        },
        {
          id: 3,
          label: "英国",
          arecode: "+113",
          regex: "[0-9]{13}",
          value: "uk",
        },
      ];
    },
    selectLocationForm() {
      this.showSelectLocationForm = !this.showSelectLocationForm;
    },
    selectLocation(e) {
      this.location = e.target.value;
      this.selectLocationForm();
    },
    verification() {
      this.res = "click";
      let x = api.user
        .captcha()
        .then(() => {
          this.res = "asdasdasd";
        })
        .catch((r) => {
          this.res = r.message;
        });
      console.log(x);
    },
  },
  computed: {
    selectLocationObj() {
      return this.getLocation().find((e) => e.value === this.location);
    },
    canSubmit() {
      return !this.arecode || !this.phoneNumber;
    },
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
    },
  },
};
</script>

<style scope>
.banner {
  height: 100px;
  width: auto;
}
.form {
  display: flex;
  flex-direction: column;
}
.form .line {
  display: flex;
  padding: 2% 4%;
  align-items: center;
  height: 40px;
  /* border-bottom: 1px solid rgb(216, 210, 210); */
}
.location.line {
  justify-content: space-between;
}
.locationForm {
  width: auto;
  height: 100%;
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
.input .spliter-y {
  margin-left: 4px;
}
.phone .left {
  flex: 2;
}
.phone .right {
  flex: 3;
  text-align: end;
  color: var(--bilibili-color);
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
<<<<<<< HEAD
.text-banner {
  color: rgb(146, 148, 150);
  text-align: center;
  margin: 3%;
  font-size: 0.8em;
}
.text-banner span {
  color: var(--bilibili-color);
  margin-left: -2px;
=======

.btn-large.disable {
  background-color: rgba(var(--bilibili-color-value), 0.5);
>>>>>>> a317a37af76b1e1a737127eadf4c0ad5e7884ef6
}
</style>
