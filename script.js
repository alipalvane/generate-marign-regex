const getClass = document.querySelector(".get-class");
const marginSize = document.querySelector(".margin-size");
const marginBtn = document.querySelector("button");

// REGEX PATTERN FOR ACCEPT "DECIMAL NUMBERS"
const regDecimalNumber = /^[-+]?(\d*\.)?\d+$/;

const marginSizeGenerator = (e) => {
  e.preventDefault();
  const getClassValue = getClass.value;
  const marginSizeValue = marginSize.value;

  const marginSizeStyle = `
    .${getClassValue}{
        margin: ${marginSizeValue}px
    }
    `;

  if (regDecimalNumber.test(marginSizeValue)) {
    alert(marginSizeStyle);
  } else {
    alert("Your margin Size not Valid");
  }
};
marginBtn.addEventListener("click", marginSizeGenerator);
