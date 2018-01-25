<template>
  <div id="header">
    <div id="header-title">
      <h2>TODOLIST MANAGER</h2>
    </div>
  </div>
</template>

<script>
export default {
  name: 'myHeader'
}
</script>

<style>
#header {
  width:100%;
  position: fixed;
  top:0px;
  text-align: center;
  background-color: rgb(91, 152, 216);
  color: white;
  height: 140px;
  padding-top: 7px;
}
#header-title {
  display: inline-block;
  vertical-align: middle;
  line-height: normal;
}

</style>
