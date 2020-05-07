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
                    <input class="input1" v-model="item.name" type="text" placeholder="请输入项目（30个字内）">
                    <input class="input2" v-model="item.prize" type="text" placeholder="价格">
                    <div @click="selectPrize(index)">
                        <div>{{item.monad}}</div>
                        <img class="xsj" src="../img/xsj.png" alt="">
                    </div>
                    <img @click="pushItem" v-if="index == chargeListData.length - 1" class="jia" src="../img/jia.png" alt="">
                    <img @click="deleteItem(index)" v-else class="jian" src="../img/jian.png" alt="">
                </div>
            </div>
        </div>
<!--        计价单位-->
        <van-popup v-model="showPrize" position="bottom">
            <van-picker
                    title="选择计价规则"
                    show-toolbar
                    :columns="columns"
                    @confirm="onConfirm"
                    @cancel="onCancel"
                    @change="onChange"
            />
        </van-popup>
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
    </div>
</template>

<script>
  import Header from "@/components/header"
  import { Popup, Picker } from 'vant'
  export default {
    name: "chargeList",
    components: {
      Header
    },
    data() {
      return {
        showPrize: false,
        prizeType: '',
        prizeIndex: 0,
        columns: ['杭州', '宁波', '温州', '嘉兴', '湖州'],
        chargeListData: [
          {
            name: '哇哈哈',
            prize: '',
            monad: '元/间'
          },
          {
            name: '',
            prize: '',
            monad: '请选择'
          }
        ],
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
    },
    methods: {
      onConfirm(value, index) {
        this.prizeType = value
        this.showPrize = false
        this.chargeListData[this.prizeIndex].monad = this.prizeType
        // Toast(`当前值：${value}, 当前索引：${index}`);
      },
      onChange(picker, value, index) {
        // Toast(`当前值：${value}, 当前索引：${index}`);
      },
      onCancel() {
        this.showPrize = false
      },
      // 选择分类
      selectPrize(index) {
        this.showPrize = true
        this.prizeIndex = index
      },
      // 增加
      pushItem() {
        var data = {
          name: '',
          prize: '',
          monad: '请选择'
        }
        this.chargeListData.push(data)
      },
      // 删除列表某一项
      deleteItem(index) {
        this.chargeListData.splice(index, 1)
        console.log(this.chargeListData)
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
    .prizeList{
        background:rgba(255,255,255,1);
        box-shadow:0 0 .05rem 0 rgba(77,130,249,0.2);
        border-radius: .06rem;
        padding: 0 .1rem .1rem .1rem;
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
        display: flex;
        justify-content: space-between;
        align-items: center;
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
        .input1{
            width: 1.49rem;
        }
        .input2 {
            width: .48rem;
            margin-left: .1rem;
        }
        div{
            width: .7rem;
            position: relative;
            div{
                width: .7rem;
                margin-left: .1rem;
                height: .35rem;
                line-height: .35rem;
                background:rgba(243,244,246,1);
                border-radius: .04rem;
                opacity:0.8;
                font-size: .12rem;
                font-weight:600;
                text-align: center;
            }
            .xsj{
                width: .1rem;
                height: .08rem;
                position: absolute;
                right: -.05rem;
                bottom: .12rem;
            }
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
    .jian{
        width: .16rem;
        height: .16rem;
        margin-left: .1rem;
    }
    .jia{
        width: .16rem;
        height: .16rem;
        margin-left: .1rem;
    }
</style>
