import {Heading, Input, PageHeader} from '~/components';
import {Layout} from '~/components/index.server';
import {IconSearch} from '..';

export function SearchPage({searchTerm, children}) {
  return (
    <Layout>
      <div className="collectionPage">
        <div className="theRest">
          <div className="inside-xl">
            <PageHeader>
              <Heading as="h1" size="copy">
                Search
              </Heading>
              <form className="obrienSearch justify-center">
                <Input
                  defaultValue={searchTerm}
                  placeholder="Search…"
                  type="search"
                  variant="search"
                  name="q"
                />
                <button type="submit" className="iconSearch">
                  <IconSearch />
                </button>
              </form>
            </PageHeader>
          </div>
        </div>
      </div>
      {children}
    </Layout>
  );
}
