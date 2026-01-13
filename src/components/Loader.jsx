import { PulseLoader } from 'react-spinners';

export const Loader = () => {
  return (
    <PulseLoader
      color="#16a34a" // vibrant forest green
      size={14} // slightly bigger for visibility
      speedMultiplier={1.2} // smoother pulse
      margin={6} // spacing between dots
    />
  );
};
