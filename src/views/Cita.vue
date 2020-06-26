<template>
    <div class="container-info-cita">
        <cabecera></cabecera>
    <!--
        TOMA DE MUESTRA
    -->
    <div id="tomamuestra">
        <el-row>
            <el-col :span="24">
                <div class="grid-content">
                    <p> Estimado {{ nombre_cliente  }}</p>
                <div id="container-fecha" >
                    <p id="cita"> Su cita para Toma de Muestra es el día de {{ fecha }} a las {{ hora }}</p>
                </div>
                    <br>
                    <p> En Carpa para toma de Muestra en Carro 
                        Estacionamiento Estadio Caliente
                    </p>
                    <p>Boulevard Agua Caliente 159, Col. Agua Caliente 22024. Tijuana, B.C.</p>
                </div>
            </el-col>
        </el-row>
    </div>
    <!--
        CODIGO DE BARRAS
    -->
    <el-row>
        <el-col :span="24">
            <div class="grid-content">
                <p> Favor de presentar este código de barras en su visita a sucursal</p>
                <p>{{ codigo_img }}</p>
                <p>{{ codigo_escrito }}</p>
            </div>
        </el-col>
    </el-row>
    <!--
        ESTUDIOS POR REALIZAR
    -->
        <h3 id="title"> Estudios por realizar </h3>
    <el-container class="estudios">
        <el-row id="Estudios-texto">
            <el-col :span="24">
                <p>- {{ estudio_1 }}</p>
                <p>- {{ estudio_2 }}</p>
            </el-col>
        </el-row>
    </el-container>
    <!--
        INDICACIONES
    -->
    <el-divider style="background-color:#1B7EB6" ><h3 style="color:#1B7EB6">Indicaciones</h3></el-divider>
    <el-container class="indicaciones">
        <el-row>
            <el-col :span="24">
                <p>- Uso de cubrebocas obligatorio. 
                    Se recomienda un ayuno de entre 8-12hrs.
                </p>
                <p>- En caso de urgencia, solicitado 
                    por su médico, se puede realizar 
                    el estudio sin que el paciente se 
                    encuentre en ayuno.
                </p>
                <p>- Presentarse con identificación oficial.
                </p>
            </el-col>
        </el-row>
    </el-container>
    <!--
        ENTREGA DE RESULTADOS
    -->
        <h3 id="title"> Entrega de Resultados </h3>
    <el-row>
        <el-col :span="24">
            <p>Sus resultados estarán liberados de <b style="color:#1B7EB6">{{ dia_entrega }}</b> posteriores a la toma de muestra.</p>
        </el-col>
    </el-row>
    <hr class="dotted">
    <!--
        TEXTO GRACIAS
    -->
    <el-row>
        <el-col :span="24">
            <h3 style="color:#1B7EB6"> ¡Gracias por su confianza, será un gusto atenderle! </h3>
        </el-col>
    </el-row>
        <secondfooter></secondfooter>
    </div>
</template>
    
<script>
import cabecera from "../components/header.vue";
import secondfooter from "../components/secondfooter.vue";

export default {
data(){
    return {
      nombre_cliente: 'Juan José',
      codigo_img:  '19/Jun/2020',
      codigo_escrito: 'PO-20200612003',
      estudio_1: 'Helloooo! Woooooooooooooorld',
      estudio_2: 'Helloooo! Woooooooooooooorld',
      dia_entrega: '1 a 2 días hábiles '
    }
  },
  components: {
    cabecera,
    secondfooter
  }
}
</script>

<style lang="css" scoped>
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@500&display=swap');

    .container-info-cita{
        font-family: 'Montserrat', sans-serif;  
        width: 100%;
        color: #333333;
    }

    .indicaciones{
        text-align: left;
        margin-left: 37%;
        margin-right: 37%;
    }

    .estudios{
        margin-left: 37%;
        margin-right: 37%;
    }

    .header{
        background: linear-gradient(180deg, #1B7EB6 0%, #30B8E7 100%);
    }

    .el-divider {
    background-color: #1B7EB6;
    }

    #container-fecha{
        color: #ffffff;
        padding-top: 20px;
        padding-bottom: 20px;
        background-color: rgba(23, 120, 177, 0.8);
    }

    #title{
        color: #ffffff;
        padding-top: 20px;
        padding-bottom: 20px;
        background-color: #1778B1;
    }

    #Estudios-texto{
        text-align: left;
    }

    #cita{
        
        margin-left: 40%;
        margin-right: 40%;
    }

    #tomamuestra{
        margin-top: 50px;
        color: #ffffff;
        background: linear-gradient(180deg, #1B7EB6 0%, #30B8E7 100%);
    }

    hr.dotted {
        border-top: 3px dotted #1B7EB6;
    }


    /*.rect {
        height: 100px;
        width: 100%;
        background: linear-gradient(180deg, #1B7EB6 0%, #30B8e7 100%);
        position: relative;
        margin-top: 100px;
    }

    .circle {
        display: block;
        width: 100%;
        height: 50%;
        top: -50px;
        left: 0;
        overflow: hidden;
        position: absolute;
    }

    .circle:after {
        content: '';
        width: 100%;
        height: 100px;
        -moz-border-radius: 100px;
        -webkit-border-radius: 100px;
        border-radius: 100px;
        background: rgba(0, 0, 0, 0);
        position: absolute;
        top: -100px;
        left: -40px;
        border: 40px solid #1B7EB6
    }*/

</style>