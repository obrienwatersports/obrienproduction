import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';

import './Tabbed.scss';

function TabbedContainer({metaMainDescription}) {
  return (
    <div id="tabbedContainer" className="obrien-tabbed">
      <Tabs defaultActiveKey="tab1" className="ob-tabs">
        <Tab eventKey="tab1" title="Description">
          <div
            className="inside-lg"
            dangerouslySetInnerHTML={{__html: metaMainDescription}}
          />
        </Tab>
      </Tabs>
    </div>
  );
}

export default TabbedContainer;
