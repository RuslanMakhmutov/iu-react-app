import Container from "@mui/material/Container";
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import {useState} from "react";
import Grid from '@mui/material/Grid';
import Button from "@mui/material/Button";
import {InputLabel, MenuItem, Select} from "@mui/material";

function App() {
    const defaultGender = 'male'
    const defaultCountry = ''
    const [gender, setGender] = useState(defaultGender)
    const [country, setCountry] = useState(defaultCountry)

    const handleRadioChange = (e) => {
        setGender(e.target.value)
    }

    const handleSelectChange = (e) => {
        setCountry(e.target.value)
    }

    const handleButtonClick = (e) => {
        setGender(defaultGender)
        setCountry(defaultCountry)
    }

    return (
        <div className="App">
            <Container fixed>
                <h1>Просто страница</h1>

                <Grid container spacing={2}>
                    <Grid item xs={12} md={4}>
                        <FormControl>
                            <FormLabel id="demo-radio-buttons-group-label">Пол</FormLabel>
                            <RadioGroup
                                aria-labelledby="demo-radio-buttons-group-label"
                                value={gender}
                                name="radio-buttons-group"
                                onChange={handleRadioChange}
                            >
                                <FormControlLabel value="male" control={<Radio />} label="Мужской" />
                                <FormControlLabel value="female" control={<Radio />} label="Женский" />
                            </RadioGroup>
                        </FormControl>
                    </Grid>
                    <Grid item xs={12} md={4}>
                        <FormControl fullWidth>
                            <InputLabel id="demo-simple-select-label">Страна</InputLabel>
                            <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                value={country}
                                label="Страна"
                                onChange={handleSelectChange}
                            >
                                <MenuItem value="russia">Россия</MenuItem>
                                <MenuItem value="usa">США</MenuItem>
                                <MenuItem value="japan">Япония</MenuItem>
                                <MenuItem value="china">Китай</MenuItem>
                            </Select>
                        </FormControl>
                    </Grid>
                    <Grid item xs={12} md={4}>
                        <Button
                            variant="contained"
                            onClick={handleButtonClick}
                            sx={{
                                width: 100,
                                backgroundColor: 'success.main',
                                '&:hover': {
                                    backgroundColor: 'red',
                                    borderColor: 'red',
                                    boxShadow: 'none',
                                },
                            }}
                        >Сброс</Button>
                    </Grid>
                    <Grid item xs={12}>
                        <div>Пол: {gender}</div>
                        <div>Страна: {country || 'не выбрана'}</div>
                    </Grid>
                </Grid>

            </Container>
        </div>
    );
}

export default App;
