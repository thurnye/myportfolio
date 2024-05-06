pipeline {
    agent any

    tools {
        nodejs 'nodejs' // Use the Node.js installation configured in Jenkins
    }

    stages {
        stage('Install Dependencies') {
            steps {
                sh 'npm install'
            }
        }

        stage('Build') {
            steps {
                sh 'npm run build'
            }
        }

        stage('Deploy') {
            steps {
                sh 'cp -r ./build/ /var/www/danthurnye.com/html'
            }
        }
    }
}
