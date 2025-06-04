
const olympicTopData = {
 "1996": ["United States", "Russia", "Germany", "China", "France", "Italy", "Australia", "Cuba", "Ukraine", "South Korea"],
  "2000": ["United States", "Russia", "China", "Australia", "Germany", "France", "Italy", "Netherlands", "Cuba", "Great Britain"],
  "2004": ["United States", "China", "Russia", "Australia", "Japan", "Germany", "France", "Italy", "South Korea", "Great Britain"],
  "2008": ["China", "United States", "Russia", "Great Britain", "Germany", "Australia", "South Korea", "Japan", "Italy", "France"],
  "2012": ["United States", "China", "Great Britain", "Russia", "South Korea", "Germany", "France", "Italy", "Hungary", "Australia"],
  "2016": ["United States", "Great Britain", "China", "Russia", "Germany", "France", "Japan", "Australia", "Italy", "Canada"],
  "2020": ["United States", "China", "Japan", "Great Britain", "ROC", "Australia", "Netherlands", "France", "Germany", "Italy"],
  "2024": ["United States", "China", "Great Britain", "France", "Germany", "Japan", "Australia", "Italy", "Netherlands", "Canada"]
};

if (typeof module !== 'undefined' && module.exports) {
  module.exports = olympicTopData;
} else {
  window.olympicTopData = olympicTopData;
}