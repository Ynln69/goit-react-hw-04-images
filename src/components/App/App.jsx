import axios from 'axios';
import { useState, useEffect } from 'react';
import { AppBox, TextMessege } from './App.styled';
import Serchbar from 'components/Searchbar/Searchbar';
import ImgGallery from 'components/ImageGallery/ImageGallery';
import { BtnMore } from 'components/Button/Button.styled';
import Loader from 'components/Loader/Loader';
import ErrorMessege from 'components/Error/Error';
import Modal from 'components/Modal/Modal';

const API_KEY = '34284938-735a9435974ef107b394c89e4';
axios.defaults.baseURL = 'https://pixabay.com/api/';
axios.defaults.params = {
  image_type: 'photo',
  orientation: 'horizontal',
  per_page: 12,
};

const App = () => {
  const [images, setImages] = useState([]);
  const [value, setValue] = useState('');
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [isLoadingBtn, setIsLoadingBtn] = useState(false);
  const [error, setError] = useState(false);
  const [messege, setMessege] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const [largeImage, setLargeImage] = useState(null);

  const getImages = async (query, page) => {
    return await axios.get(`?q=${query}&page=${page}&key=${API_KEY}`);
  };

  const normalizeGalleryImg = arr => {
    return arr.map(({ id, largeImageURL, webformatURL, tags }) => ({
      id,
      largeImageURL,
      webformatURL,
      tags,
    }));
  };

  useEffect(() => {
    if (!value) {
      return;
    }
    setIsLoadingBtn(true);
    setLoading(true);
    setMessege(false);
    try {
      const getGalleryImg = async () => {
        const {
          data: { hits, totalHits },
        } = await getImages(value, page);

        const lastPage = Math.ceil(totalHits / 12) !== page;
        setIsVisible(lastPage);

        if (hits.length === 0) {
          setError(true);
          setIsVisible(false);
        }

        setImages(prevHits => [...prevHits, ...normalizeGalleryImg(hits)]);
        setLoading(false);
      };

      getGalleryImg();
    } catch (error) {
    } finally {
      setIsLoadingBtn(false);
    }
  }, [page, value]);

  const handelSubmitForm = value => {
    setValue(value.toLowerCase().trim());
    setPage(1);
    setImages([]);
    setIsVisible(false);
    setError(false);
    setMessege(false);
  };

  const buttonLoad = () => {
    setIsLoadingBtn(true);
    const nextPage = page + 1;
    setPage(nextPage);
  };

  const openModal = image => {
    setLargeImage(image);
    setShowModal(true);
  };

  const closeModal = () => {
    setLargeImage('');
    setShowModal(false);
  };

  return (
    <AppBox>
      <Serchbar onSubmit={handelSubmitForm} />
      {messege && <TextMessege> Please enter category of picture</TextMessege>}
      {loading && <Loader />}
      {error && (
        <ErrorMessege messege="Sorry, nothing was found for your request :(" />
      )}
      <ImgGallery images={images} onClose={openModal} />
      {isVisible && (
        <BtnMore onClick={buttonLoad} disabled={isLoadingBtn}>
          {isLoadingBtn ? 'Loading...' : 'Load More'}
        </BtnMore>
      )}
      {showModal && (
        <Modal onClose={closeModal} largeImage={largeImage}>
          <img src={largeImage} alt="" />
        </Modal>
      )}
    </AppBox>
  );
};

export default App;
