import _ from "lodash";
export default {
  convertMap2List: map => {
    const list = [];
    map.forEach((value, key) => {
      list.push({ id: key, name: value });
    });
    return list;
  },
  setField: (form, newField) => {
    const newForm = _.cloneDeep(form);
    let finished = false;
    for (const section of newForm.sections) {
      for (const field of section.fields) {
        if (field.name === newField.name) {
          for (const key in newField) {
            field[key] = newField[key];
          }
          finished = true;
        }
        if (finished) {
          break;
        }
      }
      if (finished) {
        break;
      }
    }
    return newForm;
  },
  removeField: (form, fieldName) => {
    const newForm = _.cloneDeep(form);
    const array = _.isArray(fieldName);
    for (const section of newForm.sections) {
      array
        ? fieldName.map(value => {
            _.remove(section.fields, function(field) {
              return field.name === value;
            });
          })
        : _.remove(section.fields, function(field) {
            return field.name === fieldName;
          });
    }
    return newForm;
  },
  setFilter: (table, newFilter) => {
    const newTable = _.cloneDeep(table);
    if (newTable.filters) {
      for (const filter of newTable.filters) {
        if (filter.id === newFilter.id) {
          for (const key in newFilter) {
            filter[key] = newFilter[key];
          }
          break;
        }
      }
    } else {
      newTable.filters = [newFilter];
    }
    return newTable;
  },
  setTables: (table, newFilter) => {
    const newTable = _.cloneDeep(table);
    const data = newTable.data;
    for (const key in data) {
      if (newFilter.id === data[key].id) {
        data[key] = newFilter;
      }
    }
    return newTable;
  }
};
