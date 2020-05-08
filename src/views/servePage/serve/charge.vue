<template>
    <div>
        <Header title="服务收费" :flag="true"></Header>
        <div class="wrap">
            <div class="chargeTitle">服务方式</div>
            <div class="chargeName">
                <div class="chargeNameData">啦啦啦啦啦</div>
            </div>
            <div class="specification" @click="toServeRule">
                <div>
                    服务规则
                    <span>(选填)</span>
                </div>
                <div>
                    已添加3种规则
                    <img src="../img/jtRight.png" alt="">
                </div>
            </div>
            <div class="serveDescribe">
                <div class="serveDescribeList">
                    <span class="serveDescribeListChild">
                        服务收费
                        <span>按价目表收费</span>
                    </span>
                    <span @click="toChargeList" class="serveDescribeListChildTwo">未编辑 <img src="../img/jtRight.png" alt=""></span>
                </div>
                <div class="serveDescribeList">
                    <span class="serveDescribeListChild">空跑是否收取上门费</span>
                    <div class="isChargeBox">
                        <div v-show="isCharge" @click="isCharge = false" class="isChargeTrue"></div>
                        <div v-show="!isCharge" @click="isCharge = true" class="isChargeFalse"></div>
                    </div>
                </div>
            </div>
            <div class="serveDescribe" v-show="isCharge" >
                <div class="serveDescribeList">
                    <span class="serveDescribeListChild">
                        何时收取上门费
                    </span>
                    <span class="serveDescribeListChildTwo">上门后客户原因而取消 <img src="../img/jtRight.png" alt=""></span>
                </div>
                <div class="serveDescribeList">
                    <span class="serveDescribeListChild">上门费</span>
                    <span>
                        <input
                        class="prizeInput"
                        placeholder="请输入价格"
                        maxlength="8"
                        oninput="this.value=this.value.replace(/[^\d.]/g,'')"
                        >
                    </span>
                </div>
            </div>
            <div class="chargeText">
                请提前与客户沟通您的收费明细，在服务人员上门后（系统以输入签到 码为准），如果因客户原因而导致取消订单，您有权去上门费。
            </div>
        </div>
    </div>
</template>

<script>
  import Header from "@/components/header"
  export default {
    name: "charge",
    components: {
      Header
    },
    data () {
      return {
        isCharge: true
      }
    },
    methods: {
      // 服务规则
      toServeRule() {
        this.$router.push({
          path: '/serveRule'
        })
      },
      // 服务收费
      toChargeList() {
          this.$router.push({
            path: '/chargeList'
          })
      }
    }
  }
</script>

<style lang="less" scoped>
.wrap{
    padding: .6rem .2rem 0 .2rem;
}
    .chargeTitle{
        font-size: .14rem;
        font-weight:500;
        color:rgba(51,51,51,1);
    }
    .chargeName{
        height: .75rem;
        background:rgba(255,255,255,1);
        box-shadow:0px 0px 5px 0px rgba(77,130,249,0.2);
        border-radius: .06rem;
        margin-top: .1rem;
        display: flex;
        justify-content: left;
        align-items: center;
        padding-left: .2rem;
    }
    .chargeNameData{
        width: .94rem;
        height: .35rem;
        border-radius: .04rem;
        border: .01rem solid #4D82F9;
        font-size: .12rem;
        font-weight:400;
        color:#4D82F9;
        text-align: center;
        line-height: .35rem;
    }
    .specification{
        margin-top: .2rem;
        height: .6rem;
        background:rgba(255,255,255,1);
        box-shadow:0px 0px .05rem 0px rgba(77,130,249,0.2);
        border-radius: .06rem;
    }
    .specification{
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 0 .2rem;
        div:nth-child(1) {
            font-size: .14rem;
            font-weight:500;
            color:rgba(51,51,51,1);
            span{
                font-size: .12rem;
                font-weight:400;
                color:rgba(195,197,205,1);
                margin-left: .05rem;
            }
        }
        div:nth-child(2) {
            font-size: .12rem;
            font-weight:400;
            color:rgba(195,197,205,1);
            img{
                width: .07rem;
                height: .12rem;
            }
        }
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
    span{
        padding: 0 .05rem;
        width: .56rem;
        border:1px solid #F45446;
        font-size: .08rem;
        font-weight:400;
        color:#F2483B;
    }
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
    .isChargeBox{
        width: .33rem;
        height: .19rem;
        background:rgba(89,190,117,1);
        border-radius: .9rem;
        padding: .01rem;
        display: flex;
        justify-content: space-between;

    }
    .isChargeTrue{
        width: .19rem;
        height: .19rem;
        border-radius: 50%;
        background: #ffffff;
    }
    .isChargeFalse{
        margin-left: .16rem;
        width: .19rem;
        height: .19rem;
        border-radius: 50%;
        background: #cccccc;
    }
    .prizeInput{
        width: 1rem;
        font-size: .14rem;
        font-weight:500;
        color:rgba(51,51,51,1);
    }
    .chargeText{
        font-size: .1rem;
        font-weight:400;
        color:rgba(195,197,205,1);
        padding: .2rem;
    }
</style>
