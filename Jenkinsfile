pipeline {
    agent any

    tools {
        nodejs 'Node18'
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
