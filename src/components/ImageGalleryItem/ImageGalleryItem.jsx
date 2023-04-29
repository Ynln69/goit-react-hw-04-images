import PropTypes from 'prop-types';
import { GalleryItem, GalleryImg } from './ImageGalleryItem.styled';

const ImgGalleryItem = ({ id, webformatURL, tags, onClose }) => {
  return (
    <GalleryItem key={id} onClick={onClose}>
      <GalleryImg src={webformatURL} alt={tags} />
    </GalleryItem>
  );
};

ImgGalleryItem.propTypes = {
  id: PropTypes.number,
  webformatURL: PropTypes.string,
  tags: PropTypes.string.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default ImgGalleryItem;
