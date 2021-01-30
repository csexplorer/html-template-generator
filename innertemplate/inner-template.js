var htmlRegex = new RegExp("</?[a-z][sS]*>", "i");

const data = {
  data: {
    innerDocumentTypeName: {
      ru: "",
      uz: "Ariza",
      uzc: "",
    },
    title: {
      ru: "",
      uz: "Ariza",
      uzc: "",
    },
    status: "NEW",
    journalRegDate: "09.12.2020",
    journalRegistrationNumber: "ich2ki",
    createPersonal: {
      firstname: "Davron",
      middlename: "Abdumalik o'g'li",
      lastname: "Islomov",
      If: "D.Islomov",
      fio: "Islomov Davron Abdumalik o'g'li",
      fIO: "Islomov D.A.",
      inn: "672835108",
      phoneNumber: "+998940007579",
      mobileNumber: "+998940007579",
      workNumber: "+998940007579",
      email: "islomov@gmail.com",
      positionName: {
        ru: "Сотрудник IT отдела",
        uz: "IT bo'limi hodimi",
        uzc: "ИТ бўлими ҳодими",
      },
      crDepartment: {
        name: {
          ru: "IT отдел",
          uz: "IT bo'limi",
          uzc: "IT бўлими",
        },
        departmentNumber: 0,
        type: "IJROVIY",
      },
    },
    values: [
      {
        jsonId: "2ccfa51d-e815-442f-8aea-30c690e88611",
        slug: "kimga_7990",
        title: {
          ru: "kimga",
          uz: "kimga",
          uzc: "kimga",
        },
        innerDocFieldsType: {
          dataType: "API_LIST",
          apiListId: "776b996d-021d-4d36-ab27-94c42d89617f",
        },
        visible: true,
        innerDocFieldsTypeId: {
          dataType: "API_LIST",
          apiListId: "776b996d-021d-4d36-ab27-94c42d89617f",
        },
        value: [
          {
            status: "UNMARKED",
            personalDataJson: {
              firstname: "Azamat",
              middlename: "Akbar o'g'li",
              lastname: "Israilov",
              If: "A.Israilov",
              fio: "Israilov Azamat Akbar o'g'li",
              fIO: "Israilov A.A.",
              inn: "987654321",
              phoneNumber: "+998941727552",
              mobileNumber: "+998941727552",
              workNumber: "+998941727552",
              email: "israilov@gmail.com",
              positionName: {
                ru: "Главный бухгалтер",
                uz: "Bosh buxgalter",
                uzc: "Бош бухгалтер",
              },
              crDepartment: {
                name: {
                  ru: "Бухгалтерия",
                  uz: "Buxgalteriya",
                  uzc: "Бухгалтерия",
                },
                departmentNumber: 0,
                type: "IJROVIY",
              },
            },
            executionType: "TO_CONFIRMATION",
            view: null,
            departmentDataJson: {
              name: {
                ru: "Бухгалтерия",
                uz: "Buxgalteriya",
                uzc: "Бухгалтерия",
              },
              departmentNumber: 0,
              type: "IJROVIY",
            },
          },
        ],
      },
      {
        jsonId: "967265bf-b83c-4900-a834-4b60ded20dbc",
        slug: "kimdan_2643",
        title: {
          ru: "kimdan",
          uz: "kimdan",
          uzc: "kimdan",
        },
        innerDocFieldsType: {
          dataType: "API_LIST",
          apiListId: "776b996d-021d-4d36-ab27-94c42d89617f",
        },
        visible: true,
        innerDocFieldsTypeId: {
          dataType: "API_LIST",
          apiListId: "776b996d-021d-4d36-ab27-94c42d89617f",
        },
        value: [
          {
            status: "UNMARKED",
            personalDataJson: {
              firstname: "Azamat",
              middlename: "Akbar o'g'li",
              lastname: "Israilov",
              If: "A.Israilov",
              fio: "Israilov Azamat Akbar o'g'li",
              fIO: "Israilov A.A.",
              inn: "987654321",
              phoneNumber: "+998941727552",
              mobileNumber: "+998941727552",
              workNumber: "+998941727552",
              email: "israilov@gmail.com",
              positionName: {
                ru: "Главный бухгалтер",
                uz: "Bosh buxgalter",
                uzc: "Бош бухгалтер",
              },
              crDepartment: {
                name: {
                  ru: "Бухгалтерия",
                  uz: "Buxgalteriya",
                  uzc: "Бухгалтерия",
                },
                departmentNumber: 0,
                type: "IJROVIY",
              },
            },
            executionType: "TO_CONFIRMATION",
            view: null,
            departmentDataJson: {
              name: {
                ru: "Бухгалтерия",
                uz: "Buxgalteriya",
                uzc: "Бухгалтерия",
              },
              departmentNumber: 0,
              type: "IJROVIY",
            },
          },
        ],
      },
      {
        jsonId: "56458b88-76a9-4464-a5d9-2456b7c7410a",
        slug: "mazmuni_2304",
        title: {
          ru: "mazmuni",
          uz: "mazmuni",
          uzc: "mazmuni",
        },
        innerDocFieldsType: {
          dataType: "STRING",
        },
        visible: true,
        innerDocFieldsTypeId: {
          dataType: "STRING",
          apiListId: null,
        },
        value: ["testing1234"],
      },
      {
        jsonId: "9cdb9bb2-212c-4dee-be92-b3ca180702ec",
        slug: "sana_418",
        title: {
          ru: "sana",
          uz: "sana",
          uzc: "sana",
        },
        innerDocFieldsType: {
          dataType: "STRING",
        },
        visible: true,
        innerDocFieldsTypeId: {
          dataType: "STRING",
          apiListId: null,
        },
        value: ["2020-12-09T18:29:32+05:00"],
      },
    ],
    innerExtraOrders: [],
  },
  qrCodeUrl:
    "${server.current_address/v1/file/qrCode/2020/12/09/7665ccd5-eda9-4fcb-b0a2-6ce8cca78869.png",
  pinCode: 1350,
};
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
      let currentElem = currentElems[itr];

      let data = val.find(
        (item) =>
          item.slug.includes(currentElem.dataset.slug) &&
          item.innerDocFieldsType.dataType ===
            currentElem.dataset.type.toUpperCase()
      );

      if (currentElem.dataset.type === "string") {
        if (Date.parse(data.value[0])) {
          currentElem.textContent = new Intl.DateTimeFormat().format(
            new Date(data.value[0])
          );
        } else {
          currentElem.textContent = data.value[0];
        }
        continue;
      }

      if (currentElem.dataset.type === "api_list") {
        if (currentElem.dataset.as === "personal") {
          currentElem.textContent = data.value[0].personalDataJson.If;
          continue;
        } else if (currentElem.dataset.as === "outgoing") {
          // some logic
        } else if (currentElem.dataset.as === "incoming") {
          // some logic
        }
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

setDataFromFrontend(data.data);

function setData2(parentKey, data) {
  for (let key in data) {
    checkAndDo(parentKey + "_" + key, data[key]);
  }
}

// console.log(htmlRegex.test("salim"));
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
