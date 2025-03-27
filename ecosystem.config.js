module.exports = {
  apps: [{
    name: "energy-usage-client",
    script: "npm run start",
    instances: 1,
    env: {
      NODE_ENV: "production",
    }
  }]
}