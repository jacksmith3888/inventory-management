module.exports = {
  apps: [
    {
      name: 'inventory-management',
      script: 'npm',
      args: 'run start',
      env: {
        NODE_ENV: 'production',
        ENV_VAR1: 'environment-variable',
      },
    },
  ],
};
