/* eslint-disable */

const Validate = (value: string) => {
  // Check if value is empty
  const empty = () => {
    if (value === undefined || value === "") {
      return false;
    } else {
      return true;
    }
  };

  const isImage = () => {
    return /\.(jpg|jpeg|png|webp|avif|gif|svg)$/.test(value);
  };

  return { empty, isImage };
};

export default Validate;
