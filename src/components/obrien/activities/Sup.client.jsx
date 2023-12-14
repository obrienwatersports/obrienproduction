//import {Image} from '@shopify/hydrogen';
import {MediaFile} from '@shopify/hydrogen';
import {Link} from '@shopify/hydrogen';

export default function ActivitiesSup({act3Image}) {
  return (
    <div className="activity">
      <MediaFile data={act3Image} className="act3test" />
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
