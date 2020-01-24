const months = [
  'Jan',
  'Feb',
  'Mar',
  'Apr',
  'May',
  'Jun',
  'Jul',
  'Aug',
  'Sep',
  'Oct',
  'Nov',
  'Dec'
];

export const getMonthName = (month) => {
  return months[Number(month) - 1];
};

export const formatTime = (dateStr, timeStr) => {
  return new Date(dateStr+' ' + timeStr).toLocaleTimeString()
};

export const getCurrentFilterDate = () => {
  let today = new Date();
  return `${today.getFullYear()}-${(today.getMonth() + 1).toString().padStart(2, 0)}-${today.getDate().toString().padStart(2, 0)}`;
};

export const getCurrentFilterTime = () => {
  let today = new Date();
  return `${today.getHours().toString().padStart(2, 0)}:${today.getMinutes().toString().padStart(2, 0)}`;;
};

export const getOnlyDate = (date) => {
  date = new Date(date);
  return `${date.getFullYear()}-${(date.getMonth() + 1).toString().padStart(2, 0)}-${date.getDate().toString().padStart(2, 0)}`;
};

export const getOnlyTime = (date) => {
  return new Date(date).toLocaleTimeString();
  // return `${date.getHours()}:${(date.getMinutes() + 1).toString().padStart(2, 0)}`;
};

export const numberWithCommas = (x) => {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
};

export const getCurrencyString = (amount) => {
  if (amount > 0) {
    return "+₹" + amount.toString();
  } else if (amount < 0) {
    return "-₹" + (-1 * amount).toString();
  } else {
    return "₹" + amount.toString();
  }
};

export const toTitleCase = (str, separator = ' ') => {
  return str.split(separator)
      .map(w => w[0].toUpperCase() + w.substr(1).toLowerCase())
      .join(' ');
};

export const formatDateFunction = (
  datetime,
  showTime = true,
  forFormControl = false,
  formControlWithTime= false
) => {
  if (datetime === undefined || datetime === null) {
    return ''
  }
  console.log("datettime " + datetime);
  if (datetime === null || datetime === undefined || datetime === '') {
    return ''
  } else {
    datetime = new Date(datetime);
    datetime = datetime.toLocaleString('en-IN');
    console.log('tolocaletime ' + datetime)

    let [date, time] = datetime.split(', ');
    if (!showTime) {
      time = undefined
    }
    // console.log(date);
    // console.log(time);
    let [day, month, year] = date.split('/');
    day = day / 10 < 1 ? '0' + day : day;
    month = month / 10 < 1 ? '0' + month : month;

    if (forFormControl) {
      let resp = `${year}-${month}-${day}`;
      console.log('resp ' + resp);
      return resp
    } else if (formControlWithTime){
      if(!time){
        return;
      }
      time = time.trim();
      let [hh, min, sec] = time.split(':');
      let ampm = sec.split(' ')[1];
      let resp = `${year}-${month}-${day}T${ampm === 'pm' ? 12 + parseInt(hh) : hh.padStart(2,0)}:${min.padStart(2,0)}`;
      console.log('respo ', resp)
      return resp;
    }
    // console.log(day + " " + month + " " + year);
    return `${day}-${months[Number(month) - 1]}-${year.slice(2)} ${
      time !== undefined ? time.split('.')[0] : ''
    }`
  }
};

export function debounce (a, b, c = false) {
  var d, e;
  return function () {
    function h () {
      d = null;
      c || (e = a.apply(f, g))
    }
    var f = this;

    var g = arguments;
    clearTimeout(d);
    d = setTimeout(h, b);
    c && !d && (e = a.apply(f, g));
    return e
  }
}

export function isEmpty (obj) {
  for (var key in obj) {
    if (obj.hasOwnProperty(key)) return false
  }
  return true
}

// export const debounce = (fn, delay) => {
//   let timerId;
//   return function(...args) {
//     if (timerId) {
//       clearTimeout(timerId);
//     }
//     timerId = setTimeout(() => {
//       fn(...args);
//       timerId = null;
//     }, delay);
//   };
// };

// module.export = { formatDateFunction };

let consoleHolder = console;
export function debug (bool) {
  if (!bool) {
    consoleHolder = console;
    console = {};
    Object.keys(consoleHolder).forEach(function (key) {
      console[key] = function () {}
    })
  } else {
    console = consoleHolder
  }
}

export function round (value, decimals = 2) {
  return Number(Math.round(value + 'e' + decimals) + 'e-' + decimals)
}


export const mergeArrays = (oldArr, newArr) => ([...oldArr, ...setDiff(oldArr, newArr)]);


export const setDiff = (oldArr, newArr) => {
  oldArr = new Set(oldArr);
  newArr = new Set(newArr);
  return new Set([...newArr].filter(x => !oldArr.has(x)))
};


export const arrayToObject = (array, key, doCollect=false) => {
  let obj = {};
  for(let item of array){
    if(doCollect){
      if(obj[item[key]] === undefined){
        obj[item[key]] = []
      }
      obj[item[key]].push(item)
    } else {
      obj[item[key]] = item
    }
  }
  console.log('arr to obj')
  console.log(obj);
  return obj;
};
