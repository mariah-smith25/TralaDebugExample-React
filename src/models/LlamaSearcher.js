export const searchLlamas = (llamas, searchProps, searchText) => {
  return llamas.filter((llama) => {
    for (const prop of searchProps) {
      if (llama[prop] && llama[prop].includes(searchText)) {
        return true;
      }
    }
    return false;
  });
};
