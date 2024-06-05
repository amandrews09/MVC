module.exports = {
    format_date: date => {
      return `${new Date(date).getMonth() + 1}/${new Date(date).getDate()}/${new Date(date).getFullYear()}`;
    },
  
    equal: (value1, value2) => {
      return value1 === value2;
    },
  
    json: context => {
      return JSON.stringify(context, null, 2);
    }
  };
  