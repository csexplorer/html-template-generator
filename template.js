function findInDOM(id) {
  return document.getElementById(id);
}

function checkAndSetToDOM(id, val, prop) {
  if (findInDOM(id)) {
    findInDOM(id)[prop] = val;
  } else {
    console.log(id + " => iframeDOM dan topilmadi. Qiymat => " + val);
  }
}

function setHtmlString(id, val) {
  checkAndSetToDOM(id, val, "innerHTML");
}

function setArray(id, val) {
  let currentElem = findInDOM(id);
  if (currentElem) {
    const props = currentElem.getAttribute("data-props");
    const delimiter = currentElem.getAttribute("data-delimiter");
    const tag = currentElem.getAttribute("data-tag");
    const tagStyle = currentElem.getAttribute("data-tag-style");

    console.log("props => ", props);
    console.log("delimiter => ", delimiter);
    console.log("tag => ", tag);
    console.log("tagStyle => ", tagStyle);
    // const childrenProp = currentElem.getAttribute("data-children-prop");

    const wrapperDiv = document.createElement("div");
    let texts = [];
    for (let i = 0; i < val.length; i++) {
      let newTag = tag && document.createElement(tag);
      if (newTag) {
        newTag.style.cssText = tagStyle;

        newTag.textContent =
          getValueFromObject(props.split("_"), val[i]) + delimiter;
        wrapperDiv.appendChild(newTag);
      } else {
        texts.push(getValueFromObject(props.split("_"), val[i]));
      }
    }
    console.log("tayyor list => ", wrapperDiv, texts);
    currentElem.innerHTML = "";

    if (tag) {
      currentElem.appendChild(wrapperDiv);
    } else {
      currentElem.textContent = texts.join(delimiter);
    }
  } else {
    console.log(id + " => iframeDOM dan topilmadi. Qiymat => " + val);
  }
}

function getValueFromObject(keys, obj) {
  let ans = obj[keys[0]];
  console.log("keys: => " + keys);
  for (let i = 1; i < keys.length; i++) {
    if (ans[keys[i]]) {
      ans = ans[keys[i]];
    } else {
      ans = "";
      break;
    }
  }

  return ans;
}

function setString(id, val) {
  checkAndSetToDOM(id, val, "textContent");
}

var lang;

function setDataFromBackend(data) {
  data = JSON.parse(atob(data)).data || {};

  console.log("backdan kelgan data =L>", data);

  lang = data.lang || "uz";
  delete data.lang;
  for (let key in data) {
    checkAndDo(key, data[key]);
  }
}

function setDataFromFrontend(data) {
  lang = data.lang || "uz";
  delete data.lang;
  for (let key in data) {
    checkAndDo(key, data[key]);
  }
}

function setData2(parentKey, data) {
  for (let key in data) {
    checkAndDo(parentKey + "_" + key, data[key]);
  }
}
var htmlRegex = /<\/?[a-z][\s\S]*>/i;

function checkAndDo(key, value) {
  if (!value) {
    return;
  }

  if (typeof value === "string" || typeof value === "number") {
    if (!htmlRegex.test(value.toString())) {
      setString(key, value);
    } else {
      setHtmlString(key, value);
    }
    return;
  }

  if (Array.isArray(value)) {
    setArray(key, value);
    return;
  }
  if (typeof value === "object") {
    setData2(key, value);
  }
}
