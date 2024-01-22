import React, { FC, useMemo } from 'react';
import styles from './CompContactForm.module.scss';
import * as yup from 'yup';
import {yupResolver} from '@hookform/resolvers/yup';
import {useForm, SubmitHandler} from 'react-hook-form';
import { Button, Box, FormControl, Typography, TextField } from '@mui/material';
import { AtSign, Mail, User } from 'react-feather';
import { styled } from '@material-ui/core/styles';

import CompFeatherIcon from '../CompFeatherIcon/CompFeatherIcon';

interface CompContactFormProps {}

export interface ICreateContactForm {
  name: string;
  email: string;
  message: string;
}

const CustomTextField = styled(TextField)({
  
  '& .MuiInput-underline:after': {
    borderBottomColor: 'inherit',
    color: 'inherit'
  },
  '& .MuiOutlinedInput-root': {
    '& fieldset': {
      borderColor: 'inherit',
      borderRadius: 0,
      border: 'none'
    },
    '&:hover fieldset': {
      borderColor: 'inherit',
    },
    '&:focus fieldset': {
      borderRadius: 0,
      border: 'none',
      borderColor: 'inherit',
    },
    '&:active fieldset': {
      borderRadius: 0,
      border: 'none',
      borderColor: 'inherit',
    },
    '&.Mui-focused fieldset': {
      borderColor: 'inherit',
      borderRadius: 0
    },
  },
});

const CompContactForm: FC<CompContactFormProps> = () => {
  

  const createFormValidationSchema = useMemo(
    () => yup.object({
        name: yup.string().required('name is required'),
        email: yup.string().email().required('email is required'),
        message: yup.string().required('message is required'),
    }).required(), []
  );

  const {
    register, 
    handleSubmit,
    formState: {errors},
    clearErrors,
    reset
  } = useForm<ICreateContactForm>({
    resolver: yupResolver(createFormValidationSchema)
  });


  const onSubmit: SubmitHandler<ICreateContactForm> = (data: ICreateContactForm) => {
    console.log(data)
    clearErrors()
    reset();
  };
  
  return (
    <div className={styles.CompContactForm} data-testid="CompContactForm">
      <form>
        <FormControl fullWidth sx={{  }} variant="outlined">
          {/* Name */}
          <Box className={styles.formFieldContainer} sx={{mb: 3}}>
            <Box sx={{ display: 'flex', alignItems: 'flex-end'}} className={styles.formContainer}>
              <Typography variant='h6' color="text.secondary" gutterBottom className={styles.contactInfoIcon}>
                <CompFeatherIcon size={18} icon={<User/>}/>
              </Typography>
              <CustomTextField 
              type="text"
              autoComplete='off'
              id="outlined-basic" 
              aria-invalid={errors.name ? true : false}
              {...register('name')}
                placeholder="Name"
                sx={{flexGrow: 1, height: '52px', borderRadius: 0}}
                />
            </Box>
            {errors.name?.type === 'required' && <p role="alert">*{errors.name?.message}</p>}
          </Box>

          {/* Email */}
          <Box className={styles.formFieldContainer} sx={{mb: 3}}>
            <Box sx={{ display: 'flex', alignItems: 'flex-end'}} className={styles.formContainer}>
              <Typography variant='h6' color="text.secondary" gutterBottom className={styles.contactInfoIcon}>
                <CompFeatherIcon size={18} icon={<AtSign/>}/>
              </Typography>
              <CustomTextField 
              type="email"
              aria-autocomplete='none'
              id="outlined-basic" 
              aria-invalid={errors.email ? true : false}
              {...register('email')}
                placeholder="Email"
                sx={{flexGrow: 1, height: '52px', borderRadius: 0}}
              />
            </Box>
            {errors.email?.type === 'required' && <p role="alert">*{errors.email?.message}</p>}
          </Box>
          
          {/* Message */}
          <Box className={styles.formFieldContainer}>
            <Box sx={{}} className={styles.formContainer}>
              <Typography variant='h6' color="text.secondary" gutterBottom className={`${styles.contactInfoIcon} ${styles.messageIcon}`}>
                <span>
                  <CompFeatherIcon size={18} icon={<Mail/>}/>
                </span>
              </Typography>
              <CustomTextField 
                type="text"
                autoComplete='off'
                id="outlined-basic" 
                aria-invalid={errors.message ? true : false}
                placeholder="Message"
                sx={{flexGrow: 1, color: 'white'}}
                multiline
                rows={10}
                {...register('message')}
              />
              
            </Box>
            {errors.message?.type === 'required' && <p role="alert">*{errors.message?.message}</p>}
          </Box>

          <Box sx={{}} className={styles.sendMessage}>
            <Button
            type="submit"
            onClick={handleSubmit(onSubmit)}
            >Send Message</Button>
           </Box>
        </FormControl>
      </form>
    </div>
  )
};

export default CompContactForm;
