# Expo Camera Preview Issue with Custom Aspect Ratio

This repository demonstrates a bug in the Expo Camera API where setting a custom aspect ratio (e.g., 16:9) leads to inconsistent or incorrect preview display on various devices.  The preview may be stretched, cropped, or not displayed at all.

## Bug Reproduction

1. Clone this repository.
2. Run `npm install` or `yarn install`.
3. Start the Expo project.
4. Observe the camera preview.  The preview may not display correctly, especially on certain devices.

## Potential Solutions

The provided solution explores alternative approaches to achieving custom aspect ratios, such as using the `Camera.Constants.AspectRatios` enum or manual scaling and cropping in post-processing.