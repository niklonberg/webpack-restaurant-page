const StringHelper = (function () {
  const capitalize = (word) => {
    return word[0].toUpperCase() + word.substring(1).toLowerCase();
  };

  return {
    capitalize,
  };
})();

export default StringHelper;
