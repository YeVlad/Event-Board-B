const parseSortBy = (sortBy) => {
  const keysOfSort = ['title', 'event_date', 'organizer'];

  if (keysOfSort.includes(sortBy)) {
    return sortBy;
  }

  return 'title';
};

export const parseSortParams = (query) => {
  const { sortBy } = query;

  const parsedSortOrder = 'asc';
  const parsedSortBy = parseSortBy(sortBy);

  return {
    sortOrder: parsedSortOrder,
    sortBy: parsedSortBy,
  };
};
