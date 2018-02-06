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
   }
   stage ('Rebuild'){        
        bat 'npm run rebuild'
   }

   
   stage ('Creando instalador'){
        bat 'npm run dist'
   }
   stage('subiendo'){
       bat 'copy offline.exe offline${env.BUILD_NUMBER}.exe'
       bat 'd:\\Programas\\PneumaticTube\\PneumaticTube.exe -f offline${env.BUILD_NUMBER}.exe -p offline_dev'
   }
}
