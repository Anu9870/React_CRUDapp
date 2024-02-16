
import { Box, Typography, styled } from '@mui/material';
import Youtube from '../Assets/h2.jpg';
import InstaTele from '../Assets/h3.jpg';

const Header = styled(Box)`
    margin: 50px;
    & > div {
        margin-top: 50px;
    }
`;

const Image = styled('img')({
    width: '50%',
    height: '50%'
});

const ProgrammingParachute = () => {
    
    return (
        <Header>
            <Typography variant="h4">React Parachute</Typography>
            <Box style={{display: 'flex'}}>
                <Image src={Youtube}  />
                <Image src={InstaTele} />
            </Box>
        </Header>
    )
}

export default ProgrammingParachute;


