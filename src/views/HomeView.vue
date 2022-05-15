<template>
  <div class="home">
    <PageHeader equipo="Hackaton Team"/>
    <ImagesSlideshow/>
    <br>
    <PurposeObjective 
      titulo1="Objetivo"
      parrafo1="Stet sd erat eu takimata eum aliquyam amet vel et invidunt facilisis voluptua gubergren"
      parrafo2="Te e ipsum sed sit ipsum sed sea diam voluptua lobortis diam esse elitr"
      titulo2="Otra cosa"
      parrafo3="Dolores taio stet sanctus vulputate vero nonumy justo ipsum sit elitr diam illum vero"
      parrafo4="Et nomy invidunt et kasd dolor eirmod takimata assum justo duo nonumy eos sanctus"
    />
    <br><br>
    <PageFooter 
      equipo="Hackaton Team"
      desc="Invidunt nostrud soluta takimata accusam erat qui justo et illum autem nisl lorem nostrud"
      
    />
  </div>
</template>

<script>
// @ is an alias to /src
import PageHeader from '@/components/PageHeader.vue'
import PageFooter from '@/components/PageFooter.vue'
import ImagesSlideshow from '@/components/home/ImagesSlideshow.vue'
import PurposeObjective from '@/components/home/PurposeObjective.vue'

export default {
  name: 'HomeView',
  components: {
    PageHeader,
    ImagesSlideshow,
    PurposeObjective,
    PageFooter
  }
}
</script>