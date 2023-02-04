/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['src/components/**/*.{tsx,ts}'],
  theme: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/forms')({
      strategy: 'base',
    }),
  ],
};
