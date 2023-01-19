export const components = {
  MuiCard: {
    defaultProps: {
      style: {
        background: '#FFFFFF',
        border: '1px solid #EAEAEA',
        boxShadow: '0px 8px 24px rgba(0, 0, 0, 0.05)',
        borderRadius: '5px',
      },
    },
  },
  MuiCardMedia: {
    defaultProps: {
      variant: 'card',
    },
    variants: [
      {
        props: { variant: 'card' },
        style: {
          height: '217px',
        },
      },
      {
        props: { variant: 'details' },
        style: {
          height: '245px',
        },
      },
    ],
  },
  MuiCardContent: {
    defaultProps: {
      style: {
        padding: '25px',
        display: 'flex',
        flexDirection: 'column',
        gap: '20px',
      },
    },
  },
  MuiLink: {
    defaultProps: {
      style: {
        display: 'flex',
        gap: '6px',
        textDecoration: 'none',
        cursor: 'pointer',
      },
    },
  },
  MuiPaper: {
    defaultProps: {
      style: {
        background: '#FFFFFF',
        border: '1px solid #EAEAEA',
        boxShadow: '0px 8px 24px rgba(0, 0, 0, 0.05)',
        borderRadius: '5px',
        fontFamily: 'Montserrat',
        padding: '13px 20px',
        display: 'flex',
        alignItems: 'center',
        gap: '20px',
      },
    },
  },
};
