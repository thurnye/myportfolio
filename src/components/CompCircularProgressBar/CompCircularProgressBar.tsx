import React, { FC } from 'react';
import styles from './CompCircularProgressBar.module.scss';
import CircularProgress, {
  CircularProgressProps,
} from '@mui/material/CircularProgress';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

function CircularProgressWithLabel(
  props: CircularProgressProps & { value: number },
) {

  
  return (
    <Box sx={{ position: 'relative', display: 'inline-flex' }} >
      <CircularProgress variant="determinate" {...props} className={styles.skillSetContainer}/>
      <Box
        sx={{
          top: 0,
          left: 0,
          bottom: 0,
          right: 0,
          position: 'absolute',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
        className={styles.skillSetContainerText}
      >
        <Typography
          variant="caption"
          component="div"
          fontSize={15}
        >{`${Math.round(props.value)}%`}</Typography>
      </Box>
    </Box>
  );
}

interface CompCircularProgressBarProps {
  progress: number
  variant: 'number' | 'linear' | 'circular'
}

const CompCircularProgressBar: FC<CompCircularProgressBarProps> = (props: CompCircularProgressBarProps) => {
  const {progress, variant} = props;
   const [count, setCount] = React.useState(0);

  React.useEffect(() => {
    const interval = setInterval(() => {
      setCount(prevCount => {
        if (prevCount >= progress) {
          clearInterval(interval);
          return prevCount;
        }
        return prevCount + 1;
      });
    }, 20);

    return () => {
      clearInterval(interval);
    };
  }, [progress]);


  return(
  <div className={styles.CompCircularProgressBar} data-testid="CompCircularProgressBar">
    
    {variant === 'circular' && <CircularProgressWithLabel value={count} />}
    {variant === 'number' && <span>{count}</span>}
  </div>
)
};

export default CompCircularProgressBar;
