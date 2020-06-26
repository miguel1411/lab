<template>
  <div class="detalles_pago">
    <el-table
      :data="tableData"
      style="width: 100%"
      height="250">
      <el-table-column
        fixed
        prop="date"
        label="Fecha"
        width="150">
      </el-table-column>
      <el-table-column
        prop="name"
        label="Nombre"
        width="120">
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        tableData: [{
          date: '2016-05-03',
          name: 'Tom',
          state: 'California',
          city: 'Los Angeles',
          address: 'No. 189, Grove St, Los Angeles',
          zip: 'CA 90036'
        }]
      }
    }
  }
</script>

<style lang="less">
  .detalles_pago{
    width: 100%;
    display: flex;
    justify-content: center;
  }
  .el-table{
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-content: center;
  }
</style>