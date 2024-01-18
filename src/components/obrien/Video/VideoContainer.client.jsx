import './Video.scss';

function VideoContainer({productVideo, productVideo2}) {
  return (
    <div
      className={`${productVideo2 ? 'inside-xl flex-md flexFix' : 'inside-xl'}`}
    >
      {productVideo !== null && (
        <div className="padding-10 possibleFix">
          <div className="obrien-vimeo">
            <iframe
              src={productVideo}
              title="vide"
              //@ts-ignore
              //controls="true"
              className="product-player"
              width="100%"
              height="100%"
            />
          </div>
        </div>
      )}
      {productVideo2 !== null && (
        <div className="padding-10 possibleFix">
          <div className="obrien-vimeo">
            <iframe
              src={productVideo2}
              title="vide"
              //@ts-ignore
              //controls="true"
              className="product-player"
              width="100%"
              height="100%"
            />
          </div>
        </div>
      )}
    </div>
  );
}

export default VideoContainer;
