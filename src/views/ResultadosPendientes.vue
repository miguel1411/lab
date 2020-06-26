<template>
    <div class="resultados-pendientes">
        <cabecera></cabecera>
    <!--
        ESTUDIOS PENDIENTES
    -->
        <div id="estudios-pendientes">
            <el-row>
                <el-col :span="24">
                    <div class="grid-content">
                        <h3> Estimado {{ nombre_cliente }}</h3>
                        <div id="container-fecha" >
                            <h4 id="cita"> Sus estudios le están esperando</h4>
                            <h4>Notamos que ha dejado estudios pendientes en su carrito de compra:</h4>
                        </div>
                    </div>
                </el-col>
            </el-row>
        </div>
    <!--
        TERMINAR COMPRA
    -->
    <div class="terminar-compra">
        <el-container class="estudios">
            <el-row id="estudios-grid">
                <el-col :span="24">
                    <p id="estudios-texto">- {{ estudio_1 }}</p>
                    <p id="estudios-texto">- {{ estudio_2 }}</p>
                    <div class="button">
                        <el-button type="primary" id="btn-terminar-compra">TERMINAR COMPRA</el-button>
                    </div>
                    <div class="su-carrito">
                        <h4>Su carrito permanecerá disponible hasta el</h4>
                        <h4><b style="color:#1B7EB6">{{ fecha }}</b> antes de las <b style="color:#1B7EB6">{{ hora }}</b></h4>
                    </div>
                    <hr class="dotted">
                    <div class="texto">
                        <h4 style="color:#1B7EB6">
                            Recuerde que su salud es lo más importante
                        </h4>
                        <h4 style="color:#1B7EB6">
                            ¡Será un gusto atenderle!
                        </h4>
                    </div>
                </el-col>
            </el-row>
        </el-container>
    </div>   
    <secondfooter></secondfooter>      
    </div>
</template>

    
<script>
import secondfooter from "../components/secondfooter.vue";
import cabecera from "../components/header.vue";

export default {
data(){
    return {
      nombre_cliente: 'Juan José',
      estudio_1: 'Detección de COVID-19 por PCR',
      estudio_2: 'Perfil Inicial COVID-19',
      fecha: 'Jueves/22/Julio',
      hora: ' 11:59 P.M.'
    }
  },
  components: {
    secondfooter,
    cabecera
  }
}
</script>

<style lang="css" scoped>
@import url('https://fonts.googleapis.com/css2?family=Lato&family=Roboto+Condensed&display=swap');

    .resultados-pendientes{
        font-family: 'Roboto', sans-serif;  
        width: 100%;
        color: #4F4F4F;
    }

    #estudios-pendientes{
        margin-top: 25px;
        color: #ffffff;
        background: linear-gradient(180deg, #1B7EB6 0%, #30B8E7 100%);
    }

    #btn-terminar-compra{
        background-color: #1B7EB6;
        height: 60px;
        color: #ffffff;
        font-size: 14px;
    }

    hr.dotted {
        border-top: 3px dotted #1B7EB6;
        margin-bottom: 4%;
    }

    #estudios-texto{
        text-align: left;
        margin-left: 37%;
        margin-right: 37%;
    }
</style>