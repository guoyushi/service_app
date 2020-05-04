<template>
  <div class="authentication_regiser">
    <Header title="企业/个体商户注册" :flag="true"></Header>
    <div class="individual_enterprise">
      <p class="tips">请选择营业执照类型（非个体商户均选“企业公司”）</p>
      <div class="button">
        <span
          @click="handleClick(item,index)"
          :class="{'active':index==active}"
          v-for="(item,index) in list"
          :key="index"
        >{{item.name}}</span>
      </div>
      <p class="tips" v-if="flag">请选择身份（确保对公账户可以正常使用，否则“企业公司”认证成功后无法提取收入）</p>
      <div class="button" v-if="flag">
        <span
          @click="handleClicks(item,index)"
          :class="{'active':index==actives}"
          v-for="(item,index) in lists"
          :key="index"
        >{{item.name}}</span>
      </div>
      <div v-if="isShow">
        <div class="individual_or_enterprise">
          <div class="upload"  v-if="noLegaPperson">
            <p class="title">授权书</p>
            <p class="content">请参照示例内容自行打印或手写，加盖公章后拍照上传清楚可见</p>
            <div class="fileList">
              <van-uploader v-model="fileList" multiple />
            </div>
          </div>
          <div class="upload">
            <p class="title">上传营业执照照片</p>
            <p class="content">请确保证号完整、印章、文字、照片均清楚可见</p>
            <div class="fileList">
              <van-uploader v-model="licenseFileList" multiple />
            </div>
          </div>
        </div>
        <div class="license_information">
          <van-cell-group>
            <van-field v-model="licenseName" label="营业执照名称" placeholder="无名请填写经营者姓名" />
            <van-field v-model="code" label="统一社会信用代码" placeholder="或营业执照注册号" />
          </van-cell-group>
          <van-cell title="营业执照所在地" is-link />
        </div>
        <p class="tips">执照有效日期</p>
        <div class="button">
          <span
            @click="handleClickDates(item,index)"
            :class="{'active':index==activeDates}"
            v-for="(item,index) in dates"
            :key="index"
          >{{item.name}}</span>
        </div>
        <div class="date_content">
          <van-cell-group>
            <van-cell title="有效期至" is-link :value="date" @click="selectDate" />
            <van-field v-model="licenseName" label="法人姓名" placeholder="请输入姓名" />
            <van-field v-model="code" label="法人身份证号" placeholder="请输入身份证号" />
          </van-cell-group>
        </div>
        <div class="submit">
          <p>提交审核</p>
        </div>
      </div>
    </div>
    <div class="date" v-if="isDate">
      <van-datetime-picker
        v-model="currentDate"
        type="date"
        :min-date="minDate"
        :max-date="maxDate"
        @confirm="confirm"
        @cancel="cancel"
      />
    </div>
  </div>
