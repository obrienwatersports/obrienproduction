//import {Image} from '@shopify/hydrogen';
import {MediaFile} from '@shopify/hydrogen';
import {Link} from '@shopify/hydrogen';

export default function ActivitiesWakeboarding({act1Image}) {
  return (
    <div className="activity">
      <MediaFile data={act1Image} className="act1test" />
      <div className="activityOverlay">
        <h3>Wakeboarding</h3>
        <div className="links">
          <Link reloadDocument={true} to="/collections/wakeboarding">
            All Wakeboarding
          </Link>
        </div>
      </div>
    </div>
  );
}
