<template>
  <div class="container">

    <!-- <div class="container-left">
      <div class="container-video">
        <video autoplay loop>
        <source src="https://morning-shelf-6185.herokuapp.com/assets/2015-01-01-bokeh-6e0d97b003dff1c88b95db3126cd4788.mp4" type="video/mp4; "/>        
        Your browser does not support the video tag.
      </video>
      </div>
    </div> -->

    <div class="container-right">

      <!-- Sección de logo y titulo -->
      <div class="logo-container">
        <img src="../assets/logo.png" alt="">
        <h1>Registro de Pacientes para Prueba de Covid</h1>
      </div>

      <div class="sections">
        <!-- Sección izquierda -->
        <div class="section-left">
          <el-row type="flex" class="row-bg">
          <el-col :span="24">
            <div class="grid-content bg-purple">
            <el-form :inline="true" :model="formInline" class="demo-form-inline" :rules="rules" ref="formInline">
            <el-form-item prop="name"> <el-input v-model="formInline.name" placeholder="Ingrese su nombre"></el-input></el-form-item>              
            <el-form-item prop="lastname"> <el-input v-model="formInline.lastname" placeholder="Ingrese su apellido"></el-input></el-form-item>
            <el-form-item prop="gender"><el-select v-model="formInline.gender" placeholder="Género de Nacimiento">
                <el-option label="Masculino" value="Masculino"></el-option>
                <el-option label="Femenino" value="Femenino"></el-option>
              </el-select></el-form-item>
            <el-form-item prop="rfc"><el-input v-model="formInline.rfc" placeholder="RFC"></el-input></el-form-item>
 
            <el-form-item prop="phone"><el-input v-model.number="formInline.phone" placeholder="Teléfono de Contacto "></el-input></el-form-item>
            <el-form-item prop="email"><el-input v-model="formInline.email" placeholder="Correo Electrónico"></el-input></el-form-item>
            <el-form-item prop=date><el-date-picker v-model="formInline.date" type="date" placeholder="Fecha de Nacimiento" format="yyyy/MM/dd" value-format="yyyy-MM-dd">></el-date-picker></el-form-item>
            <el-form-item prop="number"><el-input v-model.number="formInline.number" placeholder="Número de tarjeta Elite"></el-input></el-form-item>
            </el-form>
            </div>
          </el-col>
          </el-row>
        </div>
      </div>
      <div class="btncheck">
        <el-form>
        <el-form-item>
        <el-button  @click="submitForm('formInline')">Ir al siguiente paso. <i class="el-icon-arrow-right"></i></el-button>
        <!-- `checked` debe ser true o false -->
        </el-form-item>
        <el-form-item prop="checked">
          <el-checkbox v-model="formInline.checked"><label> Estoy de Acuerdo con los <a href="">Términos y Condiciones</a>,<br> así como la <a href="">Políticas de Privacidad </a>.</label></el-checkbox>
        </el-form-item>
      </el-form>
      </div>
      <div class="information">
        <img src="../assets/alert.png"><label>Recuerde revisar su correo con el link de confirmación 
de datos y pasos a seguir.</label>
      </div>
    </div>
    <h1>{{formInline.date}}</h1>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        formInline: {
          name: '',
          lastname:'',
          gender: '',
          rfc: '',
          phone: '',
          email: '',
          number: '',
          date: '',
          checked: true,
        },

        rules: {
          name: [
            { 
              required: true,
              message: 'El campo es requerido',
              trigger: 'blur'
            },
          ],
          lastname: [
            {
              required: true,
              message: 'El campo es requerido',
              trigger: 'blur'
            }
          ],
          gender: [
            { 
              required: true,
              message: 'El campo es requerido',
              trigger: 'blur'
            },
          ],
          rfc: [
            { 
              required: true,
              message: 'El campo es requerido',
              trigger: 'blur'
            },
          ],
          phone: [
            { 
              required: true,
              message: 'El campo es requerido',
            },
            {
              type: 'number',
              message: 'Solo se admiten números'
            }
          ],
          email: [
            { 
              required: true,
              message: 'El campo es requerido',
              trigger: 'blur'
            },
            {
              type: 'email',
              message: 'Email no válido',
              trigger: ['blur','change']
            }
          ],
          date: [
            { 
              type: 'date',
              required: true,
              message: 'Seleccione su fecha de nacimiento',
              trigger: 'change'
            },
          ],
          number: [
            { 
              required: true,
              message: 'El campo es requerido',
              trigger: 'blur'
            },
            {
              type: 'number',
              message: 'Solo se admiten números'
            }
          ],
          checked: [
            {
              required: true,
              message: 'Please select activity resource',
              trigger: 'change'
            }
          ]
        }
      }
    },
    methods: {
      onSubmit() {
        console.log('submit!');
      },
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            alert('submit!');
            console.log(this.formInline.phone)

          } else {
            console.log('error submit!!');
                        console.log(formName.phone)

            return false;
          }
        });
    },
  }}
