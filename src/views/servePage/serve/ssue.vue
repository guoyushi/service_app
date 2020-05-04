<template>
  <div>
      <Header title="发布服务" :flag="true"></Header>
      <div class="wrap">
          <div class="ssueName">
              您选择的服务类别：{{newName}}
          </div>
          <div class="upImg">
              <div  class="upImgTiel">标题</div>
              <input v-model="describe" class="describe" maxlength="15" type="text" placeholder="请清楚准确地描述您提供的服务">
              <div class="describeSize">
                  <span>{{describe.length}}/15</span>
              </div>
              <div class="vanUploader">
                  <van-uploader v-model="fileList" multiple :max-count="6" />
              </div>
              <div class="describeSize">
                  <span>{{fileList.length}}/6</span>
              </div>
          </div>
          <div class="serveDescribe">
              <div class="serveDescribeList">
                  <span class="serveDescribeListChild">服务描述</span>
                  <span @click="toDescription" class="serveDescribeListChildTwo">
<!--                      <span class="successSapn" v-if="isDescription">已编辑</span>-->
                      <span>未编辑</span>
                      <img src="../img/jtRight.png" alt="">
                  </span>
                  <div class="sanjiao" v-if="isHint"></div>
                  <div class="hint" v-if="isHint">
                      服务描述越清晰，越多的用户下单哦
                      <span @click="isHint = false">X</span>
                  </div>
              </div>
              <div class="serveDescribeList">
                  <span class="serveDescribeListChild">服务收费</span>
                  <span @click="toCharge" class="serveDescribeListChildTwo">未编辑 <img src="../img/jtRight.png" alt=""></span>
              </div>
          </div>
          <div class="serveDescribe">
              <div class="serveDescribeList">
                  <span class="serveDescribeListChild">接单类型</span>
                  <span class="serveDescribeListChildTwo">未编辑 <img src="../img/jtRight.png" alt=""></span>
              </div>
              <div class="serveDescribeList">
                  <span class="serveDescribeListChild">服务范围</span>
                  <span class="serveDescribeListChildTwo">未编辑 <img src="../img/jtRight.png" alt=""></span>
              </div>
          </div>
          <div class="serveDescribeText">提示：该类别需提供营业执照才可上线售卖</div>
          <div class="issue">发布</div>
          <div class="issueText">点击发布代表您已经阅读并同意</div>
      </div>
  </div>
</template>

<script>
  import Header from "@/components/header"
  import { Uploader } from 'vant'
  export default {
    name: "ssue",
    components: {
      Header
    },
    data () {
      return {
        description: '', // 服务描述
        isHint: true,
        newName: '',
        describe: '', // 描述
        fileList: []
      }
    },
    mounted() {
      this.description = this.$route.query.description
      this.newName = sessionStorage.getItem('newName')
    },
    methods: {
      // 编辑服务描述
      toDescription() {
        this.$router.push({
          path: '/description',
          query: {
            description: this.description
          }
        })
      },
      // 服务收费
      toCharge() {
        this.$router.push({
          path: '/charge'
        })
      }
    }
  }
</script>

<style lang="less" scoped>
.wrap{
    padding: .4rem .2rem 0 .2rem;
}
    .ssueName{
        font-size: .12rem;
        margin-top: .2rem;
        font-weight: 500;
    }
    .upImg{
        margin-top: .15rem;
        background:rgba(255,255,255,1);
        box-shadow:0px 0px .05rem 0px rgba(77,130,249,0.2);
        border-radius: .06rem;
        padding: .1rem .14rem;
    }
    .upImgTiel{
        font-size: .14rem;
        font-weight:500;
        color:rgba(56,56,56,1);
    }
    .describe{
        width: 3.3rem;
        font-size: .14rem;
        font-weight:400;
        color:rgba(209,211,218,1);
    }
    .describeSize{
        font-size: .12rem;
        font-weight:400;
        color:rgba(209,211,218,1);
        text-align: right;
        margin-top: .04rem;
    }
    .vanUploader{
        margin-top: .15rem;
    }
    .serveDescribe{
        margin-top: .15rem;
        background:rgba(255,255,255,1);
        box-shadow:0px 0px .05rem 0px rgba(77,130,249,0.2);
        border-radius: .06rem;
        padding: 0 .14rem 0 .14rem;
    }
    .serveDescribeList{
        display: flex;
        justify-content: space-between;
        align-items: center;
        height: .6rem;
        position: relative;
        .sanjiao{
            position: absolute;
            top: .4rem;
            left: .3rem;
            width:0;
            height:0;
            border-left:.08rem solid transparent;
            border-right:.08rem solid transparent;
            border-bottom:.1rem solid #3F4041;
        }
        .hint{
            position: absolute;
            top: .48rem;
            font-size: .12rem;
            font-weight:400;
            color:rgba(255,255,255,1);
            width:2.4rem;
            height:.3rem;
            background:rgba(63,64,65,1);
            text-align: center;
            line-height: .3rem;
            span{
                display: inline-block;
                width: .3rem;
            }
        }
    }
    .serveDescribeList:nth-child(1) {
        border-bottom: .01rem solid #F6F7FA;
    }
    .serveDescribeListChild{
        font-size: .14rem;
        font-weight:500;
        color:rgba(51,51,51,1);
    }
    .serveDescribeListChildTwo{
        display: flex;
        justify-content: right;
        align-items: center;
        font-size: .12rem;
        font-weight:400;
        color:rgba(209,211,218,1);
        img{
            width: .07rem;
            height: .11rem;
            margin-left: .1rem;
        }
    }
    .serveDescribeText{
        margin-top: .1rem;
        text-align: center;
        font-size: .12rem;
        font-weight:400;
        color:rgba(167,167,167,1);
    }
    .issue{
        width:100%;
        height:.41rem;
        background:rgba(77,130,249,1);
        margin-top: .73rem;
        border-radius:.04rem;
        text-align: center;
        line-height: .41rem;
        font-size:.16rem;
        font-weight:500;
        color:rgba(255,255,255,1);
    }
    .issueText{
        text-align: center;
        font-size: .12rem;
        font-weight:400;
        color:rgba(167,167,167,1);
        margin-top: .1rem;
    }
    .successSapn{
        font-size:.12rem;
        font-weight:400;
        color:rgba(51,51,51,1);
    }
</style>
