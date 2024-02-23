import { Box, Modal, Typography } from "@mui/material";
import React, { FC } from "react";
import { ISubServices } from "../sections/HomePage/HomeDigitalServices";

interface ModalProps {
  open: boolean;
  onClose: () => void;
  service: string;
  subServices: ISubServices[];
}

const ModalMain: FC<ModalProps> = ({ open, onClose, service, subServices }) => {
  console.log(subServices);
  return (
    <Modal
      open={open}
      onClose={() => onClose()}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <Typography color={"black"}>{service}</Typography>
        {/* {subServices.map((item) => (
          <Typography color={"black"}>{item.name}</Typography>
        ))} */}
       {subServices && subServices.length > 0 && subServices.map(category => (
        <div key={category.name}>
          <Typography color={"black"} variant="h6" gutterBottom>{category.name}</Typography>
          {category.services.map(service => (
            <div key={service.name}>
              <Typography variant="subtitle1" gutterBottom>{service.name}</Typography>
              <Typography variant="body1">{service.text}</Typography>
            </div>
          ))}
        </div>
      ))}
      </Box>
    </Modal>
  );
};

export default ModalMain;

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};
