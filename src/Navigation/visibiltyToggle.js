import { useState } from 'react';

const useVisibilityToggle = (initialComponents) => {
  const [visibleComponents, setVisibleComponents] = useState(initialComponents);

  const toggleComponent = (component) => {
    if (visibleComponents.includes(component)) {
      setVisibleComponents(visibleComponents.filter(c => c !== component));
    } else {
      setVisibleComponents([...visibleComponents, component]);
    }
  };

  return { visibleComponents, toggleComponent };
};

export default useVisibilityToggle;