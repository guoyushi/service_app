<template>
    <div>
        <Header title="选择服务地点" :flag="true"></Header>
        <div class="wrap">
            <div class="position">
                <p><img src="../../img/positionIcon.png" alt=""></p>
                <p>暂无服务地址</p>
                <P>为了用户能够查看到你，请添加服务地址～</P>
                <div>
                    <p @click="toSite">新增地址</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
  import Header from "@/components/header"
  export default {
    name: "positionSele",
    components: {
      Header
    },
    methods: {
      toSite() {
        this.$router.push({
          path: '/cityChoose'
        })
      }
    }
  }
</script>

<style scoped lang="less">
.wrap{
    width: 100vw;
    height: 100vh;
    .position{
        position: relative;
        top: 50%;
        text-align: center;
        margin-top: -1rem;
        img{
            width: .46rem;
            height: .63rem;
        }
        p:nth-child(2) {
            font-size: .14rem;
            font-weight:400;
            color:rgba(51,51,51,1);
            margin-top: .1rem;
        }
        p:nth-child(3) {
            font-size: .12rem;
            font-weight:300;
            color:rgba(195,197,205,1);
            margin-top: .1rem;
        }
        div{
            display: flex;
            justify-content: center;
            margin-top: .1rem;
           p{
               width:.96rem;
               height: .3rem;
               border-radius: .04rem;
               border:.01rem solid #4D82F9;
               font-size: .12rem;
               font-weight:400;
               color:#4D82F9;
               text-align: center;
               line-height: .3rem;
           }
        }
    }
}
</style>
