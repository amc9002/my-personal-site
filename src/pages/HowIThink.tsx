import { useTranslation } from "react-i18next";
import Introduction from "../content/howIThink/introduction";

const HowIThink = () => {
  const { t } = useTranslation("howIThink");
  return (
    <Introduction
      data={
        t("introduction", { returnObjects: true }) as {
          title: string;
          text: string[];
        }
      }
    />
  );
};

export default HowIThink;
