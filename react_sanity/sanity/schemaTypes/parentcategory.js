export const parentcategory = {
  name: 'parentcategory',
  title: 'Parent Category',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Parent Category Title',
      type: 'string',
    },
    {
      name: 'slug',
      title: 'Parent Category Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 200, // will be ignored if slugify is set
        slugify: (input) =>
          input
            .toLowerCase()
            .replace(/\s+/g, '-')
            .replace('æ', 'ae')
            .replace('å', 'aa')
            .replace('ø', 'o')
            .slice(0, 200),
      },
    },
  ],
}
