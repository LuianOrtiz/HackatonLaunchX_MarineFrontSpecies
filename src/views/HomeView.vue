<template>
  <div class="home">
    <PageHeader/>
    <ImagesSlideshow/>
    <PurposeObjective purp="awa"/>
    <img alt="Vue logo" src="../assets/logo.png">
    <PageFooter/>
    <!--
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    -->
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'
import PageHeader from '@/components/PageHeader.vue'
import PageFooter from '@/components/PageFooter.vue'
import ImagesSlideshow from '@/components/home/ImagesSlideshow.vue'
import PurposeObjective from '@/components/home/PurposeObjective.vue'

export default {
  name: 'HomeView',
  components: {
    //HelloWorld
    PageHeader,
    ImagesSlideshow,
    PurposeObjective,
    PageFooter
  }
}
</script>