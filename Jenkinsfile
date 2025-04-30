pipeline {
    agent any
    tools {
        maven 'Maven-3.8.6'  // Name from Global Tools
    }
    stages {
        stage('Checkout') {
            steps {
                checkout scmGit(branches: [[name: '*/main']], extensions: [], userRemoteConfigs: [[url: 'https://github.com/tba87/datetimezone.git']])
            }
        }
        stage('Build') {
            steps {
                sh './mvnw clean package'
            }
        }
        stage('Docker Build') {
            steps {
                sh 'docker build -t datetimezone-app .'
            }
        }
        stage('Deploy') {
            steps {
                sh '''
                docker stop datetimezone-app || true
                docker rm datetimezone-app || true
                docker run -d -p 8880:8080 --name datetimezone-app datetimezone-app
                '''
            }
        }
    }
}
