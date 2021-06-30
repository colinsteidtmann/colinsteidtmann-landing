
// Get's a link for img.src to an image stored in google drive using it's share ID
export const DriveImgLink = (id) => {
	return (
		"https://drive.google.com/uc?export=view&id="+id
	);
}

export const getHash = (input) => {
  var hash = 0, len = input.length;
  for (var i = 0; i < len; i++) {
    hash  = ((hash << 5) - hash) + input.charCodeAt(i);
    hash |= 0; // to 32bit integer
  }
  return hash;
}