pipeline {
    agent any

    tools {
        nodejs "nodejs-22.1.0"
    }

    stages {
        stage('Check npm Installation') {   
            steps {
                sh '''
                    if ! command -v npm &> /dev/null
                    then
                        echo "npm not found. Installing..."
                        sudo apt-get update
                        sudo apt-get install npm
                    fi
                '''
            }
        }

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
                // Deployment with rsync
                sh 'cp -r ./build/ /var/www/danthurnye.com/html'
            }
        }
    }
}
