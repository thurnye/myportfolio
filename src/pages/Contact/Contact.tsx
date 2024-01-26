import React, { FC } from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import styles from './Contact.module.scss';
import {Link, Card, CardContent, Typography } from '@mui/material';
import CompContactForm from '../../components/CompContactForm/CompContactForm';
import { useDataCustomHook } from '../../Data/data';


interface ContactProps {}

const Contact: FC<ContactProps> = () => {
  const {contactPage: {header, info, formHeader}} = useDataCustomHook();

  return(
    <Box className={styles.Contact} data-testid="Contact" sx={{
      height: {xs: 'initial', lg: '92.8vh'},
      overflow: {xs: '',lg: 'auto'}
    }}>
      <Typography variant='h6' color="text.secondary" gutterBottom className={styles.contactInfo}>
        {header}
      </Typography>
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 12, sm: 12, md: 12 }}>
          {info.map((el, index) => (
            <Grid item xs={12} sm={6} md={6}  key={index}>
              <Box sx={{ minWidth: 230 }}>
                <Card variant="outlined" sx={{border: 'none'}}>
                  <CardContent className={styles.cardItemContainer}>
                    {el.data.map((obj: {[key: string] : any}) => <div key={obj.name} className={styles.contentContents}>

                    <Typography color="text.secondary" className={styles.cardNameTitle}>
                      {obj.name}
                    </Typography>
                    <Typography color="text.secondary" className={styles.cardBody}>
                      {obj.isLink ? <Link href={obj.value} target="_blank" color="primary">{obj.name}</Link> : obj.value}
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
    </Box>
  )
};

export default Contact;
