pipeline {
    agent any
    stages {
        stage('Checkout') {
            steps {
                checkout scmGit(branches: [[name: '*/main']], extensions: [], userRemoteConfigs: [[url: 'https://github.com/tba87/datetimezone.git']])
            }
        }
        stage('Build') {
            steps {
                sh './mvn clean package'
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
