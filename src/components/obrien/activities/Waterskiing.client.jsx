//import {Image} from '@shopify/hydrogen';
import {MediaFile} from '@shopify/hydrogen';
import {Link} from '@shopify/hydrogen';

export default function ActivitiesWaterskiing({act6Image}) {
  return (
    <div className="activity">
      <MediaFile data={act6Image} className="act6test" />
      <div className="activityOverlay text-center">
        <h3>Waterskiing</h3>
        <div className="links">
          <Link reloadDocument={true} to="/collections/water-skiing">
            All Waterskiing
          </Link>
        </div>
      </div>
    </div>
  );
}
