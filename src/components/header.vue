<template>
  <div class="header">
    <header class="header">
      <div class="div-header">
        <img src="../assets/logo_white.png" alt="">
      </div>
    </header>
  </div>
</template>

<script>
export default {
    
}
</script>

<style lang="less">
  .header{
    width: 100%;
    height: 125px;
    display: flex;
    align-content: center;
    justify-content: center;
    flex-direction: column;
    border-style: 0;

    img{
      height: 75px;
    }

    .div-header {

    display: flex;
    justify-content: center;
    align-items: center;

    background: rgb(23,120,177);
    background: -moz-linear-gradient(230deg, rgba(23,120,177,1) 0%, rgba(48,184,231,1) 80%);
    background: -webkit-linear-gradient(230deg, rgba(23,120,177,1) 0%, rgba(48,184,231,1) 80%);
    background: linear-gradient(230deg, rgba(23,120,177,1) 0%, rgba(48,184,231,1) 80%);
    filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="#1778b1",endColorstr="#30b8e7",GradientType=1);

    width: 100%; 
    height: 200px; 
    border: 0px solid #555; 
  }
  }
</style>