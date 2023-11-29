import {Image} from '@shopify/hydrogen';
import {Link} from '@shopify/hydrogen';

export default function ActivitiesKneeboarding() {
  return (
    <div className="activity">
      <Image
        src="/Activities/ActivitiesKneeboarding.jpg"
        alt="Activities Kneeboarding"
        width={1200}
        height={1200}
      />
      <div className="activityOverlay text-center">
        <h3>Kneeboarding</h3>
        <div className="links">
          <Link reloadDocument={true} to="/collections/kneeboarding">
            All Kneeboarding
          </Link>
        </div>
      </div>
    </div>
  );
}
