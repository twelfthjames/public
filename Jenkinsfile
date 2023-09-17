pipeline {
	agent any

	tools {nodejs "nodejs"}

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
