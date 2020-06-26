<template>
    <div class="footer">
        <div class="semi-rectangulo-footer">
            <div class="texto">
                <el-row type="flex" class="row-bg" justify="space-around">
                    <el-col :span="6"><div class="grid-content"><a style="color: #ffffff" href="certuslab.com.mx">certuslab.com.mx</a></div></el-col>
                    <el-col :span="6"><div class="grid-content">(664) 391-1144</div></el-col>
                    <el-col :span="6"><div class="grid-content"><a style="color: #ffffff" href="https://www.facebook.com/CertusLab"><i class="fa fa-facebook-official"> Certus Laboratorio</i></a></div></el-col>
                </el-row>
            </div>
            <div class="texto">
                <el-row type="flex" class="row-bg" justify="space-around">
                    <el-col :span="6"><div class="grid-content-2"></div></el-col>
                    <el-col :span="6"><div class="grid-content-2"></div></el-col>
                    <el-col :span="6"><div class="grid-content-2"><a style="color: #ffffff;" href="https://www.instagram.com/certuslab/?hl=es-la"><i class="fa fa-instagram"> certuslab</i></a></div></el-col>
                </el-row>
            </div>
        </div>
    </div>
</template>

<style lang="css" scoped>
/* @import url('https://fonts.googleapis.com/css2?family=Lato&family=Roboto+Condensed&display=swap');*/
@import url('https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css'); 
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@500&display=swap');


    .footer{
        font-family: 'Montserrat', sans-serif;
        width: 100%;
        color: #333333;
    }

    .semi-rectangulo-footer {
        height: 150px; 
        width: 100%; 
        border-radius: 100% / 40% 40% 0 0  ;
        background: linear-gradient(180deg, #1B7EB6 0%, #30B8E7 100%);
    }  

   .grid-content{       
        font-family: 'Roboto', sans-serif;  
        color: #ffffff;
        margin-top: 16%;
   }
</style>