<template>
  <div class="home">
    <div class="nav">
      <div class="pic">
        <img src="../../public/images/img_02.png" alt="">
      </div>
    </div>
    <!-- tabbar -->
    <!-- <h3>{{mount}}</h3> -->
    <!-- <TabBar></TabBar> -->
  </div>
</template>

<script lang="ts" setup>
import { defineComponent,ref } from "vue";
import {home_http} from "@/api/httpHome.js";
// import HelloWorld from "@/components/HelloWorld.vue"; // @ is an alias to /src
// import TabBar from "@/components/tabbar/TabBar.vue"
let mount =ref("hello")
// home_http().then(res=>console.log(res))
// export default defineComponent({
//   name: "HomeView",
//   components: {
//     TabBar
//   },
// 封装一个业务函数
async function gethome(){
  let {data}=await home_http()
  console.log(data);
}
gethome()
  // setup(){
  //   let mount =ref("hello")
  //   return{
  //     mount
  //   }
  // }
// });

</script>
<style lang="scss" scoped>
  .home{
    .nav{
      .pic{
        width: 375px;
        height: 296px;
        img{
          width: 100%;
          height: 100%;
        }
      }
    }
  }
</style>