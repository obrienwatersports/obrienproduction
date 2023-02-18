import {useCallback, useState} from 'react';
// @ts-expect-error @headlessui/react incompatibility with node16 resolution
import {Listbox} from '@headlessui/react';
import {useProductOptions} from '@shopify/hydrogen';

import {Text, IconCheck, IconCaret} from '~/components';

export function ProductOptions({values, ...props}) {
  const asDropdown = values.length > 7;

  return asDropdown ? (
    <OptionsDropdown values={values} {...props} />
  ) : (
    <OptionsGrid values={values} {...props} />
  );
}

function OptionsGrid({values, name, handleChange}) {
  const {selectedOptions} = useProductOptions();

  return (
    <>
      {values.map((value) => {
        const checked = selectedOptions[name] === value;
        const id = `option-${name}-${value}`;

        return (
          <Text as="label" key={id} htmlFor={id}>
            <input
              className="sr-only"
              type="radio"
              id={id}
              name={`option[${name}]`}
              value={value}
              checked={checked}
              onChange={() => handleChange(name, value)}
            />
            <div className={`${checked ? 'selected' : 'notSelected'}`}>
              {value}
            </div>
          </Text>
        );
      })}
    </>
  );
}

// TODO: De-dupe UI with CountrySelector
function OptionsDropdown({values, name, handleChange}) {
  const [listboxOpen, setListboxOpen] = useState(false);
  const {selectedOptions} = useProductOptions();

  const updateSelectedOption = useCallback(
    (value) => {
      handleChange(name, value);
    },
    [name, handleChange],
  );

  return (
    <div className="relative w-full">
      <Listbox onChange={updateSelectedOption} value="">
        {/* @ts-expect-error @headlessui/react incompatibility with node16 resolution */}
        {({open}) => {
          setTimeout(() => setListboxOpen(open));
          return (
            <>
              <Listbox.Button
                className={` ${
                  open ? 'rounded-b md:rounded-t md:rounded-b-none' : 'rounded'
                }`}
              >
                <span>{selectedOptions[name]}</span>
                <IconCaret direction={open ? 'up' : 'down'} />
              </Listbox.Button>

              <Listbox.Options
                className={` ${listboxOpen ? 'max-h-48' : 'max-h-0'}`}
              >
                {values.map((value) => {
                  const isSelected = selectedOptions[name] === value;
                  const id = `option-${name}-${value}`;

                  return (
                    <Listbox.Option key={id} value={value}>
                      {/* @ts-expect-error @headlessui/react incompatibility with node16 resolution */}
                      {({active}) => (
                        <div className={` ${active ? 'bg-primary/10' : null}`}>
                          {value}
                          {isSelected ? (
                            <span className="ml-2">
                              <IconCheck />
                            </span>
                          ) : null}
                        </div>
                      )}
                    </Listbox.Option>
                  );
                })}
              </Listbox.Options>
            </>
          );
        }}
      </Listbox>
    </div>
  );
}
