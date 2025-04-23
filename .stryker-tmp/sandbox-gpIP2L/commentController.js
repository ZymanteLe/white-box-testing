// @ts-nocheck
function stryNS_9fa48() {
  var g = typeof globalThis === 'object' && globalThis && globalThis.Math === Math && globalThis || new Function("return this")();
  var ns = g.__stryker__ || (g.__stryker__ = {});
  if (ns.activeMutant === undefined && g.process && g.process.env && g.process.env.__STRYKER_ACTIVE_MUTANT__) {
    ns.activeMutant = g.process.env.__STRYKER_ACTIVE_MUTANT__;
  }
  function retrieveNS() {
    return ns;
  }
  stryNS_9fa48 = retrieveNS;
  return retrieveNS();
}
stryNS_9fa48();
function stryCov_9fa48() {
  var ns = stryNS_9fa48();
  var cov = ns.mutantCoverage || (ns.mutantCoverage = {
    static: {},
    perTest: {}
  });
  function cover() {
    var c = cov.static;
    if (ns.currentTestId) {
      c = cov.perTest[ns.currentTestId] = cov.perTest[ns.currentTestId] || {};
    }
    var a = arguments;
    for (var i = 0; i < a.length; i++) {
      c[a[i]] = (c[a[i]] || 0) + 1;
    }
  }
  stryCov_9fa48 = cover;
  cover.apply(null, arguments);
}
function stryMutAct_9fa48(id) {
  var ns = stryNS_9fa48();
  function isActive(id) {
    if (ns.activeMutant === id) {
      if (ns.hitCount !== void 0 && ++ns.hitCount > ns.hitLimit) {
        throw new Error('Stryker: Hit count limit reached (' + ns.hitCount + ')');
      }
      return true;
    }
    return false;
  }
  stryMutAct_9fa48 = isActive;
  return isActive(id);
}
function isValidComment(text) {
  if (stryMutAct_9fa48("0")) {
    {}
  } else {
    stryCov_9fa48("0");
    const forbiddenChars = stryMutAct_9fa48("1") ? /[^"';.()%]/ : (stryCov_9fa48("1"), /["';.()%]/);
    return stryMutAct_9fa48("4") ? typeof text === "string" && text.length >= 3 && text.length <= 300 || !forbiddenChars.test(text) : stryMutAct_9fa48("3") ? false : stryMutAct_9fa48("2") ? true : (stryCov_9fa48("2", "3", "4"), (stryMutAct_9fa48("6") ? typeof text === "string" && text.length >= 3 || text.length <= 300 : stryMutAct_9fa48("5") ? true : (stryCov_9fa48("5", "6"), (stryMutAct_9fa48("8") ? typeof text === "string" || text.length >= 3 : stryMutAct_9fa48("7") ? true : (stryCov_9fa48("7", "8"), (stryMutAct_9fa48("10") ? typeof text !== "string" : stryMutAct_9fa48("9") ? true : (stryCov_9fa48("9", "10"), typeof text === (stryMutAct_9fa48("11") ? "" : (stryCov_9fa48("11"), "string")))) && (stryMutAct_9fa48("14") ? text.length < 3 : stryMutAct_9fa48("13") ? text.length > 3 : stryMutAct_9fa48("12") ? true : (stryCov_9fa48("12", "13", "14"), text.length >= 3)))) && (stryMutAct_9fa48("17") ? text.length > 300 : stryMutAct_9fa48("16") ? text.length < 300 : stryMutAct_9fa48("15") ? true : (stryCov_9fa48("15", "16", "17"), text.length <= 300)))) && (stryMutAct_9fa48("18") ? forbiddenChars.test(text) : (stryCov_9fa48("18"), !forbiddenChars.test(text))));
  }
}
function isValidSecurityRating(score) {
  if (stryMutAct_9fa48("19")) {
    {}
  } else {
    stryCov_9fa48("19");
    return stryMutAct_9fa48("22") ? Number.isInteger(score) && score >= 1 || score <= 10 : stryMutAct_9fa48("21") ? false : stryMutAct_9fa48("20") ? true : (stryCov_9fa48("20", "21", "22"), (stryMutAct_9fa48("24") ? Number.isInteger(score) || score >= 1 : stryMutAct_9fa48("23") ? true : (stryCov_9fa48("23", "24"), Number.isInteger(score) && (stryMutAct_9fa48("27") ? score < 1 : stryMutAct_9fa48("26") ? score > 1 : stryMutAct_9fa48("25") ? true : (stryCov_9fa48("25", "26", "27"), score >= 1)))) && (stryMutAct_9fa48("30") ? score > 10 : stryMutAct_9fa48("29") ? score < 10 : stryMutAct_9fa48("28") ? true : (stryCov_9fa48("28", "29", "30"), score <= 10)));
  }
}
function submitComment(req, res) {
  if (stryMutAct_9fa48("31")) {
    {}
  } else {
    stryCov_9fa48("31");
    const {
      text,
      securityRating
    } = req.body;
    if (stryMutAct_9fa48("34") ? false : stryMutAct_9fa48("33") ? true : stryMutAct_9fa48("32") ? isValidComment(text) : (stryCov_9fa48("32", "33", "34"), !isValidComment(text))) {
      if (stryMutAct_9fa48("35")) {
        {}
      } else {
        stryCov_9fa48("35");
        return res.status(400).json(stryMutAct_9fa48("36") ? {} : (stryCov_9fa48("36"), {
          message: stryMutAct_9fa48("37") ? "" : (stryCov_9fa48("37"), "Invalid comment text")
        }));
      }
    }
    if (stryMutAct_9fa48("40") ? false : stryMutAct_9fa48("39") ? true : stryMutAct_9fa48("38") ? isValidSecurityRating(securityRating) : (stryCov_9fa48("38", "39", "40"), !isValidSecurityRating(securityRating))) {
      if (stryMutAct_9fa48("41")) {
        {}
      } else {
        stryCov_9fa48("41");
        return res.status(400).json(stryMutAct_9fa48("42") ? {} : (stryCov_9fa48("42"), {
          message: stryMutAct_9fa48("43") ? "" : (stryCov_9fa48("43"), "Invalid security rating")
        }));
      }
    }

    // Save comment (mock)
    const savedComment = stryMutAct_9fa48("44") ? {} : (stryCov_9fa48("44"), {
      text,
      securityRating
    });
    return res.status(201).json(stryMutAct_9fa48("45") ? {} : (stryCov_9fa48("45"), {
      message: stryMutAct_9fa48("46") ? "" : (stryCov_9fa48("46"), "Comment saved"),
      data: savedComment
    }));
  }
}
module.exports = stryMutAct_9fa48("47") ? {} : (stryCov_9fa48("47"), {
  submitComment,
  isValidComment,
  isValidSecurityRating
});