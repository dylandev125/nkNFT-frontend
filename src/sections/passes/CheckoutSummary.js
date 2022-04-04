// import PropTypes from 'prop-types';
// @mui
import {
    Box,
    Card,
    Stack,
    Divider,
    CardHeader,
    Typography,
    TextField,
    Autocomplete,
    CardContent,
} from '@mui/material';
// utils

// ----------------------------------------------------------------------

export default function CheckoutSummary() {

    return (
        <Card sx={{ mb: 3 }}>
            <CardHeader
                title="Order Summary"
            />
            <CardContent>
                <Autocomplete
                    disableClearable
                    id="pass-mint"
                    options={["1", "2"]}
                    sx={{
                        width: 80,
                        "&.MuiAutocomplete-endAdornment": {
                            color: "white"
                        },
                        "&.Mui-focused": {
                            color: "white"
                        },
                        popper: {
                            minWidth: 80,
                            maxWidth: 260,
                        },
                    }}
                    renderInput={(params) => <TextField {...params} label="" size="small" />}
                />
            </CardContent>
        </Card >
    );
}
