import {Image} from '@shopify/hydrogen';
import {shopifyImageLoader} from '@shopify/hydrogen';

function VideoImage({myImage}) {
  return (
    <>
      {myImage && (
        <div className="tabImage">
          <Image
            data={myImage}
            loader={shopifyImageLoader}
            loaderOptions={{scale: 2}}
          />
        </div>
      )}
    </>
  );
}
export default VideoImage;
