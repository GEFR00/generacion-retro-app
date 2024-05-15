export const getGoogleIdFromImage = (url) => {
  const startIndex = url.indexOf("/file/d/") + "/file/d/".length;
  const endIndex = url.indexOf("/view");

  const fileId = url.substring(startIndex, endIndex);
  
  return fileId;

}