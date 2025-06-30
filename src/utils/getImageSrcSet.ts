export const getImageSrcSet = (url: string = '', baseSize: number = 121) => ({
  src: `${url}?w=${baseSize}&h=${baseSize}&fit=crop&auto=format`,
  srcSet: `${url}?w=${baseSize * 2}&h=${baseSize * 2}&fit=crop&auto=format 2x`,
});
