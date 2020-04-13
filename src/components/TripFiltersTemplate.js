const createFiltersMarkup = (name, isChecked) => {
  return (`
      <div class="trip-filters__filter">
          <input id="filter-${name}"
          class="trip-filters__filter-input  visually-hidden"
          type="radio"
          name="trip-filter"
          value="${name}"
          ${isChecked ? `checked` : ``}>
        <label class="trip-filters__filter-label"
        for="filter-${name}">${name}
        </label>
      </div>`);
};

export const createTripFiltersTemplate = (filters) => {
  const filtersMarkup = filters.map((it, i) => createFiltersMarkup(it, i === 2)).join(`\n`);

  return (`
    <form class="trip-filters" action="#" method="get">
    ${filtersMarkup}
    <button class="visually-hidden" type="submit">Accept filter</button>
    </form>
  `);
};