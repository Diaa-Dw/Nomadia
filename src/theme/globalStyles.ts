const globalStyles = {
  '*,*::after,*::before': {
    margin: '0',
    padding: '0',
    boxSizing: 'border-box',
  },
  body: () => ({
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    overflowX: 'hidden',
  }),
};

export default globalStyles;
