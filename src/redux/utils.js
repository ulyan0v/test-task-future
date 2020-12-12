export const getDataByPage = (data, page = 1, pageSize = 20) => {
  if (data.length <= pageSize) return data;

  const startIndex = pageSize * (page - 1);
  const result = [];

  for (let i = startIndex; i < pageSize * page; i++) {
    if (!data[i]) break;
    result.push(data[i]);
  }

  return result;
}

export const sortByKey = (key, array) => {
  return array.sort((a, b ) => a[key] < b[key] ? -1 : 1);
}

export const searchByText = (array, text) => {
  return array.filter(item => {
    return Object.keys(item).find(key => {
      return item[key].toString().toLowerCase().includes(text.toLowerCase());
    });
  });
}