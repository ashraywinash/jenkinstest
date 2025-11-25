pipeline {
    agent any

    stages {
        stage('Clone Repository') {
            steps {
                git branch: 'main', url: 'https://github.com/ashraywinash/jenkinstest.git'
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
