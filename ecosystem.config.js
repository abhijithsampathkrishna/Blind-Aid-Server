module.exports = {
  apps: [{
    name: 'Blind-Aid-Server',
    script: './index.js'
  }],
  deploy: {
    production: {
      user: 'ubuntu',
      host: 'ec2-18-188-137-2.us-east-2.compute.amazonaws.com',
      key: '~/Downloads/server_1.pem',
      ref: 'origin/master',
      repo: 'git@github.com:abhijithsampathkrishna/Blind-Aid-Server.git',
      path: '/home/ubuntu/server',
      'post-deploy': 'npm install && pm2 startOrRestart ecosystem.config.js'
    }
  }
}