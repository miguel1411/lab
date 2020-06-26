<template>
  <div class="container-compra">
    <cabecera></cabecera>
    <div class="body">
      <div class="information" >
        <p>Gracias {{nombre}} por su confianza en Certus Laboratorio</p>
        <P id="compra">Fecha de compra: <label>{{fecha}}</label></P>
        <div class="fondo">
          <p id="clave"> <label>Clave de confirmación: <br><br>{{clave}}</label></p>
        </div>
      </div>
      <div class="image-client" >
        <img src="../assets/perfil.jpg" alt="">
      </div>
    </div>
    <div class="body-inferior">
      <p>Favor de presentar este código de barras en su visita a sucursal</p>
    </div>
    <div class="total">
      <p>Precio total de sus estudios:  <strong style="color: #30B8E7">${{total}} MXN</strong> </p>
    </div>
    <detalles :cliente="nombre" :estudios="estudios" :cita="cita"></detalles>
    <div class="abuelo">
      <div class="padre">
        <label>Forma de pago</label>
        <div class="hijo">Banco</div>
      </div>
      <div class="padre">
          <label>Banco</label>
        <div class="hijo">Tarjeta</div>
      </div>
    </div>
    <div class="abuelo">
      <div class="padre">
        <label>Método de pago</label>
        <div class="hijo">Miguel</div>
      </div>
      <div class="padre">
          <label>Número de operación</label>
        <div class="hijo">Tarjeta</div>
      </div>
    </div>
    <div style="border-bottom-style: dotted; border-color: rgb(21, 61, 105); height: 50px;"></div>
    <div class="facturacion-politicas">
      <div class="facturacion">
        <label>Facturación</label>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Itaque natus deleniti ullam molestiae consequuntur, quaerat voluptate, tempora fuga provident at incidunt voluptatum assumenda repudiandae sed, praesentium quibusdam sapiente dolor aspernatur.</p>
      </div>
      <div class="politicas" >
        <label>Política de consumo y cancelación</label>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Est quos neque ex, quidem consequatur sunt iste nesciunt eos, reiciendis officiis adipisci eum nemo. Odit nihil similique laborum, magni porro quis.
          </p>
      </div>
    </div>
  </div>
</template>

<script>
import detalles from '../components/compra_detalles'
import cabecera from '../components/header'
//import pago     from '../components/detalles_pago'

export default {
  data(){
    return {
      nombre: 'Juan José',
      fecha:  '19/Jun/2020',
      clave: 'PO-20200612003',
      total: 3750,
      estudios: ['- Detección de COVID-19 por PCR','- Detección de COVID-18 por PCR', ],
      cita: 'Jueves 22 de Julio a las 11:45 AM'
    }
  },
  components: {
    detalles,
    cabecera,
    //pago
  }
}
</script>

<style lang="less">
@import url('https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,400;1,300&display=swap');

  .container-compra{
    height: auto;
    width: 100%;
    font-family: 'Roboto', sans-serif;  }
  .div-header {

    display: flex;
    justify-content: center;
    align-items: center;

    background: rgb(23,120,177);
    background: -moz-linear-gradient(230deg, rgba(23,120,177,1) 0%, rgba(48,184,231,1) 70%);
    background: -webkit-linear-gradient(230deg, rgba(23,120,177,1) 0%, rgba(48,184,231,1) 70%);
    background: linear-gradient(230deg, rgba(23,120,177,1) 0%, rgba(48,184,231,1) 70%);
    filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="#1778b1",endColorstr="#30b8e7",GradientType=1);

    width: 100%; 
    height: 200px; 
    border: 0px solid #555; 
  }

  .body{
    display: flex;
    flex-direction: row-reverse;

    width: 100%;
    height: auto;

    margin-top: 15px;

    .information{
      width: 50%;
      flex-direction: column;
      
      background: rgb(23,120,177);
      background: -moz-linear-gradient(250deg, rgba(23,120,177,1) 0%, rgba(48,184,231,1) 75%);
      background: -webkit-linear-gradient(250deg, rgba(23,120,177,1) 0%, rgba(48,184,231,1) 75%);
      background: linear-gradient(250deg, rgba(23,120,177,1) 0%, rgba(48,184,231,1) 75%);
      filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="#1778b1",endColorstr="#30b8e7",GradientType=1);

      p{
        text-align: left;
        margin-left: 80px;
        font-size: 30px;
      }
      #compra{
        text-align: left;
        font-size: 20px;
      }

      .fondo{
        background-color: rgba(23, 120, 177, 0.8);
        width: 100%;
        #clave{
          text-align: left;
          font-size: 20px;
        }
      }
    }
    .image-client{
      width: 50%;
    }
  }
  .body-inferior{
    font-size: 30px;
  }
  .total{
    border-style: dotted;
    border-color: rgba(21,61,105,1);
    font-size: 20px;
  }

  .abuelo{
    margin-top: 25px;
    display: flex;
    font-size: 15px;
    justify-content: center;

    .padre{
      width: 50%;
      height: 60px;
      margin: 10px;

      display: flex;
      justify-content: center;
      flex-direction: column;
      
      
      background-color: #177BB1;
      color: #ffffff;
      
      label{
        margin-top: 15px;
        font-size: 20px;
      }
      .hijo{
        margin-top: 10px;
        height: 60px;
        background-color: rgb(255, 255, 255);
        color: #000;
      }
    }
  }

  .facturacion-politicas{
    margin-top: 65px;
    
    .facturacion{

    }
    .politicas{
      margin-top: 40px;
    }

    label{
      font-weight: 900;
      font-size: 20px;
      text-align: center;
      color:rgb(23,120,177);
    }
  }
</style>