function findInDOM(className) {
  return document.getElementsByClassName(className);
}

function checkAndSetToDOM(className, val, prop) {
  const elems = findInDOM(className);
  if (elems.length) {
    for (let i = 0; i < elems.length; i++) {
      let inDays = elems[i].dataset.inDays;

      if (!inDays) {
        elems[i][prop] = val;
      } else {
        let now = new Date();
        let d = new Date(val.split(".").reverse().join("-"));
        let diffTime = Math.abs(d - now);
        elems[i][prop] = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
      }
    }
  } else {
    console.log(className + " => iframeDOM dan topilmadi. Qiymat => " + val);
  }
}

function setHtmlString(className, val) {
  checkAndSetToDOM(className, val, "innerHTML");
}

function setArray(className, val) {
  let currentElems = findInDOM(className);
  if (currentElems.length) {
    for (let itr = 0; itr < currentElems.length; itr++) {
      if (currentElems[itr].dataset.type !== "table") {
        let props = currentElems[itr].getAttribute("data-props");
        let delimiter = currentElems[itr].getAttribute("data-delimiter");
        let tag = currentElems[itr].getAttribute("data-tag");
        let tagStyle = currentElems[itr].getAttribute("data-tag-style");

        console.log("props => ", props);
        console.log("delimiter => ", delimiter);
        console.log("tag => ", tag);
        console.log("tagStyle => ", tagStyle);
        // let childrenProp = currentElems[itr].getAttribute("data-children-prop");

        let wrapperDiv = document.createElement("div");
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
        currentElems[itr].innerHTML = "";

        if (tag) {
          currentElems[itr].appendChild(wrapperDiv);
        } else {
          currentElems[itr].textContent = texts.join(delimiter);
        }
      } else {
        let dataset = currentElems[itr].dataset;
        let props = dataset.props.split(","); // props and columnsWithValue length must be the same
        let columnsWithValue = dataset.valuesIndex.split(",");

        let fragment = document.createDocumentFragment();
        for (let i = 0; i < val.length; i++) {
          // making empty row and set columns
          let tr = document.createElement("tr");
          for (let a = 0; a < dataset.columnsCount; a++) {
            tr.appendChild(document.createElement("td"));
          }

          // set columns values
          for (let j = 0; j < columnsWithValue.length; j++) {
            tr.children[columnsWithValue[j]].textContent =
              props[j] !== "index"
                ? getValueFromObject(props[j].split("_"), val[i])
                : i + 1;
          }
          fragment.appendChild(tr);
        }
        currentElems[itr].innerHTML = "";
        currentElems[itr].appendChild(fragment);
      }
    }
  } else {
    console.log(className + " => iframeDOM dan topilmadi. Qiymat => " + val);
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

function setString(className, val) {
  checkAndSetToDOM(className, val, "textContent");
}

var lang;

function setDataFromBackend(data) {
  data = JSON.parse(atob(data)).data || {};

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
