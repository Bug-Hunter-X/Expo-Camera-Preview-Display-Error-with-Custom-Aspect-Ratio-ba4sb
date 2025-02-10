Several solutions exist, each with tradeoffs:

**Solution 1: Using Standard Aspect Ratios**

Use one of the pre-defined aspect ratios from `Camera.Constants.AspectRatios`.  This ensures compatibility, but limits aspect ratio flexibility.

```javascript
import { Camera, CameraType } from 'expo-camera';
import { Camera.Constants } from 'expo-camera';

<Camera style={cameraStyle} type={CameraType.back} ratio={Camera.Constants.AspectRatios.ratio_16_9} />
```

**Solution 2: Manual Cropping and Scaling (Post-Processing)**

Capture the image and then manually scale and crop the resulting image to the desired aspect ratio in post-processing.

```javascript
// ... image capturing logic ...

const aspectRatio = {width: 16, height: 9};
const cropImage = (image) => {
  // Implement manual cropping and scaling logic here using a library like 'react-native-image-manipulator'
};

// ... use cropped image ...
```

**Solution 3 (If possible):  Adjusting Camera Parameters Directly**

Directly adjusting camera parameters may provide more control, although device compatibility and Expo version stability are not guaranteed. This solution requires more in-depth knowledge of camera settings and might involve platform-specific code (Android/iOS). 