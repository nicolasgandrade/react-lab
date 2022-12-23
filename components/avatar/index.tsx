const placeholder =
  'https://www.bsn.eu/wp-content/uploads/2016/12/user-icon-image-placeholder-300-grey.jpg';

export default function Avatar(props: { imageUrl: string }) {
  const getAvatar = () => {
    if (props.imageUrl && props.imageUrl !== undefined) {
      return props.imageUrl;
    } else {
      return placeholder;
    }
  };

  return <img src={getAvatar()} alt='Avatar' className='avatar' />;
}
