pipline {
    agent any
    stages{
        stage('build') {
            sh 'docker build -t dashboard .'
        }

        stage('pre deploy') {
            sh 'docker stop delivery-dashboard || true && docker container rm delivery-dashboard || true '
        }

        stage('deploy') {
            sh 'docker run -d -p 80:80 --network delivery --name delivery-dashboard dashboard'
        }
    }
}