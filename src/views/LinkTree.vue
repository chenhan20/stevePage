<template>
  <div class="linkTree">
    <LinkTree msg="Steve LinkTree"/>
  </div>
</template>


<script>
// @ is an alias to /src
import LinkTree from '@/components/LinkTree.vue'

export default {
  name: 'linkTree',
  components: {
    LinkTree
  }
}
</script>