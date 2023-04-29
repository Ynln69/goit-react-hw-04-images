import PropTypes from 'prop-types';
import ImgGalleryItem from 'components/ImageGalleryItem/ImageGalleryItem';
import { GalleryList } from './ImageGallery.styled';

const ImgGallery = ({ images, onClose }) => {
  return (
    <GalleryList>
      {images &&
        images.map(image => (
          <ImgGalleryItem
            key={image.id}
            webformatURL={image.webformatURL}
            tags={image.tags}
            onClose={() => onClose(image.largeImageURL)}
          />
        ))}
    </GalleryList>
  );
};

ImgGallery.propTypes = {
  hits: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      webformatURL: PropTypes.string,
      largeImageURL: PropTypes.string,
      tags: PropTypes.string.isRequired,
    }).isRequired
  ),
  // openModal: PropTypes.func.isRequired,
};
export default ImgGallery;
