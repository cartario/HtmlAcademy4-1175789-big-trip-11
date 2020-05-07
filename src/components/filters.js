import AbstractComponent from "./abstract-component.js";

const createFiltersMarkup = (name, isChecked) => {
  return (`<div class="trip-filters__filter">
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

const createTripFiltersTemplate = (filters) => {
  const filtersMarkup = filters.map((it, i) => createFiltersMarkup(it.name, it.checked)).join(`\n`);

  return (`<form class="trip-filters" action="#" method="get">
    ${filtersMarkup}
    <button class="visually-hidden" type="submit">Accept filter</button>
    </form>`);
};

export default class Filters extends AbstractComponent {
  constructor(filters) {
    super();
    this._filters = filters;
  }
  getTemplate() {
    return createTripFiltersTemplate(this._filters);
  }

  setFilterChangeHandler(handler) {
    this.getElement().addEventListener(`change`, (evt) => {
      handler(evt.target.value)
console.log(`ok`)
    });

  }
}
