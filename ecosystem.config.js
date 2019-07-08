module.exports = {
  apps: [{
    name: 'Cart',
    script: './dist/bundle.js'
  }],
  deploy: {
    production: {
      user: 'ubuntu',
      host: 'ec2-52-14-18-193.us-east-2.compute.amazonaws.com',
      key: '~/.ssh/Zbay.pem',
      ref: 'origin/master',
      repo: 'https://github.com/zbay-fec/Cart.git',
      path: '/home/ubuntu/Zbay',
      'post-deploy': 'npm install && pm2 startOrRestart ecosystem.config.js'
    }
  }
}