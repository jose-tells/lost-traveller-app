import { useState } from 'react';

const handleDiplay = () => {
  const [open, setOpen] = useState(false);
  const handle = () => {
    setOpen(!open);
  };
  return {
    open,
    setOpen,
    handle,
  };
};
export default handleDiplay;
