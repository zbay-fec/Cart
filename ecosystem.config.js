module.exports = {
  apps: [{
    name: 'Cart',
    script: './server/server.js'
  }],
  deploy: {
    production: {
      user: 'ubuntu',
      host: 'ec2-3-16-22-38.us-east-2.compute.amazonaws.com',
      key: '~/.ssh/Zbay.pem',
      ref: 'origin/Frontend',
      repo: 'https://github.com/zbay-fec/Cart.git',
      path: '/home/ubuntu/Zbay',
      'post-deploy': 'npm install && npx webpack --mode production && pm2 startOrRestart ecosystem.config.js'
    }
  }
}
