<template>
    <div>
        <Header title="服务收费" :flag="true"></Header>
        <div class="wrap">
            <div class="chargeListText">
                您在闪叮咚平台必须根据价格表服务项标准进行收费。若您未按照价目表收费或出现增项收费不在价目表中，平台将会对您进行包括但不限于扣分、扣款或清退等处罚。
            </div>
            <div class="chargeListTitileBox">
                <div class="chargeListTitle">填写价目表</div>
                <div class="chargeListGive" @click="messageShow = true">
                    <img src="../img/questionIcon.png" alt="">
                    查看填写示例
                </div>
            </div>
            <div class="prizeList">
                <div class="prizeListTiele">
                    <span>项目</span>
                    <span>价格</span>
                    <span>计价单位</span>
                </div>
                <div class="chargeListDataDetail" v-for="(item, index) in chargeListData" :key="index">
                    <input v-model="item.name" type="text" placeholder="请输入项目（30个字内）">
                    <input v-model="item.prize" type="text" placeholder="价格">
                    <input v-model="item.monad" type="text">
                </div>
            </div>
        </div>
<!--        示例弹窗-->
        <van-popup v-model="messageShow">
            <div class="message">
                <div class="messageTiele">
                    <span>项目</span>
                    <span>价格</span>
                </div>
                <div class="messageTiele messagelist" v-for="(item, index) in giveData" :key="index">
                    <span>{{item.name}}</span>
                    <span>{{item.value}}元/件</span>
                </div>
            </div>
            <div class="close">
                <img @click="messageShow = false" src="../img/close.png" alt="">
            </div>
        </van-popup>
        <!--类型选择-->
        <van-popup v-model="istypeSelect" position="bottom" :style="{ height: '30%' }">
            <div class="typeSelect">
                <span>取消</span>
                <span>选择计价规则</span>
                <span>确认</span>
            </div>
        </van-popup>
    </div>
</template>

<script>
  import Header from "@/components/header"
  import { Popup } from 'vant'
  export default {
    name: "chargeList",
    components: {
      Header
    },
    data() {
      return {
        chargeListData: [
          {
            name: '哇哈哈',
            prize: '',
            monad: '元/间'
          },
          {
            name: '',
            prize: '',
            monad: ''
          }
        ],
        istypeSelect: true,
        messageShow: false,
        giveData: [{
          name: '更换开关按钮',
          value: 20
        },{
          name: '更换万能遥控器',
          value: 70
        },{
          name: '更换视频线',
          value: 50
        },{
          name: '电线版补焊',
          value: 100
        },{
          name: '保险管维修',
          value: 80
        },{
          name: '二极管更换',
          value: 70
        },{
          name: '背光版',
          value: 398
        },{
          name: '高压分配去',
          value: 260
        }]

      }
    }
  }
</script>

<style scoped lang="less">
.wrap{
    padding: .5rem .2rem 0 .2rem ;
}
.chargeListText{
    font-size: .11rem;
    font-weight:400;
    line-height: .16rem;
    color:rgba(102,102,102,1);
    border-bottom: solid .01rem #F6F7FA;
    padding-bottom: .05rem;
}
.chargeListTitileBox{
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: .1rem;
}
    .chargeListTitle{
        font-size: .14rem;
        font-weight:500;
        color:rgba(51,51,51,1);
    }
    .chargeListGive{
        img{
            width: .12rem;
            height: .12rem;
        }
        font-size: .11rem;
        font-weight:400;
        color: #4984F9;
    }
    .message{
        width: 3.2rem;
        border-radius: .06rem;
    }
    .messageTiele{
        display: flex;
        justify-content: space-between;
        align-items: center;
        background:rgba(246,246,248,1);
        span:nth-child(1) {
            width: 2.2rem;
        }
        span:nth-child(2) {
            flex: 1;
        }
        span{
            height: .39rem;
            line-height: .39rem;
            font-size: .12rem;
            font-weight:500;
            color:rgba(51,51,51,1);
            text-align: center;
        }
    }
    .messagelist{
        background: #ffffff;
        height: .45rem;
        border-bottom: solid #F6F7FA .01rem;
        span{
            height: .45rem;
        }
        span:nth-child(1) {
            border-right: solid #F6F7FA .01rem;
        }
    }
    .van-popup{
        background: none;
    }
    .close{
        display: flex;
        justify-content: center;
        margin-top: .3rem;
        img{
            width: .4rem;
            height: .4rem;
        }
    }
    .prizeListTiele{
        font-size: .12rem;
        font-weight:500;
        color:rgba(51,51,51,1);
        span{
            display: inline-block;
            height: .35rem;
            text-align: center;
            line-height: .35rem;
        }
        span:nth-child(1) {
            width: 1.49rem;
        }
        span:nth-child(2) {
            width: .48rem;
        }
        span:nth-child(3) {
            width: .7rem;
        }
    }
    .chargeListDataDetail{
        margin-top: .1rem;
        input{
            height: .35rem;
            background:rgba(243,244,246,1);
            border-radius: .04rem;
            opacity:0.8;
            font-size: .12rem;
            font-weight:600;
            text-align: center;
        }
        input:nth-child(1) {
            width: 1.49rem;
        }
        input:nth-child(2) {
            width: .48rem;
            margin-left: .1rem;
        }
        input:nth-child(3) {
            width: .7rem;
            margin-left: .1rem;
        }
    }
    .typeSelect{
        background: #ffffff;
        padding: .15rem;
        height: 1.7rem;
        color: red;
        font-size: .12rem;
        display: flex;
        justify-content: space-between;
        span:nth-child(2) {
            color: #000000;
        }
    }
</style>
