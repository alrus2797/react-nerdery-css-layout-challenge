import SectionHeader from "../../../shared/ui/section-header";
import Section from "../../../shared/ui/section";
import Flex from "../../../shared/ui/flex";

import ShareWithMeCard from "../share-with-me-card";

const ShareWithMeSection = () => {
  const recentlyUsedSectionHeader = (
    <SectionHeader
      title="Share with Me"
      append={<div className="section-append-text">View All</div>}
    />
  );

  const users = [
    {
      id: 1,
      color: "var(--red)",
    },
    {
      id: 4,
      color: "var(--green)",
    },
    {
      id: 6,
      color: "var(--orange)",
    },
  ];

  const recentlyUsedSectionContent = (
    <Flex gap={14}>
      <ShareWithMeCard
        filename="App Project"
        createdAt="20.02.2020"
        usersSharedWith={users}
      />
      <ShareWithMeCard
        filename="App Project"
        createdAt="20.02.2020"
        usersSharedWith={users}
      />
      <ShareWithMeCard
        filename="App Project"
        createdAt="20.02.2020"
        usersSharedWith={users}
      />
    </Flex>
  );

  return (
    <Section
      sectionHeader={recentlyUsedSectionHeader}
      sectionBody={recentlyUsedSectionContent}
      contentSeparator={16}
    ></Section>
  );
};

export default ShareWithMeSection;
