export const formatter = (number) => {
  return new Intl.NumberFormat("en-US", {style: "currency", currency: "USD"}).format(number);
};

export const urlFormatter = (url) => url.toLowerCase().replace(/ /g, "-");
