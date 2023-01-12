import { useContext, useState} from 'react';
import { Box, Button, Checkbox, Container, IconButton, InputAdornment, TextField, Typography } from '@mui/material';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import { Link } from 'react-router-dom';

const Signup = () =>{
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
        }}
      >
        <Container maxWidth="sm">
          <form onSubmit={handleSubmit}>
            {/* email */}
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
            {/* password */}
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
              name="password"
              placeholder="Enter Your Password"
              type={showPassword ? 'text' : 'password'}
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
            {/* confirm password */}
            <Typography
              sx={{
                color:'text.secondary',
                variant:'caption',
                mt:3
              }}
            >
              Confirm Password
            </Typography>
            <TextField
              color="info"
              fullWidth
              name="password2"
              placeholder="Enter Your Password again"
              type={showPassword ? 'text' : 'password'}
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
            {/* account created by */}
            <Typography
             sx={{
                color:'text.secondary',
                variant:'caption',
                mt:3
              }}
            >
              Account Created By
            </Typography>
            <TextField
              color="info"
              fullWidth
              name="creator"
              placeholder="Account Creator"
              type='text'
              variant="outlined"
            />
            <Box
              sx={{
                // alignItems: 'center',
                display: 'flex',
                justifyContent: 'space-between',
                ml: -1,
                mb:2,
              }}
            >
              
            </Box>
            <Box sx={{ py: 1 }}>
              <Button
                // color="orange"
                style={{backgroundColor:'orange', fontWeight:'900'}}
                fullWidth
                size="large"
                type="submit"
                variant="contained"
              >
                Signup
              </Button>
            </Box>
            <Typography
              color="text.secondary"
              variant="body2"
              sx={{ py: 2, }}
              align='center'
            >
              Already have an admin account ?
              {' '}
            </Typography>
            <Link to="/login" style={{color: 'white', textDecoration:'none'}}>
            <Button
                // color="secondary"
                sx={{backgroundColor:'white', color:'orange'}}
                fullWidth
                size="small"
                variant="outlined"
                >
                Login
              </Button>
            </Link>
          </form>
        </Container>
      </Box>
    </>
  )
};

export default Signup;