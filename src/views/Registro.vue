<template>
  <div class="container">
    <div class="container-right">
      <div class="logo-container">
        <img src="../assets/logo.png" alt="">
        <h1>Registro de Pacientes para Prueba de Covid</h1>
      </div>
      <div class="sections">
        <div class="section-left">
          <el-row type="flex" class="row-bg">
            <el-col :span="24">
              <div class="grid-content bg-purple">
                <el-form :inline="true" :model="formInline" class="demo-form-inline" :rules="rules" ref="formInline">
                  <div class="inputs">
                    <el-form-item prop="name"> <el-input v-model="formInline.name" placeholder="Ingrese su nombre" onkeyup="this.value = this.value.toUpperCase()"></el-input></el-form-item>
                    <el-form-item prop="lastname"> <el-input v-model="formInline.lastname" placeholder="Ingrese su apellido" onkeyup="this.value = this.value.toUpperCase()"></el-input></el-form-item>
                    <el-form-item prop="gender" id="gender">
                      <el-select v-model="formInline.gender" placeholder="Género">
                        <el-option label="Masculino" value="Masculino"></el-option>
                        <el-option label="Femenino" value="Femenino"></el-option>
                      </el-select>
                    </el-form-item>
                    <el-form-item prop="phone"><el-input v-model.number="formInline.phone" placeholder="Teléfono de Contacto"></el-input></el-form-item>
                    <el-form-item prop="email"><el-input v-model="formInline.email" placeholder="Correo Electrónico"></el-input></el-form-item>
                    <el-form-item prop="number"><el-input v-model.number="formInline.number" placeholder="Número de tarjeta Elite"></el-input></el-form-item>
                    <div class="fecha">
                    <label>Fecha de Nacimiento:</label>
                    <el-form-item><date-dropdown default="1995-01-10" min="1921" max="2021" months-names="Enero,Febrero,Marzo,Abril,Mayo,Junio,Julio,Agosto,Septiembre,Octubre,Noviembre,Diciembre" v-model="formInline.selectedDate"/></el-form-item>
                  </div>
                  </div>
                </el-form>
              </div>
            </el-col>
          </el-row>
        </div>
      </div>
      <div class="btncheck">
        <el-form>
          <el-form-item prop="checked">
            <!-- En la linea #41 se encuentra la dirrección de las Políticas de Privacidad -->
            <el-checkbox v-model="formInline.checked"><label> Estoy de Acuerdo con los <a href="">Términos y Condiciones</a>,<br> así como la <a href="">Políticas de Privacidad </a>.</label></el-checkbox>
          </el-form-item>
          <el-form-item>
          <el-button  @click="submitForm('formInline')">Ir al siguiente paso. <i class="el-icon-arrow-right"></i></el-button>
          </el-form-item>
        </el-form>
      </div>
      <div class="information">
        <img src="../assets/alert.png"><label>Recuerde revisar su correo con el link de confirmación de datos y pasos a seguir.</label>
      </div>
    </div>
  </div>
</template>

<script>
import DateDropdown from 'vue-date-dropdown'

  export default {
    components: {
      DateDropdown
    },
    data(){
      return {
        formInline: {
          selectedDate: '',
          name: '',
          lastname:'',
          gender: '',
          phone: '',
          email: '',
          number: '',
          checked: true,
        },

        rules: {
          name:[
            {
              required: true,
              message: 'El campo es requerido',
              trigger: 'blur'
            },
          ],
          lastname:[
            {
              required: true,
              message: 'El campo es requerido',
              trigger: 'blur'
            }
          ],
          gender:[
            {
              required: true,
              message: 'El campo es requerido',
              trigger: 'change'
            },
          ],
          phone:[
            {
              required: true,
              message: 'El campo es requerido',
            },
            {
              type: 'number',
              message: 'Solo se admiten números'
            }
          ],
          email:[
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
          selectedDate:[
            {
              type: 'date',
              required: true,
              message: 'Seleccione su fecha de nacimiento',
              trigger: 'change'
            }
          ],
          number:[
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
          checked:[
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
            console.log('values:', this.name )
          } else {
            console.log('error submit!!');
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

  #gender{
    width: 205px;
  }

  .fecha{
    display: flex;
    justify-content: center;
    flex-direction: column;
    font-size: 15px;
    color: #4F4F6F;
    font-weight: 400;
    margin-top: 20px;
    label{
      color: rgb(180, 180, 180);
    }
    .el-form-item__content{
      display: flex;
      justify-content: center;
    }
  }
  .inputs{
    margin-top: 15px;
  }
  .btncheck{
    margin-top: 30px;
    display: flex;
    padding: 20px;
    justify-content: center;
    text-align: justify;
    .el-form-item {
    margin-bottom: 2px;
    }
    label{
      font-weight: 900;
    }
    .el-button{
    }
    .el-checkbox{
      margin-left: 8%;
      margin: 5px;
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
  height: auto;
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
  justify-content:space-around;
  width: 100%;
  .section-left{
    width: 45%;
    .el-form.demo-form-inline.el-form--inline{
      .el-form-item__content{
        width: 100%;
        margin-top: 10px;
      }
    }
   .el-select{
     width: 100%;
   }
  }
  .el-form-item{
    margin-bottom: -5px;
  }
}
.logo-container{
  width: 100%;
  img{
    height: 90px;
  }
}

/*Sección de inputs*/
.el-input{
  margin-top: 10px;
    .el-input__inner{
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
.information{
  font-family: 'Montserrat', sans-serif;
  font-weight: bold;
  color: #ffffff;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgb(50, 57, 77);
  img{
    padding: 20px;
    text-align: left;
    width: 64px;
  }
}
@media screen and (max-width: 964px){
.container{
  margin-top: 20px;
  flex-direction: column-reverse;
  h1{
    text-align: center;
    font-size: 35px;
    font-weight: bold;
  }
  #gender{
    width: 157px;
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
  #gender{
    width: 94.9%;
  }
  }
  .el-input{
    .el-input__inner{
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
@media  screen and (max-width: 380px) {
  #gender{
    width: 10%;
  }
  .el-input {
    .el-input__inner {
      font-size:9px;
      border-radius: 19px;
      width: 100%;
      height: 35px;
    }
  }
  label{
    font-size: 13px;
  }
}
</style>