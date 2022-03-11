// import PropTypes from 'prop-types';
// @mui
import {
    Box,
    Card,
    Stack,
    Divider,
    CardHeader,
    Typography,
    CardContent,
} from '@mui/material';
// utils
import { useSelector } from '../../redux/store';

// ----------------------------------------------------------------------

// CheckoutSummary.propTypes = {
// total: PropTypes.number,
// discount: PropTypes.number,
// subtotal: PropTypes.number,
// shipping: PropTypes.number,
// onEdit: PropTypes.func,
// enableEdit: PropTypes.bool,
// onApplyDiscount: PropTypes.func,
// enableDiscount: PropTypes.bool,
// };

export default function CheckoutSummary() {
    const { realmPasses, cartLength } = useSelector((state) => state.passes);

    return (
        <Card sx={{ mb: 3 }}>
            <CardHeader
                title="Order Summary"
            />
            <CardContent>
                <Stack spacing={2}>
                    {cartLength > 0 ?
                        <>
                            {realmPasses.map((item, id) => item.quantity > 0 &&
                                <Stack key={id} direction="row" justifyContent="space-between" >
                                    <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                                        {item.passName} × {item.quantity}
                                    </Typography>
                                    <Typography variant="subtitle2">{item.cost * item.quantity} ETH</Typography>
                                </Stack>
                            )}
                            < Divider />
                            <Stack direction="row" justifyContent="space-between">
                                <Typography variant="subtitle1">Total</Typography>
                                <Box sx={{ textAlign: 'right' }}>
                                    <Typography variant="subtitle1" sx={{ color: 'error.main' }}>
                                        {cartLength * 0.4} ETH
                                    </Typography>
                                </Box>
                            </Stack>
                        </> :
                        <Stack direction="row" justifyContent="center" alignItems="center">
                            <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                                No Order
                            </Typography>
                        </Stack>
                    }
                </Stack>
            </CardContent>
        </Card >
    );
}
