<template>
    <div>
        <Header title="服务规格" :flag="true"></Header>
        <div class="wrap">
            <div class="serveRuleText">请选择您可以提供的服务规格，以便用户可以搜索到您的服务。</div>
            <div class="wrapPad">
                <div class="serveRuleTitle">整理服务类别</div>
                <div class="serveData">
                    <div @click="isCheckoutServe(index)" class="serveDataList" v-for="(item, index) in serveData" :key="index">
                        {{item.name}}
                        <img v-if="item.isCheck" src="../img/bcheck.png" alt="">
                    </div>
                </div>
                <div class="serveRuleTitle">组合（如果不支持某种组合，可取消勾选）</div>
                <div class="serveList">
                    <div class="serveListChek" v-for="(item, index) in serveData" :key="index">
                        <div v-if="item.isCheck">
                            {{item.name}}
                            <img @click="isCheckoutServe(index)" src="../img/check.png" alt="">
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
  import Header from "@/components/header"
  export default {
    name: "serveRule",
    components: {
      Header
    },
    data() {
      return {
        serveData: [{
          name: '哇哈哈',
          isCheck: false
        }, {
          name: '加多宝王老吉',
          isCheck: false
        },{
          name: '百事可乐',
          isCheck: false
        }]
      }
    },
    methods: {
      isCheckoutServe(index) {
        this.serveData[index].isCheck = !this.serveData[index].isCheck
      }
    }
  }
</script>

<style lang="less" scoped>
.wrap{
    padding-top: .4rem;
}
    .serveRuleText{
        font-size: .11rem;
        font-weight:400;
        color:rgba(102,102,102,1);
        border-bottom: solid #F6F7FA .02rem;
        height: .3rem;
        text-align: center;
        line-height: .3rem;
    }
    .wrapPad{
        padding: 0 .2rem;
    }
    .serveRuleTitle{
        font-size: .14rem;
        font-weight:500;
        color:rgba(51,51,51,1);
        margin-top: .1rem;
    }
    .serveData{
        padding: .2rem;
        margin-top: .1rem;
        margin-bottom: .2rem;
        display: flex;
        justify-content: space-between;
        align-items: center;
        background:rgba(255,255,255,1);
        box-shadow:0 0 .05rem 0 rgba(77,130,249,0.2);
        border-radius: .06rem;
        .serveDataList{
            position: relative;
            width: .94rem;
            height: .35rem;
            border-radius: .04rem;
            border:1px solid #4D82F9;
            font-size:.12rem;
            font-weight:400;
            color:#4D82F9;
            text-align: center;
            line-height: .35rem;
            img{
                width: .15rem;
                height: .15rem;
                position: absolute;
                right: -.01rem;
                bottom: 0;
            }
        }
    }
    .serveList{
        padding: 0 .2rem;
        background:rgba(255,255,255,1);
        box-shadow:0 0 .05rem 0 rgba(77,130,249,0.2);
        border-radius: .06rem;
        margin-top: .1rem;
    }
    .serveListChek{
        div{
            height: .6rem;
            line-height: .6rem;
            display: flex;
            justify-content: space-between;
            align-items: center;
            border-bottom: solid #F6F7FA .01rem;
        }
        font-size: .14rem;
        font-weight:500;
        color:rgba(51,51,51,1);
        img{
            width: .18rem;
            height: .18rem;
        }
    }
</style>
