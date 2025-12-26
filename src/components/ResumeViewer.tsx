import { Box } from '@mui/material';

const ResumeViewer = () => {
  return (
    <Box sx={{ 
      width: '100%',
      maxWidth: '1000px',
      mx: 'auto',
      p: { xs: 1, sm: 2, md: 3 },
      height: 'calc(100vh - 64px)',
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
  );
};

export default ResumeViewer;