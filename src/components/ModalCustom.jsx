import { Box, Button, Modal, Stack } from "@mui/material";
import { useState } from "react";

const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    border: "1px solid #000",
    boxShadow: 24,
    p: 3,
    borderRadius: 2
};
const ModalCustom = ({ open, title, content, onOk, onCancel }) => {
    const handleOk = () => {
        onOk && onOk()
    }
    return (
        <Modal open={open} title={title}>
            <Box sx={style}>
                <Stack direction={'column'} gap={4}>
                    {content}
                    <Stack direction={'row'} justifyContent={'space-around'}>
                        <Button sx={{
                            padding: '5px 40px', border: '2px solid #000', color: '#000', ":hover": {
                                border: '2px solid #9453ff',
                                color: '#9453ff'
                            }
                        }} onClick={handleOk}>Yes</Button>
                        <Button sx={{
                            padding: '5px 40px', border: '2px solid #000', color: '#000', ":hover": {
                                border: '2px solid #9453ff',
                                color: '#9453ff'
                            }
                        }} onClick={onCancel}>No</Button>
                    </Stack>
                </Stack>
            </Box>
        </Modal>
    )
}

export default ModalCustom;