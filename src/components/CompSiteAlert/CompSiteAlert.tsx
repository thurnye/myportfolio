import * as React from 'react';
import Box from '@mui/material/Box';
import Alert from '@mui/material/Alert';
import { useTranslation } from "react-i18next";


export default function CompSiteAlert() {
    const {t} = useTranslation();

  return (
    <Box sx={{ width: '100%', m: 'auto' }}>
      <Alert severity="info">{t('site_alert')}</Alert>
    </Box>
  );
}
