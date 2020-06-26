<template>
  <div class="containerNav">
    <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal"  @select="handleSelect">
      <el-menu-item index="1">Inicio</el-menu-item>
      <el-menu-item index="3">Pruebas Diagnósticas</el-menu-item>
      <el-menu-item index="4"><a href="https://www.ele.me" target="_blank">Resultados</a></el-menu-item>
    </el-menu>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        activeIndex: '1',
        activeIndex2: '1'
      };
    },
    methods: {
      handleSelect(key, keyPath) {
        console.log(key, keyPath);
      }
    }
  }
</script>

<style lang="less">
  .containerNav{
    width: 100%;
    text-align: center;
  }
  
</style>