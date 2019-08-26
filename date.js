formatDate = (date, format) => {
  const months = [
    "jan",
    "feb",
    "mar",
    "apr",
    "may",
    "jun",
    "jul",
    "aug",
    "sep",
    "oct",
    "nov",
    "dec"
  ];
  const d = date.getDate();
  const m = date.getMonth() + 1;
  const y = date.getFullYear();
  const dd = d < 10 ? "0" + d : d;
  const mm = m < 10 ? "0" + m : m;
  const mmm = months[m - 1];
  if (format === "dd-mm-yyyy") return dd + "-" + mm + "-" + y;
  else if (format === "mm-dd-yyyy") return mm + "-" + dd + "-" + y;
  else if (format === "mm/dd/yyyy") return mm + "/" + dd + "/" + y;
  else if (format === "dd mmm, yyyy") return dd + " " + mmm + "," + y;
  else if (format === "mmm, yyyy") return mmm + ", " + y;
  else throw new Error("Unknown date format");
};
