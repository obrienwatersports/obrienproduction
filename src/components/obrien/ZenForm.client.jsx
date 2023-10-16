import Zendesk from 'react-zendesk';
const ZENDESK_KEY = '06de386f-2858-4c52-b67e-7eb14c4c9162';

export default function ZenForm() {
  return (
    <>
      <Zendesk
        defer
        zendeskKey={ZENDESK_KEY}
        // eslint-disable-next-line no-console
        onLoaded={() => console.log('is loaded')}
      />
    </>
  );
}
