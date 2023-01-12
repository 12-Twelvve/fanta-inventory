import { useContext, useState} from 'react';
import { Box, Button, Checkbox, Container, IconButton, InputAdornment, TextField, Typography } from '@mui/material';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import { Link } from 'react-router-dom';

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };
  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
  const handleSubmit =async(e)=>{
    e.preventDefault();
  }
  return (
    <>
      <Box
        component="main"
        sx={{
          alignItems: 'center',
          display: 'flex',
          flexGrow: 1,
          minHeight: '100%',
          my:6
        }}
      >
        <Container maxWidth="sm">
          <form onSubmit={handleSubmit}>
            <Typography
             sx={{
                color:'text.secondary',
                variant:'caption',
                mt:3
              }}
            >
              Email
            </Typography>
            <TextField
              color="info"
              fullWidth
              name="email"
              placeholder="Enter Your Email"
              type='text'
              variant="outlined"
            />
              <Typography
              sx={{
                color:'text.secondary',
                variant:'caption',
                mt:3
              }}
            >
              Password
            </Typography>
            <TextField
              color="info"
              fullWidth
            //   error={Boolean(formik.touched.password && formik.errors.password)}
            //   helperText={formik.touched.password && formik.errors.password}
              name="password"
              placeholder="Enter Your Password"
            //   onBlur={formik.handleBlur}
            //   onChange={formik.handleChange}
              type={showPassword ? 'text' : 'password'}
            //   value={formik.values.password}
              variant="outlined"
              InputProps={{
                endAdornment:(
                  <InputAdornment position="end">
                    <IconButton
                      onClick={handleClickShowPassword}
                      onMouseDown={handleMouseDownPassword}
                    >
                      {showPassword? <VisibilityOffIcon /> : <VisibilityIcon />}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />
            {/* <Box
              sx={{
                // alignItems: 'center',
                display: 'flex',
                justifyContent: 'space-between',
                ml: -1,
                mb:2,
              }}
            >
              <Box sx={{alignItems: 'center', display: 'flex'}}>
              <Checkbox
                name="rememberme"
              />
              <Typography
                color="text.secondary"
                variant="body2"
              >
                Remember me
              </Typography>
                </Box>
              
            </Box> */}
            <Box sx={{ py: 4 }}>
              <Button
                // color="orange"
                style={{backgroundColor:'orange', fontWeight:'900'}}
                fullWidth
                size="large"
                type="submit"
                variant="contained"
              >
                Login
              </Button>
            </Box>
           
            {/* <Typography
              color="text.secondary"
              variant="body2"
              sx={{ py: 2, }}
              align='center'
            >
              Don&apos;t have an admin account yet?
              {' '}
            </Typography>
            <Link to="/signup" style={{color: 'white', textDecoration:'none'}}>
            <Button
                // color="secondary"
                sx={{backgroundColor:'white', color:'orange'}}
                fullWidth
                size="small"
                variant="outlined"
                >
                Create Admin Account
              </Button>
            </Link> */}
          </form>
        </Container>
      </Box>
    </>
  );
};

export default Login;