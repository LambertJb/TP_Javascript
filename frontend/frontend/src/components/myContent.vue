<template>
  <div id="content">
    <nav>
      <router-link to="/ajouter">Ajouter une todo</router-link>
    </nav>
      <span>
        <myTodos></myTodos>
      </span>
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
nav {
  background-color: rgb(100, 100, 100) !important;
  font-weight: bold;
}
#content{
  margin-top: 140px;
}
</style>