</script> 

<style lang="less">

@import url('https://fonts.googleapis.com/css2?family=Arimo&family=Montserrat&display=swap');

.container{
  font-family: 'Arimo', sans-serif;
  height: auto;
  width: 100%;
  display: flex;
  flex-flow: row nowrap;
  justify-content:space-between;
  margin-top: 55px;

  .btncheck{
    display: flex;
    padding: 20px;
    justify-content: center;


    text-align: justify;

    label{
      font-weight: 900;
    }

    .el-button{
      margin-left: 8%;
    }
    
    .el-checkbox{
      margin-left: 8%;
    }
  }
  .grid-content.bg-purple{
    display: flex;
    flex-direction: column;
  }
  
  h1{
    
    font-family: 'Montserrat';
    color: #4F4F6F;
    font-weight: bold;

    font-family: 'Montserrat';
    font-weight: bold;
    font-size: 45px;
  }

  .el-date-editor.el-input.el-input--prefix.el-input--suffix.el-date-editor--date{
    width: 100%;
  }
}

.container-right{
  width: 100%;
}

.el-checkbox__input .el-checkbox__inner{
  border-radius: 20px;
}

a{
    text-decoration: none;
      color: rgb(105, 105, 224);
}

.sections{
  display: flex;
  //background-color: black;
  justify-content:space-around;
  width: 100%;

  .section-left{
    width: 45%;

    .el-form.demo-form-inline.el-form--inline{
      // display: flex;
      // flex-direction: column;

      //background-color: tomato;

      .el-form-item__content{
        width: 100%;
        margin-top: 10px;
      }
    }
  
   .el-select{
     width: 100%;
   }
  }
  .el-form-item {
    margin-bottom: -5px;
}

  .section-right{
    width: 45%;

    .el-form.demo-form-inline.el-form--inline{
      display: flex;
      flex-direction: column;
      //background-color: tomato;

      .el-form-item__content{
        width: 100%;
      }
    }
  
  }

}

.logo-container{
  width: 100%;

  img{
    height: 90px;
  }
}

/*Sección de inputs*/ 
.el-input {
  margin-top: 10px;

    .el-input__inner {
      border-radius: 19px;
      width: 100%;
      height: 35px;
  }
}

.el-button.el-button--default{

  color: #ffffff;
  background: #544cf9;
  background: -webkit-linear-gradient(left, #544cf9, #814cf9);
  background: -moz-linear-gradient(left, #544cf9, #814cf9);
  background: -ms-linear-gradient(left, #544cf9, #814cf9);
  background: -o-linear-gradient(left, #544cf9, #814cf9);
  background: linear-gradient(to right, #544cf9, #814cf9);

  border: none;
  min-height: 40px;
  font-size: 11px;
  border-radius: 58px;
  
  width: 100%;
  }

  
.el-row {
  margin-bottom: 20px;
  width: 100%;

  &:last-child {
      margin-bottom: 0;
  }
}

.el-form-item{
  padding-top: 5px;
  border-radius: 20px;

  .el-button--primary {
    color: #FFF;
    background-color: #409EFF;
    border-color: #409EFF;
    border-radius: 20px;
  }
}

.information {
  font-family: 'Montserrat', sans-serif;
  font-weight: bold;
  color: #ffffff;
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgb(50, 57, 77);
  
  //background-color: brown;
  img{
    padding: 20px;

    text-align: left;
    width: 64px;
  }
}
  
@media screen and (max-width: 938px){
  .container{
    margin-top: 20px;
    flex-direction: column-reverse;

    h1{
      text-align: center;
      font-size: 35px;
      font-weight: bold;
    }

  .btncheck{
    display: flex;
    text-align: justify;
    justify-content: center;

    label{
      font-weight: 900;
    }

    .el-button{
      margin-left: 0%;
    }
    
    .el-checkbox{
      margin-left: 0%;
    }
  }
  }
  .sections{
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .el-button.el-button--default{
    display: flex;
    justify-content: center;
    width: 100%;
  }
  .information{
    width: 100%;
  }

/*Sección de inputs*/ 
.el-input {
    .el-input__inner {
      font-size:10px;
      border-radius: 19px;
      width: 100%;
      height: 35px;
  }
}
}

@media screen and (max-width: 408px){

.container{
  h1{
    font-size: 25px;
  }
}


.el-input {
    .el-input__inner {
      border-radius: 19px;
      width: 100%;
      height: 35px;
      font-size: 11px;
  }
}

.btncheck{
    display: flex;
    justify-content:right;
    
    label{
      font-weight: 900;
    }
    .el-checkbox{
      margin-left: 0%;

      label{
        font-size: 10px;
      }
    }
  }

  .information{
    font-size: 11px;
  }
}
</style>