import { useEffect, useState } from 'react';
import { Dimensions, ScaledSize } from 'react-native';

type Orientation = 'portrait' | 'landscape';

const useOrientation = (): Orientation => {
  const [orientation, setOrientation] = useState<Orientation>(getInitialOrientation());

  useEffect(() => {
    const handleOrientationChange = ({ window }: { window: ScaledSize }) => {
      setOrientation(getOrientation(window));
    };

    Dimensions.addEventListener('change', handleOrientationChange);
  }, []);

  return orientation;
};

const getInitialOrientation = (): Orientation => {
  const { width, height } = Dimensions.get('window');
  return getOrientation({ width, height, scale: 1, fontScale: 1 });
};

const getOrientation = ({ width, height }: ScaledSize): Orientation => {
  return width > height ? 'landscape' : 'portrait';
};

export { useOrientation };
