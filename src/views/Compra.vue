<template>
  <div class="container-compra">
    <cabecera></cabecera>
    <div class="body">
      <!-- Informacion de usuario -->
      <div class="information" >
        <div class="information-text">
          <p> Gracias {{nombre}} por su confianza en Certus Laboratorio</p><br><br>
          <p id="compra"> Fecha de compra: <label id="fecha">{{fecha}}</label></p>
        </div>
        <div class="fondo">
          <p id="clave">Clave de confirmación: <br><br>{{clave}}</p>
        </div>
      </div>
      <!-- Imagen  -->
      <div class="image-client">
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
        <div class="texto">
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Debitis accusamus illo, harum expedita dolor quae veritatis animi voluptate voluptates ab, magnam, pariatur numquam aperiam nulla quibusdam corrupti molestias magni voluptas?
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veritatis pariatur explicabo saepe dolore laborum iste praesentium eos incidunt error cum iusto, distinctio blanditiis! Nisi aperiam rerum dolorum illum velit nesciunt.
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Itaque natus deleniti ullam molestiae consequuntur, quaerat voluptate, tempora fuga provident at incidunt voluptatum assumenda repudiandae sed, praesentium quibusdam sapiente dolor aspernatur.
          </p>
        </div>
      </div>
      <div class="politicas" >
        <label>Política de consumo y cancelación</label>
        <div class="texto">
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Debitis accusamus illo, harum expedita dolor quae veritatis animi voluptate voluptates ab, magnam, pariatur numquam aperiam nulla quibusdam corrupti molestias magni voluptas?
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veritatis pariatur explicabo saepe dolore laborum iste praesentium eos incidunt error cum iusto, distinctio blanditiis! Nisi aperiam rerum dolorum illum velit nesciunt.
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Itaque natus deleniti ullam molestiae consequuntur, quaerat voluptate, tempora fuga provident at incidunt voluptatum assumenda repudiandae sed, praesentium quibusdam sapiente dolor aspernatur.
          </p>
        </div>      
      </div>
    </div>
    <footerinf id="footer"></footerinf>
  </div>
</template>

<script>
import detalles from '../components/compra_detalles'
import cabecera from '../components/header'
import footerinf   from '../components/secondfooter'

export default {
  data(){
    return {
      nombre: 'Juan José',
      fecha:  '19/Jun/2020',
      clave: 'PO-20200612003',
      total: 3750,
      estudios: ['- Detección de COVID-19 por PCR','- Detección de anticuerpos IgG COVID-19' ],
      cita: 'Jueves 22 de Julio a las 11:45 AM'
    }
  },
  components: {
    detalles,
    cabecera,
    footerinf
  }
}
</script>

<style lang="less">
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@500&display=swap');

  .container-compra{
    height: auto;
    width: 100%;
    font-family: 'Montserrat', sans-serif;  
  }

  .body{
    display: flex;
    flex-direction: row-reverse;

    width: 100%;
    height: 800px;

    margin-top: 15px;

    .information{
      width: 100%;
      flex-direction: column;
      
      background: rgb(23,120,177);
      background: -moz-linear-gradient(250deg, rgba(23,120,177,1) 0%, rgba(48,184,231,1) 80%);
      background: -webkit-linear-gradient(250deg, rgba(23,120,177,1) 0%, rgba(48,184,231,1) 80%);
      background: linear-gradient(250deg, rgba(23,120,177,1) 0%, rgba(48,184,231,1) 80%);
      filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="#1778b1",endColorstr="#30b8e7",GradientType=1);

      .information-text{
        flex-direction: column;
        width: 100%;
      }

      p{
        margin-left: 30px;
        width: 100%;
        text-align: left;
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
    .image-client{
      width: 100%;
      
      background-image: url(../assets/perfil.jpg);
      background-size:cover;
      //background-position: center;
      background-repeat: no-repeat;
    }
  }
  .body-inferior{
    color: #177BB1;
    font-size: 25px;

    p{
      font-weight: 600;
    }
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
      display: flex;
      justify-content: center;
      align-content: center;
      align-items: center;
      flex-direction: column;
    }
    .politicas{
      margin-top: 40px;
      display: flex;
      justify-content: center;
      align-content: center;
      align-items: center;
      flex-direction: column;
    }

    label{
      font-weight: 900;
      font-size: 20px;
      text-align: center;
      color:rgb(23,120,177);
    }

    .texto{
      width: 45%;
    }
  }
  #footer{
    margin-top: 60px;
  }
  
  @media screen and (max-width: 1123px){
    .container-compra{
      display: flex;
      flex-direction: column;
      .body{
        flex-direction: column;
        .information{
          display: flex;
          flex-direction: column;
          width: 100%;
        }
        .image-client{
          height: 4500px;
          width: 100%;
          background-color: rgb(23,120,177);
        }
      }
    }
  }
  @media screen and(max-width: 1769px){
    .container-compra{
      display: flex;
      flex-direction: column;
    .body{
      flex-direction: column;
      .information{
        display: flex;
        flex-direction: column;
        width: 100%;
      }
      .image-client{
        height: 500px;
        width: 100%;
        background-color: rgb(23,120,177);
      }
      }
    }
  }
</style>