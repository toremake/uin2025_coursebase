export const products = {
  name: 'products',
  title: 'Products',
  type: 'document',
  fields: [
    {
      name: 'productname',
      type: 'string',
    },
    {
      name: 'price',
      type: 'number',
    },
    {
      name: 'image',
      type: 'image',
    },
    {
      name: 'categories',
      title: 'Categories',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [{type: 'categories'}],
        },
      ],
    },
    {
      name: 'productslug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'productname',
        maxLength: 200, // will be ignored if slugify is set
        slugify: (input) => input.toLowerCase().replace(/\s+/g, '-').slice(0, 200),
      },
    },
  ],
}
