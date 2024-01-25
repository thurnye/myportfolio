import React, { FC } from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import styles from './Contact.module.scss';
import { Card, CardContent, Typography } from '@mui/material';
import CompContactForm from '../../components/CompContactForm/CompContactForm';
import { useDataCustomHook } from '../../Data/data';


interface ContactProps {}

const Contact: FC<ContactProps> = () => {
  const {contactPage: {header, info, formHeader}} = useDataCustomHook();

  return(
    <div className={styles.Contact} data-testid="Contact">
      <Typography variant='h6' color="text.secondary" gutterBottom className={styles.contactInfo}>
        {header}
      </Typography>
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 12, sm: 12, md: 12 }}>
          {info.map((el, index) => (
            <Grid item xs={12} sm={6} md={4}  key={index}>
              <Box sx={{ minWidth: 230 }}>
                <Card variant="outlined" sx={{border: 'none'}}>
                  <CardContent className={styles.cardItemContainer}>
                    {el.data.map((obj: {[key: string] : string}) => <div key={obj.name} className={styles.contentContents}>

                    <Typography color="text.secondary" className={styles.cardNameTitle}>
                      {obj.name}
                    </Typography>
                    <Typography color="text.secondary" className={styles.cardBody}>
                      {obj.value}
                    </Typography>
                    </div>)}
                  </CardContent>
                </Card>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Box>

      <Box className={styles.getInTouch} sx={{mb: 4}}>
        <Typography variant='h6' color="text.secondary" gutterBottom className={styles.contactInfo}>
          {formHeader}
        </Typography>
        <CompContactForm/>
      </Box>
    </div>
  )
};

export default Contact;
