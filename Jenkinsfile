def repoName = 'git@github.com:nickaaronhebert/lavie.git'
def repoCreds = 'lavie-github-jenkins'
def projectName = 'lavie'

node {
    catchError {
        deleteDir()
        stage('checkout') {
            checkout([
                $class: "GitSCM",
                branches: [[name: env.BRANCH_NAME]],
                doGenerateSubmoduleConfigurations: false,
                userRemoteConfigs: [[
                    credentialsId: repoCreds,
                    url: repoName,
                    poll: true
                ]]
            ])
        }
        def currentCommit = sh(returnStdout: true, script: 'git rev-parse --short HEAD | tr -d [:space:]')
        currentBuild.displayName = currentBuild.displayName + " — ${currentCommit}"
        def currentBranch = env.BRANCH_NAME.replaceAll("/", "-")
        stage('build') {
                sh 'rm -f .env'
                sh 'cp .env.dev .env'
                sh 'npm'
                sh 'npm build'
        }
        stage('pack') {
            withEnv([
                "PROJECT_NAME=${projectName}",
                "CURRENT_BRANCH=${currentBranch}",
                "CURRENT_COMMIT=${currentCommit}"
            ])
            {
                sh 'mkdir build'
                sh 'tar --exclude=./build -czf ./build/${PROJECT_NAME}-${CURRENT_BRANCH}-${CURRENT_COMMIT}.tgz .'
            }
        }
        archiveArtifacts artifacts: 'build/*.tgz'
    }
    stage('auto-deploy') {
        if (env.BRANCH_NAME == 'development' && currentBuild.currentResult == 'SUCCESS') {
            build job: 'lavie-deploy', parameters: [[
                $class: 'StringParameterValue', name: 'BRANCH_NAME', value: 'development'
            ],[
                $class: 'StringParameterValue', name: 'BUILD_NUMBER', value: currentBuild.id
            ]]
        }
    } 
}

