import {Image} from '@shopify/hydrogen';
import {Link} from '@shopify/hydrogen';

export default function ActivitiesWakesurfing() {
  return (
    <div className="activity">
      <Image
        src="/Activities/ActivitiesWakesurfing.jpg"
        alt="Activities Wakesurfing"
        width={1200}
        height={1200}
      />
      <div className="activityOverlay">
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
