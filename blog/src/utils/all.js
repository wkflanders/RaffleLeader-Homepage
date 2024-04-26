export const checkImageUrl = (image, url) => {
    try {
      new URL(image);
      return image;
    } catch (error) {
      return new URL(image, url).toString();
    }
  };