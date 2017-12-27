<template>
  <div id="content">
      <myTodos></myTodos>
  </div>
</template>
<script>
import myTodos from '@/components/myTodos'

export default {
  name: 'myContent',
  components: {
    myTodos
  }
}
</script>

<style>
#content{
  min-height: 500px;
}
</style>
