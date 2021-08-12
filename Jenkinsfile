pipeline {
    agent any
    stages{
        stage('build') {
            steps {
                sh 'docker build -t dashboard .'
            }
            
        }

        stage('pre deploy') {
            steps{
                sh 'docker stop delivery-dashboard || true && docker container rm delivery-dashboard || true '
            }
            
        }

        stage('deploy') {
            steps {
                sh 'docker run -d -p 8081:80 --network delivery --name delivery-dashboard dashboard'
            }
            
        }
    }
}