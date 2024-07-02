const ConvertDurationBanglaToEnglish = (bengaliNumber: string): number => {
  const bengaliToEnglish: { [key: string]: string } = {
    "০": "0",
    "১": "1",
    "২": "2",
    "৩": "3",
    "৪": "4",
    "৫": "5",
    "৬": "6",
    "৭": "7",
    "৮": "8",
    "৯": "9",
  };

  return parseInt(
    bengaliNumber.replace(/[০-৯]/g, (match) => bengaliToEnglish[match]),
    10
  );
};

export const parseQuizDuration = (duration: string): number => {
  const parts: string[] = duration.split(" ");
  const bengaliMinutes: string = parts[0];
  const englishMinutes: number = ConvertDurationBanglaToEnglish(bengaliMinutes);
  return englishMinutes;
};

//   const durationString: string = "১০ মিনিট";
//   const durationInMinutes: number = parseQuizDuration(durationString);
//   console.log(`Quiz duration in minutes: ${durationInMinutes}`);
