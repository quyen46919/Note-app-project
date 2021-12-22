import React from 'react';
import PropTypes from 'prop-types';
import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from '@mui/material';

ConfirmPopup.propTypes = {
    open: PropTypes.bool.isRequired,
    handleClosePopup: PropTypes.func.isRequired,
    handleConfirm: PropTypes.func.isRequired,
    title: PropTypes.string,
    content: PropTypes.string
};

function ConfirmPopup(props) {
    const { open, handleClosePopup, handleConfirm, title, content } = props;
    return (
        <Dialog
            open={open}
            onClose={handleClosePopup}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
        >
            <DialogTitle>
                { title || 'Bạn có thực sự muốn xóa' }
            </DialogTitle>
            <DialogContent>
                <DialogContentText id="alert-dialog-description">
                    { content || 'Đối tượng này sẽ bị xóa đi và không thể khôi phục' }
                </DialogContentText>
            </DialogContent>
            <DialogActions>
                <Button onClick={handleConfirm} color="primary">
                    Đồng ý
                </Button>
                <Button onClick={handleClosePopup} color="primary" autoFocus>
                    Hủy
                </Button>
            </DialogActions>
        </Dialog>
    );
}

export default ConfirmPopup;