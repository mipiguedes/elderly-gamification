import { AchievementSection } from "./AchievementSection";

export const MedalsSection = () => {
    return (
     <>
      <AchievementSection
            title={"Você completou o seu aprendizado sobre senhas"}
            text={
              "<p>Agora você sabe como manter suas senhas seguras na internet!</p><p>Acredite, tão importante quanto não compartilhar sua senha com terceiros é criar senhas bem difíceis de serem desvendadas.</p>"
            }
            image={`../src/img/festejando.png`}
            imageAlt={"idosa festejando"}
            imageMedal={`../src/img/emblema.png`}
          />
     </>
    );
  };
  