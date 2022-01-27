export function obtainYearDifference(year) {
  return new Date().getFullYear() - year;
}

export function obtainBrandDifference(brand) {
  let increment;

  switch (brand) {
      case "european":
        increment = 1.3;
        break;
    case "american":
        increment = 1.15;
      break;
    case "asian":
        increment = 1.15;
        break;
    default:
        break;

  }
  return increment;
}

export function obtainPlan(plan) {
    let increment;

    if(plan === "basico"){
        increment = 1.2
        return increment
    } else{
        increment = 1.5
        return increment
    }
  }
