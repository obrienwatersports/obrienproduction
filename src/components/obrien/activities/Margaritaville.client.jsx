import {Image} from '@shopify/hydrogen';
import {Link} from '@shopify/hydrogen';

export default function ActivitiesMargaritaville() {
  return (
    <div className="activity">
      <Image
        src="/Activities/ActivitiesMargaritaville.jpg"
        alt="Activities Margaritaville"
        width={1200}
        height={1200}
      />
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
