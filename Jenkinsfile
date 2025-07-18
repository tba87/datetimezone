pipeline {
    agent any
    tools {
        maven 'Maven-3.8.6' // Name from Global Tools
    }
    stages {
        stage('Checkout') {
            steps {
                echo 'Git Checkout'
                checkout scmGit(branches: [[name: '*/main']], extensions: [], userRemoteConfigs: [[url: 'https://github.com/tba87/datetimezone.git']])
            }
        }
        stage('Build') {
            steps {
                // CORRECTED: Use 'mvn' directly as Jenkins tools sets up the PATH
                echo 'Build app'
                sh 'mvn clean package'
            }
        }
        stage('Docker Build') {
            steps {
                echo 'Docker Image Build'
                sh 'docker build -t datetimezone-app .'
            }
        }
        stage('Deploy') {
            steps {
                echo 'stop and remove'
                sh '''
                docker stop datetimezone-app || true
                docker rm datetimezone-app || true
                // CORRECTED: Using a consistent container name if only one instance is desired
                docker run -d -p 8181:8080 --name datetimezone-app datetimezone-app
                '''
            }
        }
    }
    // Optional: Add post-build actions for notifications/cleanup
    /*
    post {
        always {
            cleanWs() // Clean up the workspace after every build
        }
        success {
            echo 'Pipeline finished successfully!'
            // mail to: 'your-email@example.com', subject: "Jenkins Build Succeeded: ${env.JOB_NAME}", body: "Build ${env.BUILD_NUMBER} of ${env.JOB_NAME} was successful."
        }
        failure {
            echo 'Pipeline failed!'
            // mail to: 'your-email@example.com', subject: "Jenkins Build FAILED: ${env.JOB_NAME}", body: "Build ${env.BUILD_NUMBER} of ${env.JOB_NAME} failed. Check console output: ${env.BUILD_URL}"
        }
    }
    */
}
