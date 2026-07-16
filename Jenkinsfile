pipeline {

    agent any

    stages {

        stage('Install Dependencies') {

            steps {

                bat 'call npm install'

            }

        }

        stage('Install Playwright Browsers') {

            steps {

                bat 'call npx playwright install'

            }

        }

        stage('Run Playwright Tests') {

            steps {

                bat 'call npm run test'

            }

        }

    }

}