</template>
<script>
import Header from "../../components/header";
export default {
  name: "authentication_regiser",
  data() {
    return {
      noLegaPperson:false,//是否是法人
      isShow: false,
      isDate: false,
      date: "", //有效期
      licenseName: "", //营业执照
      code: "", //社会信用代码
      actives: null,
      active: null,
      activeDates: 0,
      flag: false,
      minDate: new Date(2020, 0, 1),
      maxDate: new Date(2025, 10, 1),
      currentDate: new Date(),
      licenseFileList: [],
      fileList: [{ url: "https://img.yzcdn.cn/vant/leaf.jpg" }],
      list: [
        {
          name: "个体商户",
          type: 0
        },
        {
          name: "企业公司",
          type: 1
        }
      ],
      lists: [
        {
          name: "我是法人",
          type: 0
        },
        {
          name: "我不是法人",
          type: 1
        }
      ],
      dates: [
        {
          name: "固定日期",
          type: 0
        },
        {
          name: "永久",
          type: 1
        }
      ]
    };
  },
  components: {
    Header
  },
  methods: {
    formatTen(num) {
      return num > 9 ? num + "" : "0" + num;
    },
    formatDate(dates) {
      var date = new Date(dates);
      var year = date.getFullYear();
      var month = date.getMonth() + 1;
      var day = date.getDate();
      return (
        year + "年" + this.formatTen(month) + "月" + this.formatTen(day) + "日"
      );
    },
    cancel() {
      this.isDate = false;
    },
    confirm() {
      console.log(this.currentDate);
      this.date = this.formatDate(this.currentDate);
      // this.date = this.currentDate
      this.isDate = false;
    },
    //日期选择
    selectDate() {
      this.isDate = true;
    },
    //执照有效期是否长期
    handleClickDates(item, index) {
      this.activeDates = index;
    },
    //是否是法人
    handleClicks(item, index) {
      if(item.type === 1){
        this.noLegaPperson = true
        this.isShow = true;
      }else{
        this.noLegaPperson = false
        this.isShow = true;
      }
      this.actives = index;
    },
    //个体商户/企业公司
    handleClick(item, index) {
      this.active = index;
      if (item.type === 1) {
        this.flag = true;
        this.isShow = false;
        this.actives = null
      } else {
        this.flag = false;
        this.isShow = true;
        this.noLegaPperson = false
      }
    }
  }
};
</script>
<style lang="less">
.authentication_regiser{
  height: 100%;
  overflow-y: hidden;
  .individual_enterprise {
  margin-top: 0.4rem;
  box-sizing: border-box;
  overflow-y: auto;
  height: 100%;
  background: #ffffff;
  padding-bottom: .63rem;
  .tips {
    padding: 0.2rem 0.28rem 0.1rem 0.22rem;
    font-size: 0.14rem;
    font-weight: 500;
    color: rgba(51, 51, 51, 1);
    line-height: 0.2rem;
  }
  .button {
    margin: 0 0.18rem 0 0.22rem;
    background: rgba(255, 255, 255, 1);
    box-shadow: 0px 0px 5px 0px rgba(77, 130, 249, 0.2);
    border-radius: 6px;
    padding: 0.2rem;
    box-sizing: content-box;
    display: flex;
    align-items: center;
    justify-content: center;
    span {
      width: 1.43rem;
      height: 0.35rem;
      border: 1px solid #4984f9;
      font-size: 0.12rem;
      font-weight: 400;
      color: #4984f9;
      line-height: 0.35rem;
      text-align: center;
      border-radius: 4px;
      margin: 0 0.05rem;
    }
    .active {
      color: #ffffff;
      background: linear-gradient(
        226deg,
        rgba(77, 130, 249, 1) 0%,
        rgba(73, 132, 249, 1) 100%
      );
    }
  }
  .individual_or_enterprise {
    margin: 0 0.18rem 0 0.22rem;
    .upload {
      .title {
        margin-top: 0.2rem;
        font-size: 0.14rem;
        font-weight: 500;
        color: rgba(51, 51, 51, 1);
        line-height: 0.2rem;
      }
      .content {
        font-size: 0.14rem;
        font-weight: 500;
        color: rgba(102, 102, 102, 1);
        line-height: 0.17rem;
      }
      .fileList {
        margin-top: 0.1rem;
        background: rgba(255, 255, 255, 1);
        box-shadow: 0px 0px 5px 0px rgba(77, 130, 249, 0.2);
        border-radius: 6px;
        padding: 0.1rem 0.1rem 0.18rem 0.1rem;
        box-sizing: border-box;
      }
    }
  }
  .date_content,
  .license_information {
    margin: 0.2rem 0.18rem 0 0.22rem;
    background: rgba(255, 255, 255, 1);
    box-shadow: 0px 0px 5px 0px rgba(77, 130, 249, 0.2);
    border-radius: 6px;
    box-sizing: content-box;
    .van-cell {
      line-height: 0.6rem;
      .van-field__control {
        text-align: right;
      }
      .van-field__label {
        width: 1.15rem;
      }
    }
    .van-cell__left-icon,
    .van-cell__right-icon {
      line-height: 0.6rem;
    }
  }
  .submit{
    padding: 0 .18rem 0 .22rem;
    margin-top: .2rem;
    box-sizing: border-box;
    p{
      height:.4rem;
      background:linear-gradient(226deg,rgba(77,130,249,1) 0%,rgba(73,132,249,1) 100%);
      border-radius:4px;
      line-height: .4rem;
      text-align: center;
      font-size:.16rem;
      font-weight:500;
      color:rgba(255,255,255,1);
    }
  }
}
.date {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
}
}

</style>