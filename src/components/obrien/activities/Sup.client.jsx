import {Image} from '@shopify/hydrogen';
import {Link} from '@shopify/hydrogen';

export default function ActivitiesSup() {
  return (
    <div className="activity">
      <Image
        src="/Activities/ActivitiesPaddleboarding.jpg"
        alt="Activities Paddleboarding"
        width={1200}
        height={1200}
      />
      <div className="activityOverlay text-center">
        <h3>Paddleboarding</h3>
        <div className="links">
          <Link reloadDocument={true} to="/collections/stand-up-paddleboarding">
            All SUP
          </Link>
        </div>
      </div>
    </div>
  );
}
