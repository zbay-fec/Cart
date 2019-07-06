module.exports = {
  apps: [{
    name: 'Cart',
    script: './dist/bundle.js'
  }],
  deploy: {
    production: {
      user: 'ubuntu',
      host: 'ec2-3-13-255-0.us-east-2.compute.amazonaws.com',
      key: '~/.ssh/Zbay.pem',
      ref: 'origin/Deployment',
      repo: 'git@github.com:zbay-fec/Cart.git',
      path: '/home/ubuntu/Zbay',
      'post-deploy': 'npm install && pm2 startOrRestart ecosystem.config.js'
    }
  }
}