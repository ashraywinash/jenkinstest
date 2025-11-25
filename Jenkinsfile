pipeline {
    agent any

    environment {
        PATH+NODE="/var/jenkins_home/node-v18.20.4-linux-arm64/bin"
    }

    stages {
        stage('Clone Repository') {
            steps {
                git branch: 'main', url: 'https://github.com/ashraywinash/jenkinstest.git'
            }
        }

        stage('Install Dependencies') {
            steps {
                sh 'npm install'
            }
        }

        stage('Run Tests') {
            steps {
                sh 'npm test'
            }
        }

        stage('Build Application') {
            steps {
                echo "Build step placeholder – nothing to build for Node.js test app"
            }
        }
    }

    post {
        success {
            echo '🎉 Build SUCCESS!'
        }
        failure {
            echo '❌ Build FAILED!'
        }
    }
}
