//import {Image} from '@shopify/hydrogen';
import {MediaFile} from '@shopify/hydrogen';
import {Link} from '@shopify/hydrogen';

export default function ActivitiesWakesurfing({act2Image}) {
  return (
    <div className="activity">
      <MediaFile data={act2Image} className="act2test" />
      <div className="activityOverlay text-center">
        <h3>Wakesurfing</h3>
        <div className="links">
          <Link reloadDocument={true} to="/collections/wakesurfing">
            All Wakesurfing
          </Link>
        </div>
      </div>
    </div>
  );
}
