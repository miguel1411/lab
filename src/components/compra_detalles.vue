<template>
  <div class="container-detalles">
    <header>
      <div class="text">
        <p>Nombre del Cliente</p>
      </div>
      <div class="nombre-cliente">
        <p>{{cliente}}</p>
      </div>
    </header>
      <div class="table">
        <p style="font-size: 30px; text-align: center; color: rgb(23,120,177);">Detalles de Compra</p>
        <table id="vertical-1">
            <tr>
                <th>Estudios</th>
                <td>{{estudios}}</td>
            </tr>
            <tr>
                <th>Cita para toma de muestra</th>
                <td style="color: #1778B1; font-weight: bold;">{{cita}}</td>
            </tr>
            <tr>
                <th>Lugar</th>
                <td><p style="color: #1778B1; font-weight: bold;">Cualquiera de nuestras Sucursales en Tijuana</p>
                <p>- Lunes a Viernes 7am-6pm</p>
                <p>-Sábado 7am-2pm</p>
                <p>----------------------------------------------------------</p>
                <p>Domingos 7am-2pm</p>
                <p>(solo en Sucursales Río, Hipodromo, Santa Fé, Playas y Otay).</p>
                </td>
            </tr>
            <tr>
                <th>Dirección</th>
                <td>
                  <p>Estacionamiento Estadio Caliente.</p>
                  <p>blvd. Agua Calliente 159,</p>
                  <p>Col. Agua Caliente, 22024, Tijuana, B.C.</p>
                </td>
            </tr>
            <tr>
                <th>Indicaciones</th>
                <td>
                  <p>- Uso de cubrebocas obligatorio, Se recomienda un ayuno de entre 8-12 hrs.</p>
                  <p>- En caso de urgencia, solicitado por su médico, se puede realizar el estudio sin que el paciente se encuentre en ayuno.</p>
                  <p>- Presentarse con identificación oficial.</p>
                </td>
            </tr>
            <tr>
                <th>Entrega de Resultados</th>
                <td><p style="color: #1778B1; font-weight: bold;">1 a 2 días hábiles</p>posteriores a la toma de muestra.</td>
            </tr>
        </table>
      </div>
    <div class="detalles-pago">
      <div style="border-bottom-style: dotted; border-color: rgba(21,61,105,1); height: 50px;"></div>
      <div class="pago">
        <p style="font-size: 30px; text-align: center; color:rgb(23,120,177);">DETALLES DE PAGO</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return{

    }
  },
  props: {
    cliente:{},
    estudios:{},
    cita:{}
  }
}
</script>

<style lang="less">

  .container-detalles{
    margin-top:15px
  }

  .text{
    height: 40px;
    display: flex;
    justify-content: center;
    align-content: center;
    flex-direction: column;

    background: rgb(23,120,177);
    background: -moz-linear-gradient(230deg, rgba(23,120,177,1) 0%, rgba(48,184,231,1) 70%);
    background: -webkit-linear-gradient(230deg, rgba(23,120,177,1) 0%, rgba(48,184,231,1) 70%);
    background: linear-gradient(230deg, rgba(23,120,177,1) 0%, rgba(48,184,231,1) 70%);
    filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="#1778b1",endColorstr="#30b8e7",GradientType=1);

    color: #fff;
  }
  .nombre-cliente{
    display: flex;
    justify-content: center;
    align-content: center;
    flex-direction: column;

    border-bottom-style: dotted;
    border-color: rgba(21,61,105,1);
    height: 50px;
    font-size: 20px;
  }

  .table{
    width: 100%;
    text-align: right;

    th{
      padding-right: 15px;
      color: #fff;
      width: 20%;
      height: 110px;
      font-weight: 400;
      font-size: 21.6px;
      text-align:inherit;

      background: rgb(23,120,177);
      background: -moz-linear-gradient(230deg, rgba(23,120,177,1) 0%, rgba(48,184,231,1) 70%);
      background: -webkit-linear-gradient(230deg, rgba(23,120,177,1) 0%, rgba(48,184,231,1) 70%);
      background: linear-gradient(230deg, rgba(23,120,177,1) 0%, rgba(48,184,231,1) 70%);
      filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="#1778b1",endColorstr="#30b8e7",GradientType=1);
    }
    td{
      text-align: left;
      padding-left: 55px;
    }
  }
 

  .pago{
    margin-top: 25px;
    height: 50px;
    display: flex;
    justify-content: center;
    align-content: center;
    flex-direction: column;
  }
  .el-col.el-col-12{
    display: flex;
    justify-content: center;
    align-content: center;
    flex-wrap: wrap;
  }

  .grid-content.bg-purple{
    width: 50%;
    background: rgb(23,120,177);
    color: #fff;
    display: flex;
    justify-content: center;
    align-content: center;
    flex-wrap: wrap;

  }

</style>