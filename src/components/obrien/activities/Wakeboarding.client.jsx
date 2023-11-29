import {Image} from '@shopify/hydrogen';
import {Link} from '@shopify/hydrogen';

export default function ActivitiesWakeboarding() {
  return (
    <div className="activity">
      <Image
        src="/Activities/ActivitiesWakeboarding.jpg"
        alt="Activities Wakeboarding"
        width={1200}
        height={1200}
      />
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
