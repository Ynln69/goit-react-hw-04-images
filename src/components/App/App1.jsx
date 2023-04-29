import axios from 'axios';
import { Component } from 'react';
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

class App extends Component {
  state = {
    images: [],
    value: '',
    page: 1,
    perPage: 15,
    total_hits: null,
    loading: false,
    isVisible: false,
    isLoadingBtn: false,
    error: false,
    messege: true,
    showModal: false,
    largeImage: null,
  };

  getImages = async (query, page) => {
    return await axios.get(`?q=${query}&page=${page}&key=${API_KEY}`);
  };

  componentDidUpdate(prevProp, prevState) {
    const { value, page } = this.state;
    if (prevState.value !== value || page !== prevState.page) {
      this.getGalleryImg();
    }
  }

  normalizeGalleryImg(arr) {
    return arr.map(({ id, largeImageURL, webformatURL, tags }) => ({
      id,
      largeImageURL,
      webformatURL,
      tags,
    }));
  }

  async getGalleryImg() {
    const { value, page, perPage } = this.state;
    if (!value) {
      return;
    }

    this.setState({ isLoadingBtn: true, loading: true, messege: false });
    try {
      const {
        data: { hits, totalHits, page: currentPage },
      } = await this.getImages(value, page);
      this.setState(prevState => ({
        images: [...prevState.images, ...this.normalizeGalleryImg(hits)],
        total_hits: totalHits,
        isVisible: Math.ceil(totalHits / perPage) !== currentPage,
        loading: false,
      }));

      if (hits.length === 0) {
        this.setState({ error: true, isVisible: false });
      }
    } catch (error) {
    } finally {
      this.setState({
        isLoadingBtn: false,
      });
    }
  }

  handelSubmitForm = value => {
    this.setState({
      value,
      page: 1,
      images: [],
      isVisible: false,
      error: false,
      messege: false,
    });
  };

  buttonLoad = () => {
    this.setState(prevState => ({ page: prevState.page + 1 }));
  };

  openModal = image => {
    this.setState({ largeImage: image, showModal: true });
  };

  closeModal = () => {
    this.setState({ largeImage: '', showModal: false });
  };

  render() {
    const {
      images,
      loading,
      isLoadingBtn,
      isVisible,
      error,
      messege,
      showModal,
      largeImage,
    } = this.state;
    return (
      <AppBox>
        <Serchbar onSubmit={this.handelSubmitForm} />
        {messege && (
          <TextMessege> Please enter category of picture</TextMessege>
        )}
        {loading && <Loader />}
        {error && (
          <ErrorMessege messege="Sorry, nothing was found for your request :(" />
        )}
        <ImgGallery images={images} onClose={this.openModal} />
        {isVisible && (
          <BtnMore onClick={this.buttonLoad} disabled={isLoadingBtn}>
            {isLoadingBtn ? 'Loading...' : 'Load More'}
          </BtnMore>
        )}
        {showModal && (
          <Modal onClose={this.closeModal} largeImage={largeImage}>
            <img src={largeImage} alt="" />
          </Modal>
        )}
      </AppBox>
    );
  }
}

export default App;
