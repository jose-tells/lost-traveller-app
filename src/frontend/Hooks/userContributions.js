export default function userContributions(section) {
  const sectionsArray = Object.values(section).map((item, index) => {
    const sectionsNames = Object.keys(section);
    return {
      section: sectionsNames[index],
      sectionLength: item.length,
    };
  });

  return sectionsArray;
};
