<template>
    <div>
        <Header title="添加地址" :flag="true"></Header>
        <div class="wrap">
            <div class="siteText">
                地址将作为上门服务的中心点，或到店服务的门店地址。当前服务范围为20公里，如需变更，点击修改
            </div>
            <div class="wrapChiled">
                <div class="stieCity" @click="toCityList">
                    <div class="stieCityLeft">
                        所在城市
                    </div>
                    <div class="stieCityRight">
                        <span v-if="siteName">{{siteName}}</span>
                        <span v-else>所在城市</span>
                        <img src="../img/jtRight.png" alt="">
                    </div>
                </div>
                <div class="positionDetail">
                    <div class="positionDetailTop">
                        <div>详细地址</div>
                        <div>
                            <input v-model="posi" type="text" placeholder="请填写您的小区或大厦的…">
                        </div>
                    </div>
                    <div class="positionDetailBottom">
                        <input v-model="posiDetail" type="text" placeholder="请填写详细的楼号门牌号">
                    </div>
                </div>
            </div>
            <div class="success">
                <div @click="success">保存</div>
            </div>
        </div>
    </div>
</template>

<script>
  import Header from "@/components/header"
  import { Toast } from 'vant';
  export default {
    name: "site",
    components: {
      Header
    },
    data () {
      return {
        siteName: '',
        posi: '',
        posiDetail: ''
      }
    },
    mounted() {
      this.siteName = this.$route.query.siteName
    },
    methods: {
      toCityList() {
        this.$router.replace({
          path: 'cityChoose'
        })
      },
      // 保存
      success() {
        if (!this.siteName || !this.posi || !this.posiDetail) {
          Toast.fail('请填写完整地址信息');
          return
        }
        this.$router.push({
          path: 'ssue'
        })
      }
    }
  }
</script>

<style scoped lang="less">
.wrap{
    padding-top: .4rem;
    .siteText{
        display: flex;
        align-items: center;
        height: .45rem;
        line-height: .16rem;
        padding: 0 .2rem;
        border-bottom: solid #F6F7FA .01rem;
        font-size: .11rem;
        font-weight:400;
        color:rgba(102,102,102,1);
    }
}
.wrapChiled{
    padding: 0 .2rem;
}
    .stieCity{
        margin-top: .13rem;
        display: flex;
        padding: 0 .12rem;
        justify-content: left;
        align-items: center;
        height: .5rem;
        background:rgba(255,255,255,1);
        box-shadow:0 0 .05rem 0 rgba(77,130,249,0.2);
        border-radius: .06rem;
        .stieCityLeft{
            font-size: .14rem;
            font-weight:500;
            color:rgba(56,56,56,1);
        }
        .stieCityRight{
            flex: 1;
            margin-left: .11rem;
            display: flex;
            justify-content: space-between;
            align-items: center;
            font-size: .14rem;
            font-weight:400;
            color:rgba(51,51,51,1);
            img{
                width: .06rem;
                height: .11rem;
            }
        }
    }
    .positionDetail{
        height: 1rem;
        margin-top: .13rem;
        background:rgba(255,255,255,1);
        box-shadow:0 0 .05rem 0 rgba(77,130,249,0.2);
        border-radius: .06rem;
    }
    .positionDetailTop{
        height: .49rem;
        display: flex;
        justify-content: left;
        align-items: center;
        border-bottom: solid #F1F3F8 .01rem;
        div{
            margin-left: .12rem;
            font-size: .14rem;
            font-weight:500;
        }
        div:nth-child(2) {
            width: 1.68rem;
            input{
                width: 100%;
            }
        }
    }
    .positionDetailBottom{
        padding: 0 .12rem;
        height: .49rem;
        line-height: .49rem;
        input{
            width: 100%;
            font-size: .14rem;
            font-weight:400;
            color:rgba(51,51,51,1);
        }
    }
    .success{
        padding: 0 .2rem;
        margin-top: .2rem;
        div{
            text-align: center;
            height: .4rem;
            line-height: .4rem;
            background: #4D82F9;
            border-radius: .04rem;
            font-size: .16rem;
            font-weight:500;
            color:rgba(255,255,255,1);
        }
    }
</style>
