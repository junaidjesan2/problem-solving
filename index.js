function calculateMoney(ticketSale) {
  const ticketPrice = 120;
  const perDayDebit = 500 + 8 * 50;
  if (ticketSale < 0) {
    return "Type a valid number";
  } else {
    const total = ticketSale * ticketPrice - perDayDebit;
    return total;
  }
}

function checkName(name) {
  if (typeof name === "string") {
    const care = name.toLowerCase();
    const lastCare = care.slice(-1);
    if (
      lastCare === "a" ||
      lastCare === "y" ||
      lastCare === "i" ||
      lastCare === "e" ||
      lastCare === "o" ||
      lastCare === "u" ||
      lastCare === "w"
    ) {
      return "Bad Name";
    } else {
      return "Good name";
    }
  } else {
    return "invalid";
  }
}

function deleteInvalids(array) {
  if (typeof array === "array") {
    var filtered = array.filter(function (item) {
      if (typeof item == "number" && !isNaN(item)) {
        return parseInt(item) == item;
      }
    });
    return filtered;
  } else {
    return "Invalid Array";
  }
}

function password(obj) {
  if (obj.birthYear.toString().length === 4) {
    const nameUp = obj.name.charAt(0).toUpperCase() + obj.name.slice(1);
    const sitUp = obj.siteName.charAt(0).toUpperCase() + obj.siteName.slice(1);
    const fullPassword = sitUp + "#" + nameUp + "@" + obj.birthYear;
    return fullPassword;
  } else {
    return "Invalid";
  }
}

function monthlySavings(arr, livingCost) {
  if (typeof arr === "object" && typeof livingCost === "number") {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] >= 3000) {
        const afterTax = arr[i] - arr[i] * 0.2;
        sum += afterTax;
      }
      if (arr[i] < 3000) {
        sum += arr[i];
      }
    }
    const savings = sum - livingCost;
    if (savings < 0) {
      return "Earn More";
    } else {
      return savings;
    }
  } else {
    return "Invalid Input";
  }
}
