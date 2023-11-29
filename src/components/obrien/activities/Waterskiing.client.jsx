import {Image} from '@shopify/hydrogen';
import {Link} from '@shopify/hydrogen';

export default function ActivitiesWaterskiing() {
  return (
    <div className="activity">
      <Image
        src="/Activities/ActivitiesWaterskiing.jpg"
        alt="Activities Waterskiing"
        width={1200}
        height={1200}
      />
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
