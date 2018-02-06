#!groovy

node {
   def REGISTRY = "registry.gitlab.com/sfulasalle/febiz"
   def IMAGENAME = "1002.cfe-conector"
   def USERSERVER = 'mcalle'
   def IPSERVER = '35.196.243.220'

   ///build, junit,, sonaqube, imagen docker, push, despliegue
   stage ('Actualizar Repositorio') {
      echo 'Descargando código de SCM'
      bat 'del *.* /s /q'
      checkout scm
   }

   stage ('Instalando Librerías'){
        bat 'npm install'
        bat 'npm run rebuild'
   }

   
   stage ('Creando instalador'){
        bat 'npm run dist'
   }
}
