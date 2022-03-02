module.exports = {
  addons: ['@storybook/addon-links', '@storybook/addon-essentials'],
  features: { emotionAlias: false }, // https://github.com/mui/material-ui/issues/24282#issuecomment-967747802
  framework: '@storybook/react',
  stories: ['../src/**/*.stories.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
};
