export const fields = [
  {
    name: 'Personal information',
    fields: [
      {
        name: 'username',
        type: 'text',
        placeholder: 'Username',
        size: 'medium',
      },
      {
        name: 'name',
        type: 'text',
        placeholder: 'Name',
        size: 'medium',
      },
      {
        name: 'email',
        type: 'email',
        placeholder: 'Email',
        size: 'medium',
      },
      {
        name: 'phone',
        type: 'text',
        placeholder: 'Phone',
        size: 'medium',
      },
      {
        name: 'website',
        type: 'text',
        placeholder: 'Website',
        size: 'large',
      },
    ],
  },
  {
    name: 'Address',
    fields: [
      {
        name: 'address.suite',
        type: 'text',
        placeholder: 'Suite',
        size: 'small',
      },
      {
        name: 'address.street',
        type: 'text',
        placeholder: 'Street',
        size: 'small',
      },
      {
        name: 'address.city',
        type: 'text',
        placeholder: 'City',
        size: 'small',
      },
      {
        name: 'address.zipcode',
        type: 'text',
        placeholder: 'Zip code',
        size: 'small',
      },
      {
        name: 'address.geo.lat',
        type: 'text',
        placeholder: 'Latitude',
        size: 'small',
      },
      {
        name: 'address.geo.lng',
        type: 'text',
        placeholder: 'Longitude',
        size: 'small',
      },
    ],
  },
  {
    name: 'Company',
    fields: [
      {
        name: 'company.name',
        type: 'text',
        placeholder: 'Name',
        size: 'medium',
      },
      {
        name: 'company.catchPhrase',
        type: 'text',
        placeholder: 'Catch phrase',
        size: 'medium',
      },
      {
        name: 'company.bs',
        type: 'text',
        placeholder: 'Bs',
        size: 'large',
      },
    ],
  },
];
