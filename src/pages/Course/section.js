import SectionOne from "../Course/sectionOne";

export const Section = ({ sections, handleCollaspe }) => {
  return (
    <div>
      {sections.map((section) => (
        <SectionOne
          key={section.id}
          section={section}
          sections={sections}
          handleCollaspe={handleCollaspe}
        />
      ))}
    </div>
  );
};  