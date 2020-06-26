<template>
  <div class="compra-terminada">
    <cabecera></cabecera>
    <div class="body">
      <!-- Informacion de usuario -->
      <div class="information" >
        <div class="information-text">
          <p> Estimado {{nombre}} Ha sido un placer atenderle</p><br><br>
          <p id="compra"> Esperamos haya tenido una agradable experiencia en su visita. Hemos recibido su muestra y estaremos trabajando en sus estudios para poder entregarle resultados de <strong> 1 a 2 días hábiles </strong>.</p>
        </div>
      </div>
      <!-- Imagen  -->
      <div class="image-client">
      </div>
    </div>
        <div class="terminar-compra">
        <el-container class="estudios">
            <el-row id="estudios-grid">
                <el-col :span="24">
                    <p>Los recibirá por correo electrónico y podrá también descargarlos en nuestro Portal de Pacientes con los siguientes datos:</p>
                    <div class="button">
                      <label type="primary" id="btn-terminar-compra">ID Paciente</label>
                    </div>
                    <div class="button">
                      <label type="primary" id="btn-terminar-compra">Contraseña</label>
                    </div>
                    <div class="su-carrito">
                    </div>
                    <div class="texto">
                        <p style="color:#1B7EB6">Gracias por su visita y confianza en Certus Laboratorio</p>
                    </div>
                </el-col>
            </el-row>
        </el-container>
    </div>   
    <footerinf></footerinf>
  </div>
</template>

<script>
import cabecera from '../components/header'
import footerinf   from '../components/secondfooter'

export default {
  data(){
    return{
      nombre: 'Juan José'
    }
  },
  components: {
    cabecera,
    footerinf
  }
}
</script>

<style lang="less">
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@500&display=swap');


  .body{
    display: flex;
    flex-direction: row-reverse;
    width: 100%;
    height: 800px;
    margin-top: 15px;
    font-family: 'Montserrat', sans-serif;  


    .information{
      width: 100%;
      flex-direction: column;
      height: 400px;

      
      background: rgb(23,120,177);
      background: -moz-linear-gradient(250deg, rgba(23,120,177,1) 0%, rgba(48,184,231,1) 80%);
      background: -webkit-linear-gradient(250deg, rgba(23,120,177,1) 0%, rgba(48,184,231,1) 80%);
      background: linear-gradient(250deg, rgba(23,120,177,1) 0%, rgba(48,184,231,1) 80%);
      filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="#1778b1",endColorstr="#30b8e7",GradientType=1);

      .information-text{
        text-align: center;        
        flex-direction: column;
        width: 100%;
      }

      p{
        margin-left: 30px;
        width: 100%;
        text-align: center;
        font-size: 40px;
        font-weight: 900px;
        margin-left: 50px;
        width: 50%;
      }
      #fecha{
        font-size: 36px
      }
      #compra{
        font-weight: 400;
        font-size: 16px;
      }
      .fondo{
        margin-top: 35px;
        background-color: rgba(23, 120, 177, 0.8);
        width: 100%;

        #clave{
          font-size: 20px;
        }
      }
    }
  }

    #estudios-pendientes{
        color: #ffffff;
        background: linear-gradient(180deg, #1B7EB6 0%, #30B8E7 100%);
    }

    .terminar-compra{
        font-family: 'Montserrat', sans-serif;  

      #btn-terminar-compra{
        background-color: #1B7EB6;
        height: 60px;
        color: #ffffff;
        font-size: 14px;
        font-weight: 600;
        border:none
      }

      .texto{
        font-size: 30px;
        font-weight: bold;
        margin-top: 65px;
        border-style: dotted;
      }

      .button{
        width: 100%;
        padding: 5px;

      }
    }


</style>