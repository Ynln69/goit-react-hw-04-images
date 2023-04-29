import Errorimg from './../../images/error-cat.jpg';
import { BoxError, ImgError } from './Error.styled';
const ErrorMessege = ({ messege }) => {
  return (
    <BoxError>
      <h2>{messege}</h2>
      <ImgError src={Errorimg} alt="sad cat" />
    </BoxError>
  );
};

export default ErrorMessege;
