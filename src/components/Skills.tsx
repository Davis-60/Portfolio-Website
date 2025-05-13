import React from 'react';
import { Box, Container, Typography, Paper, Divider, LinearProgress } from '@mui/material';

interface Skill {
  name: string;
  proficiency: number; // 0-100
  category: 'frontend' | 'backend' | 'languages' | 'tools';
}

const skills: Skill[] = [
  // Frontend
  { name: 'React', proficiency: 90, category: 'frontend' },
  { name: 'HTML/CSS', proficiency: 85, category: 'frontend' },
  { name: 'JavaScript', proficiency: 90, category: 'frontend' },
  { name: 'TypeScript', proficiency: 80, category: 'frontend' },
  { name: 'Material UI', proficiency: 85, category: 'frontend' },
  
  // Backend
  { name: 'Node.js', proficiency: 75, category: 'backend' },
  { name: 'Express', proficiency: 80, category: 'backend' },
  { name: 'MongoDB', proficiency: 70, category: 'backend' },
  { name: 'SQL', proficiency: 75, category: 'backend' },
  { name: 'Firebase', proficiency: 65, category: 'backend' },
  
  // Languages
  { name: 'Python', proficiency: 85, category: 'languages' },
  { name: 'Java', proficiency: 80, category: 'languages' },
  { name: 'C/C++', proficiency: 75, category: 'languages' },
  
  // Tools & Others
  { name: 'Git/GitHub', proficiency: 85, category: 'tools' },
  { name: 'VS Code', proficiency: 90, category: 'tools' },
  { name: 'Docker', proficiency: 65, category: 'tools' },
  { name: 'AWS', proficiency: 60, category: 'tools' },
];

// Group skills by category
const frontendSkills = skills.filter(skill => skill.category === 'frontend');
const backendSkills = skills.filter(skill => skill.category === 'backend');
const languageSkills = skills.filter(skill => skill.category === 'languages');
const toolSkills = skills.filter(skill => skill.category === 'tools');

const SkillBar: React.FC<{ skill: Skill }> = ({ skill }) => {
  return (
    <Box sx={{ mb: 2 }}>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 0.5 }}>
        <Typography variant="body2">{skill.name}</Typography>
        <Typography variant="body2" color="text.secondary">{skill.proficiency}%</Typography>
      </Box>
      <LinearProgress 
        variant="determinate" 
        value={skill.proficiency} 
        sx={{ 
          height: 8, 
          borderRadius: 2,
          backgroundColor: 'grey.200',
          '& .MuiLinearProgress-bar': {
            borderRadius: 2,
          }
        }} 
      />
    </Box>
  );
};

const SkillCategory: React.FC<{ title: string; skills: Skill[] }> = ({ title, skills }) => {
  return (
    <Box sx={{ width: { xs: '100%', md: 'calc(50% - 16px)' } }}>
      <Paper elevation={2} sx={{ p: 3, height: '100%' }}>
        <Typography variant="h6" gutterBottom>{title}</Typography>
        <Box sx={{ mt: 2 }}>
          {skills.map((skill) => (
            <SkillBar key={skill.name} skill={skill} />
          ))}
        </Box>
      </Paper>
    </Box>
  );
};

const Skills: React.FC = () => {
  return (
    <Box
      sx={{
        bgcolor: 'background.paper',
        py: 8
      }}
    >
      <Container maxWidth="lg">
        <Typography
          component="h2"
          variant="h4"
          align="center"
          color="text.primary"
          gutterBottom
          fontWeight="bold"
        >
          My Skills
        </Typography>
        <Divider sx={{ mb: 6, width: '80px', mx: 'auto', borderBottomWidth: 3 }} />
        
        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 4 }}>
          <SkillCategory title="Frontend Development" skills={frontendSkills} />
          <SkillCategory title="Backend Development" skills={backendSkills} />
          <SkillCategory title="Programming Languages" skills={languageSkills} />
          <SkillCategory title="Tools & Technologies" skills={toolSkills} />
        </Box>
      </Container>
    </Box>
  );
};

export default Skills; 