pipeline {
	agent any

	stages {
		stage('Build') {
			steps {
				echo 'Running Install'
				sh 'npm install'
				echo 'Running Build'
				sh 'npm run build'
			}
		}
	}
}
