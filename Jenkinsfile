deployOSFAppV3(
    client: 'domino', // Client Name
    spaceKey: 'OC3KB', // SpaceKey for Confluence Reports
    envFile: 'domino-osf', // Environment file to load from secret config
    autoDeploys: 'dev=development,test1=test1,test2=test2,prod=prod', // Branches to automatically deploy to an Environment, e.g. main=development,test=test,prod=production
    cxCommerceRegistry: 'https://oracle-cx-commerce-repository.occa.ocs.oraclecloud.com', // The CX Commerce npm registry for this environment
    defaultApp: 'domino-printing-uk', // Default app to deploy, if not otherwise specified
    slackChannel: 'oc3-domino-notifications', // Slack channel to broadcast build events
    releaseManagers: 'daniel.coppock@oracle.com,dmytro.prushchak@oracle.com,james.masters@oracle.com', // CSV of email addresses to be notified when a production build happens
    nodeJs: 'node18-npm8', // Name of nodeJs installation to use
    numBuilds: 7, // Number of builds to keep per branch (releases from master or release-* refs will always be kept)
    auditType: 'yarn-npm-audit-resolver',
    runTests: false, // Whether to run unit tests during the build
    k8sAgent: 'k8s-jenkins-agent-ol8', // Build agent to use for k8s cloud (remove if using Carson Jenkins),
    publishMode: 'full', // Publishing mode - full: All changes, partial: Only changes from the OSF deploy, none: you will have to run publish after deployment finishes
    reset: true, // Reset design studio assets when deploying the app
    forceOSFDelete: true, // Force deletion of the OSF app at the beginning of the pipeline to work around the 2 minute proxy timeout when reset deployments happen.
    downloadAssets: false, // Whether to download the live assets during the build (assets included in assets folder will be ignored during deployment)
    noProxy: '.non-existent.com', // Custom no_proxy setting used during occ deploy
    verbose: false, // Verbose deployment output
    sonarInstance: 'oci-sonar', // Sonar service to use for this project
    buildStyles: true, // If true, will build the css styles using the build-css command
    parallelSteps: true
)
