import anime from "animejs"

const clickAnimation = (target) => anime({
  targets: target,
  scale: [1, 0.8, 1],
  easing: 'easeInOutSine',
  duration: 200
})

function loggedIn() {
  if (typeof window == "undefined") {
    return false;
  } else {
    if (localStorage.getItem("UserDetails")) {
      // // console.log("user logged in-------");
      return localStorage.getItem("UserDetails");
    } else {
      return false;
    }
  }
}

function clearCookie() {
  localStorage.clear()
}

export const helperService = {
  loggedIn,
  clearCookie,
  clickAnimation
};
