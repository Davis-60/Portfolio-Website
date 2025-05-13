import { Box } from '@mui/material';

const ResumeViewer = () => {
  return (
    <Box sx={{ 
      width: '100%',
      display: 'flex',
      justifyContent: 'center',
      p: { xs: 1, sm: 2, md: 3 },
      height: 'calc(100vh)'
    }}>
      <Box sx={{ 
        width: '100%',
        maxWidth: '1000px',
        height: '100%',
        minHeight: '500px'
      }}>
        <iframe 
          src='/Resume(2025).pdf' 
          width='100%'
          height='100%'
          style={{ border: 'none' }}
          title="Resume"
        />
      </Box>
    </Box>
  );
};

export default ResumeViewer;