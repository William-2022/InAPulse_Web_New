const componentTypeasKey = (addressComponents) => {
  const componentObject = {};
  addressComponents.forEach(({ short_name, long_name, types }) => {
    componentObject[types[0]] = { short_name, long_name };
  });

  //console.log(componentObject)
  return componentObject;
};

export default function handleAddressBreakDown(addressComponents) {
  if (!addressComponents) return {};
  const {
    street_number,
    route,
    locality,
    administrative_area_level_1,
    // country,
    postal_code,
  } = componentTypeasKey(addressComponents);

  return {
    address: `${street_number.long_name} ${route.long_name}`,
    city: locality.long_name,
    province: administrative_area_level_1.short_name,
    postalcode: postal_code.long_name,
  };
}
