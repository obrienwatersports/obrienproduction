import ReactPlayer from 'react-player/vimeo';

import './Video.scss';

function VideoContainer({productVideo}) {
  return (
    <div className="inside-xl">
      <div className="padding-10">
        <div className="obrien-vimeo">
          <ReactPlayer
            url={productVideo}
            //@ts-ignore
            controls="true"
            className="product-player"
            width="100%"
            height="100%"
          />
        </div>
      </div>
    </div>
  );
}

export default VideoContainer;
