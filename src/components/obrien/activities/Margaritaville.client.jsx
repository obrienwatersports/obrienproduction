//import {Image} from '@shopify/hydrogen';
import {MediaFile} from '@shopify/hydrogen';
import {Link} from '@shopify/hydrogen';

export default function ActivitiesMargaritaville({act5Image}) {
  return (
    <div className="activity">
      <MediaFile data={act5Image} className="act4test" />
      <div className="activityOverlay text-center">
        <h3>Margaritaville</h3>
        <div className="links">
          <Link reloadDocument={true} to="/collections/margaritaville">
            All Margaritaville
          </Link>
        </div>
      </div>
    </div>
  );
}
