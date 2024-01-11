import React, { useState } from "react";
import VisibilitySensor from "react-visibility-sensor";

const VisibilitySensorWrapper = ({ children, onVisible }) => {
  const [isVisible, setIsVisible] = useState(false);

  const onChange = (visible) => {
    if (visible && !isVisible) {
      setIsVisible(true);
      onVisible();
    }
  };

  return <VisibilitySensor onChange={onChange}>{children}</VisibilitySensor>;
};

export default VisibilitySensorWrapper;
