import {useEffect, useCallback, useState} from 'react';

import {
  useProductOptions,
  isBrowser,
  useUrl,
  AddToCartButton,
  Money,
  //ShopPayButton,
} from '@shopify/hydrogen';

import {Link} from 'react-scroll';

import {Heading, Text, Button, ProductOptions} from '~/components';

export function ProductForm() {
  const {pathname, search} = useUrl();
  const [params, setParams] = useState(new URLSearchParams(search));

  const {options, setSelectedOption, selectedOptions, selectedVariant} =
    useProductOptions();

  const isOutOfStock = !selectedVariant?.availableForSale || false;
  const isOnSale =
    selectedVariant?.priceV2?.amount <
      selectedVariant?.compareAtPriceV2?.amount || false;

  useEffect(() => {
    if (params || !search) return;
    setParams(new URLSearchParams(search));
  }, [params, search]);

  useEffect(() => {
    options.map(({name, values}) => {
      if (!params) return;
      const currentValue = params.get(name.toLowerCase()) || null;
      if (currentValue) {
        const matchedValue = values.filter(
          (value) => encodeURIComponent(value.toLowerCase()) === currentValue,
        );
        setSelectedOption(name, matchedValue[0]);
      } else {
        params.set(
          encodeURIComponent(name.toLowerCase()),
          encodeURIComponent(selectedOptions[name].toLowerCase()),
        ),
          window.history.replaceState(
            null,
            '',
            `${pathname}?${params.toString()}`,
          );
      }
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleChange = useCallback(
    (name, value) => {
      setSelectedOption(name, value);
      if (!params) return;
      params.set(
        encodeURIComponent(name.toLowerCase()),
        encodeURIComponent(value.toLowerCase()),
      );
      if (isBrowser()) {
        window.history.replaceState(
          null,
          '',
          `${pathname}?${params.toString()}`,
        );
      }
    },
    [setSelectedOption, params, pathname],
  );

  return (
    <form className="buyBoxForm">
      <Money
        withoutTrailingZeros
        data={selectedVariant.priceV2}
        as="h3"
        className="buyBoxPrice"
      />
      {isOnSale && (
        <Money
          withoutTrailingZeros
          data={selectedVariant.compareAtPriceV2}
          as="span"
          className="opacity-50 strike"
        />
      )}
      {
        <div className="buyBoxFooter">
          {options.map(({name, values}) => {
            if (values.length === 1) {
              return null;
            }
            return (
              <div key={name} className="productOptions">
                <Heading as="h4" size="lead" className="min-w-[4rem]">
                  {name}
                </Heading>
                <div className="always-flex gap5">
                  <ProductOptions
                    name={name}
                    handleChange={handleChange}
                    values={values}
                  />
                </div>
              </div>
            );
          })}
          <div className="always-flex gap5">
            <AddToCartButton
              variantId={selectedVariant?.id}
              quantity={1}
              accessibleAddingToCartLabel="Adding item to your cart"
              disabled={isOutOfStock}
              type="button"
              className="checkoutButton addToCart"
            >
              <Button
                width="full"
                variant={isOutOfStock ? 'secondary' : 'primary'}
                as="span"
              >
                {isOutOfStock ? (
                  <Text>Sold out</Text>
                ) : (
                  <Text as="span" className="">
                    <span>Add to bag</span>
                  </Text>
                )}
              </Button>
            </AddToCartButton>
            <Link
              href=""
              className="checkoutButton flex-vertical"
              to="retailers"
            >
              <span>Our Retailers</span>
            </Link>
          </div>
        </div>
      }
    </form>
  );
}
