import {Image} from '@shopify/hydrogen';

function TabImage({myImage}) {
  return (
    <>
      {myImage && (
        <div className="tabImage">
          <Image data={myImage} />
        </div>
      )}
    </>
  );
}
export default TabImage;
