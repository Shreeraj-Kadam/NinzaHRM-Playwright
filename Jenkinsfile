pipeline {
    agent any

    options {
        // Prevent Jenkins from checking out the code automatically
        skipDefaultCheckout(true)
    }

    parameters {
        choice(
            name: 'TEST_ENV',
            choices: ['qa', 'uat', 'stage'],
            description: 'Select Environment'
        )

        choice(
            name: 'BROWSER',
            choices: ['chromium', 'firefox', 'webkit'],
            description: 'Select Browser'
        )
    }

    environment {
        TEST_ENV = "${params.TEST_ENV}"
        BROWSER = "${params.BROWSER}"
    }

    stages {
        stage('Clean Workspace') {
            steps {
                //cleanWs()
            }
        }

        stage('Checkout Source Code') {
            steps {
                checkout scm
            }
        }

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
                bat 'call npx playwright test --project=%BROWSER%'
            }
        }
    }

    post {
        always {
            bat 'call npm run allure:generate'

            archiveArtifacts(
                artifacts: 'playwright-report/**',
                fingerprint: true
            )

            archiveArtifacts(
                artifacts: 'allure-report/**',
                fingerprint: true
            )

            publishHTML([
            allowMissing: false,
            alwaysLinkToLastBuild: true,
            keepAll: true,
            reportDir: 'playwright-report',
            reportFiles: 'index.html',
            reportName: 'Playwright HTML Report'
        ])

            //cleanWs()
        }
    }
}
